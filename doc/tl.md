# [deplacy](https://koichiyasuoka.github.io/deplacy/) para sintaktik pagtatasa

## sa [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Ang lakas ay daig ng paraan.")
>>> import deplacy
>>> deplacy.render(doc)
Ang    CCONJ <╗         mark
lakas  ADJ   ═╝<════╗   nsubj
ay     AUX   <════╗ ║   cop
daig   NOUN  ═══╗═╝═╝═╗ root
ng     ADP   <╗ ║     ║ case
paraan NOUN  ═╝<╝     ║ nmod
.      PUNCT <════════╝ punct
```

## sa [ud-tagalog-spacy](https://github.com/ljvmiranda921/ud-tagalog-spacy)

```py
>>> import spacy
>>> nlp=spacy.load("tl_ud_tl_ugnayan")
>>> doc=nlp("Ang lakas ay daig ng paraan.")
>>> import deplacy
>>> deplacy.render(doc)
Ang    ADP   <══╗     case
lakas  NOUN  ═╗═╝<╗   dep
ay     PART  <╝   ║   dep
daig   VERB  ═══╗═╝═╗ ROOT
ng     ADP   <╗ ║   ║ case
paraan NOUN  ═╝<╝   ║ obl
.      PUNCT <══════╝ punct
```

