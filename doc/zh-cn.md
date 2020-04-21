# [deplacy](https://koichiyasuoka.github.io/deplacy/)句法分析

## 用[Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("zh-hans")
>>> doc=nlp("不管黑猫白猫，捉到老鼠就是好猫。")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
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

