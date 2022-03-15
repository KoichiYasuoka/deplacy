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

## cu [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("romanian-ud27")
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
mănâncă VERB  ═╗═╝═╝<╝     ║ ccomp:pmod
porcii  NOUN  <╝           ║ nsubj
.       PUNCT <════════════╝ punct
```

## cu [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("romanian")
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <══════════╗   advmod
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
băga    VERB  ═══╗═══╗═╝═╝═╗ root
in      ADP   <╗ ║   ║     ║ case
tărâţe  NOUN  ═╝<╝   ║     ║ obl
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ advcl
porcii  NOUN  <╝           ║ nsubj
.       PUNCT <════════════╝ punct
```

## cu [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

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

## cu [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("ro_rrt")
>>> doc=nlp("Nu te băga in tărâţe că te mănâncă porcii.")
>>> import deplacy
>>> deplacy.render(doc)
Nu      PART  <══════════╗   advmod
te      PRON  <════════╗ ║   iobj
băga    VERB  ═╗═╗═══╗═╝═╝═╗ ROOT
in      ADP   <╝ ║   ║     ║ fixed
tărâţe  NOUN  <══╝   ║     ║ fixed
că      SCONJ <════╗ ║     ║ mark
te      PRON  <══╗ ║ ║     ║ obj
mănâncă VERB  ═╗═╝═╝<╝     ║ csubj
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

