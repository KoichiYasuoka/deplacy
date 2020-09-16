# Analisi sintaktikoa [deplacy](https://koichiyasuoka.github.io/deplacy/)-ren bidez

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-rekin

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  ═╗═════╗═╗═╗ ROOT
izatea    AUX   <╝     ║ ║ ║ cop
lan       NOUN  <══╗   ║ ║ ║ nmod
extra     NOUN  ═╗═╝<╗ ║ ║ ║ nsubj
bat       NUM   <╝   ║ ║ ║ ║ nummod
izatea    VERB  ═════╝<╝ ║ ║ xcomp
da        AUX   <════════╝ ║ cop
.         PUNCT <══════════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)-rekin

```py
>>> import stanza
>>> nlp=stanza.Pipeline("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  ═╗<════╗   nsubj
izatea    AUX   <╝     ║   cop
lan       NOUN  ═╗═╗<╗ ║   obj
extra     NOUN  <╝ ║ ║ ║   nmod
bat       NUM   <══╝ ║ ║   nummod
izatea    VERB  ═╗═══╝═╝═╗ root
da        AUX   <╝       ║ cop
.         PUNCT <════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-rekin

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun ADJ   ═╗<══════╗   xcomp
izatea    AUX   <╝       ║   cop
lan       NOUN  ═╗═╗═╗<╗ ║   xcomp
extra     ADJ   <╝ ║ ║ ║ ║   amod
bat       NUM   <══╝ ║ ║ ║   nummod
izatea    AUX   ═══════╝═╝═╗ root
da        AUX   <════╝     ║ cop
.         PUNCT <══════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)-rekin

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  <════════╗   nsubj
izatea    AUX   <══════╗ ║   nsubj
lan       NOUN  ═╗═╗<╗ ║ ║   obj
extra     NOUN  <╝ ║ ║ ║ ║   amod
bat       NUM   <══╝ ║ ║ ║   nummod
izatea    AUX   ═╗═══╝═╝═╝═╗ root
da        AUX   <╝         ║ cop
.         PUNCT <══════════╝ punct
```

