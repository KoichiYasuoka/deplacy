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

## 用[Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("zh")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 ADP   <══╗             case
黑猫 NOUN  <╗ ║             nmod
白猫 NOUN  ═╝═╝═╗<╗         obl
，   PUNCT <════╝ ║         punct
捉   VERB  ═══════╝═╗═╗<╗   acl
到   VERB  <════════╝ ║ ║   mark
老鼠 NOUN  <══════════╝ ║   obj
就是 AUX   <══╗         ║   cop
好   ADJ   <╗ ║         ║   amod
猫   NOUN  ═╝═╝═════════╝═╗ root
。   PUNCT <══════════════╝ punct
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
不管 ADP   <════╗           case
黑   NOUN  <╗   ║           compound
猫   NOUN  ═╝<╗ ║           nmod
白   NOUN  <╗ ║ ║           compound
猫   NOUN  ═╝═╝═╝<╗         obl
，   PUNCT <══════║═╗       punct
捉   VERB  ═══════╝═╝═╗<╗   csubj
到   VERB  <══════════╝ ║   mark
老   NOUN  <╗           ║   compound
鼠   NOUN  ═╝<╗         ║   nsubj
就是 VERB  ═══╝<╗       ║   cop
好   VERB  <╗   ║       ║   amod
猫   NOUN  ═╝═══╝═══════╝═╗ root
。   PUNCT <══════════════╝ punct
```

## 用[spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("zh_core_web_sm")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> import deplacy
>>> deplacy.render(doc)
不管 SCONJ <══╗       advmod
黑猫 PROPN <╗ ║       compound:nn
白猫 NOUN  ═╝═╝═╗<╗   dep
，   PUNCT <════╝ ║   punct
捉到 VERB  ═╗<══╗ ║   dep
老鼠 NOUN  <╝   ║ ║   dobj
就是 ADV   <╗   ║ ║   advmod
好   ADJ   ═╝<╗ ║ ║   amod
猫   NOUN  ═══╝═╝═╝═╗ ROOT
。   PUNCT <════════╝ punct
```

