# [deplacy](https://koichiyasuoka.github.io/deplacy/) pro syntaktickou analýzu

## s [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═╗═╝═╗ root
jsme    AUX   <╝ ║ ║   ║ aux
se      PRON  <══╝ ║   ║ expl:pv
dušemi  NOUN  <════╝   ║ obj
.       PUNCT <════════╝ punct
```

## s [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("cs_pdt")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl:arg
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═╗═╝═╗ ROOT
jsme    AUX   <╝ ║ ║   ║ aux
se      PRON  <══╝ ║   ║ expl:pv
dušemi  NOUN  <════╝   ║ obj
.       PUNCT <════════╝ punct
```

## s [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=cs&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═╗═╝═╗ root
jsme    AUX   <╝ ║ ║   ║ aux
se      PRON  <══╝ ║   ║ expl:pv
dušemi  NOUN  <════╝   ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("cs")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ ROOT
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("cs")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl:arg
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ ROOT
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("cs")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl:arg
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ root
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("czech-ud27")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl:arg
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ root
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("cs_pdt")
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ ROOT
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obl:arg
.       PUNCT <════════╝ punct
```

## s [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_cs_pdt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Z hrůzy a bolesti stali jsme se dušemi.")
>>> import deplacy
>>> deplacy.render(doc)
Z       ADP   <════╗     case
hrůzy   NOUN  ═══╗═╝<╗   obl:arg
a       CCONJ <╗ ║   ║   cc
bolesti NOUN  ═╝<╝   ║   conj
stali   VERB  ═╗═╗═══╝═╗ root
jsme    AUX   <╝ ║     ║ aux
se      ADP   <╗ ║     ║ case
dušemi  NOUN  ═╝<╝     ║ obj
.       PUNCT <════════╝ punct
```

