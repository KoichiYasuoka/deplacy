# Syntax analysis by [deplacy](https://koichiyasuoka.github.io/deplacy/)

## Usage with [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <════════╗   nsubj
saw       VERB  ═══╗═╗═╗═╝═╗ ROOT
a         DET   <╗ ║ ║ ║   ║ det
horse     NOUN  ═╝<╝ ║ ║   ║ obj
yesterday NOUN  <════╝ ║   ║ obl:tmod
which     PRON  <════╗ ║   ║ nsubj
had       VERB  ═══╗═╝<╝   ║ acl:relcl
no        DET   <╗ ║       ║ det
name      NOUN  ═╝<╝       ║ obj
.         PUNCT <══════════╝ punct
```

