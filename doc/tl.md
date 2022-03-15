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

