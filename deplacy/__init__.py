def render(doc,BoxDrawingWidth=1,EnableCR=False,file=None):
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
      h.append(0)
      continue
    j=i+y[i].head.i-y[i].i
    h.append(j+1)
    f[j].append(i)
  d=[1 if f[i]==[] and abs(h[i]-i-1)==1 else -1 if h[i]==0 else 0 for i in range(len(y))]
  while 0 in d:
    for i,e in enumerate(d):
      if e!=0:
        continue
      g=[d[j] for j in f[i]]
      if 0 in g:
        continue
      k=h[i]-1
      if 0 in [d[j] for j in range(min(i,k)+1,max(i,k))]:
        continue
      for j in range(min(i,k)+1,max(i,k)):
        if j in f[i]:
          continue
        g.append(d[j]-1 if j in f[k] else d[j])
      g.append(0)
      d[i]=max(g)+1
  m=max(d)
  p=[[0]*(m*2) for i in range(len(y))]
  for i in range(len(y)):
    k=h[i]
    if k==0:
      continue
    k-=1
    j=d[i]*2-1
    p[min(i,k)][j]|=9
    p[max(i,k)][j]|=5
    for l in range(j):
      p[k][l]|=3
    for l in range(min(i,k)+1,max(i,k)):
      p[l][j]|=12
  for i in range(len(y)):
    if h[i]>0:
      j=d[i]*2-2
      while j>=0:
        if p[i][j]>0:
          break
        p[i][j]|=3
        j-=1
      p[i][j+1]=16
  u=[" ","\u2574","\u2576","\u2500","\u2575","\u2518","\u2514","\u2534","\u2577","\u2510","\u250C","\u252C","\u2502","\u2524","\u251C","\u253C","<"]
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

