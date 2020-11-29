# [deplacy](https://koichiyasuoka.github.io/deplacy/) pentru analiza sintactică

## cu [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=ro&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <══════════╗   advmod
te      PRON  <════════╗ ║   obj
băga    VERB  ═══╗═══╗═╝═╝═╗ root
in      ADP   <╗ ║   ║     ║ case
tărâţe  NOUN  ═╝<╝   ║     ║ obl
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ advcl
porcii  NOUN  <╝           ║ nsubj
.       PUNCT <════════════╝ punct
```

## cu [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from spacy.lang.ro import Romanian
>>> nlp=Romanian()
>>> import spacy
>>> nlp.pipeline.extend(spacy.load("en_udify").pipeline)
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      ADV   <══════════╗   advmod
te      PRON  <════════╗ ║   expl:pv
băga    VERB  ═══╗═══╗═╝═╝═╗ root
in      ADP   <╗ ║   ║     ║ case
tărâţe  NOUN  ═╝<╝   ║     ║ obl
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ advcl
porcii  NOUN  <╝           ║ nsubj
.       PUNCT <════════════╝ punct
```

## cu [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("ro_core_news_md")
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <══════════╗   advmod
te      PRON  <════════╗ ║   expl:pv
băga    AUX   ═══╗═══╗═╝═╝═╗ ROOT
in      ADP   <╗ ║   ║     ║ case
tărâţe  NOUN  ═╝<╝   ║     ║ obl
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ advcl
porcii  NOUN  <╝           ║ nsubj:pass
.       PUNCT <════════════╝ punct
```

## cu [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ro")
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <══════════╗   advmod
te      PRON  <════════╗ ║   obj
băga    VERB  ═╗═╗═══╗═╝═╝═╗ root
in      ADP   <╝ ║   ║     ║ fixed
tărâţe  NOUN  <══╝   ║     ║ obl
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ advcl
porcii  NOUN  <╝           ║ nsubj
.       PUNCT <════════════╝ punct
```

## cu [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ro")
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <══════════╗   advmod
te      PRON  <════════╗ ║   expl:pv
băga    VERB  ═╗═╗═══╗═╝═╝═╗ root
in      ADV   <╝ ║   ║     ║ advmod
tărâţe  VERB  <══╝   ║     ║ fixed
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ advcl
porcii  NOUN  <╝           ║ nsubj
.       PUNCT <════════════╝ punct
```

## cu [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("ro_rrt")
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <══════════╗   advmod
te      PRON  <════════╗ ║   obj
băga    VERB  ═╗═╗═══╗═╝═╝═╗ ROOT
in      ADP   <╝ ║   ║     ║ fixed
tărâţe  NOUN  <══╝   ║     ║ fixed
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ ccomp:pmod
porcii  NOUN  <╝           ║ nsubj
.       PUNCT <════════════╝ punct
```

## cu [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_ro_rrt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <══════════╗   advmod
te      PRON  <════════╗ ║   expl:pv
băga    VERB  ═╗═╗═══╗═╝═╝═╗ root
in      ADP   <╝ ║   ║     ║ fixed
tărâţe  NOUN  <══╝   ║     ║ fixed
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ ccomp:pmod
porcii  NOUN  <╝           ║ nsubj
.       PUNCT <════════════╝ punct
```

## cu [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ro",ignore_tag_map=True)
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <════════════╗   advmod
te      PRON  <══════════╗ ║   obj
băga    VERB  ═══════╗═╗═╝═╝═╗ ROOT
in      ADP   ═╗═╗<╗ ║ ║     ║ mark
tărâţe  NOUN  <╝ ║ ║ ║ ║     ║ fixed
că      SCONJ <══╝ ║ ║ ║     ║ fixed
te      PRON  <╗   ║ ║ ║     ║ obj
mănâncă VERB  ═╝═══╝<╝ ║     ║ advcl
porcii  NOUN  <════════╝     ║ nsubj
.       PUNCT <══════════════╝ punct
```

## cu [DiaParser](https://github.com/Unipisa/diaparser)

```py
>>> from diaparser.parsers import Parser
>>> parser=Parser.load("ro_rrt.mbert")
>>> nlp=lambda t:"\n".join([str(s) for s in parser.predict(t,text="ro",prob=True).sentences])
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      <══════════╗   advmod
te      <════════╗ ║   obj
băga    ═══╗═══╗═╝═╝═╗ root
in      <╗ ║   ║     ║ case
tărâţe  ═╝<╝   ║     ║ obl
că      <════╗ ║     ║ mark
te      <══╗ ║ ║     ║ expl:pv
mănâncă ═╗═╝═╝<╝     ║ advcl
porcii  <╝           ║ nsubj
.       <════════════╝ punct
```

