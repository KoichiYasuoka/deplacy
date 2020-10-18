// CoNLL-U SVG Viewer by Koichi Yasuoka, October 18, 2020.
// Nos. 1, 2, 4, 5, 7, 8 and 10 columns are used.
"use strict";
var conllusvg=new Object();
conllusvg.main=new Array();
conllusvg.view=function(svg,textid){
  var c=conllusvg.main[textid];
  if(c==null)
    c=conllusvg.main[textid]=new Object();
  c.svg=svg;
  c.width=conllusvg.windowWidth();
  c.height=25;
  conllusvg.parse(textid);
  conllusvg.clearSVG(textid);
  conllusvg.makeNodes(textid);
  conllusvg.groupNodes(textid);
  conllusvg.makeLinks(textid);
  conllusvg.makeHeight(textid);
  conllusvg.calculateNodeY(textid);
  conllusvg.calculateLinkXY(textid);
  conllusvg.writeNodesSVG(textid);
  conllusvg.writeLinksSVG(textid);
}
conllusvg.windowWidth=function(){
  if(document.body!=null)
    return((document.body.clientWidth-600<0)?600:document.body.clientWidth);
  else
    return((window.innerWidth-620<0)?600:window.innerWidth-20);
}
conllusvg.parse=function(textid){
  conllusvg.main[textid].textlines=new Array();
  if(!conllusvg.parseStrict(textid))
    conllusvg.parseLoose(textid);
}
conllusvg.parseStrict=function(textid){
  var tl=conllusvg.main[textid].textlines;
  var tx=document.getElementById(textid);
  var s=(tx.value==null)?tx.textContent:tx.value;
  var state,i,j,k,t,p;
  state="sep";
  i=j=0;
  for(k=0;k<s.length;k++){
    t=s.substring(k,k+1);
    if(state=="sep"){
      if(t=="\t")
	return(false);
      else if(t=="\n"){
	if(j!=0)
	  return(false);
	i++;
      }
      else if(t=="#"&&j==0)
	state="com";
      else{
	state="char";
	p="X"+t;
	j++;
      }
    }
    else if(state=="com"){
      if(t=="\n"){
	if(j!=0&&j!=10)
	  return(false);
	state="sep";
	j=0;
	i++;
      }
    }
    else if(state=="char"){
      if(t=="\t"||t=="\n"){
	if(j==1)
	  tl[i]=new Array();
	tl[i][j]=new Object();
	tl[i][j].text=p.substring(1,p.length);
	tl[i][j].anchor=k;
	if(t=="\n"){
	  if(j!=10)
	    return(false);
	  j=0;
	  i++;
	}
	state="sep";
      }
      else
	p=p+t;
    }
  }
  if(state!="sep")
    return(false);
  if(j!=0)
    return(false);
  return(true);
}
conllusvg.parseLoose=function(textid){
  var tl=conllusvg.main[textid].textlines;
  var tx=document.getElementById(textid);
  var s=(tx.value==null)?tx.textContent:tx.value;
  var state,i,j,k,t,p;
  state="sep";
  i=j=0;
  for(k=0;k<s.length;k++){
    t=s.substring(k,k+1);
    if(state=="sep"){
      if(t=="\t"||t==" ")
	;
      else if(t=="\n"||t=="\r"){
	j=0;
	i++;
      }
      else if(t=="#"&&j==0)
	state="com";
      else{
	state="char";
	p="X"+t;
	j++;
      }
    }
    else if(state=="com"){
      if(t=="\n"||t=="\r"){
	state="sep";
	j=0;
	i++;
      }
    }
    else if(state=="char"){
      if(t=="\t"||t==" "||t=="\n"||t=="\r"){
	if(j==1)
	  tl[i]=new Array();
	tl[i][j]=new Object();
	tl[i][j].text=p.substring(1,p.length);
	tl[i][j].anchor=k;
	if(t=="\n"||t=="\r"){
	  j=0;
	  i++;
	}
	state="sep";
      }
      else
	p=p+t;
    }
  }
  if(state=="char"){
    if(j==1)
      tl[i]=new Array();
    tl[i][j]=new Array();
    tl[i][j].text=p.substring(1,p.length);
    tl[i][j].anchor=k;
  }
}
conllusvg.makeNodes=function(textid){
  var c=conllusvg.main[textid];
  var x,k,f,i,j;
  c.nodes=new Array();
  i=0;
  for(x in c.textlines){
    k=c.textlines[x];
    if(k==null)
      continue;
    if(k[1]==null)
      continue;
    if(parseInt(k[1].text)==k[1].text){
      c.nodes[i]=new Object();
      c.nodes[i].id=k[1].text;
      c.nodes[i].form=(k[2]==null)?"_":k[2].text;
      c.nodes[i].lemma=(k[3]==null)?"_":k[3].text;
      c.nodes[i].upostag=(k[4]==null)?"_":k[4].text;
      c.nodes[i].xpostag=(k[5]==null)?"_":k[5].text;
      c.nodes[i].feats=(k[6]==null)?"_":k[6].text;
      c.nodes[i].head="_";
      if(k[7]!=null){
	if(parseInt(k[7].text)==k[7].text)
	  c.nodes[i].head=k[7].text;
      }
      c.nodes[i].deprel=(k[8]==null)?"_":k[8].text;
      c.nodes[i].deps=(k[9]==null)?"_":k[9].text;
      c.nodes[i].misc=(k[10]==null)?"_":k[10].text;
      c.nodes[i].textlineid=x;
      i++;
    }
  }
  i=0;
  for(x in c.textlines){
    k=c.textlines[x];
    if(k==null)
      continue;
    if(k[1]==null)
      continue;
    if(parseInt(k[1].text)==k[1].text)
      i++;
    else{
      f=k[1].text.split("-");
      if(f.length==2&&k[2]!=null){
	if(f[0]==c.nodes[i].id&&k[2].text!="_"){
	  c.nodes[i].form=k[2].text;
	  for(j=i+1;c.nodes[j]!=null;j++){
	    if(c.nodes[j].id-f[1]>0)
	      break;
	    c.nodes[j].form="_";
	  }
	}
      }
    }
  }
}
conllusvg.groupNodes=function(textid){
  var c=conllusvg.main[textid];
  var x,i,j;
  x=50;
  j=0;
  for(i=0;i<c.nodes.length;i++){
    if(c.width-x<50){
      j++;
      x=50;
    }
    else if(i>0){
      if(c.nodes[i].id-c.nodes[i-1].id!=1){
	j++;
	x=50;
      }
    }
    c.nodes[i].group=j;
    c.nodes[i].x=x;
    x+=100;
  }
}
conllusvg.makeLinks=function(textid){
  var c=conllusvg.main[textid];
  var s,t,f,x,y,i,j,k;
  s=new Array();
  c.links=new Array();
  c.matrix=new Array();
  for(x in c.nodes){
    if(c.nodes[x].head=="_")
      continue;
    if(c.nodes[x].head==0){
      c.links[x]=new Object();
      c.links[x].from=parseInt(x);
      c.links[x].deprel=c.nodes[x].deprel;
      if(c.matrix[x]==null)
        c.matrix[x]=new Array();
      c.matrix[x][x]=new Object();
      c.matrix[x][x].len=0;
    }
    else{
      t=parseInt(x);
      f=t-(c.nodes[t].id-c.nodes[t].head);
      if(c.nodes[f].id==c.nodes[t].head){
	j=(t<f)?t:f;
	k=(t<f)?f:t;
	c.links[t]=new Object();
	c.links[t].from=f;
	c.links[t].deprel=c.nodes[t].deprel;
	for(i=j;i<=k;i+=0.5){
	  if(c.matrix[i]==null)
	    c.matrix[i]=new Array();
	  c.matrix[i][t]=new Object();
	  c.matrix[i][t].len=k-j;
	}
      }
    }
  }
  for(x in c.matrix){
    if(parseInt(x)==x)
      continue;
    if((x*2)%2==1){
      k=0;
      for(y in c.matrix[x]){
	if(s[k]==null)
	  s[k]=new Object();
	s[k].len=c.matrix[x][y].len;
	s[k].num=y;
	k++;
      }
      for(i=0;i<k;i++){
	for(j=i+1;j<k;j++){
	  if(s[i].len-s[j].len>0){
	    y=s[i];
	    s[i]=s[j];
	    s[j]=y;
	  }
	}
      }
      for(i=0;i<k;i++)
	c.matrix[x][s[i].num].minheight=i+1;
    }
  }
}
conllusvg.makeHeight=function(textid){
  var c=conllusvg.main[textid];
  var x,y,i,j,k,g,h;
  for(x in c.matrix){
    for(y in c.matrix[x]){
      if(c.matrix[x][y].height!=null)
	c.matrix[x][y].height=null
    }
  }
  for(x in c.links){
    y=c.links[x].from;
    if(x-y<0){
      j=parseInt(x);
      k=parseInt(y);
    }
    else if(x-y>0){
      j=parseInt(y);
      k=parseInt(x);
    }
    else
      continue;
    g=c.nodes[j].group;
    if(c.nodes[k].group==g){
      h=0;
      for(i=j;i<k;i++){
	if(h-c.matrix[i+0.5][x].minheight<0)
	  h=c.matrix[i+0.5][x].minheight;
      }
      for(i=j;i<=k;i++)
	c.matrix[i][x].height=h;
    }
    else{
      h=0;
      for(i=j;i<k;i++){
	if(c.nodes[i].group!=g)
	  break;
	if(h-c.matrix[i+0.5][x].minheight<0)
	  h=c.matrix[i+0.5][x].minheight;
      }
      for(i--;i>=j;i--)
	c.matrix[i][x].height=h;
      g=c.nodes[k].group;
      h=0;
      for(i=k;i>j;i--){
	if(c.nodes[i].group!=g)
	  break;
	if(h-c.matrix[i-0.5][x].minheight<0)
	  h=c.matrix[i-0.5][x].minheight;
      }
      for(i++;i<=k;i++)
	c.matrix[i][x].height=h;
    }
  }
  for(x in c.links){
    y=c.links[x].from;
    if(x==y)
      continue;
    h=c.matrix[x][x].height;
    for(k in c.matrix[x]){
      if(k!=x&&h==c.matrix[x][k].height){
	if(c.links[k].from!=x){
	  h=-1;
	  break;
	}
      }
    }
    if(h==-1){
      for(k in c.matrix[x]){
	if(h-c.matrix[x][k].height<0)
	  h=c.matrix[x][k].height;
      }
      h++;
      if(x-y<0){
        j=parseInt(x);
        k=parseInt(y);
      }
      else{
        j=parseInt(y);
        k=parseInt(x);
      }
      g=c.nodes[x].group;
      for(i=j;i<=k;i++){
	if(c.nodes[i].group==g)
	  c.matrix[i][x].height=h;
      }
    }
  }
  for(x in c.links){
    y=c.links[x].from;
    if(x==y){
      h=0;
      for(y in c.matrix[x]){
	if(h-c.matrix[x][y].height<0)
	  h=c.matrix[x][y].height;
      }
      c.matrix[x][x].height=h+1;
    }
  }
}
conllusvg.calculateNodeY=function(textid){
  var c=conllusvg.main[textid];
  var x,y,g,h;
  h=new Array();
  h[0]=0;
  for(x in c.nodes){
    g=c.nodes[x].group;
    if(h[g]==null)
      h[g]=0;
    for(y in c.matrix[x]){
      if(h[g]-c.matrix[x][y].height<0)
	h[g]=c.matrix[x][y].height;
    }
  }
  y=new Array();
  y[0]=h[0]*25+25;
  for(g=1;g<h.length;g++)
    y[g]=y[g-1]+h[g]*25+100;
  c.height=y[g-1]+100;
  for(x in c.nodes)
    c.nodes[x].y=y[c.nodes[x].group];
}
conllusvg.calculateLinkXY=function(textid){
  var c=conllusvg.main[textid];
  var x,f;
  for(x in c.links){
    f=c.links[x].from;
    if(x==f){
      c.links[x].type="root";
      c.links[x].fromX=c.links[x].toX=c.nodes[x].x;
      c.links[x].fromY=c.nodes[x].y-c.matrix[x][x].height*25;
      c.links[x].toY=c.nodes[x].y;
    }
    else if(c.nodes[x].group==c.nodes[f].group){
      c.links[x].type="single";
      c.links[x].fromX=c.nodes[f].x;
      if(c.links[f]!=null)
	c.links[x].fromX+=(f-x<0)?10:-10;
      c.links[x].toX=c.nodes[x].x;
      c.links[x].fromY=c.links[x].toY=c.nodes[x].y;
      c.links[x].halfX=(c.links[x].fromX+c.links[x].toX)/2;
      c.links[x].halfY=c.nodes[x].y-c.matrix[x][x].height*25;
      c.links[x].len=Math.abs(c.links[x].fromX-c.links[x].toX);
    }
    else{
      c.links[x].type="double";
      c.links[x].fromX=c.nodes[f].x;
      if(c.links[f]!=null)
	c.links[x].fromX+=(f-x<0)?10:-10;
      c.links[x].toX=c.nodes[x].x;
      c.links[x].fromY=c.nodes[f].y;
      c.links[x].toY=c.nodes[x].y;
      c.links[x].firstX=(f-x<0)?c.width-1:1;
      c.links[x].firstY=c.nodes[f].y-c.matrix[f][x].height*25;
      c.links[x].secondX=(f-x<0)?1:c.width-1;
      c.links[x].secondY=c.nodes[x].y-c.matrix[x][x].height*25;
      c.links[x].firstLen=Math.abs(c.links[x].fromX-c.links[x].firstX);
      c.links[x].secondLen=Math.abs(c.links[x].toX-c.links[x].secondX);
    }
  }
}
conllusvg.writeNodesSVG=function(textid){
  var c=conllusvg.main[textid];
  var n,g,t,w;
  c.svg.setAttribute("width",c.width);
  c.svg.setAttribute("height",c.height);
  for(n in c.nodes){
    g=document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("stroke","black");
    g.setAttribute("fill","black");
    if(c.nodes[n].svg!=null)
      c.svg.removeChild(c.nodes[n].svg);
    c.nodes[n].svg=g;
    c.svg.appendChild(g);
    t=document.createElementNS("http://www.w3.org/2000/svg","text");
    t.textContent=(c.nodes[n].upostag=="_")?"???":c.nodes[n].upostag;
    t.setAttribute("x",c.nodes[n].x);
    t.setAttribute("y",c.nodes[n].y+17);
    t.setAttribute("text-anchor","middle");
    t.setAttribute("font-family","sans-serif");
    t.setAttribute("font-size",15);
    t.setAttribute("stroke","none");
    g.appendChild(t);
    w=t.getBBox().width;
    t=document.createElementNS("http://www.w3.org/2000/svg","rect");
    t.setAttribute("x",c.nodes[n].x-w/2-5);
    t.setAttribute("y",c.nodes[n].y+1);
    t.setAttribute("width",w+10);
    t.setAttribute("height",20);
    t.setAttribute("rx",5);
    t.setAttribute("ry",5);
    t.setAttribute("stroke-width",2);
    t.setAttribute("fill","none");
    g.appendChild(t);
    if(c.nodes[n].xpostag!="_"){
      t=document.createElementNS("http://www.w3.org/2000/svg","text");
      t.textContent=c.nodes[n].xpostag;
      t.setAttribute("x",c.nodes[n].x);
      t.setAttribute("y",c.nodes[n].y+30);
      t.setAttribute("text-anchor","middle");
      t.setAttribute("font-family","sans-serif");
      t.setAttribute("font-size",8);
      t.setAttribute("stroke","none");
      g.appendChild(t);
      w=t.getBBox().width;
      if(w>90){
	t.setAttribute("transform","scale("+(90/w)+",1)");
	t.setAttribute("x",c.nodes[n].x*w/90);
      }
    }
    if(c.nodes[n].form!="_"){
      t=document.createElementNS("http://www.w3.org/2000/svg","text");
      t.textContent=c.nodes[n].form;
      t.setAttribute("x",c.nodes[n].x);
      t.setAttribute("y",c.nodes[n].y+60);
      t.setAttribute("text-anchor","middle");
      t.setAttribute("font-family","sans-serif");
      t.setAttribute("font-size",30);
      t.setAttribute("stroke","none");
      if(c.nodes[n].misc.indexOf("FontStyle=Italic")>=0)
	t.setAttribute("font-style","oblique");
      if(c.nodes[n].misc.indexOf("Direction=LtoR")>=0){
        t.setAttribute("unicode-bidi","bidi-override");
        t.setAttribute("direction","ltr");
      }
      if(c.nodes[n].misc.indexOf("Direction=RtoL")>=0){
        t.setAttribute("unicode-bidi","bidi-override");
        t.setAttribute("direction","rtl");
      }
      g.appendChild(t);
      w=t.getBBox().width;
      if(w>90){
	t.setAttribute("transform","scale("+(90/w)+",1)");
	t.setAttribute("x",c.nodes[n].x*w/90);
      }
    }
    w=c.nodes[n].misc.match(/(Gloss|Translit)=[^|]+/);
    if(w!=null){
      t=document.createElementNS("http://www.w3.org/2000/svg","text");
      t.textContent=w[0].slice(w[0].indexOf("=")+1);
      t.setAttribute("x",c.nodes[n].x);
      t.setAttribute("y",c.nodes[n].y+75);
      t.setAttribute("text-anchor","middle");
      t.setAttribute("font-family","serif");
      t.setAttribute("font-size",12);
      t.setAttribute("stroke","none");
      g.appendChild(t);
      w=t.getBBox().width;
      if(w>90){
	t.setAttribute("transform","scale("+(90/w)+",1)");
	t.setAttribute("x",c.nodes[n].x*w/90);
      }
    }
  }
}
conllusvg.writeLinksSVG=function(textid){
  var c=conllusvg.main[textid];
  var n,g;
  c.svg.setAttribute("width",c.width);
  c.svg.setAttribute("height",c.height);
  for(n in c.links){
    g=document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("stroke","black");
    g.setAttribute("fill","black");
    if(c.links[n].svg!=null)
      c.svg.removeChild(c.links[n].svg);
    c.links[n].svg=g;
    c.svg.appendChild(g);
    if(c.links[n].type=="root")
      conllusvg.writeLinksSVGroot(c.links[n]);
    else if(c.links[n].type=="single")
      conllusvg.writeLinksSVGsingle(c.links[n]);
    else if(c.links[n].type=="double")
      conllusvg.writeLinksSVGdouble(c.links[n]);
  }
}
conllusvg.writeLinksSVGroot=function(link){
  var t,w;
  t=document.createElementNS("http://www.w3.org/2000/svg","text");
  t.textContent=(link.deprel=="_")?"root":link.deprel;
  t.setAttribute("x",link.fromX);
  t.setAttribute("y",link.fromY+5);
  t.setAttribute("text-anchor","middle");
  t.setAttribute("font-family","sans-serif");
  t.setAttribute("font-size",15);
  t.setAttribute("stroke","none");
  link.svg.appendChild(t);
  w=t.getBBox().width;
  if(w>90){
    t.setAttribute("transform","scale("+(90/w)+",1)");
    t.setAttribute("x",link.fromX*w/90);
  }
  t=document.createElementNS("http://www.w3.org/2000/svg","path");
  t.setAttribute("fill","none");
  t.setAttribute("stroke-width",1);
  t.setAttribute("d","M "+link.fromX+" "+(link.fromY+5)+" v "+(link.toY-link.fromY-5));
  link.svg.appendChild(t);
  t=document.createElementNS("http://www.w3.org/2000/svg","path");
  t.setAttribute("d","M "+link.toX+" "+link.toY+" l -4 -10 h 8 Z");
  link.svg.appendChild(t);
}
conllusvg.writeLinksSVGsingle=function(link){
  var j=(link.fromX<link.toX)?link.fromX:link.toX;
  var k=(link.fromX<link.toX)?link.toX:link.fromX;
  var t,w;
  t=document.createElementNS("http://www.w3.org/2000/svg","text");
  t.textContent=(link.deprel=="_")?"???":link.deprel;
  t.setAttribute("x",link.halfX);
  t.setAttribute("y",link.halfY+5);
  t.setAttribute("text-anchor","middle");
  t.setAttribute("font-family","sans-serif");
  t.setAttribute("font-size",15);
  t.setAttribute("stroke","none");
  link.svg.appendChild(t);
  w=t.getBBox().width;
  if(link.len-w<10){
    t.setAttribute("transform","scale("+((link.len-10)/w)+",1)");
    t.setAttribute("x",link.halfX*w/(link.len-10));
    w=link.len-10;
  }
  t=document.createElementNS("http://www.w3.org/2000/svg","path");
  t.setAttribute("fill","none");
  t.setAttribute("stroke-width",1);
  t.setAttribute("d","M "+j+" "+link.fromY+" v "+(link.halfY-link.fromY+5)+" q 0 -5 5 -5 h "+(link.halfX-j-w/2-5)+" m "+w+" 0 h "+(k-link.halfX-w/2-5)+" q 5 0 5 5"+" v "+(link.toY-link.halfY-5));
  link.svg.appendChild(t);
  t=document.createElementNS("http://www.w3.org/2000/svg","path");
  t.setAttribute("d","M "+link.toX+" "+link.toY+" l -4 -10 h 8 Z");
  link.svg.appendChild(t);
}
conllusvg.writeLinksSVGdouble=function(link){
  var upper,lower,t,w;
  upper=new Object();
  lower=new Object();
  if(link.fromY<link.toY){
    upper.fromX=link.fromX;
    upper.fromY=link.fromY;
    upper.toX=link.firstX;
    upper.toY=link.firstY
    upper.len=link.firstLen;
    lower.fromX=link.secondX;
    lower.fromY=link.secondY;
    lower.toX=link.toX;
    lower.toY=link.toY;
    lower.len=link.secondLen;
  }
  else{
    upper.fromX=link.toX;
    upper.fromY=link.toY;
    upper.toX=link.secondX;
    upper.toY=link.secondY
    upper.len=link.secondLen;
    lower.fromX=link.firstX;
    lower.fromY=link.firstY;
    lower.toX=link.fromX;
    lower.toY=link.fromY;
    lower.len=link.firstLen;
  }
  t=document.createElementNS("http://www.w3.org/2000/svg","text");
  t.textContent=(link.deprel=="_")?"???":link.deprel;
  t.setAttribute("x",upper.toX);
  t.setAttribute("y",upper.toY+5);
  t.setAttribute("text-anchor","end");
  t.setAttribute("font-family","sans-serif");
  t.setAttribute("font-size",15);
  t.setAttribute("stroke","none");
  link.svg.appendChild(t);
  upper.w=t.getBBox().width;
  if(upper.len-upper.w<5){
    t.setAttribute("transform","scale("+((upper.len-5)/upper.w)+",1)");
    t.setAttribute("x",upper.toX*upper.w/(upper.len-5));
    upper.w=upper.len-5;
  }
  t=document.createElementNS("http://www.w3.org/2000/svg","path");
  t.setAttribute("fill","none");
  t.setAttribute("stroke-width",1);
  t.setAttribute("d","M "+upper.fromX+" "+upper.fromY+" v "+(upper.toY-upper.fromY+5)+" q 0 -5 5 -5 h "+(upper.toX-upper.fromX-upper.w-5));
  link.svg.appendChild(t);
  t=document.createElementNS("http://www.w3.org/2000/svg","text");
  t.textContent=(link.deprel=="_")?"???":link.deprel;
  t.setAttribute("x",lower.fromX);
  t.setAttribute("y",lower.fromY+5);
  t.setAttribute("text-anchor","start");
  t.setAttribute("font-family","sans-serif");
  t.setAttribute("font-size",15);
  t.setAttribute("stroke","none");
  link.svg.appendChild(t);
  lower.w=t.getBBox().width;
  if(lower.len-lower.w<5){
    t.setAttribute("transform","scale("+((lower.len-5)/lower.w)+",1)");
    t.setAttribute("x",lower.fromX*lower.w/(lower.len-5));
    lower.w=lower.len-5;
  }
  t=document.createElementNS("http://www.w3.org/2000/svg","path");
  t.setAttribute("fill","none");
  t.setAttribute("stroke-width",1);
  t.setAttribute("d","M "+(lower.fromX+lower.w)+" "+lower.fromY+" h "+(lower.toX-lower.fromX-lower.w-5)+" q 5 0 5 5 v "+(lower.toY-lower.fromY-5));
  link.svg.appendChild(t);
  t=document.createElementNS("http://www.w3.org/2000/svg","path");
  t.setAttribute("d","M "+link.toX+" "+link.toY+" l -4 -10 h 8 Z");
  link.svg.appendChild(t);
}
conllusvg.clearSVG=function(textid){
  var c=conllusvg.main[textid];
  var n;
  for(n in c.nodes){
    if(c.nodes[n].svg!=null)
      c.svg.removeChild(c.nodes[n].svg);
    c.nodes[n].svg=null;
  }
  for(n in c.links){
    if(c.links[n].svg!=null)
      c.svg.removeChild(c.links[n].svg);
    c.links[n].svg=null;
  }
}
conllusvg.rewrite=function(textid){
  var c=conllusvg.main[textid];
  var x=conllusvg.windowWidth();
  if(c.nodes==null)
    return(false);
  if(x==c.width)
    return(false);
  c.width=x;
  c.height=25;
  conllusvg.groupNodes(textid);
  conllusvg.makeHeight(textid);
  conllusvg.calculateNodeY(textid);
  conllusvg.calculateLinkXY(textid);
  conllusvg.writeNodesSVG(textid);
  conllusvg.writeLinksSVG(textid);
  return(true);
}
conllusvg.rewriteAll=function(){
  var x;
  for (x in conllusvg.main)
    conllusvg.rewrite(x);
}
