# [deplacy](https://koichiyasuoka.github.io/deplacy/) za sintaktičku analizu na hrvatskom jeziku

## s [NLP-Cube](https://github.com/Adobe/NLP-Cube)-om

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("hr")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ nsubj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADV   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ xcomp
.         PUNCT <══════════╝ punct
```

## s [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-om

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <╗     ║ ║ ║ obj
nije      AUX    ║<══╗ ║ ║ ║ cop
teže      ADV   ═══╗═╝═╝<╝ ║ parataxis
podnijeti VERB  ═╝<╝       ║ xcomp
.         PUNCT <══════════╝ punct
```

## s [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-om

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("hr")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ ROOT
mi        PRON  <╝ ║     ║ ║ iobj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <════╗   ║ ║ punct
ništa     PRON  <══╗ ║   ║ ║ obj
nije      AUX   <╗ ║ ║   ║ ║ cop
teže      ADV   ═╝═╝═╝<╗ ║ ║ advmod
podnijeti VERB  ═══════╝<╝ ║ xcomp
.         PUNCT <══════════╝ punct
```

## s [Stanza](https://stanfordnlp.github.io/stanza)-om

```py
>>> import stanza
>>> nlp=stanza.Pipeline("hr")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ iobj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ nsubj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADV   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ nsubj
.         PUNCT <══════════╝ punct
```

## s [CLASSLA](https://github.com/clarinsi/classla-stanfordnlp)-om

```py
>>> import classla
>>> nlp=classla.Pipeline("hr")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl_pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ nsubj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADV   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ nsubj
.         PUNCT <══════════╝ punct
```

