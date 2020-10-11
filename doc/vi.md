# [deplacy](https://koichiyasuoka.github.io/deplacy/) để phân tích ngữ pháp

## với [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("vi")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   NUM   <══╗       nummod
mũi   NOUN  ═╗═╝<══╗   nsubj
tên   NOUN  <╝     ║   compound
trúng VERB  ═════╗═╝═╗ root
hai   NUM   <══╗ ║   ║ nummod
con   NOUN  <╗ ║ ║   ║ compound
chim  NOUN  ═╝═╝<╝   ║ obj
.     PUNCT <════════╝ punct
```

## với [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_vi_vtb/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   NUM   <╗         nummod
mũi   NOUN  ═╝═╗<══╗   nsubj
tên   NOUN  <══╝   ║   compound
trúng VERB  ═════╗═╝═╗ root
hai   NUM   <╗   ║   ║ nummod
con   NOUN  ═╝<╗ ║   ║ compound
chim  NOUN  ═══╝<╝   ║ obj
.     PUNCT <════════╝ punct
```

## với [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("vi_vtb")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một     NUM   <╗         nummod
mũi_tên NOUN  ═╝═════╗═╗ ROOT
trúng   VERB  ═════╗<╝ ║ xcomp
hai     NUM   <══╗ ║   ║ nummod
con     NOUN  <╗ ║ ║   ║ compound
chim    NOUN  ═╝═╝<╝   ║ obj
.       PUNCT <════════╝ punct
```

## với [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("vi")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   NUM   <══╗       nummod
mũi   NOUN  ═╗═╝<╗     nsubj
tên   NOUN  <╝   ║     compound
trúng ADJ   ═════╝═╗<╗ cop
hai   NUM   <══╗   ║ ║ nummod
con   NOUN  ═╗═╝═════╝ root
chim  NOUN  <╝     ║   amod
.     PUNCT <══════╝   punct
```

## với [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=vi&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một       NUM   <╗         nummod
mũi       NOUN  ═╝═╗═╗═╗═╗ root
tên       NOUN  <══╝ ║ ║ ║ compound
trúng hai ADJ   <════║═╝ ║ amod
con       NOUN  ═╗<══╝   ║ compound
chim      NOUN  <╝       ║ compound
.         PUNCT <════════╝ punct
```

## với [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("vi")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một       NUM   <══╗     nummod
mũi       NOUN  ═╗═╝<╗   nsubj
tên       NOUN  <╝   ║   compound
trúng hai VERB  ═══╗═╝═╗ ROOT
con       NOUN  <╗ ║   ║ compound
chim      NOUN  ═╝<╝   ║ obj
.         PUNCT <══════╝ punct
```

## với [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP)

```py
>>> from vncorenlp import VnCoreNLP
>>> vnp=VnCoreNLP("VnCoreNLP/VnCoreNLP-1.1.1.jar",annotators="wseg,pos,parse")
>>> nlp=lambda t:"".join(["\n".join(["\t".join([str(v["index"]),v["form"],"_",v["posTag"],v["posTag"],"_",str(v["head"]),v["depLabel"],"_","_"]) for v in s])+"\n\n" for s in vnp.annotate(t)["sentences"]])
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một     M  <╗         det
mũi_tên N  ═╝<════╗   sub
trúng   V  ═════╗═╝═╗ root
hai     M  <══╗ ║   ║ det
con     Nc ═╗═╝<╝   ║ dob
chim    N  <╝       ║ nmod
.       CH <════════╝ punct
```

