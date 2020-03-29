// CoNLL-U SVG Edit by Koichi Yasuoka, July 6, 2019.
// "conllusvgview.js" is needed.
"use strict";
conllusvg.edit=function(svg,textid,deprelid,uposid,xposid){
  var c=conllusvg.main[textid];
  var g,t,i,j;
  if(c==null){
    conllusvg.view(svg,textid);
    c=conllusvg.main[textid];
    conllusvg.addMouseEvent(textid);
  }
  else
    conllusvg.rewrite(textid);
  if(deprelid!=null)
    c.deprel=document.getElementById(deprelid).cloneNode(true);
  else{
    g=document.createElement("select");
    t=["acl","advcl","advmod","amod","appos","aux","case","cc","ccomp","clf","compound","conj","cop","csubj","dep","det","discourse","dislocated","expl","fixed","flat","goeswith","iobj","list","mark","nmod","nsubj","nummod","obj","obl","orphan","parataxis","punct","reparandum","vocative","xcomp"];
    for(i=0;i<t.length;i++)
      g.add(new Option(t[i],"conllusvg.setDeprel"));
    g.style.position="absolute";
    g.style.visibility="hidden";
    g.size=6;
    c.deprel=g;
  }
  if(uposid!=null)
    c.upos=document.getElementById(uposid).cloneNode(true);
  else{
    g=document.createElement("select");
    g.add(new Option("root","conllusvg.rootLink"));
    t=["NOUN","PROPN","PRON","NUM","ADJ","VERB","ADP","ADV","AUX","SCONJ","CCONJ","PART","INTJ","SYM","PUNCT","X"];
    for(i=0;i<t.length;i++)
      g.add(new Option(t[i],"conllusvg.setUpos"));
    g.add(new Option("delete","conllusvg.deleteNode"));
    g.add(new Option("duplicate","conllusvg.duplicateNode"));
    g.style.position="absolute";
    g.style.visibility="hidden";
    g.size=6;
    c.upos=g;
  }
  if(xposid!=null)
    c.xpos=document.getElementById(xposid).cloneNode(true);
}
conllusvg.renum=function(textid,n){
  var c=conllusvg.main[textid];
  var i,j;
  if(n==null)
    n=0;
  j=1;
  for(i=n;i<c.nodes.length;i++){
    c.nodes[i].id=j.toString();
    conllusvg.insertTextline(textid,c.nodes[i].textlineid,1,j.toString());
    j++;
  }
  for(i=n;i<c.nodes.length;i++){
    if(c.links[i]==null)
      continue;
    c.nodes[i].head=c.nodes[c.links[i].from].id;
    if(c.nodes[i].head==c.nodes[i].id)
      c.nodes[i].head="0";
    conllusvg.insertTextline(textid,c.nodes[i].textlineid,7,c.nodes[i].head);
  }
  j=0;
  for(i=n;i<c.nodes.length;i++){
    if(c.nodes[i].head=="0"){
      if(c.nodes[i].deprel!="root"){
	c.nodes[i].deprel=c.links[i].deprel="root";
	conllusvg.insertTextline(textid,c.nodes[i].textlineid,8,"root");
      }
      j++;
      if(j==2)
	break;
    }
  }
  if(j!=2)
    return;
  conllusvg.makeLinks(textid);
  while(i>n){
    if(c.matrix[i-0.5]==null)
      break;
    i--;
  }
  if(i>n)
    conllusvg.renum(textid,i);
}
conllusvg.esrap=function(textid){
  var c=conllusvg.main[textid];
  var tx=document.getElementById(textid);
  var s="";
  var i,j,k,m;
  m=0;
  for(i=0;i<c.nodes.length;i++){
    if(c.nodes[i].id-m<1)
      s=s+"\n"+c.nodes[i].id;
    else
      s=s+c.nodes[i].id;
    k=c.textlines[c.nodes[i].textlineid];
    for(j=2;j<=10;j++)
      s=s+"\t"+((k[j]==null)?"_":k[j].text);
    s=s+"\n";
    m=c.nodes[i].id;
  }
  s=s+"\n";
  if(tx.value==null)
    tx.textContent=s;
  else
    tx.value=s;
}
conllusvg.reparse=function(textid){
  var c=conllusvg.main[textid];
  conllusvg.clearSVG(textid);
  conllusvg.view(c.svg,textid);
}
conllusvg.addMouseEvent=function(textid){
  var c=conllusvg.main[textid];
  if(c.event==null)
    c.event=new Object();
  c.svg.addEventListener("mousedown",conllusvg.onMouseDown);
  c.svg.addEventListener("touchstart",conllusvg.onMouseDown);
  c.svg.addEventListener("mouseup",conllusvg.onMouseUp);
}
conllusvg.onMouseDown=function(e){
  var textid,c;
  for(textid in conllusvg.main){
    if(conllusvg.main[textid].svg==e.currentTarget)
      break;
  }
  c=conllusvg.main[textid];
  c.event.handler=e;
  if(!conllusvg.checkTarget(textid)){
    conllusvg.clickNone(textid);
    return;
  }
  if(c.event.at=="links")
    conllusvg.clickLink(textid);
  else if(c.event.at=="nodes")
    conllusvg.clickNode(textid);
}
conllusvg.onMouseUp=function(e){
  var textid,c;
  for(textid in conllusvg.main){
    if(conllusvg.main[textid].svg==e.currentTarget)
      break;
  }
  c=conllusvg.main[textid];
  c.event.handler=e;
  if(!conllusvg.checkTarget(textid))
    return;
  if(c.event.at=="nodes"){
    if(c.event.startNode==null)
      return;
    if(c.event.startNode!=c.event.index)
      conllusvg.clickNodeEnd(textid);
  }
}
conllusvg.onMouseMove=function(e){
  var textid,c;
  for(textid in conllusvg.main){
    if(conllusvg.main[textid].svg==e.currentTarget)
      break;
  }
  c=conllusvg.main[textid];
  c.event.handler=e;
  conllusvg.redArrowSVG(textid);
}
conllusvg.onClickSelect=function(e){
  var textid,c;
  for(textid in conllusvg.main){
    if(conllusvg.main[textid].event==null)
      continue;
    else if(conllusvg.main[textid].event.select==e.currentTarget)
      break;
  }
  c=conllusvg.main[textid];
  if(c.event.selectType=="deprel")
    conllusvg.clickDeprel(textid);
  else if(c.event.selectType=="upos")
    conllusvg.clickUpos(textid);
  else if(c.event.selectType=="xpos")
    conllusvg.clickXpos(textid);
}
conllusvg.onKeyDownSelect=function(e){
  if(e.keyCode==13)
    conllusvg.onClickSelect(e);
  return(false);
}
conllusvg.checkTarget=function(textid){
  var c=conllusvg.main[textid];
  var e=c.event.handler;
  var t;
  for(t in c.nodes){
    if(c.nodes[t].svg==e.target.parentNode){
      c.event.at="nodes";
      c.event.index=t;
      return(true);
    }
  }
  for(t in c.links){
    if(c.links[t].svg==e.target.parentNode){
      c.event.at="links";
      c.event.index=t;
      return(true);
    }
  }
  c.event.at=null;
  return(false);
}
conllusvg.getLeft=function(){
  return((document.scrollingElement==null)?document.documentElement.scrollLeft:document.scrollingElement.scrollLeft);
}
conllusvg.getTop=function(){
  return((document.scrollingElement==null)?document.documentElement.scrollTop:document.scrollingElement.scrollTop);
}
conllusvg.insertTextline=function(textid,i,j,t){
  var tl=conllusvg.main[textid].textlines;
  var tx=document.getElementById(textid);
  var f,a,s,x,y,k;
  if(tl[i][j]==null){
    for(k=j;k>1;k--){
      if(tl[i][k]!=null)
	break;
    }
    a=tl[i][k].anchor;
    f="";
    for(x=k+1;x<j;x++)
      f=f+"\t_";
    f=f+"\t"+t;
    if(tx.value==null){
      s=tx.textContent.substring(0,a)+f+tx.textContent.slice(a);
      tx.textContent=s;
    }
    else{
      s=tx.value.substring(0,a)+f+tx.value.slice(a);
      tx.value=s;
    }
    s=f.length;
    for(x in tl){
      for(y in tl[x]){
	if(tl[x][y].anchor>a)
	  tl[x][y].anchor+=s;
      }
    }
    f="";
    for(x=k+1;x<j;x++){
      f=f+"\t_";
      tl[i][x]=new Object();
      tl[i][x].text="_";
      tl[i][x].anchor=a+f.length;
    }
    f=f+"\t"+t;
    tl[i][j]=new Object();
    tl[i][j].text=t;
    tl[i][j].anchor=a+f.length;
  }
  else{
    f=tl[i][j].text;
    a=tl[i][j].anchor;
    if(tx.value==null){
      s=tx.textContent.substring(0,a-f.length)+t+tx.textContent.slice(a);
      tx.textContent=s;
    }
    else{
      s=tx.value.substring(0,a-f.length)+t+tx.value.slice(a);
      tx.value=s;
    }
    tl[i][j].text=t;
    s=t.length-f.length;
    if(s==0)
      return;
    for(x in tl){
      for(y in tl[x]){
	if(tl[x][y].anchor>=a)
	  tl[x][y].anchor+=s;
      }
    }
  }
}
conllusvg.writeSelect=function(textid,g,t){
  var c=conllusvg.main[textid];
  var r,i;
  g.style.position="absolute";
  g.style.left=(conllusvg.getLeft()+c.event.handler.clientX)+"px";
  g.style.top=(conllusvg.getTop()+c.event.handler.clientY)+"px";
  document.body.appendChild(g);
  r=g.getBoundingClientRect();
  i=conllusvg.getLeft()+(r.left*3-r.right)/2
  g.style.left=((i<0)?0:i)+"px";
  i=conllusvg.getTop()+r.top*2-r.bottom;
  g.style.top=((i<0)?0:i)+"px";
  g.style.visibility="visible";
  g.addEventListener("click",conllusvg.onClickSelect);
  g.addEventListener("keydown",conllusvg.onKeyDownSelect);
  c.event.select=g;
  c.event.selectType=t;
  g.focus();
  conllusvg.timer=setTimeout("clearTimeout(conllusvg.timer);conllusvg.main['"+textid+"'].event.select.focus()",0);
}
conllusvg.clickDeprel=function(textid){
  var c=conllusvg.main[textid];
  var g=c.event.select;
  var ix=g.selectedIndex;
  var t;
  if(ix>=0){
    t=g.options[ix].value;
    if(t==null||t==""||t==g.options[ix].textContent)
      t="conllusvg.setDeprel";
    conllusvg.timer=setTimeout("clearTimeout(conllusvg.timer);"+t+"('"+textid+"','"+g.options[ix].textContent+"')",0);
  }
  g.removeEventListener("click",conllusvg.onClickSelect);
  g.removeEventListener("keydown",conllusvg.onKeyDownSelect);
  document.body.removeChild(g);
  c.event.select=null;
}

