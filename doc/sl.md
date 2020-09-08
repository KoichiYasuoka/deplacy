# [deplacy](https://koichiyasuoka.github.io/deplacy/) za sklandenjsko analizo

## z [CLASSLA](https://github.com/clarinsi/classla-stanfordnlp)

```py
>>> import classla
>>> nlp=classla.Pipeline("sl")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> d=doc.conll_file.conll_as_string()
>>> import deplacy
>>> deplacy.render(d)
Po        ADP   <╗         case
koroškem  ADJ   ═╝<════╗   obl
po        ADP   <╗     ║   case
kranjskem ADJ   ═╝<══╗ ║   obl
že        PART  <══╗ ║ ║   advmod
ajda      NOUN  <╗ ║ ║ ║   nsubj
zori      VERB  ═╝═╝═╝═╝═╗ root
.         PUNCT <════════╝ punct
```

## z [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("sl")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <╗         case
koroškem  ADJ   ═╝<════╗   obl
po        ADP   <╗     ║   case
kranjskem ADJ   ═╝<══╗ ║   obl
že        PART  <══╗ ║ ║   advmod
ajda      X     <╗ ║ ║ ║   nsubj
zori      VERB  ═╝═╝═╝═╝═╗ root
.         PUNCT <════════╝ punct
```

## z [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("sl")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <╗         case
koroškem  ADJ   ═╝<════╗   obl
po        ADP   <╗     ║   case
kranjskem ADJ   ═╝<══╗ ║   obl
že        PART  <══╗ ║ ║   advmod
ajda      ADV   <╗ ║ ║ ║   advmod
zori      VERB  ═╝═╝═╝═╝═╗ ROOT
.         PUNCT <════════╝ punct
```

## z [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <════╗     case
koroškem  ADJ   ═══╗═╝<╗   obl
po        ADP   <╗ ║   ║   case
kranjskem ADJ   ═╝<╝   ║   conj
že        PART  <══╗   ║   advmod
ajda      PART  <╗ ║   ║   advmod
zori      VERB  ═╝═╝═══╝═╗ root
.         PUNCT <════════╝ punct
```

## z [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("sl")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <════╗       case
koroškem  ADJ   ═══╗═╝<══╗   amod
po        ADP   <══║═══╗ ║   case
kranjskem ADJ   ═╗ ║<╗ ║ ║   amod
že        PART   ║<╝ ║ ║ ║   advmod
ajda      ADJ   <╝   ║ ║ ║   conj
zori      NOUN  ═════╝═╝═╝═╗ root
.         PUNCT <══════════╝ punct
```

