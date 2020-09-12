# [deplacy](https://koichiyasuoka.github.io/deplacy/) para análisis sintáctico

## con [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("es_core_news_sm")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ ROOT
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("es")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("es")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("es")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from spacy.lang.es import Spanish
>>> nlp=Spanish()
>>> import spacy
>>> nlp.pipeline.extend(spacy.load("en_udify").pipeline)
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

