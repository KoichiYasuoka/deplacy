# [deplacy](https://koichiyasuoka.github.io/deplacy/) za sintaktičku analizu na hrvatskom jeziku

## s [NLP-Cube](https://github.com/Adobe/NLP-Cube)-om

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("hr")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ nsubj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADV   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ xcomp
.         PUNCT <══════════╝ punct
```

## s [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)-om

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_hr_set/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ nsubj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADV   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ xcomp
.         PUNCT <══════════╝ punct
```

## s [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-om

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <╗     ║ ║ ║ obj
nije      AUX    ║<══╗ ║ ║ ║ cop
teže      ADV   ═══╗═╝═╝<╝ ║ parataxis
podnijeti VERB  ═╝<╝       ║ xcomp
.         PUNCT <══════════╝ punct
```

## s [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-om

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("hr")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ ROOT
mi        PRON  <╝ ║     ║ ║ iobj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <════╗   ║ ║ punct
ništa     PRON  <══╗ ║   ║ ║ obj
nije      AUX   <╗ ║ ║   ║ ║ cop
teže      ADV   ═╝═╝═╝<╗ ║ ║ advmod
podnijeti VERB  ═══════╝<╝ ║ xcomp
.         PUNCT <══════════╝ punct
```

## s [Stanza](https://stanfordnlp.github.io/stanza)-om

```py
>>> import stanza
>>> nlp=stanza.Pipeline("hr")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ iobj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ nsubj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADV   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ nsubj
.         PUNCT <══════════╝ punct
```

## s [CLASSLA](https://github.com/clarinsi/classla-stanfordnlp)-om

```py
>>> import classla
>>> nlp=classla.Pipeline("hr")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl_pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ nsubj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADV   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ nsubj
.         PUNCT <══════════╝ punct
```

## s [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)-om

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("hr_set")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ parataxis
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ obj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADJ   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ nsubj
.         PUNCT <══════════╝ punct
```

