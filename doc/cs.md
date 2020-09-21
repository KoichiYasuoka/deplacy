# [deplacy](https://koichiyasuoka.github.io/deplacy/) pro syntaktickou analýzu

## s [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═╗═╝═╗ root
jsme    AUX   <╝ ║ ║   ║ aux
se      PRON  <══╝ ║   ║ expl:pv
dušemi  NOUN  <════╝   ║ obj
.       PUNCT <════════╝ punct
```

## s [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("cs")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ ROOT
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("cs")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl:arg
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ ROOT
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("cs")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl:arg
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ root
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("cs_pdt")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ ROOT
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

