# [deplacy](https://koichiyasuoka.github.io/deplacy/)句法分析

## 用[Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("traditional-chinese")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <════════╗         nsubj
是   VERB  ═══════╗═╝═╗═══╗═╗ root
附麗 VERB  ═╗═╗═╗<╝   ║   ║ ║ xcomp
於   VERB  <╝ ║ ║     ║   ║ ║ mark
存在 VERB  <══╝ ║     ║   ║ ║ obj
的   PART  <════╝     ║   ║ ║ discourse
，   PUNCT <══════════╝   ║ ║ punct
有   VERB  ═╗<══╗         ║ ║ advcl
存在 VERB  <╝   ║         ║ ║ xcomp
，   PUNCT <════║═╗       ║ ║ punct
便   ADV   <══╗ ║ ║       ║ ║ mark
有   VERB  ═╗═╝═╝═╝<╗     ║ ║ acl
希望 NOUN  <╝       ║     ║ ║ obj
，   PUNCT <════════║═══╗ ║ ║ punct
有   VERB  ═╗<╗     ║   ║ ║ ║ csubj
希望 NOUN  <╝ ║     ║   ║ ║ ║ obj
，   PUNCT <══║═════║═╗ ║ ║ ║ punct
便是 AUX   <╗ ║     ║ ║ ║ ║ ║ cop
光明 NOUN  ═╝═╝═════╝═╝═╝<╝ ║ parataxis
。   PUNCT <════════════════╝ punct
```

## 用[Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("zh-hant")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <════════╗           nsubj
是   VERB  ═══════╗═╝═══════╗<╗ acl
附麗 VERB  ═╗═╗═╗<╝         ║ ║ xcomp
於   VERB  <╝ ║ ║           ║ ║ mark
存在 VERB  <══╝ ║           ║ ║ obj
的   PART  <════╝           ║ ║ discourse
，   PUNCT <════════╗       ║ ║ punct
有   VERB  ═╗<══╗   ║       ║ ║ advcl
存在 VERB  <╝   ║   ║       ║ ║ xcomp
，   PUNCT <════║═╗ ║       ║ ║ punct
便   ADV   <══╗ ║ ║ ║       ║ ║ mark
有   VERB  ═╗═╝═╝═╝═╝<╗     ║ ║ csubj
希望 NOUN  <╝         ║     ║ ║ obj
，   PUNCT <══════════║═══╗ ║ ║ punct
有   VERB  ═╗<╗       ║   ║ ║ ║ acl
希望 NOUN  <╝ ║       ║   ║ ║ ║ obj
，   PUNCT <══║═══════║═╗ ║ ║ ║ punct
便是 AUX   <╗ ║       ║ ║ ║ ║ ║ cop
光明 NOUN  ═╝═╝═══════╝═╝═╝═══╝ root
。   PUNCT <════════════════╝   punct
```

