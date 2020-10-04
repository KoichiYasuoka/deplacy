# [deplacy](https://koichiyasuoka.github.io/deplacy/) for syntaktisk analyse på nynorsk

## med [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("nn")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════════════╗   cc
me     PRON  <══════════╗ ║   nsubj
priser VERB  ═╗═══════╗═╝═╝═╗ root
dauden NOUN  <╝       ║     ║ obj
,      PUNCT <══════╗ ║     ║ punct
men    CCONJ <════╗ ║ ║     ║ cc
me     PRON  <══╗ ║ ║ ║     ║ nsubj
elskar VERB  ═╗═╝═╝═╝<╝     ║ conj
live   NOUN  <╝             ║ obj
.      PUNCT <══════════════╝ punct
```

## med [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("nn")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════════════╗   cc
me     PRON  <══════════╗ ║   nsubj
priser VERB  ═╗═══════╗═╝═╝═╗ root
dauden NOUN  <╝       ║     ║ obj
,      PUNCT <══════╗ ║     ║ punct
men    CCONJ <════╗ ║ ║     ║ cc
me     PRON  <══╗ ║ ║ ║     ║ nsubj
elskar VERB  ═╗═╝═╝═╝<╝     ║ conj
live   ADV   <╝             ║ advmod
.      PUNCT <══════════════╝ punct
```

## med [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("no_nynorsk")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════╗       cc
me     PRON  <══╗ ║       nsubj
priser VERB  ═╗═╝═╝═╗═╗═╗ ROOT
dauden NOUN  <╝     ║ ║ ║ obj
,      PUNCT <══════╝ ║ ║ punct
men    CCONJ <════╗   ║ ║ cc
me     PRON  <══╗ ║   ║ ║ nsubj
elskar VERB  ═╗═╝═╝<══╝ ║ conj
live   ADJ   <╝         ║ advmod
.      PUNCT <══════════╝ punct
```

## med [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_no_nynorsk/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════╗       cc
me     PRON  <══╗ ║       nsubj
priser VERB  ═╗═╝═╝═╗═╗═╗ root
dauden NOUN  <╝     ║ ║ ║ obj
,      PUNCT <══════╝ ║ ║ punct
men    CCONJ <════╗   ║ ║ cc
me     PRON  <══╗ ║   ║ ║ nsubj
elskar VERB  ═╗═╝═╝<══╝ ║ conj
live   NOUN  <╝         ║ obj
.      PUNCT <══════════╝ punct
```

