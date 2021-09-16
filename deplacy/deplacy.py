# coding=utf-8

import os,tempfile
from pkg_resources import get_distribution
from http.server import BaseHTTPRequestHandler
from http import HTTPStatus

PACKAGE_DIR=os.path.abspath(os.path.dirname(__file__))
VERSION="HTTP deplacy/"+get_distribution("deplacy").version
EDITOR_URL="https://koichiyasuoka.github.io/deplacy/deplacy/editor.html"
EDITOR_RTOL="https://koichiyasuoka.github.io/deplacy/deplacy/editorRtoL.html"
TEMPFILE=tempfile.TemporaryFile()

def makeDoc(doc):
  s=str(type(doc))
  if s.find("spacy")==8:
    return doc
  d=to_conllu(doc)
  DOC=[]
  m=[]
  misc=""
  for t in d.split("\n"):
    x=t.split("\t")
    if len(x)!=10:
      continue
    try:
      i,j=int(x[0]),int(x[6])
    except:
      try:
        i=x[0].index("-")
        j=int(x[0][0:i])
        k=int(x[0][i+1:])
        m.append((len(DOC),j,k,x[1]))
        continue
      except:
        continue
    s=type("",(object,),{"i":i})
    s.orth_=x[1]
    s.pos_=x[3]
    s.head=j
    s.dep_=x[7]
    s.whitespace_=(x[9].find("SpaceAfter=No")<0)
    if s.whitespace_:
      i=x[9].find("start_char=")
      if i>=0:
        j=x[9].find("|",i)
        k=x[9][i+5:] if j<0 else x[9][i+5:j]
        if misc.find("end"+k)>=0:
          DOC[-1].whitespace_=False
    DOC.append(s)
    misc=x[9]
  for i,j,k,f in reversed(m):
    offset=i-DOC[i].i
    DOC[k+offset].contract=(f,[i+offset for i in range(j,k+1)])
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
    if DOC[i].dep_.lower()=="root" or DOC[i].head==DOC[i]:
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
    if DOC[b].dep_.startswith("punct"):
        if not DOC[a].dep_.startswith("punct"):
            return -1
    if DOC[b].dep_.startswith("discourse"):
        if not DOC[a].dep_.startswith("discourse"):
            return -1
    if DOC[b].dep_.startswith("vocative"):
        if not DOC[a].dep_.startswith("vocative"):
            return -1
    return 1
  def CatenaInseparabilityRR(a,b):
    if DOC[b].dep_.startswith("compound"):
      if not DOC[a].dep_.startswith("compound"):
        return 1
    if DOC[b].dep_=="prt": # for Penn Treebank (en_core_web)
      return 1
    if DOC[b].dep_=="svp": # for TIGER Corpus (de_core_news)
      return 1
    return -1
  def CatenaInseparabilityLR(a,b):
    if DOC[b].dep_.startswith("punct"):
      return -1
    if DOC[b].dep_.startswith("discourse"):
      return -1
    if DOC[b].dep_.startswith("parataxis"):
      return -1
    if DOC[b].dep_.startswith("mark"):
      if DOC[b].pos_=="PART":
        return -1
    if DOC[a].dep_.startswith("compound"):
      return -1
    if DOC[b].dep_.startswith("compound"):
      return 1
    if DOC[a].dep_.startswith("nummod"):
      return -1
    if DOC[b].dep_.startswith("conj"):
      if b-NOW-1>NOW-a:
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

def renderMatrix(doc,CatenaAnalysis):
  if type(doc)==list:
    DOC=doc
  else:
    DOC=makeDoc(doc)
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
      k=h[i]
      m=min(i,k)
      n=max(i,k)
      if -1 in d[m+1:n]:
        if 0 in d[m+1:n]:
          continue
      g=[d[j] for j in f[i]]
      if 0 in g:
        continue
      if CatenaAnalysis:
        for j in f[k]:
          g.append(d[j])
      for j in range(m+1,n):
        if j in f[i]:
          continue
        g.append(d[j]-1 if j in f[k] else d[j])
        g.extend([d[e] for e in f[j] if e<m or e>n])
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
      if p[k][l]!=12:
          p[k][l]|=3
    for l in range(min(i,k)+1,max(i,k)):
      if p[l][j]!=3:
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
  return p