## 用[UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=zh_gsd&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  ═════════╗═╗═╗═╗═╗ root
是   VERB  ═════╗═╗<╝ ║ ║ ║ ║ dislocated
附麗 VERB  ═╗═╗<╝ ║   ║ ║ ║ ║ xcomp
於   VERB  <╝ ║   ║   ║ ║ ║ ║ mark
存在 VERB  <══╝   ║   ║ ║ ║ ║ obj
的   PART  <══════╝   ║ ║ ║ ║ discourse
，   PUNCT <════════╗ ║ ║ ║ ║ punct
有   VERB  ═╗<══╗   ║ ║ ║ ║ ║ advcl
存在 NOUN  <╝   ║   ║ ║ ║ ║ ║ obj
，   PUNCT <════║═╗ ║ ║ ║ ║ ║ punct
便   ADV   <══╗ ║ ║ ║ ║ ║ ║ ║ mark
有   VERB  ═╗═╝═╝═╝═╝<╝ ║ ║ ║ dislocated
希望 NOUN  <╝           ║ ║ ║ obj
，   PUNCT <════════════╝ ║ ║ punct
有   VERB  ═╗<╗           ║ ║ csubj
希望 NOUN  <╝ ║           ║ ║ obj
，   PUNCT <══║═╗         ║ ║ punct
便是 AUX   <╗ ║ ║         ║ ║ cop
光明 NOUN  ═╝═╝═╝<════════╝ ║ parataxis
。   PUNCT <════════════════╝ punct
```

## 用[esupar](https://github.com/KoichiYasuoka/esupar)

```
>>> import esupar
>>> nlp=esupar.load("zh")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <══════════╗           nsubj
是   VERB  ═════╗═╗<╗ ║           acl
附麗 VERB  ═╗═╗<╝ ║ ║ ║           xcomp
於   VERB  <╝ ║   ║ ║ ║           mark
存在 VERB  <══╝   ║ ║ ║           obj
的   PART  <══════╝ ║ ║           discourse
，   PUNCT          ║ ║<══════╗   punct
有   VERB  ═╗<════╗ ║ ║       ║   acl
存在 VERB  <╝     ║ ║ ║       ║   xcomp
，   PUNCT        ║ ║ ║<════╗ ║   punct
便   ADV   <══╗   ║ ║ ║     ║ ║   mark
有   VERB  ═╗═╝<╗ ║ ║ ║     ║ ║   acl
希望 NOUN  <╝   ║ ║ ║ ║     ║ ║   obj
，   PUNCT      ║ ║ ║ ║<══╗ ║ ║   punct
有   VERB  ═╗<╗ ║ ║ ║ ║   ║ ║ ║   csubj
希望 NOUN  <╝ ║ ║ ║ ║ ║   ║ ║ ║   obj
，   PUNCT    ║ ║ ║ ║ ║<╗ ║ ║ ║   punct
便是 AUX   <╗ ║ ║ ║ ║ ║ ║ ║ ║ ║   cop
光明 ADJ   ═╝═╝═╝═╝═╝═╝═╝═╝═╝═╝═╗ root
。   PUNCT <════════════════════╝ punct
```

## 用[NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("zh")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <════════════╗           nsubj
是   VERB  ═══════╗<══╗ ║           acl
附麗 VERB  ═╗═╗═╗<╝   ║ ║           xcomp
於   VERB  <╝ ║ ║     ║ ║           mark
存在 VERB  <══╝ ║     ║ ║           xcomp
的   PART  <════╝     ║ ║           discourse
，   PUNCT            ║ ║<══════╗   punct
有   VERB  ═╗<══════╗ ║ ║       ║   acl
存在 VERB  <╝       ║ ║ ║       ║   xcomp
，   PUNCT          ║ ║ ║<════╗ ║   punct
便   ADV   <══╗     ║ ║ ║     ║ ║   mark
有   VERB  ═╗═╝<══╗ ║ ║ ║     ║ ║   acl
希望 NOUN  <╝     ║ ║ ║ ║     ║ ║   obj
，   PUNCT        ║ ║ ║ ║<══╗ ║ ║   punct
有   VERB  ═╗<══╗ ║ ║ ║ ║   ║ ║ ║   acl
希望 NOUN  <╝   ║ ║ ║ ║ ║   ║ ║ ║   obj
，   PUNCT      ║ ║ ║ ║ ║<╗ ║ ║ ║   punct
便   ADV   <══╗ ║ ║ ║ ║ ║ ║ ║ ║ ║   mark
是   AUX   <╗ ║ ║ ║ ║ ║ ║ ║ ║ ║ ║   cop
光明 NOUN  ═╝═╝═╝═╝═╝═╝═╝═╝═╝═╝═╝═╗ root
。   PUNCT <══════════════════════╝ punct
```

