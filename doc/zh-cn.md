# [deplacy](https://koichiyasuoka.github.io/deplacy/)句法分析

## 用[Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("zh-hans")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗       case
黑猫 NOUN  <╗ ║       nmod
白猫 NOUN  ═╝═╝<══╗   nmod
，   PUNCT <════╗ ║   punct
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

## 用[spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("zh-gsdsimp")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗       case
黑猫 NOUN  <╗ ║       nmod
白猫 NOUN  ═╝═╝<╗     obl
，   PUNCT <╗   ║     punct
捉到 VERB  ═╝═══╝═╗═╗ ROOT
老鼠 NOUN  <══╗   ║ ║ nsubj
就是 AUX   <╗ ║   ║ ║ cop
好猫 NOUN  ═╝═╝<══╝ ║ parataxis
。   PUNCT <════════╝ punct
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
>>> nlp=spacy.load("zh_core_web_sm")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 SCONJ <══╗         advmod
黑猫 NOUN  <╗ ║         compound:nn
白猫 VERB  ═╝═╝<══╗     dep
，   PUNCT <══════║═╗   punct
捉到 VERB  ═╗═══╗═╝═╝═╗ ROOT
老鼠 NOUN  <╝   ║     ║ dobj
就是 ADV   <╗   ║     ║ advmod
好   ADJ   ═╝<╗ ║     ║ amod
猫   NOUN  ═══╝<╝     ║ dobj
。   PUNCT <══════════╝ punct
```

## 用[LTP](https://ltp.readthedocs.io)

```py
>>> from ltp import LTP
>>> ltp=LTP("base")
>>> def nlp(t):
...   s,r=ltp.seg(ltp.sent_split([t]))
...   return "".join(["\n".join(["\t".join([str(i),w,w,p,p,"_",str(h),d,"_","SpaceAfter=No"]) for w,p,(i,h,d) in zip(j,k,l)])+"\n\n" for j,k,l in zip(s,ltp.pos(r),ltp.dep(r))])
...
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 c  <════════╗   ATT
黑   a  <══════╗ ║   ATT
猫   n  ═══╗═╗═╝═╝<╗ SBV
白   a  <╗ ║ ║     ║ ATT
猫   n  ═╝<╝ ║     ║ COO
，   wp <════╝     ║ WP
捉   v  ═╗═╗<══╗   ║ SBV
到   v  <╝ ║   ║   ║ CMP
老鼠 n  <══╝   ║   ║ VOB
就是 d  ═══╗═╗═╝═══╝ HED
好   a  <╗ ║ ║       ATT
猫   n  ═╝<╝ ║       VOB
。   wp <════╝       WP
```

## 用[DDParser](https://github.com/baidu/DDParser)

```py
>>> from ddparser import DDParser
>>> ddp=DDParser(use_pos=True)
>>> nlp=lambda t:"".join(["\n".join(["\t".join([str(i+1),w,w,p,p,"_",str(h),d,"_","SpaceAfter=No"]) for i,(w,p,h,d) in enumerate(zip(s["word"],s["postag"],s["head"],s["deprel"]))])+"\n\n" for s in ddp.parse(t)])
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 c <══════╗   ADV
黑猫 n ═╗═╗<╗ ║   SBV
白猫 n <╝ ║ ║ ║   ATT
，   w <══╝ ║ ║   MT
捉   v ═╗═╗═╝═╝<╗ SBV
到   v <╝ ║     ║ CMP
老鼠 n <══╝     ║ VOB
就是 v ═╗═╗═════╝ HED
好猫 n <╝ ║       VOB
。   w <══╝       MT
```

## 用[pyhanlp](https://github.com/hankcs/pyhanlp)

```py
>>> import pyhanlp
>>> nlp=pyhanlp.HanLP.parseDependency
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 c  <══════════╗ 状中结构
黑猫 n  <══╗       ║ 定中关系
白猫 n  ═╗═╝<════╗ ║ 主谓关系
，   wp <╝       ║ ║ 标点符号
捉到 v  ═╗<════╗ ║ ║ 主谓关系
老鼠 n  <╝     ║ ║ ║ 动宾关系
就是 v  ═══╗═╗═╝═╝═╝ 核心关系
好   a  <╗ ║ ║       定中关系
猫   n  ═╝<╝ ║       动宾关系
。   wp <════╝       标点符号
```

