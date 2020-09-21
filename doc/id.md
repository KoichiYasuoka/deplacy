# [deplacy](https://koichiyasuoka.github.io/deplacy/) untuk analisis sintaksis

## dengan [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("id")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   ADP   <╗ ║     case
langit NOUN  ═╝═╝<╗   obl
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("id")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   NOUN  ═╗═╝<╗   obl
langit NOUN  <╝   ║   nmod
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("id")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   NOUN  ═╗═╝<╗   obl
langit NOUN  <╝   ║   nmod
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   ADP   ═╗═╝<╗   obl
langit NOUN  <╝   ║   nmod
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("id_gsd")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <╗         case
atas   NOUN  ═╝<════╗   obl
langit NOUN  <════╗ ║   nmod
masih  ADV   <══╗ ║ ║   advmod
ada    VERB  ═╗═╝═╝═╝═╗ ROOT
langit NOUN  <╝       ║ obj
.      PUNCT <════════╝ punct
```

