# [deplacy](https://koichiyasuoka.github.io/deplacy/)句法分析

## 和[Stanza](https://stanfordnlp.github.io/stanza)

```pt
>>> import stanza
>>> nlp=stanza.Pipeline("zh-hant")
>>> doc=nlp("夫革命之有破壞，與革命之有建設，固相因而至，相輔而行者也。")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
夫   PROPN <══╗             nmod
革命 NOUN  ═╗═╝<╗           nsubj
之   PART  <╝   ║           case:dec
有   VERB  ═╗═══╝═╗═╗═╗═╗═╗ root
破壞 NOUN  <╝     ║ ║ ║ ║ ║ obj
，   PUNCT <══════╝ ║ ║ ║ ║ punct
與   ADP   <════╗   ║ ║ ║ ║ case
革命 NOUN  ═╗<╗ ║   ║ ║ ║ ║ obl
之   PART  <╝ ║ ║   ║ ║ ║ ║ case:dec
有   VERB  ═╗═╝═╝<══╝ ║ ║ ║ parataxis
建設 VERB  <╝         ║ ║ ║ xcomp
，   PUNCT <══════╗   ║ ║ ║ punct
固   VERB  <════╗ ║   ║ ║ ║ advcl
相因 VERB  <══╗ ║ ║   ║ ║ ║ xcomp
而   ADV   <╗ ║ ║ ║   ║ ║ ║ mark
至   VERB  ═╝═╝═╝═╝<╗ ║ ║ ║ advcl
，   PUNCT <════════║═╝ ║ ║ punct
相輔 ADJ   <════╗   ║   ║ ║ advmod
而   ADV   <══╗ ║   ║   ║ ║ mark
行者 VERB  ═╗═╝═╝═══╝<══╝ ║ parataxis
也   ADJ   <╝             ║ xcomp
。   PUNCT <══════════════╝ punct
```

## 和[spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```pt
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("zh")
>>> doc=nlp("夫革命之有破壞，與革命之有建設，固相因而至，相輔而行者也。")
>>> import deplacy
>>> deplacy.render(doc)
夫   PROPN <══╗                 nmod
革命 NOUN  ═╗═╝<╗               nmod
之   PART  <╝   ║               case:dec
有   VERB  ═╗═══╝<══╗           advcl
破壞 NOUN  <╝       ║           obj
，   PUNCT <══════╗ ║           punct
與   ADP   <══╗   ║ ║           case
革命 NOUN  ═╗═╝<╗ ║ ║           obl
之   PRON  <╝   ║ ║ ║           appos
有   VERB  ═╗═══╝═╝═╝═╗═╗═╗═╗═╗ ROOT
建設 NOUN  <╝         ║ ║ ║ ║ ║ obj
，   PUNCT <══════════╝ ║ ║ ║ ║ punct
固   PROPN <════╗       ║ ║ ║ ║ nsubj
相   ADV   <══╗ ║       ║ ║ ║ ║ advmod
因而 ADV   <╗ ║ ║       ║ ║ ║ ║ mark
至   VERB  ═╝═╝═╝<══════╝ ║ ║ ║ parataxis
，   PUNCT <══════════════╝ ║ ║ punct
相輔 PROPN <════╗           ║ ║ obj
而   ADV   <══╗ ║           ║ ║ mark
行者 NOUN  <╗ ║ ║           ║ ║ nsubj
也   ADV   ═╝═╝═╝<══════════╝ ║ parataxis
。   PUNCT <══════════════════╝ punct
```

## 和[NLP-Cube](https://github.com/Adobe/NLP-Cube)

```pt
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("zh")
>>> doc=nlp("夫革命之有破壞，與革命之有建設，固相因而至，相輔而行者也。".replace("，",",").replace("。","."))
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
夫   NOUN  <══╗               nmod
革命 NOUN  ═╗═╝<╗             det
之   PART  <╝   ║             case:dec
有   VERB  ═════╝<╗           cop
破壞 NOUN  ═══════╝<══════╗   dep
,    PUNCT <════════════╗ ║   punct
與   ADP   <════╗       ║ ║   case
革命 NOUN  ═╗<╗ ║       ║ ║   det
之   PART  <╝ ║ ║       ║ ║   case:dec
有   VERB  ═╗═╝═╝<════╗ ║ ║   dep
建設 NOUN  <╝         ║ ║ ║   obj
,    PUNCT <════════╗ ║ ║ ║   punct
固相 NOUN  <══╗     ║ ║ ║ ║   advmod
因而 ADV   <╗ ║     ║ ║ ║ ║   mark
至   VERB  ═╝═╝<╗   ║ ║ ║ ║   acl
,    PUNCT <╗   ║   ║ ║ ║ ║   punct
相輔 VERB  ═╝═══╝<╗ ║ ║ ║ ║   dep
而   ADV   <══╗   ║ ║ ║ ║ ║   mark
行者 NOUN  <╗ ║   ║ ║ ║ ║ ║   nsubj
也   ADJ   ═╝═╝═══╝═╝═╝═╝═╝═╗ root
.    PUNCT <════════════════╝ punct
```

