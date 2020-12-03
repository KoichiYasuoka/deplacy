# [deplacy](https://koichiyasuoka.github.io/deplacy/) per l'analisi sintattica

## con [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("it")
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  ═════════════╗ root
non       ADV   <════╗       ║ advmod
beve      VERB  ═══╗═╝═╗═╗═╗<╝ acl:relcl
in        ADP   <╗ ║   ║ ║ ║   case
compagnia NOUN  ═╝<╝   ║ ║ ║   obl
o         CCONJ <════╗ ║ ║ ║   cc
è         AUX   <══╗ ║ ║ ║ ║   cop
un        DET   <╗ ║ ║ ║ ║ ║   det
ladro     NOUN  ═╝═╝═╝<╝ ║ ║   conj
o         CCONJ <════╗   ║ ║   cc
è         AUX   <══╗ ║   ║ ║   cop
una       DET   <╗ ║ ║   ║ ║   det
spia      NOUN  ═╝═╝═╝<══╝ ║   conj
.         PUNCT <══════════╝   punct
```

## con [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("it_isdt")
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  ═════════════╗ ROOT
non       ADV   <════╗       ║ advmod
beve      VERB  ═══╗═╝═╗═╗═╗<╝ acl:relcl
in        ADP   <╗ ║   ║ ║ ║   case
compagnia NOUN  ═╝<╝   ║ ║ ║   obl
o         CCONJ <════╗ ║ ║ ║   cc
è         AUX   <══╗ ║ ║ ║ ║   cop
un        DET   <╗ ║ ║ ║ ║ ║   det
ladro     NOUN  ═╝═╝═╝<╝ ║ ║   conj
o         CCONJ <════╗   ║ ║   cc
è         AUX   <══╗ ║   ║ ║   cop
una       DET   <╗ ║ ║   ║ ║   det
spia      NOUN  ═╝═╝═╝<══╝ ║   conj
.         PUNCT <══════════╝   punct
```

## con [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from spacy.lang.it import Italian
>>> nlp=Italian()
>>> import spacy
>>> nlp.pipeline.extend(spacy.load("en_udify").pipeline)
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  ═════════════╗═╗ root
non       ADV   <════╗       ║ ║ advmod
beve      VERB  ═══╗═╝═════╗<╝ ║ acl:relcl
in        ADP   <╗ ║       ║   ║ case
compagnia NOUN  ═╝<╝       ║   ║ obl
o         CCONJ <════════╗ ║   ║ cc
è         AUX   <══╗     ║ ║   ║ cop
un        DET   <╗ ║     ║ ║   ║ det
ladro     NOUN  ═╝═╝═══╗═╝<╝   ║ conj
o         CCONJ <════╗ ║       ║ cc
è         AUX   <══╗ ║ ║       ║ cop
una       DET   <╗ ║ ║ ║       ║ det
spia      NOUN  ═╝═╝═╝<╝       ║ conj
.         PUNCT <══════════════╝ punct
```

## con [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("it")
>>> import deplacy
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  ═══════════════╗ root
non       ADV   <════╗         ║ advmod
beve      VERB  ═══╗═╝═════╗═╗<╝ acl:relcl
in        ADP   <╗ ║       ║ ║   case
compagnia NOUN  ═╝<╝       ║ ║   obl
o         CCONJ <════════╗ ║ ║   cc
è         AUX   <══╗     ║ ║ ║   cop
un        DET   <╗ ║     ║ ║ ║   det
ladro     NOUN  ═╝═╝═══╗═╝<╝ ║   conj
o         CCONJ <════╗ ║     ║   cc
è         AUX   <══╗ ║ ║     ║   cop
una       DET   <╗ ║ ║ ║     ║   det
spia      NOUN  ═╝═╝═╝<╝     ║   conj
.         PUNCT <════════════╝   punct
```

