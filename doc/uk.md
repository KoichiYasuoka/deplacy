# [deplacy](https://koichiyasuoka.github.io/deplacy/) для синтаксичного аналізу

## з [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("uk")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ root
алеї     NOUN  ═════════╗<╝ ║ nsubj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ root
алеї     NOUN  ═════════╗<╝ ║ nsubj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("uk")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ root
алеї     NOUN  ═════════╗<╝ ║ obj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("uk")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ ROOT
алеї     PRON  ═════════╗<╝ ║ obj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