def render(doc,BoxDrawingWidth=1,EnableCR=False,WordRight=False,CatenaAnalysis=True,file=None,Japanese=False):
  import unicodedata
  DOC=makeDoc(doc)
  if len(DOC)==0:
    return
  p=renderMatrix(DOC,CatenaAnalysis)
  u=[" ","\u2578","\u257A","\u2550","\u2579","\u255D","\u255A","\u2569","\u257B","\u2557","\u2554","\u2566","\u2551","\u2563","\u2560","\u256C","<"]
  if WordRight:
    for i in [1,5,9,13]:
      u[i],u[i+1]=u[i+1],u[i]
    u[16]=">"
  if CatenaAnalysis:
    u[7]=u[5]
    u[11]=u[9]
    u[15]=u[12]
  r={}
  if Japanese:
    import deplacy.deprelja
    r=deplacy.deprelja.deprelja
  deps=[]
  for i in range(len(DOC)):
    d=DOC[i].dep_
    if d in r:
      d+="("+r[d]+")"
    elif d.find(":")>0:
      j=d.split(":")
      if j[0] in r:
        d+="("+r[j[0]]+"["+":".join(j[1:])+"])"
    deps.append(d)
  if WordRight:
    x=[len(d)+len([c for c in d if ord(c)>12287]) for d in deps]
  else:
    x=[len(t.orth_)+len([c for c in t.orth_ if ord(c)>12287])-len([c for c in t.orth_ if unicodedata.category(c)=="Mn"]) for t in DOC]
  m=max(x)+1
  n=max([len(t.pos_) for t in DOC if t.pos_!="_"]+[-1])+1
  s=""
  for i in range(len(DOC)):
    if WordRight:
      t="".join(u[j] for j in reversed(p[i]))
    else:
      t="".join(u[j] for j in p[i])
    if BoxDrawingWidth>1:
      t=t.replace(" "," "*BoxDrawingWidth).replace("<"," "*(BoxDrawingWidth-1)+"<").replace(">",">"+" "*(BoxDrawingWidth-1))
    d=deps[i]
    r="" if DOC[i].pos_=="_" else DOC[i].pos_
    if WordRight:
      s+=" "*(m-x[i]-1)+d+" "+t+" "+r+" "*(n-len(r))+DOC[i].orth_+"\n"
    elif EnableCR:
      s+=" "*m+r+" "*(n-len(r))+t+" "+d+"\r"+DOC[i].orth_+"\n"
    else:
      s+=DOC[i].orth_+" "*(m-x[i])+r+" "*(n-len(r))+t+" "+d+"\n"
  print(s,end="",file=file)

def to_conllu(doc,RtoL=False):
  s=str(type(doc))
  if s.find("spacy")==8:
    c=""
    for s in doc.sents:
      for t in s:
        try:
          m=str(t.morph)
          if m.startswith("<spacy"):
            m=""
        except:
          m=""
        c+=str(t.i-s.start+1)
        for i in [t.orth_,t.lemma_,t.pos_,t.tag_,m,str(0 if t.head==t else t.head.i-s.start+1),t.dep_,""]:
          c+="\t_" if i.strip()=="" else "\t"+i
        if t.ent_iob_=="B" or t.ent_iob_=="I":
          u="NE="+t.ent_iob_+"-"+t.ent_type_
        else:
          u=""
        if RtoL and len(t.orth_)>1:
          if len([c for c in t.orth_ if ord(c)>12287])>0:
            u="Direction=RtoL" if u=="" else "Direction=RtoL|"+u
        if not t.whitespace_:
          u+=("" if u=="" else "|")+"SpaceAfter=No"
        if t.norm_!="" and t.norm_!=t.orth_:
          u+=("" if u=="" else "|")+"Translit="+t.norm_
        if u=="":
          u="_"
        c+="\t"+u+"\n"
      c+="\n"
    return c
  elif s.find("stanza")==8:
    from stanza.utils.conll import CoNLL
    return CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
  elif s.find("classla")==8:
    return doc.to_conll()
  elif s.find("stanfordnlp")==8:
    return doc.conll_file.conll_as_string()
  elif s.find("nltk")==8:
    return doc.to_conll(10)
  elif s.find("combo")==8:
    from combo.data import sentence2conllu
    return sentence2conllu(doc,False).serialize()
  elif s.find("supar")==8:
    if hasattr(doc,"sentences"):
      return "".join([str(s)+"\n" for s in doc.sentences])
    else:
      return str(doc)+"\n"
  elif s.find("list")==8:
    return "".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
  elif s.find("dict")==8 and "sentences" in doc:
    from trankit.utils.conll import CoNLL
    d=[]
    for s in doc["sentences"]:
      e=[]
      for t in s["tokens"]:
        if "span" in t:
          i,j=t["span"]
          t["misc"]="start_char="+str(i)+"|end_char="+str(j)
        e.append(t)
        if "expanded" in t:
          e.extend(t["expanded"])
      d.append(list(e))
    return CoNLL.conll_as_string(CoNLL.convert_dict(d))
  return str(doc)

