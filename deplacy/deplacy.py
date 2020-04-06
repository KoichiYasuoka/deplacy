# coding=utf-8

import os,tempfile
from pkg_resources import get_distribution
from http.server import BaseHTTPRequestHandler
from http import HTTPStatus

PACKAGE_DIR=os.path.abspath(os.path.dirname(__file__))
VERSION="HTTP deplacy/"+get_distribution("deplacy").version
EDITOR_URL="https://koichiyasuoka.github.io/deplacy/deplacy/editor.html"
TEMPFILE=tempfile.TemporaryFile()

def makeDoc(doc):
  DOC=[]
  for t in doc.split("\n"):
    x=t.split("\t")
    if len(x)!=10:
      continue
    try:
      i,j=int(x[0]),int(x[6])
    except:
      continue
    s=type("",(object,),{"i":i})
    s.orth_=x[1]
    s.pos_=x[3]
    s.head=j
    s.dep_=x[7]
    s.whitespace_=(x[9].find("SpaceAfter=No")<0)
    DOC.append(s)
  for i,t in enumerate(DOC):
    if t.head==0:
      t.head=t
    else:
      t.head=DOC[i+t.head-t.i]
  return DOC

def catenaArray(DOC):
  import functools
  f=[[] for i in range(len(DOC))]
  h=[]
  for i in range(len(DOC)):
    if DOC[i].dep_.lower()=="root":
      h.append(-1)
      continue
    j=i+DOC[i].head.i-DOC[i].i
    h.append(j)
    f[j].append(i)
  def CatenaInseparability(a,b):
    if a==b:
      return 0
    if a-b>0:
      return -CatenaInseparability(b,a)
    if b<NOW:
      return CatenaInseparabilityLL(a,b)
    if a>NOW:
      return CatenaInseparabilityRR(a,b)
    return CatenaInseparabilityLR(a,b)
  def CatenaInseparabilityLL(a,b):
    return 1
  def CatenaInseparabilityRR(a,b):
    if DOC[b].dep_.find("compound")==0:
      if DOC[a].dep_.find("compound")<0:
        return 1
    if DOC[b].dep_=="svp": # for TIGER Corpus (de_core_news)
      return 1
    return -1
  def CatenaInseparabilityLR(a,b):
    if DOC[b].dep_.find("punct")==0:
      return -1
    if DOC[b].dep_.find("discourse")==0:
      return -1
    if DOC[b].dep_.find("parataxis")==0:
      return -1
    if DOC[b].dep_.find("mark")==0:
      return -1
    if DOC[a].dep_.find("compound")==0:
      return -1
    return 1
  for NOW,e in enumerate(f):
    if len(e)<2:
      continue
    e.sort(key=functools.cmp_to_key(CatenaInseparability))
  w=[i for i in reversed(range(len(DOC))) if h[i]==-1]
  j=w
  while len(w)<len(DOC):
    k=[]
    for i in j:
      k.extend(f[i])
    w=k+w
    j=k
  return f,h,w

def render(doc,BoxDrawingWidth=1,EnableCR=False,CatenaAnalysis=True,file=None):
  if type(doc)==str:
    DOC=makeDoc(doc)
  else:
    DOC=doc
  if len(DOC)==0:
    return
  f,h,w=catenaArray(DOC)
  d=[1 if f[i]==[] and abs(h[i]-i)==1 else -1 if h[i]==-1 else 0 for i in range(len(DOC))]
  if CatenaAnalysis:
    for e in f:
      if len(e)>1:
        for i in e[1:]:
           d[i]=0
  while 0 in d:
    for i in w:
      if d[i]!=0:
        continue
      g=[d[j] for j in f[i]]
      k=h[i]
      if CatenaAnalysis:
        for j in f[k]:
          g.append(d[j])
      for j in range(min(i,k)+1,max(i,k)):
        if j in f[i]:
          continue
        g.append(d[j]-1 if j in f[k] else d[j])
      g.append(0)
      d[i]=max(g)+1
  m=max(d)
  p=[[0]*(m*2) for i in range(len(DOC))]
  for i in range(len(DOC)):
    k=h[i]
    if k==-1:
      continue
    j=d[i]*2-1
    p[min(i,k)][j]|=9
    p[max(i,k)][j]|=5
    for l in range(j):
      p[k][l]|=3
    for l in range(min(i,k)+1,max(i,k)):
      p[l][j]|=12
  for i in range(len(DOC)):
    if h[i]>=0:
      j=d[i]*2-2
      while j>=0:
        if p[i][j]==12:
          if j>1:
            if p[i][j-2]==0:
              j-=1
              continue
          break
        elif p[i][j]>0:
          break
        p[i][j]|=3
        j-=1
      p[i][j+1]=16
  u=[" ","\u2578","\u257A","\u2550","\u2579","\u255D","\u255A","\u2569","\u257B","\u2557","\u2554","\u2566","\u2551","\u2563","\u2560","\u256C","<"]
  if CatenaAnalysis:
    u[7]=u[5]
    u[11]=u[9]
    u[15]=u[13]
  x=[]
  i=[]
  for t in DOC:
    x.append(len(t.orth_)+len([c for c in t.orth_ if ord(c)>12287]))
    i.append(len(t.pos_))
  m=max(x)+1
  n=max(i)+1
  s=""
  for i in range(len(DOC)):
    t="".join(u[j] for j in p[i])
    if BoxDrawingWidth>1:
      t=t.replace(" "," "*BoxDrawingWidth).replace("<"," "*(BoxDrawingWidth-1)+"<")
    if EnableCR:
      s+=" "*m+DOC[i].pos_+" "*(n-len(DOC[i].pos_))+t+" "+DOC[i].dep_+"\r"+DOC[i].orth_+"\n"
    else:
      s+=DOC[i].orth_+" "*(m-x[i])+DOC[i].pos_+" "*(n-len(DOC[i].pos_))+t+" "+DOC[i].dep_+"\n"
  print(s,end="",file=file)

