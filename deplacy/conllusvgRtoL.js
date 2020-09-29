// CoNLL-U SVG RtoL by Koichi Yasuoka, September 29, 2020.
// "conllusvgview.js" is needed.
"use strict";
conllusvg.writeNodesSVG=function(textid){
  var c=conllusvg.main[textid];
  var n,g,t,w;
  c.svg.setAttribute("width",c.width);
  c.svg.setAttribute("height",c.height);
  for(n in c.nodes){
    g=document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("transform","scale(-1,1) translate(-"+c.width+" 0)")
    g.setAttribute("stroke","black");
    g.setAttribute("fill","black");
    if(c.nodes[n].svg!=null)
      c.svg.removeChild(c.nodes[n].svg);
    c.nodes[n].svg=g;
    c.svg.appendChild(g);
    t=document.createElementNS("http://www.w3.org/2000/svg","text");
    t.textContent=(c.nodes[n].upostag=="_")?"???":c.nodes[n].upostag;
    t.setAttribute("transform","scale(-1,1)");
    t.setAttribute("x",-c.nodes[n].x);
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
      t.setAttribute("transform","scale(-1,1)");
      t.setAttribute("x",-c.nodes[n].x);
      t.setAttribute("y",c.nodes[n].y+30);
      t.setAttribute("text-anchor","middle");
      t.setAttribute("font-family","sans-serif");
      t.setAttribute("font-size",8);
      t.setAttribute("stroke","none");
      g.appendChild(t);
      w=t.getBBox().width;
      if(w>90){
	t.setAttribute("transform","scale("+(-90/w)+",1)");
	t.setAttribute("x",-c.nodes[n].x*w/90);
      }
    }
    if(c.nodes[n].form!="_"){
      t=document.createElementNS("http://www.w3.org/2000/svg","text");
      t.textContent=c.nodes[n].form;
      t.setAttribute("transform","scale(-1,1)");
      t.setAttribute("x",-c.nodes[n].x);
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
	t.setAttribute("transform","scale("+(-90/w)+",1)");
	t.setAttribute("x",-c.nodes[n].x*w/90);
      }
    }
    w=c.nodes[n].misc.match(/(Gloss|Translit)=[^|]+/);
    if(w!=null){
      t=document.createElementNS("http://www.w3.org/2000/svg","text");
      t.textContent=w[0].slice(w[0].indexOf("=")+1);
      t.setAttribute("transform","scale(-1,1)");
      t.setAttribute("x",-c.nodes[n].x);
      t.setAttribute("y",c.nodes[n].y+75);
      t.setAttribute("text-anchor","middle");
      t.setAttribute("font-family","serif");
      t.setAttribute("font-size",12);
      t.setAttribute("stroke","none");
      g.appendChild(t);
      w=t.getBBox().width;
      if(w>90){
	t.setAttribute("transform","scale("+(-90/w)+",1)");
	t.setAttribute("x",-c.nodes[n].x*w/90);
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
    g.setAttribute("transform","scale(-1,1) translate(-"+c.width+" 0)")
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
  t.setAttribute("transform","scale(-1,1)");
  t.setAttribute("x",-link.fromX);
  t.setAttribute("y",link.fromY+5);
  t.setAttribute("text-anchor","middle");
  t.setAttribute("font-family","sans-serif");
  t.setAttribute("font-size",15);
  t.setAttribute("stroke","none");
  link.svg.appendChild(t);
  w=t.getBBox().width;
  if(w>90){
    t.setAttribute("transform","scale("+(-90/w)+",1)");
    t.setAttribute("x",-link.fromX*w/90);
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
  t.setAttribute("transform","scale(-1,1)");
  t.setAttribute("x",-link.halfX);
  t.setAttribute("y",link.halfY+5);
  t.setAttribute("text-anchor","middle");
  t.setAttribute("font-family","sans-serif");
  t.setAttribute("font-size",15);
  t.setAttribute("stroke","none");
  link.svg.appendChild(t);
  w=t.getBBox().width;
  if(link.len-w<10){
    t.setAttribute("transform","scale("+(-(link.len-10)/w)+",1)");
    t.setAttribute("x",-link.halfX*w/(link.len-10));
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
  t.setAttribute("transform","scale(-1,1)");
  t.setAttribute("x",-upper.toX);
  t.setAttribute("y",upper.toY+5);
  t.setAttribute("text-anchor","start");
  t.setAttribute("font-family","sans-serif");
  t.setAttribute("font-size",15);
  t.setAttribute("stroke","none");
  link.svg.appendChild(t);
  upper.w=t.getBBox().width;
  if(upper.len-upper.w<5){
    t.setAttribute("transform","scale("+(-(upper.len-5)/upper.w)+",1)");
    t.setAttribute("x",-upper.toX*upper.w/(upper.len-5));
    upper.w=upper.len-5;
  }
  t=document.createElementNS("http://www.w3.org/2000/svg","path");
  t.setAttribute("fill","none");
  t.setAttribute("stroke-width",1);
  t.setAttribute("d","M "+upper.fromX+" "+upper.fromY+" v "+(upper.toY-upper.fromY+5)+" q 0 -5 5 -5 h "+(upper.toX-upper.fromX-upper.w-5));
  link.svg.appendChild(t);
  t=document.createElementNS("http://www.w3.org/2000/svg","text");
  t.textContent=(link.deprel=="_")?"???":link.deprel;
  t.setAttribute("transform","scale(-1,1)");
  t.setAttribute("x",-lower.fromX);
  t.setAttribute("y",lower.fromY+5);
  t.setAttribute("text-anchor","end");
  t.setAttribute("font-family","sans-serif");
  t.setAttribute("font-size",15);
  t.setAttribute("stroke","none");
  link.svg.appendChild(t);
  lower.w=t.getBBox().width;
  if(lower.len-lower.w<5){
    t.setAttribute("transform","scale("+(-(lower.len-5)/lower.w)+",1)");
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