## con [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("it_core_news_sm")
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  <══════╗       nsubj
non       ADV   <════╗ ║       advmod
beve      VERB  ═══╗═╝═╝═╗═╗═╗ ROOT
in        ADP   <╗ ║     ║ ║ ║ case
compagnia NOUN  ═╝<╝     ║ ║ ║ obl
o         SCONJ <════╗   ║ ║ ║ cc
è         VERB  <══╗ ║   ║ ║ ║ cop
un        DET   <╗ ║ ║   ║ ║ ║ det
ladro     NOUN  ═╝═╝═╝<══╝ ║ ║ conj
o         SCONJ <════╗     ║ ║ cc
è         VERB  <══╗ ║     ║ ║ cop
una       DET   <╗ ║ ║     ║ ║ det
spia      NOUN  ═╝═╝═╝<════╝ ║ conj
.         PUNCT <════════════╝ punct
```

## con [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=it&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  <══════╗       nsubj
non       ADV   <════╗ ║       advmod
beve      VERB  ═══╗═╝═╝═╗═╗═╗ root
in        ADP   <╗ ║     ║ ║ ║ case
compagnia NOUN  ═╝<╝     ║ ║ ║ obl
o         CCONJ <════╗   ║ ║ ║ cc
è         AUX   <══╗ ║   ║ ║ ║ cop
un        DET   <╗ ║ ║   ║ ║ ║ det
ladro     NOUN  ═╝═╝═╝<══╝ ║ ║ conj
o         CCONJ <════╗     ║ ║ cc
è         AUX   <══╗ ║     ║ ║ cop
una       DET   <╗ ║ ║     ║ ║ det
spia      NOUN  ═╝═╝═╝<════╝ ║ conj
.         PUNCT <════════════╝ punct
```

## con [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("it_isdt")
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  <══════╗       nsubj
non       ADV   <════╗ ║       advmod
beve      VERB  ═══╗═╝═╝═╗═╗═╗ ROOT
in        ADP   <╗ ║     ║ ║ ║ case
compagnia NOUN  ═╝<╝     ║ ║ ║ obl
o         CCONJ <════╗   ║ ║ ║ cc
è         AUX   <══╗ ║   ║ ║ ║ cop
un        DET   <╗ ║ ║   ║ ║ ║ det
ladro     NOUN  ═╝═╝═╝<══╝ ║ ║ conj
o         CCONJ <════╗     ║ ║ cc
è         AUX   <══╗ ║     ║ ║ cop
una       DET   <╗ ║ ║     ║ ║ det
spia      NOUN  ═╝═╝═╝<════╝ ║ conj
.         PUNCT <════════════╝ punct
```

## con [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_it_isdt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  <══════╗       nsubj
non       ADV   <════╗ ║       advmod
beve      VERB  ═══╗═╝═╝═╗═╗═╗ root
in        ADP   <╗ ║     ║ ║ ║ case
compagnia NOUN  ═╝<╝     ║ ║ ║ obl
o         CCONJ <════╗   ║ ║ ║ cc
è         AUX   <══╗ ║   ║ ║ ║ cop
un        DET   <╗ ║ ║   ║ ║ ║ det
ladro     NOUN  ═╝═╝═╝<══╝ ║ ║ conj
o         CCONJ <════╗     ║ ║ cc
è         AUX   <══╗ ║     ║ ║ cop
una       DET   <╗ ║ ║     ║ ║ det
spia      NOUN  ═╝═╝═╝<════╝ ║ conj
.         PUNCT <════════════╝ punct
```

## con [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("it")
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  <════════════╗     nsubj
non       ADV   <══════════╗ ║     advmod
beve      VERB  ═════════╗═╝═╝═╗═╗ ROOT
in        ADP   <╗       ║     ║ ║ case
compagnia NOUN  ═╝═════╗<╝     ║ ║ obl
o         CCONJ <════╗ ║       ║ ║ cc
è         AUX   <══╗ ║ ║       ║ ║ cop
un        DET   <╗ ║ ║ ║       ║ ║ det
ladro     NOUN  ═╝═╝═╝<╝       ║ ║ conj
o         CCONJ <════╗         ║ ║ cc
è         AUX   <══╗ ║         ║ ║ cop
una       DET   <╗ ║ ║         ║ ║ det
spia      NOUN  ═╝═╝═╝<════════╝ ║ conj
.         PUNCT <════════════════╝ punct
```

