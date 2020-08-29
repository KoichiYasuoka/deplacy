# [deplacy](https://koichiyasuoka.github.io/deplacy/) для синтаксического анализа

## с [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <════════════╗   nsubj
слезам NOUN  <══════════╗ ║   iobj
не     PART  <════════╗ ║ ║   advmod
верила VERB  ═══════╗═╝═╝═╝═╗ root
,      PUNCT <════╗ ║       ║ punct
а      CCONJ <══╗ ║ ║       ║ cc
верила VERB  ═╗═╝═╝<╝       ║ conj
любви  NOUN  <╝             ║ iobj
.      PUNCT <══════════════╝ punct
```

## с [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ iobj
.      PUNCT <════════════╝ punct
```

## с [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва NOUN  <══════════════╗ nsubj
слезам NOUN  <════════════╗ ║ iobj
не     PART  <══════════╗ ║ ║ advmod
верила VERB  ═════════╗═╝═╝═╝ root
,      PUNCT <════╗   ║       punct
а      CCONJ <══╗ ║   ║       cc
верила VERB  ═╗═╝═╝═╗<╝       conj
любви  NOUN  <╝     ║         obj
.      PUNCT <══════╝         punct
```

## с [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <════════════╗   nsubj
слезам NOUN  <══════════╗ ║   iobj
не     PART  <════════╗ ║ ║   advmod
верила VERB  ═══════╗═╝═╝═╝═╗ root
,      PUNCT <════╗ ║       ║ punct
а      CCONJ <══╗ ║ ║       ║ cc
верила NOUN  ═╗═╝═╝<╝       ║ conj
любви  NOUN  <╝             ║ nmod
.      PUNCT <══════════════╝ punct
```

