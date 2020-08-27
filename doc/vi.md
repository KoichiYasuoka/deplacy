# [deplacy](https://koichiyasuoka.github.io/deplacy/) để phân tích ngữ pháp

## với [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("vi")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   NUM   <══╗       nummod
mũi   NOUN  ═╗═╝<══╗   nsubj
tên   NOUN  <╝     ║   compound
trúng VERB  ═════╗═╝═╗ root
hai   NUM   <══╗ ║   ║ nummod
con   NOUN  <╗ ║ ║   ║ compound
chim  NOUN  ═╝═╝<╝   ║ obj
.     PUNCT <════════╝ punct
```

## với [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("vi")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   NUM   <══╗       nummod
mũi   NOUN  ═╗═╝<╗     nsubj
tên   NOUN  <╝   ║     compound
trúng ADJ   ═════╝═╗<╗ cop
hai   NUM   <══╗   ║ ║ nummod
con   NOUN  ═╗═╝═════╝ root
chim  NOUN  <╝     ║   amod
.     PUNCT <══════╝   punct
```

## với [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("vi")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một       NUM   <══╗     nummod
mũi       NOUN  ═╗═╝<╗   nsubj
tên       NOUN  <╝   ║   compound
trúng hai VERB  ═══╗═╝═╗ ROOT
con       NOUN  <╗ ║   ║ compound
chim      NOUN  ═╝<╝   ║ obj
.         PUNCT <══════╝ punct
```

