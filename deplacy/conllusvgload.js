// CoNLL-U SVG Load & Save by Koichi Yasuoka, November 5, 2018.
// "conllusvgview.js" is needed.
"use strict";
conllusvg.onLoadLocal=function(e){
  var textid,c;
  for(textid in conllusvg.main){
    if(conllusvg.main[textid].files==null)
      continue;
    else if(conllusvg.main[textid].files.load==e.currentTarget)
      break;
  }
  c=conllusvg.main[textid];
  c.files.reader.removeEventListener("load",conllusvg.onLoadLocal);
  conllusvg.loadText(textid,c.files.reader.result);
}
conllusvg.onLoadRemote=function(e){
  var textid,c;
  for(textid in conllusvg.main){
    if(conllusvg.main[textid].files==null)
      continue;
    else if(conllusvg.main[textid].files.request==e.currentTarget)
      break;
  }
  c=conllusvg.main[textid];
  c.files.request.removeEventListener("load",conllusvg.onLoadRemote);
  if(c.files.request.status==200)
    conllusvg.loadText(textid,c.files.request.responseText);
}
conllusvg.onLoadRemoteJSON=function(e){
  var textid,c,s;
  for(textid in conllusvg.main){
    if(conllusvg.main[textid].files==null)
      continue;
    else if(conllusvg.main[textid].files.request==e.currentTarget)
      break;
  }
  c=conllusvg.main[textid];
  c.files.request.removeEventListener("load",conllusvg.onLoadRemoteJSON);
  if(c.files.request.status==200){
    s=JSON.parse(c.files.request.responseText);
    conllusvg.loadText(textid,s[c.files.filename]);
  }
}
conllusvg.onChangeInput=function(e){
  var textid;
  for(textid in conllusvg.main){
    if(conllusvg.main[textid].files==null)
      continue;
    else if(conllusvg.main[textid].files.load==e.currentTarget)
      break;
  }
  conllusvg.changeInput(textid);
}
conllusvg.loadLocal=function(textid,append){
  var c=conllusvg.main[textid];
  var g=document.createElement("input");
  g.setAttribute("type","file");
  g.style.position="absolute";
  g.style.opacity=g.style.right=g.style.top=0;
  document.body.appendChild(g);
  g.addEventListener("change",conllusvg.onChangeInput);
  if(c.files==null)
    c.files=new Object();
  c.files.inputBox=g;
  c.files.append=(append==null)?false:append;
  c.files.reader=null;
  c.files.type="loadLocal";
  g.click();
  if(c.files.reader==null){
    if(c.files.inputBox==g){
      g.removeEventListener("change",conllusvg.onChangeInput);
      document.body.removeChild(g);
      c.files.inputBox=null;
    }
  }
}
conllusvg.changeInput=function(textid){
  var c=conllusvg.main[textid];
  c.files.reader=new FileReader();
  c.files.reader.addEventListener("load",conllusvg.onLoadLocal);
  c.files.reader.readAsText(c.files.inputBox.files[0]);
  c.files.filename=c.files.inputBox.files[0].name;
  c.files.inputBox.removeEventListener("change",conllusvg.onChangeInput);
  document.body.removeChild(c.files.inputBox);
  c.files.inputBox=null;
}
conllusvg.loadText=function(textid,t){
  var c=conllusvg.main[textid];
  var tx=document.getElementById(textid);
  var n;
  if(tx.value==null){
    if(c.files.append&&tx.textContent.length>0)
      tx.textContent=tx.textContent+"\n"+t
    else
      tx.textContent=t;
  }
  else if(c.files.append&&tx.value.length>0)
    tx.value=tx.value+"\n"+t;
  else
    tx.value=t;
  conllusvg.clearSVG(textid);
  conllusvg.view(c.svg,textid);
}
conllusvg.loadRemote=function(textid,url,append){
  var c=conllusvg.main[textid];
  var i;
  if(c.files==null)
    c.files=new Object();
  c.files.append=(append==null)?false:append;
  i=url.lastIndexOf("/");
  c.files.filename=(i<0)?url:url.slice(i+1);
  c.files.request=new XMLHttpRequest();
  c.files.request.addEventListener("load",conllusvg.onLoadRemote);
  c.files.request.open("GET",url);
  c.files.request.setRequestHeader("Pragma","no-cache");
  c.files.request.setRequestHeader("Cache-Control","no-cache");
  c.files.request.setRequestHeader("If-Modified-Since","Sat, 01 Jan 2000 00:00:00 GMT");
  c.files.request.send();
}
conllusvg.loadRemoteJSON=function(textid,url,jsonkey){
  var c=conllusvg.main[textid];
  if(c.files==null)
    c.files=new Object();
  c.files.append=false;
  c.files.filename=jsonkey;
  c.files.request=new XMLHttpRequest();
  c.files.request.addEventListener("load",conllusvg.onLoadRemoteJSON);
  c.files.request.open("GET",url);
  c.files.request.send();
}
conllusvg.saveLocal=function(textid){
  var c=conllusvg.main[textid];
  var tx=document.getElementById(textid);
  var s,b,f,a;
  if(tx.value==null)
    s=tx.textContent;
  else
    s=tx.value;
  if(s.slice(-1)!="\n")
    s=s+"\n";
  if(c.files==null)
    c.files=new Object();
  f=c.files.filename;
  if(f==null)
    f="conllu.txt";
  else if(f.lastIndexOf(".txt")!=f.length-4)
    f="conllu.txt";
  b=new Blob([s],{"type":"application/force-download"});
  if(window.navigator.msSaveBlob)
    window.navigator.msSaveBlob(b,f);
  else{
    a=document.createElement("a");
    a.href=window.URL.createObjectURL(b);
    a.target="_blank";
    a.download=f;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
