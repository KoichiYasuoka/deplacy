# coding=utf-8

import os,tempfile
from pkg_resources import get_distribution
from http.server import BaseHTTPRequestHandler
from http import HTTPStatus

PACKAGE_DIR=os.path.abspath(os.path.dirname(__file__))
VERSION="HTTP deplacy/"+get_distribution("deplacy").version
TEMPFILE=tempfile.TemporaryFile()

def render(doc,BoxDrawingWidth=1,EnableCR=False,CatenaAnalysis=False,file=None):
  if type(doc)==str:
    y=[]
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
      y.append(s)
    for i,t in enumerate(y):
      if t.head==0:
        t.head=t
      else:
        t.head=y[i+t.head-t.i]
  else:
    y=doc
  if len(y)==0:
    return
  f=[[] for i in range(len(y))]
  h=[]
  for i in range(len(y)):
    if y[i].dep_.lower()=="root":
      h.append(-1)
      continue
    j=i+y[i].head.i-y[i].i
    h.append(j)
    f[j].append(i)
  d=[1 if f[i]==[] and abs(h[i]-i)==1 else -1 if h[i]==-1 else 0 for i in range(len(y))]
  while 0 in d:
    for i,e in enumerate(d):
      if e!=0:
        continue
      g=[d[j] for j in f[i]]
      if 0 in g:
        continue
      k=h[i]
      if 0 in [d[j] for j in range(min(i,k)+1,max(i,k))]:
        continue
      for j in range(min(i,k)+1,max(i,k)):
        if j in f[i]:
          continue
        g.append(d[j]-1 if j in f[k] else d[j])
      g.append(0)
      d[i]=max(g)+1
  if CatenaAnalysis:
    import functools
    def COM(a,b):
      if a==b:
        return 0
      if a-b>0:
        return -COM(b,a)
      if b<NOW:
        return LL(a,b)
      if a>NOW:
        return RR(a,b)
      return LR(a,b)
    def LL(a,b):
      return 1
    def RR(a,b):
      if y[b].dep_.find("compound")==0:
        if y[a].dep_.find("compound")<0:
          return 1
      return -1
    def LR(a,b):
      if y[b].dep_.find("punct")==0:
        return -1
      if y[b].dep_.find("discourse")==0:
        return -1
      if y[b].dep_.find("parataxis")==0:
        return -1
      if y[b].dep_.find("mark")==0:
        return -1
      if y[a].dep_.find("compound")==0:
        return -1
      return 1
    for NOW,e in enumerate(f):
      if len(e)<2:
        continue
      e.sort(key=functools.cmp_to_key(COM))
      m=d[e[0]]
      k=0
      for i in e[1:]:
        if m<d[i]:
          m=d[i]
          continue
        m+=1
        k=m-d[i]
        for j in range(len(d)):
          if j in e:
            continue
          if h[j]==-1:
            continue
          if d[j]<d[i]:
            continue
          if min(j,h[j])<min(i,h[i]) and max(i,h[i])<max(j,h[j]):
            d[j]+=k
        d[i]=m
      for j in f[h[NOW]]:
        d[j]+=k
  m=max(d)
  p=[[0]*(m*2) for i in range(len(y))]
  for i in range(len(y)):
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
  for i in range(len(y)):
    if h[i]>=0:
      j=d[i]*2-2
      while j>=0:
        if p[i][j]>0:
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
  for t in y:
    x.append(len(t.orth_)+len([c for c in t.orth_ if ord(c)>12287]))
    i.append(len(t.pos_))
  m=max(x)+1
  n=max(i)+1
  s=""
  for i in range(len(y)):
    t="".join(u[j] for j in p[i])
    if BoxDrawingWidth>1:
      t=t.replace(" "," "*BoxDrawingWidth).replace("<"," "*(BoxDrawingWidth-1)+"<")
    if EnableCR:
      s+=" "*m+y[i].pos_+" "*(n-len(y[i].pos_))+t+" "+y[i].dep_+"\r"+y[i].orth_+"\n"
    else:
      s+=y[i].orth_+" "*(m-x[i])+y[i].pos_+" "*(n-len(y[i].pos_))+t+" "+y[i].dep_+"\n"
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
  import sys
  from http.server import HTTPServer
  if type(doc)==str:
    c=doc
  else:
    c="".join("\t".join([str(t.i+1),t.orth_,t.lemma_,t.pos_,t.tag_,"_",str(0 if t.head==t else t.head.i+1),t.dep_,"_","_" if t.whitespace_ else "SpaceAfter=No"])+"\n" for t in doc)
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

