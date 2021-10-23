# [deplacy](https://koichiyasuoka.github.io/deplacy/)句法分析

## 用[Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("chinese")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗         case
黑猫 NOUN  ═╗═╝<╗       obl
白猫 NOUN  <╝   ║       conj
，   PUNCT <════║═══╗   punct
捉到 VERB  ═╗═══╝<╗ ║   csubj
老鼠 NOUN  <╝     ║ ║   obj
就是 AUX   <╗     ║ ║   cop
好猫 ADJ   ═╝═════╝═╝═╗ root
。   PUNCT <══════════╝ punct
```

## 用[Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("zh-hans")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗       case
黑猫 NOUN  <╗ ║       nmod
白猫 NOUN  ═╝═╝<╗     nmod
，   PUNCT <════║═╗   punct
捉到 VERB  ═╗<╗ ║ ║   csubj
老鼠 NOUN  <╝ ║ ║ ║   obj
就是 AUX   <╗ ║ ║ ║   cop
好猫 NOUN  ═╝═╝═╝═╝═╗ root
。   PUNCT <════════╝ punct
```

## 用[UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=zh_gsdsimp&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗       case
黑猫 NOUN  <╗ ║       nmod
白猫 NOUN  ═╝═╝<╗     nmod
，   PUNCT <════║═╗   punct
捉到 VERB  ═╗<╗ ║ ║   csubj
老鼠 NOUN  <╝ ║ ║ ║   obj
就是 AUX   <╗ ║ ║ ║   cop
好猫 NOUN  ═╝═╝═╝═╝═╗ root
。   PUNCT <════════╝ punct
```

## 用[NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("zh")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗         case
黑猫 NOUN  <╗ ║         nmod
白猫 NOUN  ═╝═╝<══╗     nmod
，   PUNCT <══════║═╗   punct
捉到 VERB  ═╗<══╗ ║ ║   csubj
老鼠 NOUN  <╝   ║ ║ ║   obj
就   ADV   <══╗ ║ ║ ║   mark
是   AUX   <╗ ║ ║ ║ ║   cop
好猫 NOUN  ═╝═╝═╝═╝═╝═╗ root
。   PUNCT <══════════╝ punct
```

## 用[esupar](https://github.com/KoichiYasuoka/esupar)

```py
>>> import esupar
>>> nlp=esupar.load("zh")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗         case
黑猫 NOUN  <╗ ║         nmod
白猫 NOUN  ═╝═╝<╗       obl
，   PUNCT <════║═══╗   punct
捉到 VERB  ═╗═══╝<╗ ║   csubj
老鼠 NOUN  <╝     ║ ║   obj
就是 AUX   <══╗   ║ ║   cop
好   ADJ   <╗ ║   ║ ║   case
猫   NOUN  ═╝═╝═══╝═╝═╗ root
。   PUNCT <══════════╝ punct
```

## 用[spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("zh-gsdsimp")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗         case
黑猫 NOUN  <╗ ║         nmod
白猫 NOUN  ═╝═╝<╗       obl
，   PUNCT <════║═╗     punct
捉到 VERB  ═════╝═╝═╗═╗ ROOT
老鼠 NOUN  <══╗     ║ ║ nsubj
就是 AUX   <╗ ║     ║ ║ cop
好猫 NOUN  ═╝═╝<════╝ ║ parataxis
。   PUNCT <══════════╝ punct
```

## 用[UD-Chinese](https://pypi.org/project/udchinese)

```py
>>> import udchinese
>>> nlp=udchinese.load()
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <════════╗     case
黑   NOUN  <════╗   ║     nmod
猫   NOUN  <══╗ ║   ║     nmod
白   NOUN  <╗ ║ ║   ║     compound
猫   NOUN  ═╝═╝═╝<╗ ║     nsubj
，   PUNCT        ║ ║<╗   punct
捉   VERB  ═╗═╗<╗ ║ ║ ║   advcl
到   VERB  <╝ ║ ║ ║ ║ ║   flat:vv
老   NOUN  <╗ ║ ║ ║ ║ ║   compound
鼠   NOUN  ═╝<╝ ║ ║ ║ ║   obj
就是 VERB  ═══╗═╝═╝═╝═╝═╗ root
好   VERB  <╗ ║         ║ amod
猫   NOUN  ═╝<╝         ║ obj
。   PUNCT <════════════╝ punct
```

## 用[spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("zh_core_web_trf")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 SCONJ <══╗         advmod
黑猫 NOUN  <╗ ║         compound:nn
白猫 NOUN  ═╝═╝<══╗     dep
，   PUNCT <══════║═╗   punct
捉到 VERB  ═╗═╗<╗ ║ ║   dep
老鼠 NOUN  <╝ ║ ║ ║ ║   dobj
就是 ADV   <══╝ ║ ║ ║   dep
好   ADJ   <╗   ║ ║ ║   amod
猫   NOUN  ═╝═══╝═╝═╝═╗ ROOT
。   PUNCT <══════════╝ punct
```

## 用[fastHan](https://github.com/fastnlp/fastHan)

```
>>> from fastHan import FastHan
>>> model=FastHan()
>>> nlp=lambda x:"".join("\n".join("\t".join([str(i+1),t[0],"_",t[3],t[3],"_",str(t[1]),t[2],"_","SpaceAfter=No"]) for i,t in enumerate(s))+"\n\n" for s in model(x,"Parsing"))
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 AD <══╗         advmod
黑猫 NN <╗ ║         nn
白猫 NN ═╝═╝<╗       nsubj
，   PU <════║═══╗   punct
捉到 VV ═╗═══╝<╗ ║   dep
老鼠 NN <╝     ║ ║   dobj
就   AD <════╗ ║ ║   advmod
是   VC ═══╗═╝═╝═╝═╗ root
好   JJ <╗ ║       ║ amod
猫   NN ═╝<╝       ║ attr
。   PU <══════════╝ punct
```

