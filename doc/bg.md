# [deplacy](https://koichiyasuoka.github.io/deplacy/) за синтактичен анализ

## с [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <╗       amod
мечка  NOUN  ═╝<══╗   nsubj
хоро   NOUN  <══╗ ║   nsubj
не     PART  <╗ ║ ║   advmod
играе  VERB  ═╝═╝═╝═╗ root
.      PUNCT <══════╝ punct
```

## с [CLASSLA](https://github.com/clarinsi/classla-stanfordnlp)

```py
>>> import classla
>>> nlp=classla.Pipeline("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна DET   <══╗     det
мечка  ADJ   <╗ ║     amod
хоро   NOUN  ═╝═╝<╗   nsubj
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ ROOT
.      PUNCT <══════╝ punct
```

