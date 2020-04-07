# [deplacy](https://koichiyasuoka.github.io/deplacy/)句法分析

## 和[Stanza](https://stanfordnlp.github.io/stanza)

```pt
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

