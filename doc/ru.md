# [deplacy](https://koichiyasuoka.github.io/deplacy/) для синтаксического анализа

## с [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ iobj
.      PUNCT <════════════╝ punct
```

## с [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ iobj
.      PUNCT <════════════╝ punct
```

## с [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва NOUN  <════════════╗ nsubj
слезам NOUN  <══════════╗ ║ iobj
не     PART  <╗         ║ ║ advmod
верила VERB  ═╝═══════╗═╝═╝ root
,      PUNCT <════╗   ║     punct
а      CCONJ <══╗ ║   ║     cc
верила VERB  ═╗═╝═╝═╗<╝     conj
любви  NOUN  <╝     ║       obj
.      PUNCT <══════╝       punct
```

## с [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва NOUN  <════════════╗ nsubj
слезам NOUN  <══════════╗ ║ iobj
не     PART  <╗         ║ ║ advmod
верила VERB  ═╝═══════╗═╝═╝ root
,      PUNCT <════╗   ║     punct
а      CCONJ <══╗ ║   ║     cc
верила VERB  ═╗═╝═╝═╗<╝     conj
любви  NOUN  <╝     ║       obj
.      PUNCT <══════╝       punct
```

## с [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("ru_syntagrus")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва NOUN  <════════════╗ nsubj
слезам NOUN  <══════════╗ ║ iobj
не     PART  <╗         ║ ║ advmod
верила VERB  ═╝═══════╗═╝═╝ ROOT
,      PUNCT <════╗   ║     punct
а      CCONJ <══╗ ║   ║     cc
верила VERB  ═╗═╝═╝═╗<╝     conj
любви  NOUN  <╝     ║       obj
.      PUNCT <══════╝       punct
```

## с [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=ru&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ obl
.      PUNCT <════════════╝ punct
```

## с [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_ru_syntagrus/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <════════════╗ nsubj
слезам NOUN  <══════════╗ ║ iobj
не     PART  <╗         ║ ║ advmod
верила VERB  ═╝═══════╗═╝═╝ root
,      PUNCT <════╗   ║     punct
а      CCONJ <══╗ ║   ║     cc
верила VERB  ═╗═╝═╝═╗<╝     conj
любви  NOUN  <╝     ║       obl
.      PUNCT <══════╝       punct
```

