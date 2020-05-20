# [deplacy](https://koichiyasuoka.github.io/deplacy/) voor syntactische analyse

## met [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("nl_core_news_sm")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ ROOT
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("nl")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("nl")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("nl")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("nl")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

