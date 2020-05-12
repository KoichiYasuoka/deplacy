# [deplacy](https://koichiyasuoka.github.io/deplacy/) for syntaktisk analyse på bokmål

## med [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("nb")
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      PART  <╗             advmod
tusen     NUM   ═╝<╗           nummod
ord       NOUN  ═══╝<══════╗   nsubj
seg       PRON  <════════╗ ║   obj
prenter   VERB  ═══════╗═╝═╝═╗ root
som       SCONJ <════╗ ║     ║ mark
én        NUM   <╗   ║ ║     ║ nummod
gjernings NOUN  ═╝<╗ ║ ║     ║ nmod
spor      NOUN  ═══╝═╝<╝     ║ xcomp
.         PUNCT <════════════╝ punct
```

## med [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("nb_core_news_sm")
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      ADV   <╗             neg
tusen     NUM   ═╝<════════╗   det
ord       NOUN  ═╗═══════╗═╝═╗ ROOT
seg       PRON  <╝       ║   ║ nmod
prenter   NOUN  ═══════╗<╝   ║ appos
som       ADP   <════╗ ║     ║ case
én        NUM   <╗   ║ ║     ║ nummod
gjernings VERB  ═╝<╗ ║ ║     ║ det
spor      NOUN  ═══╝═╝<╝     ║ nmod
.         PUNCT <════════════╝ punct
```

