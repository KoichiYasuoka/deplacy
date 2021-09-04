# Mállærugreining við [deplacy](https://koichiyasuoka.github.io/deplacy/)

## av [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("fo")
>>> doc=nlp("Ofta taka trøll góða manna børn.")
>>> import deplacy
>>> deplacy.render(doc)
Ofta  ADV   <════════╗ advmod
taka  VERB  ═╗═════╗═╝ root
trøll PRON  <╝     ║   nsubj
góða  ADJ   <══╗   ║   amod
manna NOUN  <╗ ║   ║   nmod:poss
børn  NOUN  ═╝═╝═╗<╝   obj
.     PUNCT <════╝     punct
```