conllusvg.clickUpos=function(textid){
  var c=conllusvg.main[textid];
  var g=c.event.select;
  var ix=g.selectedIndex;
  var t;
  if(ix>=0){
    t=g.options[ix].value;
    if(t==null||t==""||t==g.options[ix].textContent)
      t="conllusvg.setUpos";
    conllusvg.timer=setTimeout('clearTimeout(conllusvg.timer);'+t+'("'+textid+'","'+g.options[ix].textContent+'")',0);
  }
  g.removeEventListener("click",conllusvg.onClickSelect);
  g.removeEventListener("keydown",conllusvg.onKeyDownSelect);
  document.body.removeChild(g);
  c.event.select=null;
}
conllusvg.clickXpos=function(textid){
  var c=conllusvg.main[textid];
  var g=c.event.select;
  var t=c.event.index;
  var ix=g.selectedIndex;
  var s;
  if(ix>=0){
    s=c.nodes[t].xpostag=g.options[ix].textContent;
    conllusvg.insertTextline(textid,c.nodes[t].textlineid,5,s);
    conllusvg.writeNodesSVG(textid);
  }
  g.removeEventListener("click",conllusvg.onClickSelect);
  g.removeEventListener("keydown",conllusvg.onKeyDownSelect);
  document.body.removeChild(g);
  c.event.select=null;
}
conllusvg.clickLink=function(textid){
  var c=conllusvg.main[textid];
  var ix=c.event.index;
  var g,r,i;
  if(c.event.startNode!=null)
    return;
  if(c.nodes[ix].head==0)
    return;
  if(c.event.redLink!=null){
    c.links[c.event.redLink].svg.setAttribute("stroke","black");
    c.links[c.event.redLink].svg.setAttribute("fill","black");
  }
  c.links[ix].svg.setAttribute("stroke","red");
  c.links[ix].svg.setAttribute("fill","red");
  c.event.redLink=ix;
  if(c.event.select!=null){
    c.event.select.removeEventListener("click",conllusvg.onClickSelect);
    c.event.select.removeEventListener("keydown",conllusvg.onKeyDownSelect);
    document.body.removeChild(c.event.select);
    c.event.select=null;
  }
  g=c.deprel.cloneNode(true);
  for(i=g.options.length-1;i>=0;i--){
    if(g.options[i].textContent==c.nodes[ix].deprel)
      break;
  }
  g.selectedIndex=i;
  conllusvg.writeSelect(textid,g,"deprel");
}
conllusvg.clickNode=function(textid){
  var c=conllusvg.main[textid];
  if(c.event.startNode==null)
    conllusvg.clickNodeStart(textid);
  else if(c.event.startNode!=c.event.index)
    conllusvg.clickNodeEnd(textid);
  else
    conllusvg.clickNodeDouble(textid);
}
conllusvg.clickNodeStart=function(textid){
  var c=conllusvg.main[textid];
  var r=c.svg.getBoundingClientRect();
  if(c.event.select!=null){
    c.event.select.removeEventListener("click",conllusvg.onClickSelect);
    c.event.select.removeEventListener("keydown",conllusvg.onKeyDownSelect);
    document.body.removeChild(c.event.select);
    c.event.select=null;
  }
  if(c.event.redLink!=null){
    c.links[c.event.redLink].svg.setAttribute("stroke","black");
    c.links[c.event.redLink].svg.setAttribute("fill","black");
    c.event.redLink=null;
  }
  c.event.startNode=c.event.index;
  c.event.startX=c.event.handler.clientX-r.left;
  c.event.startY=c.event.handler.clientY-r.top;
  c.svg.addEventListener("mousemove",conllusvg.onMouseMove);
}
conllusvg.clickNodeEnd=function(textid){
  var c=conllusvg.main[textid];
  var f=c.event.startNode;
  var t=c.event.index;
  c.event.startNode=null;
  if(c.event.redArrow!=null){
    c.svg.removeChild(c.event.redArrow);
    c.svg.removeChild(c.event.redTriangle);
    c.event.redArrow=c.event.redTriangle=null;
  }
  c.svg.removeEventListener("mousemove",conllusvg.onMouseMove);
  c.nodes[t].head=c.nodes[f].id;
  if(c.links[t]==null){
    c.links[t]=new Object();
    c.links[t].deprel=c.nodes[t].deprel;
  }
  c.links[t].from=f;
  conllusvg.insertTextline(textid,c.nodes[t].textlineid,7,c.nodes[f].id);
  if(c.nodes[t].deprel=="root"){
    c.nodes[t].deprel=c.links[t].deprel="_";
    conllusvg.insertTextline(textid,c.nodes[t].textlineid,8,"_");
  }
  conllusvg.clearSVG(textid);
  if(f-t!=c.nodes[f].id-c.nodes[t].id){
    conllusvg.renum(textid);
    conllusvg.esrap(textid);
    conllusvg.reparse(textid);
  }
  else{
    conllusvg.makeLinks(textid);
    c.width=null;
    conllusvg.rewrite(textid);
  }
  if(c.links[t].svg!=null){
    c.links[t].svg.setAttribute("stroke","red");
    c.links[t].svg.setAttribute("fill","red");
    c.event.redLink=t;
    if(c.nodes[t].deprel=="_"){
      c.event.index=t;
      conllusvg.writeSelect(textid,c.deprel.cloneNode(true),"deprel");
    }
  }
}
conllusvg.clickNodeDouble=function(textid){
  var c=conllusvg.main[textid];
  var ix=c.event.index;
  if(c.event.redArrow!=null){
    c.svg.removeChild(c.event.redArrow);
    c.svg.removeChild(c.event.redTriangle);
    c.event.redArrow=c.event.redTriangle=null;
  }
  c.svg.removeEventListener("mousemove",conllusvg.onMouseMove);
  c.event.startNode=null;
  if(c.event.select!=null){
    c.event.select.removeEventListener("click",conllusvg.onClickSelect);
    c.event.select.removeEventListener("keydown",conllusvg.onKeyDownSelect);
    document.body.removeChild(c.event.select);
    c.event.select=null;
  }
  conllusvg.writeSelect(textid,c.upos.cloneNode(true),"upos");
}
conllusvg.checkXpos=function(textid){
  var c=conllusvg.main[textid];
  var ix=c.event.index;
  var g=document.createElement("select");
  var i,k;
  k=0;
  for(i=0;i<c.xpos.options.length;i++){
    if(c.xpos.options[i].value==c.nodes[ix].upostag){
      g.add(new Option(c.xpos.options[i].textContent));
      k++;
    }
  }
  if(k>1){
    g.size=(c.xpos.size<k)?c.xpos.size:k;
    conllusvg.writeSelect(textid,g,"xpos");
  }
  else{
    i=(k==0)?"_":g.options[0].textContent;
    c.nodes[ix].xpostag=i;
    conllusvg.insertTextline(textid,c.nodes[ix].textlineid,5,i);
    conllusvg.writeNodesSVG(textid);
  }
}
conllusvg.clickNone=function(textid){
  var c=conllusvg.main[textid];
  if(c.event.select!=null){
    c.event.select.removeEventListener("click",conllusvg.onClickSelect);
    c.event.select.removeEventListener("keydown",conllusvg.onKeyDownSelect);
    document.body.removeChild(c.event.select);
    c.event.select=null;
  }
  if(c.event.redLink!=null){
    c.links[c.event.redLink].svg.setAttribute("stroke","black");
    c.links[c.event.redLink].svg.setAttribute("fill","black");
    c.event.redLink=null;
  }
  if(c.event.startNode!=null){
    if(c.event.redArrow!=null){
      c.svg.removeChild(c.event.redArrow);
      c.svg.removeChild(c.event.redTriangle);
      c.event.redArrow=c.event.redTriangle=null;
    }
    c.svg.removeEventListener("mousemove",conllusvg.onMouseMove);
    c.event.startNode=null;
  }
}
conllusvg.redArrowSVG=function(textid){
  var c=conllusvg.main[textid];
  var r=c.svg.getBoundingClientRect();
  var x=c.event.handler.clientX-r.left;
  var y=c.event.handler.clientY-r.top;
  var i=x-c.event.startX;
  var j=y-c.event.startY;
  var k=Math.sqrt(i*i+j*j);
  var t;
  if(k<15){
    if(c.event.redArrow!=null){
      c.svg.removeChild(c.event.redArrow);
      c.svg.removeChild(c.event.redTriangle);
      c.event.redArrow=c.event.redTriangle=null;
    }
    return;
  }
  x-=i*5/k;
  y-=j*5/k;
  if(c.event.redArrow==null){
    t=document.createElementNS("http://www.w3.org/2000/svg","path");
    t.setAttribute("stroke","red");
    t.setAttribute("fill","none");
    t.setAttribute("stroke-width",1);
    t.setAttribute("d","M "+c.event.startX+" "+c.event.startY+" L "+x+" "+y);
    c.svg.appendChild(t);
    c.event.redArrow=t;
    t=document.createElementNS("http://www.w3.org/2000/svg","path");
    t.setAttribute("fill","red");
    t.setAttribute("d","M 0 0 l -4 -10 h 8 Z");
    c.svg.appendChild(t);
    c.event.redTriangle=t;
  }
  else
    c.event.redArrow.setAttribute("d","M "+c.event.startX+" "+c.event.startY+" L "+x+" "+y);
  c.event.redTriangle.setAttribute("transform","matrix("+(j/k)+" "+(-i/k)+" "+(i/k)+" "+(j/k)+" "+x+" "+y+")");
}
conllusvg.setDeprel=function(textid,t){
  var c=conllusvg.main[textid];
  var ix=c.event.index;
  c.nodes[ix].deprel=c.links[ix].deprel=t;
  conllusvg.insertTextline(textid,c.nodes[ix].textlineid,8,t);
  conllusvg.writeLinksSVG(textid);
  c.event.redLink=null;
}
conllusvg.setUpos=function(textid,t){
  var c=conllusvg.main[textid];
  var ix=c.event.index;
  c.nodes[ix].upostag=t;
  conllusvg.insertTextline(textid,c.nodes[ix].textlineid,4,t);
  conllusvg.writeNodesSVG(textid);
  if(c.xpos!=null)
    conllusvg.checkXpos(textid);
  else{
    c.nodes[ix].xpostag="_";
    conllusvg.insertTextline(textid,c.nodes[ix].textlineid,5,"_");
    conllusvg.writeNodesSVG(textid);
  }
}
conllusvg.rootLink=function(textid,t){
  var c=conllusvg.main[textid];
  var ix=c.event.index;
  c.nodes[ix].head="0";
  c.nodes[ix].deprel="root";
  conllusvg.insertTextline(textid,c.nodes[ix].textlineid,8,"root");
  conllusvg.insertTextline(textid,c.nodes[ix].textlineid,7,"0");
  conllusvg.clearSVG(textid);
  conllusvg.makeLinks(textid);
  c.width=null;
  conllusvg.rewrite(textid);
  c.links[ix].svg.setAttribute("stroke","red");
  c.links[ix].svg.setAttribute("fill","red");
  c.event.redLink=ix;
}
conllusvg.deleteNode=function(textid,z){
  var c=conllusvg.main[textid];
  var ix=c.event.index;
  var t,i,j,k;
  i=ix;
  if(ix==0){
    if(c.nodes[1]==null)
      return;
    i=1
  }
  j=0;
  for(k=0;k<c.nodes.length;k++){
    if(k!=i)
      j++;
    c.nodes[k].id=j.toString();
    conllusvg.insertTextline(textid,c.nodes[k].textlineid,1,j.toString());
  }
  for(k=0;k<c.nodes.length;k++){
    if(c.links[k]==null)
      c.nodes[k].head="_";
    else{
      c.nodes[k].head=c.nodes[c.links[k].from].id;
      if(c.nodes[k].head==c.nodes[k].id)
         c.nodes[k].head="0";
    }
    conllusvg.insertTextline(textid,c.nodes[k].textlineid,7,c.nodes[k].head);
    if(c.nodes[k].head=="0"){
      if(c.nodes[k].deprel!="root"){
	c.nodes[k].deprel=c.links[k].deprel="root";
	conllusvg.insertTextline(textid,c.nodes[k].textlineid,8,"root");
      }
    }
  }
  conllusvg.insertTextline(textid,c.nodes[ix].textlineid,1,"#");
  conllusvg.clearSVG(textid);
  conllusvg.parse(textid);
  conllusvg.makeNodes(textid);
  conllusvg.makeLinks(textid);
  conllusvg.renum(textid);
  conllusvg.esrap(textid);
  conllusvg.view(c.svg,textid);
}
conllusvg.duplicateNode=function(textid,z){
  var c=conllusvg.main[textid];
  var ix=parseInt(c.event.index);
  var tx=document.getElementById(textid);
  var j,k,s;
  j=1;
  for(k=0;k<c.nodes.length;k++){
    c.nodes[k].id=j.toString();
    conllusvg.insertTextline(textid,c.nodes[k].textlineid,1,j.toString());
    j++;
    if(k==ix)
      j++;
  }
  for(k=0;k<c.nodes.length;k++){
    if(c.links[k]==null)
      c.nodes[k].head="_";
    else{
      c.nodes[k].head=c.nodes[c.links[k].from].id;
      if(c.nodes[k].head==c.nodes[k].id)
         c.nodes[k].head="0";
    }
    conllusvg.insertTextline(textid,c.nodes[k].textlineid,7,c.nodes[k].head);
    if(c.nodes[k].head=="0"){
      if(c.nodes[k].deprel!="root"){
	c.nodes[k].deprel=c.links[k].deprel="root";
	conllusvg.insertTextline(textid,c.nodes[k].textlineid,8,"root");
      }
    }
  }
  s="";
  j=c.textlines[c.nodes[ix].textlineid];
  for(k=2;k<=10;k++)
    s=s+"\t"+((j[k]==null)?"_":j[k].text);
  s=s+"\n"+(ix+2);
  k=j[1].anchor;
  if(tx.value==null){
    s=tx.textContent.substring(0,k)+s+tx.textContent.slice(k);
    tx.textContent=s;
  }
  else{
    s=tx.value.substring(0,k)+s+tx.value.slice(k);
    tx.value=s;
  }
  conllusvg.clearSVG(textid);
  conllusvg.parse(textid);
  conllusvg.makeNodes(textid);
  conllusvg.makeLinks(textid);
  conllusvg.renum(textid);
  conllusvg.esrap(textid);
  conllusvg.view(c.svg,textid);
}
