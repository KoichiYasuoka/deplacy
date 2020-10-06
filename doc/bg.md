# [deplacy](https://koichiyasuoka.github.io/deplacy/) за синтактичен анализ

## с [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <╗       amod
мечка  NOUN  ═╝<══╗   nsubj
хоро   NOUN  <══╗ ║   nsubj
не     PART  <╗ ║ ║   advmod
играе  VERB  ═╝═╝═╝═╗ root
.      PUNCT <══════╝ punct
```

## с [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=bg&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <╗       amod
мечка  NOUN  ═╝<══╗   obj
хоро   NOUN  <══╗ ║   obj
не     PART  <╗ ║ ║   advmod
играе  VERB  ═╝═╝═╝═╗ root
.      PUNCT <══════╝ punct
```

## с [CLASSLA](https://github.com/clarinsi/classla-stanfordnlp)

```py
>>> import classla
>>> nlp=classla.Pipeline("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("bg_btb")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ ROOT
.      PUNCT <══════╝ punct
```

## с [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_bg_btb/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна DET   <══╗     det
мечка  ADJ   <╗ ║     amod
хоро   NOUN  ═╝═╝<╗   nsubj
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ ROOT
.      PUNCT <══════╝ punct
```