class DeplacyRequestHandler(BaseHTTPRequestHandler):
  server_version=VERSION
  header_html="header.html"
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
      f=open(os.path.join(PACKAGE_DIR,self.header_html),"r",encoding="utf-8")
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

class DeplacyRequestHandlerRtoL(DeplacyRequestHandler):
  header_html="headerRtoL.html"

def serve(doc,port=5000,RtoL=False):
  c=to_conllu(doc,RtoL)
  if port==None:
    from IPython.display import IFrame,display
    from urllib.parse import quote
    if RtoL:
      display(IFrame(src=EDITOR_RTOL+"#"+quote(c),width="100%",height="400"))
    else:
      display(IFrame(src=EDITOR_URL+"#"+quote(c),width="100%",height="400"))
    return
  import sys
  from http.server import HTTPServer
  f=TEMPFILE
  f.seek(0)
  f.truncate(0)
  f.write(c.encode("utf-8"))
  if RtoL:
    httpd=HTTPServer(("",port),DeplacyRequestHandlerRtoL)
  else:
    httpd=HTTPServer(("",port),DeplacyRequestHandler)
  print("http://127.0.0.1:"+str(port)+"   "+VERSION,file=sys.stderr)
  try:
    httpd.serve_forever()
  except:
    return

def dot(doc,RtoL=False):
  DOC=makeDoc(doc)
  if len(DOC)==0:
    return None
  f,h,w=catenaArray(DOC)
  s='digraph deplacy{\n'
  s+='node[shape=plaintext,fontsize=14];\n'
  s+='edge[color=gray,fontname="sans-serif",fontsize=10];\n'
  t='w[shape=record,penwidth=0,label="';
  v=[]
  j=''
  for i in range(len(DOC)):
    if RtoL:
      t+=j+'{<'+str(len(DOC)-i)+'>'
      j=DOC[len(DOC)-i-1].orth_
    else:
      t+=j+'{<'+str(i+1)+'>'
      j=DOC[i].orth_
    if j in ['"','|','{','}','<','>','\\']:
      t+='\\'+j
      v.append('\\'+j)
    elif j!='_':
      t+=j
      v.append(j)
    else:
      v.append('')
    if RtoL:
      t+='|'+DOC[len(DOC)-i-1].pos_+'}'
    else:
      t+='|'+DOC[i].pos_+'}'
    j='|'
  if RtoL:
    v.reverse()
  t+='"];\n'
  c=[[i] for i in range(len(DOC))]
  n=["w:"+str(i+1) for i in range(len(DOC))]
  x=1
  for i in w:
    for j in f[i]:
      p='x'+str(x)+'->'+n[i]+';'
      q='x'+str(x)+'->'+n[j]+'[label="'+DOC[j].dep_+'"];'
      if (i<j)==RtoL:
        t=q+p+'\n'+t
      else:
        t=p+q+'\n'+t
      c[i].extend(c[j])
      u=""
      for j in range(min(c[i]),max(c[i])+1):
        if j in c[i]:
          u+=v[j]
          if hasattr(DOC[j],"contract"):
            p,q=DOC[j].contract
            r="".join(v[k]+" " if DOC[k].whitespace_ else v[k] for k in q).rstrip()
            if u.endswith(r):
              u=u[0:-len(r)]+p
        if u.endswith(" "):
          continue
        if DOC[j].whitespace_:
          u+=" "
      t='x'+str(x)+'[label="'+u.rstrip()+'"];'+t
      n[i]='x'+str(x)
      x+=1
    if h[i]==-1:
      t='r'+str(i+1)+'[fontname="sans-serif",fontsize=10,fixedsize=true,height=.15,label="'+DOC[i].dep_+'"];r'+str(i+1)+'->'+n[i]+';\n'+t
  s+=t+'}\n'
  return s

