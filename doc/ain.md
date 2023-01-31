# [deplacy](https://koichiyasuoka.github.io/deplacy/) アニ イタㇰ エウトムㇱ ヒ アフイマㇺパ

## [esupar](https://github.com/KoichiYasuoka/esupar) アエイワンケ

```py
>>> import esupar
>>> nlp=esupar.load("ain")
>>> doc=nlp("アイヌイタㇰ アニ エネ アカㇻ ヒ エチヌカレ")
>>> import deplacy
>>> deplacy.render(doc)
アイヌ NOUN  <══╗       det
イタㇰ NOUN  ═╗═╝<╗     obj
アニ   SCONJ <╝   ║     case
エネ   ADV   <══╗ ║     advmod
ア     PART  <╗ ║ ║     nsubj
カㇻ   VERB  ═╝═╝═╝<╗   acl
ヒ     NOUN  ═══════╝<╗ obj
エチ   PART  <╗       ║ nsubj
ヌカレ VERB  ═╝═══════╝ root
```
