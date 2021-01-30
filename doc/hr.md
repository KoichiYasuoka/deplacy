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

## s [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)-om

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=hr&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ nsubj
nije      AUX   <══╗ ║ ║ ║ ║ aux
teže      VERB  ═╗═╝═╝═╝<╝ ║ parataxis
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

## s [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)-om

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("croatian-ud27")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ root
mi        PRON  <╝ ║     ║ ║ iobj
se        PRON  <══╝     ║ ║ obj
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
Činilo    VERB  ═╗═╗═════╗═╗ ROOT
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ obj
nije      AUX   <══╗ ║ ║ ║ ║ cop
teže      ADJ   ═╗═╝═╝═╝<╝ ║ parataxis
podnijeti VERB  <╝         ║ nsubj
.         PUNCT <══════════╝ punct
```

## s [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)-om

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("hr_set")
>>> doc=nlp("Činilo mi se: ništa nije teže podnijeti.")
>>> import deplacy
>>> deplacy.render(doc)
Činilo    VERB  ═╗═╗═════╗═╗ ROOT
mi        PRON  <╝ ║     ║ ║ obj
se        PRON  <══╝     ║ ║ expl:pv
:         PUNCT <══════╗ ║ ║ punct
ništa     PRON  <════╗ ║ ║ ║ obj
nije      AUX   ═╗<╗ ║ ║ ║ ║ aux
teže      ADJ   <╝ ║ ║ ║ ║ ║ advmod
podnijeti VERB  ═══╝═╝═╝<╝ ║ xcomp
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

