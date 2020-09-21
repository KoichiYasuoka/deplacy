# [deplacy](https://koichiyasuoka.github.io/deplacy/) för syntaktisk analys

## med [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <══════════╗   nsubj
har       AUX   <══╗       ║   aux
förändrat VERB  ═╗═╝═════╗═╝═╗ root
dej       PRON  <╝       ║   ║ obj
och       CCONJ <══════╗ ║   ║ cc
är        VERB  ═══╗═╗═╝<╝   ║ conj
så        ADV   <╗ ║ ║       ║ advmod
långt     ADV   ═╝<╝ ║       ║ advmod
från      ADP   <╗   ║       ║ case
mej       PRON  ═╝<══╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("sv")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <══════════════╗   nsubj
har       AUX   <════════════╗ ║   aux
förändrat VERB  ═╗═════════╗═╝═╝═╗ root
dej       PRON  <╝         ║     ║ obj
och       CCONJ <════════╗ ║     ║ cc
är        AUX   <══════╗ ║ ║     ║ cop
så        ADV   <════╗ ║ ║ ║     ║ advmod
långt     ADV   ═══╗═╝═╝═╝<╝     ║ conj
från      ADP   <╗ ║             ║ case
mej       PRON  ═╝<╝             ║ obl
.         PUNCT <════════════════╝ punct
```

## med [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("sv")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <══════════════╗   nsubj
har       AUX   <════════════╗ ║   aux
förändrat VERB  ═╗═════════╗═╝═╝═╗ root
dej       PRON  <╝         ║     ║ obj
och       CCONJ <════════╗ ║     ║ cc
är        AUX   <══════╗ ║ ║     ║ cop
så        ADV   <════╗ ║ ║ ║     ║ advmod
långt     ADJ   ═══╗═╝═╝═╝<╝     ║ conj
från      ADP   <╗ ║             ║ case
mej       PRON  ═╝<╝             ║ nmod
.         PUNCT <════════════════╝ punct
```

## med [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("sv_talbanken")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <════╗         nsubj
har       AUX   <══╗ ║         aux
förändrat VERB  ═╗═╝═╝═════╗═╗ ROOT
dej       PRON  <╝         ║ ║ obj
och       CCONJ <════════╗ ║ ║ cc
är        AUX   <══════╗ ║ ║ ║ cop
så        ADV   <════╗ ║ ║ ║ ║ advmod
långt     ADV   ═══╗═╝═╝═╝<╝ ║ conj
från      ADP   <╗ ║         ║ case
mej       PRON  ═╝<╝         ║ obl
.         PUNCT <════════════╝ punct
```

## med [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("sv")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <════════════╗   nsubj
har       AUX   <══════════╗ ║   aux
förändrat VERB  ═╗═══════╗═╝═╝═╗ root
dej       PART  <╝       ║     ║ advmod
och       CCONJ <══════╗ ║     ║ cc
är        AUX   <════╗ ║ ║     ║ cop
så        ADV   <╗   ║ ║ ║     ║ advmod
långt     ADV   ═╝<╗ ║ ║ ║     ║ advmod
från      ADP   <╗ ║ ║ ║ ║     ║ case
mej       NOUN  ═╝═╝═╝═╝<╝     ║ conj
.         PUNCT <══════════════╝ punct
```

