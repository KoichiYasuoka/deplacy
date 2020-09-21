# Syntaxanalyse durch [Deplacy](https://koichiyasuoka.github.io/deplacy/)

## mit [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ xcomp
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("de")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ xcomp
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("de")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ advmod
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("de")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ advmod
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [SpaCy-COMBO](https://github.com/KoichiYasuoka/SpaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("de_gsd")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ advmod
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Spacy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("de_core_news_sm")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   sb
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ mo
jung  ADJ   ═╝ ║<╝   ║ oa
aus   ADP   <══╝     ║ svp
.     PUNCT <════════╝ punct
```

