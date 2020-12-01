# [deplacy](https://koichiyasuoka.github.io/deplacy/) vir sintaktiese analise

## met [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <══════════╗   ║ ║   nsubj
met   ADP   <╗         ║   ║ ║   case
hom   PRON  ═╝<══════╗ ║   ║ ║   obl
praat VERB  ═══════╗═╝═╝═╗<╝ ║   dep
in    ADP   <════╗ ║     ║   ║   case
sy    PRON  <══╗ ║ ║     ║   ║   det
eie   ADJ   <╗ ║ ║ ║     ║   ║   amod
taal  NOUN  ═╝═╝═╝<╝     ║   ║   obl
,     PUNCT <════════════╝   ║   punct
gaan  VERB  ═╗═══╗═══════════╝═╗ root
dit   PRON  <╝   ║             ║ nsubj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("af_afribooms")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <══════════╗   ║ ║   nsubj
met   ADP   <╗         ║   ║ ║   case
hom   PRON  ═╝<══════╗ ║   ║ ║   obl
praat VERB  ═══════╗═╝═╝═╗<╝ ║   dep
in    ADP   <════╗ ║     ║   ║   case
sy    PRON  <══╗ ║ ║     ║   ║   det
eie   ADJ   <╗ ║ ║ ║     ║   ║   amod
taal  NOUN  ═╝═╝═╝<╝     ║   ║   obl
,     PUNCT <════════════╝   ║   punct
gaan  VERB  ═╗═══╗═══════════╝═╗ ROOT
dit   PRON  <╝   ║             ║ nsubj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=af&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <══════════╗   ║ ║   nsubj
met   ADP   <╗         ║   ║ ║   case
hom   PRON  ═╝<══════╗ ║   ║ ║   obl
praat VERB  ═══════╗═╝═╝═╗<╝ ║   dep
in    ADP   <════╗ ║     ║   ║   case
sy    PRON  <══╗ ║ ║     ║   ║   det
eie   ADJ   <╗ ║ ║ ║     ║   ║   amod
taal  NOUN  ═╝═╝═╝<╝     ║   ║   obl
,     PUNCT <════════════╝   ║   punct
gaan  VERB  ═╗═══╗═══════════╝═╗ root
dit   PRON  <╝   ║             ║ nsubj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("af_afribooms")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <════════════╗ ║ ║   nsubj
met   ADP   <╗           ║ ║ ║   case
hom   PRON  ═╝<════════╗ ║ ║ ║   obl
praat VERB  ═════════╗═╝═╝<╝ ║   dep
in    ADP   <════╗   ║       ║   case
sy    PRON  <══╗ ║   ║       ║   det
eie   ADJ   <╗ ║ ║   ║       ║   amod
taal  NOUN  ═╝═╝═╝═╗<╝       ║   obl
,     PUNCT <══════╝         ║   punct
gaan  VERB  ═╗═══╗═══════════╝═╗ ROOT
dit   PRON  <╝   ║             ║ obj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_af_afribooms/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <══════════╗   ║ ║   nsubj
met   ADP   <╗         ║   ║ ║   case
hom   PRON  ═╝<══════╗ ║   ║ ║   obl
praat VERB  ═══════╗═╝═╝═╗<╝ ║   dep
in    ADP   <════╗ ║     ║   ║   case
sy    PRON  <══╗ ║ ║     ║   ║   det
eie   ADJ   <╗ ║ ║ ║     ║   ║   amod
taal  NOUN  ═╝═╝═╝<╝     ║   ║   obl
,     PUNCT <════════════╝   ║   punct
gaan  VERB  ═╗═══╗═══════════╝═╗ root
dit   PRON  <╝   ║             ║ obj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("af")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <════════════╗ ║ ║   nsubj
met   ADP   <╗           ║ ║ ║   case
hom   PRON  ═╝<════════╗ ║ ║ ║   obl
praat VERB  ═════════╗═╝═╝<╝ ║   dep
in    ADP   <════╗   ║       ║   case
sy    PRON  <══╗ ║   ║       ║   det
eie   ADJ   <╗ ║ ║   ║       ║   amod
taal  NOUN  ═╝═╝═╝═╗<╝       ║   obl
,     PUNCT <══════╝         ║   punct
gaan  VERB  ═╗═══╗═══════════╝═╗ root
dit   PRON  <╝   ║             ║ obj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("af")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════╗<╗   amod
jy    PRON  <════════════╗ ║ ║   nsubj
met   ADP   <╗           ║ ║ ║   case
hom   PRON  ═╝<════════╗ ║ ║ ║   obl
praat VERB  ═════════╗═╝═╝<╝ ║   dep
in    ADP   <════╗   ║       ║   case
sy    PRON  <══╗ ║   ║       ║   det
eie   ADJ   <╗ ║ ║   ║       ║   amod
taal  NOUN  ═╝═╝═╝═╗<╝       ║   obl
,     PUNCT <══════╝         ║   punct
gaan  AUX   ═╗═══╗═══════════╝═╗ root
dit   PRON  <╝   ║             ║ obj
na    ADP   <══╗ ║             ║ case
sy    PRON  <╗ ║ ║             ║ det
hart  NOUN  ═╝═╝<╝             ║ obl
.     PUNCT <══════════════════╝ punct
```

## met [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("af")
>>> doc=nlp("As jy met hom praat in sy eie taal, gaan dit na sy hart.")
>>> import deplacy
>>> deplacy.render(doc)
As    SCONJ ═══════════════════╗<╗ amod
jy    PRON  <════════════════╗ ║ ║ nsubj
met   ADP   <════════════╗   ║ ║ ║ case
hom   PRON  <══════════╗ ║   ║ ║ ║ det
praat NOUN  ═════════╗═╝═╝<╗ ║ ║ ║ obl
in    ADP   <════╗   ║     ║ ║ ║ ║ case
sy    PRON  <══╗ ║   ║     ║ ║ ║ ║ det
eie   ADJ   <╗ ║ ║   ║     ║ ║ ║ ║ amod
taal  NOUN  ═╝═╝═╝═╗<╝     ║ ║ ║ ║ nmod
,     PUNCT <══════╝       ║ ║ ║ ║ punct
gaan  VERB  ═══════╗═══════╝═╝<╝ ║ dep
dit   PRON  ═════════════════════╝ ROOT
na    ADP   <══╗   ║               case
sy    PRON  <╗ ║   ║               det
hart  ADV   ═╝═╝═╗<╝               obl
.     PUNCT <════╝                 punct
```