## 用[spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("zh")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <══════════════════╗   nsubj
是   AUX   <════════════════╗ ║   cop
附麗 PROPN <══════════════╗ ║ ║   nsubj
於   ADP   <╗             ║ ║ ║   case
存在 VERB  ═╝═╗<╗         ║ ║ ║   xcomp
的   PART  <══╝ ║         ║ ║ ║   mark:relcl
，   PUNCT <╗   ║         ║ ║ ║   punct
有   VERB  ═╝═══╝<══════╗ ║ ║ ║   advcl
存在 VERB  ═╗<════════╗ ║ ║ ║ ║   advcl
，   PUNCT <╝         ║ ║ ║ ║ ║   punct
便   ADV   <══╗       ║ ║ ║ ║ ║   mark
有   VERB  ═╗═╝<════╗ ║ ║ ║ ║ ║   advcl
希望 VERB  <╝       ║ ║ ║ ║ ║ ║   obj
，   PUNCT <══════╗ ║ ║ ║ ║ ║ ║   punct
有   VERB  ═╗<══╗ ║ ║ ║ ║ ║ ║ ║   advcl
希望 VERB  <╝   ║ ║ ║ ║ ║ ║ ║ ║   obj
，   PUNCT <══╗ ║ ║ ║ ║ ║ ║ ║ ║   punct
便是 AUX   <╗ ║ ║ ║ ║ ║ ║ ║ ║ ║   cop
光明 ADJ   ═╝═╝═╝═╝═╝═╝═╝═╝═╝═╝═╗ ROOT
。   PUNCT <════════════════════╝ punct
```

## 用[UD-Chinese](https://pypi.org/project/udchinese)

```py
>>> import udchinese
>>> nlp=udchinese.load()
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <══════════╗             nsubj
是   AUX   ═════╗═╗<╗ ║             advcl
附麗 VERB  ═╗═╗<╝ ║ ║ ║             xcomp
於   ADP   <╝ ║   ║ ║ ║             flat:vv
存   VERB  ═╗<╝   ║ ║ ║             obj
在   VERB  <╝     ║ ║ ║             flat:vv
的   PART  <══════╝ ║ ║             discourse
，   PUNCT          ║ ║<╗           punct
有   VERB  ═══╗═════╝═╝═╝<╗         advcl
存   VERB  ═╗<╝           ║         obj
在   VERB  <╝             ║         flat:vv
，   PUNCT <══════════════║═╗       punct
便   ADV   <══╗           ║ ║       mark
有   VERB  ═╗═╝═══════════╝═╝═╗═╗═╗ root
希望 NOUN  <╝                 ║ ║ ║ obj
，   PUNCT <══════════════════╝ ║ ║ punct
有   VERB  ═╗═══╗<══════════════╝ ║ parataxis
希望 NOUN  <╝   ║                 ║ obj
，   PUNCT <══╗ ║                 ║ punct
便是 AUX   <╗ ║ ║                 ║ cop
光明 ADJ   ═╝═╝<╝                 ║ ccomp
。   PUNCT <══════════════════════╝ punct
```

## 用[spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("zh_core_web_trf")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <══════╗             nsubj
是   VERB  <════╗ ║             cop
附麗 VERB  ═══╗═╝═╝═╗<╗         dep
於   ADP   <╗ ║     ║ ║         case
存在 NOUN  ═╝<╝     ║ ║         nmod:prep
的   PART  <════════╝ ║         mark
，   PUNCT <══════════║═══╗     punct
有   VERB  ═╗<══╗     ║   ║     dep
存在 NOUN  <╝   ║     ║   ║     dobj
，   PUNCT <════║═════║═╗ ║     punct
便   ADV   <══╗ ║     ║ ║ ║     advmod
有   VERB  ═╗═╝═╝═══╗═╝═╝═╝═╗═╗ ROOT
希望 NOUN  <╝       ║       ║ ║ dobj
，   PUNCT <════════║═══════╝ ║ punct
有   VERB  ═╗<══╗   ║         ║ dep
希望 NOUN  <╝   ║   ║         ║ dobj
，   PUNCT <════║═╗ ║         ║ punct
便   ADV   <══╗ ║ ║ ║         ║ advmod
是   VERB  <╗ ║ ║ ║ ║         ║ cop
光明 VERB  ═╝═╝═╝═╝<╝         ║ conj
。   PUNCT <══════════════════╝ punct
```

