# [deplacy](https://koichiyasuoka.github.io/deplacy/) a szintaktikai elemzéshez

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-vel

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("hu")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══╗       obj
ma         ADV   <╗ ║       advmod
megtehetsz VERB  ═╝═╝═╗<╗   advcl
,          PUNCT <════╝ ║   punct
ne         CCONJ <══╗   ║   mark
halaszd    VERB  ═╗═╝═══╝═╗ root
holnapra   ADV   <╝       ║ advmod:mode
.          PUNCT <════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)-vel

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("hu")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══╗       obj
ma         ADV   <╗ ║       advmod:tlocy
megtehetsz VERB  ═╝═╝<╗     advcl
,          PUNCT <════║═╗   punct
ne         VERB  <══╗ ║ ║   advmod
halaszd    NUM   ═╗═╝═╝═╝═╗ root
holnapra   NOUN  <╝       ║ nmod:obl
.          PUNCT <════════╝ punct
```

## [hu_core_ud_lg](https://github.com/oroszgy/spacy-hungarian-models)-vel

```py
>>> import spacy
>>> nlp=spacy.load("hu_core_ud_lg")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <════════╗     obj
ma         ADV   <══════╗ ║     advmod
megtehetsz VERB  ═════╗═╝═╝═╗═╗ ROOT
,          PUNCT <════║═════╝ ║ punct
ne         ADV   <══╗ ║       ║ mark
halaszd    VERB  ═╗═╝<╝       ║ ccomp
holnapra   ADV   <╝           ║ nmod
.          PUNCT <════════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-vel

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("hu")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══════════╗   obj
ma         ADV   <════════╗ ║   advmod:tlocy
megtehetsz VERB  ═══════╗═╝═╝═╗ ROOT
,          PUNCT <════╗ ║     ║ punct
ne         VERB  ═══╗═╝<╝     ║ conj
halaszd    VERB  ═╗<╝         ║ xcomp
holnapra   NOUN  <╝           ║ nmod:obl
.          PUNCT <════════════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)-val

```py
>>> import stanza
>>> nlp=stanza.Pipeline("hu")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══════════╗   obj
ma         ADV   <════════╗ ║   advmod:tlocy
megtehetsz VERB  ═══════╗═╝═╝═╗ root
,          PUNCT <════╗ ║     ║ punct
ne         VERB  ═══╗═╝<╝     ║ conj
halaszd    VERB  ═╗<╝         ║ conj
holnapra   NOUN  <╝           ║ nmod:obl
.          PUNCT <════════════╝ punct
```

