# [deplacy](https://koichiyasuoka.github.io/deplacy/) vir sintaktiese analise

## met [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <══════════╗   ║ ║   nsubj
met   ADP   <╗         ║   ║ ║   case
hom   PRON  ═╝<══════╗ ║   ║ ║   obl
praat VERB  ═══════╗═╝═╝═╗<╝ ║   dep
in    ADP   <════╗ ║     ║   ║   case
sy    PRON  <══╗ ║ ║     ║   ║   det
eie   ADJ   <╗ ║ ║ ║     ║   ║   amod
taal  NOUN  ═╝═╝═╝<╝     ║   ║   obl
,     PUNCT <════════════╝   ║   punct
gaan  VERB  ═╗═══╗═══════════╝═╗ root
dit   PRON  <╝   ║             ║ nsubj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("af")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <════════════╗ ║ ║   nsubj
met   ADP   <╗           ║ ║ ║   case
hom   PRON  ═╝<════════╗ ║ ║ ║   obl
praat VERB  ═════════╗═╝═╝<╝ ║   dep
in    ADP   <════╗   ║       ║   case
sy    PRON  <══╗ ║   ║       ║   det
eie   ADJ   <╗ ║ ║   ║       ║   amod
taal  NOUN  ═╝═╝═╝═╗<╝       ║   obl
,     PUNCT <══════╝         ║   punct
gaan  VERB  ═╗═══╗═══════════╝═╗ root
dit   PRON  <╝   ║             ║ obj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("af")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <════════════╗ ║ ║   nsubj
met   ADP   <╗           ║ ║ ║   case
hom   PRON  ═╝<════════╗ ║ ║ ║   obl
praat VERB  ═════════╗═╝═╝<╝ ║   dep
in    ADP   <════╗   ║       ║   case
sy    PRON  <══╗ ║   ║       ║   det
eie   ADJ   <╗ ║ ║   ║       ║   amod
taal  NOUN  ═╝═╝═╝═╗<╝       ║   obl
,     PUNCT <══════╝         ║   punct
gaan  AUX   ═╗═══╗═══════════╝═╗ root
dit   PRON  <╝   ║             ║ obj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("af")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════════╗<╗ amod
jy    PRON  <════════════════╗ ║ ║ nsubj
met   ADP   <════════════╗   ║ ║ ║ case
hom   PRON  <══════════╗ ║   ║ ║ ║ det
praat NOUN  ═════════╗═╝═╝<╗ ║ ║ ║ obl
in    ADP   <════╗   ║     ║ ║ ║ ║ case
sy    PRON  <══╗ ║   ║     ║ ║ ║ ║ det
eie   ADJ   <╗ ║ ║   ║     ║ ║ ║ ║ amod
taal  NOUN  ═╝═╝═╝═╗<╝     ║ ║ ║ ║ nmod
,     PUNCT <══════╝       ║ ║ ║ ║ punct
gaan  VERB  ═══════╗═══════╝═╝<╝ ║ dep
dit   PRON  ═════════════════════╝ ROOT
na    ADP   <══╗   ║               case
sy    PRON  <╗ ║   ║               det
hart  ADV   ═╝═╝═╗<╝               obl
.     PUNCT <════╝                 punct
```