class DeplacyRequestHandler(BaseHTTPRequestHandler):
  server_version=VERSION
  def do_GET(self):
    p=self.path
    p=p[p.rfind("/")+1:]
    if p.endswith(".js"):
      f=open(os.path.join(PACKAGE_DIR,p),"r",encoding="utf-8")
      r=f.read()
      f.close()
      t="application/javascript"
    elif p.endswith(".ico"):
      self.send_response(HTTPStatus.NOT_FOUND)
      return
    else:
      f=open(os.path.join(PACKAGE_DIR,"header.html"),"r",encoding="utf-8")
      r=f.read()
      f.close()
      f=TEMPFILE
      f.seek(0)
      r+=f.read().decode("utf-8")
      f=open(os.path.join(PACKAGE_DIR,"tailer.html"),"r",encoding="utf-8")
      r+=f.read()
      f.close()
      t="text/html;charset=UTF-8"
    b=r.encode("utf-8")
    self.send_response(HTTPStatus.OK)
    self.send_header("Content-Type",t)
    self.send_header("Content-Length",str(len(b)))
    self.end_headers()
    self.wfile.write(b)

def serve(doc,port=5000):
  if type(doc)==str:
    c=doc
  else:
    c="".join("\t".join([str(t.i+1),t.orth_,t.lemma_,t.pos_,t.tag_,"_",str(0 if t.head==t else t.head.i+1),t.dep_,"_","_" if t.whitespace_ else "SpaceAfter=No"])+"\n" for t in doc)
  if port==None:
    from IPython.display import IFrame,display
    from urllib.parse import quote
    display(IFrame(src=EDITOR_URL+"#"+quote(c),width="100%",height="400"))
    return
  import sys
  from http.server import HTTPServer
  f=TEMPFILE
  f.seek(0)
  f.truncate(0)
  f.write(c.encode("utf-8"))
  httpd=HTTPServer(("",port),DeplacyRequestHandler)
  print("http://127.0.0.1:"+str(port)+"   "+VERSION,file=sys.stderr)
  try:
    httpd.serve_forever()
  except:
    return

def dot(doc):
  if type(doc)==str:
    DOC=makeDoc(doc)
  else:
    DOC=doc
  if len(DOC)==0:
    return None
  f,h,w=catenaArray(DOC)
  s='digraph deplacy{\n'
  s+='node[shape=plaintext;fontsize=14];\n'
  s+='edge[color=gray,fontname="sans-serif",fontsize=10];\n'
  t='w[shape=record,penwidth=0,label="';
  v=[]
  j=''
  for i in range(len(DOC)):
    t+=j+'|{<'+str(i+1)+'>'
    j=DOC[i].orth_
    if j in ['"','|','{','}','<','>','\\']:
      t+='\\'+j
      v.append('\\'+j)
    elif j!='_':
      t+=j
      v.append(j)
    else:
      v.append('')
    t+='|'+DOC[i].pos_+'}'
    j='|'
  t+='"];\n'
  c=[[i] for i in range(len(DOC))]
  n=["w:"+str(i+1) for i in range(len(DOC))]
  x=1
  for i in w:
    for j in f[i]:
      p='x'+str(x)+'->'+n[i]+';'
      q='x'+str(x)+'->'+n[j]+'[label="'+DOC[j].dep_+'"];'
      if i<j:
        t=p+q+'\n'+t
      else:
        t=q+p+'\n'+t
      c[i].extend(c[j])
      u=""
      for j in range(min(c[i]),max(c[i])+1):
        if j in c[i]:
          u+=v[j]
        if u.endswith(" "):
          continue
        if DOC[j].whitespace_:
          u+=" "
      t='x'+str(x)+'[label="'+u.rstrip()+'"];\n'+t
      n[i]='x'+str(x)
      x+=1
    if h[i]==-1:
      t='r'+str(i+1)+'[fontname="sans-serif",fontsize=10,fixedsize=true,height=.15,label="'+DOC[i].dep_+'"];\nr'+str(i+1)+'->'+n[i]+';\n'+t
  s+=t+'}\n'
  return s

