# [deplacy](https://koichiyasuoka.github.io/deplacy/) sintakses analīzei

## ar [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Latvija vienu pēc otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <════════════════╗   nsubj
vienu      NUM   ═══╗<══════════╗ ║   obl
pēc        ADP   <╗ ║           ║ ║   case
otras      NUM   ═╝<╝           ║ ║   nummod
pārdzīvoja VERB  ═════════════╗═╝═╝═╗ root
trīs       NUM   <╗           ║     ║ nummod
okupācijas NOUN  ═╝═════════╗<╝     ║ obj
,          PUNCT <════════╗ ║       ║ punct
kuru       DET   <══╗     ║ ║       ║ det
kopējais   ADJ   <╗ ║     ║ ║       ║ amod
ilgums     NOUN  ═╝═╝<╗   ║ ║       ║ nsubj
,          PUNCT <════║═╗ ║ ║       ║ punct
piecdesmit NUM   <╗   ║ ║ ║ ║       ║ nummod
gadi       NOUN  ═╝═══╝═╝═╝<╝       ║ acl
.          PUNCT <══════════════════╝ punct
```

## ar [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("lv")
>>> doc=nlp("Latvija vienu pēc otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   ═══╗<════════════╗ ║   acl
pēc        ADP   <╗ ║             ║ ║   case
otras      NUM   ═╝<╝             ║ ║   nmod
pārdzīvoja VERB  ═══════════════╗═╝═╝═╗ root
trīs       NUM   <╗             ║     ║ nummod
okupācijas NOUN  ═╝═══════════╗<╝     ║ obj
,          PUNCT <══════════╗ ║       ║ punct
kuru       DET   <════════╗ ║ ║       ║ det
kopējais   ADJ   <══════╗ ║ ║ ║       ║ amod
ilgums     NOUN  ═════╗═╝═╝═╝<╝       ║ acl
,          PUNCT <══╗ ║               ║ punct
piecdesmit NUM   <╗ ║ ║               ║ nummod
gadi       NOUN  ═╝═╝<╝               ║ acl
.          PUNCT <════════════════════╝ punct
```

## ar [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=lv&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Latvija vienu pēc otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   ═══╗<════════════╗ ║   obj
pēc        ADP   <╗ ║             ║ ║   case
otras      NUM   ═╝<╝             ║ ║   nmod
pārdzīvoja VERB  ═══════════════╗═╝═╝═╗ root
trīs       NUM   <╗             ║     ║ nummod
okupācijas NOUN  ═╝═══════════╗<╝     ║ obj
,          PUNCT <══════════╗ ║       ║ punct
kuru       DET   <════════╗ ║ ║       ║ det
kopējais   ADJ   <══════╗ ║ ║ ║       ║ amod
ilgums     NOUN  ═════╗═╝═╝═╝<╝       ║ acl
,          PUNCT <══╗ ║               ║ punct
piecdesmit NUM   <╗ ║ ║               ║ nummod
gadi       NOUN  ═╝═╝<╝               ║ appos
.          PUNCT <════════════════════╝ punct
```

## ar [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("lv")
>>> doc=nlp("Latvija vienu pēc otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <════════════════╗   nsubj
vienu      NUM   ═══╗<══════════╗ ║   obj
pēc        ADP   <╗ ║           ║ ║   case
otras      NUM   ═╝<╝           ║ ║   nmod
pārdzīvoja VERB  ═════════════╗═╝═╝═╗ root
trīs       NUM   <╗           ║     ║ nummod
okupācijas NOUN  ═╝═════════╗<╝     ║ obj
,          PUNCT <════════╗ ║       ║ punct
kuru       DET   <══════╗ ║ ║       ║ det
kopējais   ADJ   <╗     ║ ║ ║       ║ amod
ilgums     NOUN  ═╝═══╗═╝═╝<╝       ║ acl
,          PUNCT <══╗ ║             ║ punct
piecdesmit NUM   <╗ ║ ║             ║ nummod
gadi       NOUN  ═╝═╝<╝             ║ conj
.          PUNCT <══════════════════╝ punct
```

## ar [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("lv_lvtb")
>>> doc=nlp("Latvija vienu pēc otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   ═══╗<════════════╗ ║   obj
pēc        ADP   <╗ ║             ║ ║   case
otras      NUM   ═╝<╝             ║ ║   nmod
pārdzīvoja VERB  ═══════════════╗═╝═╝═╗ ROOT
trīs       NUM   <╗             ║     ║ nummod
okupācijas NOUN  ═╝═══════════╗<╝     ║ obj
,          PUNCT <══════════╗ ║       ║ punct
kuru       DET   <════════╗ ║ ║       ║ det
kopējais   ADJ   <══════╗ ║ ║ ║       ║ amod
ilgums     NOUN  ═════╗═╝═╝═╝<╝       ║ acl
,          PUNCT <══╗ ║               ║ punct
piecdesmit NUM   <╗ ║ ║               ║ nummod
gadi       NOUN  ═╝═╝<╝               ║ acl
.          PUNCT <════════════════════╝ punct
```

## ar [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_lv_lvtb/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Latvija vienu pēc otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   ═══╗<════════════╗ ║   obj
pēc        ADP   <╗ ║             ║ ║   case
otras      NUM   ═╝<╝             ║ ║   nmod
pārdzīvoja VERB  ═══════════════╗═╝═╝═╗ root
trīs       NUM   <╗             ║     ║ nummod
okupācijas NOUN  ═╝═══════════╗<╝     ║ nsubj
,          PUNCT <══════════╗ ║       ║ punct
kuru       DET   <════════╗ ║ ║       ║ det
kopējais   ADJ   <══════╗ ║ ║ ║       ║ amod
ilgums     NOUN  ═════╗═╝═╝═╝<╝       ║ acl
,          PUNCT <══╗ ║               ║ punct
piecdesmit NUM   <╗ ║ ║               ║ nummod
gadi       NOUN  ═╝═╝<╝               ║ acl
.          PUNCT <════════════════════╝ punct
```

## ar [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("lv")
>>> doc=nlp("Latvija vienu pēc otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   <════════════════╗ ║   obj
pēc        ADP   <══════════════╗ ║ ║   case
otras      NUM   <╗             ║ ║ ║   nummod
pārdzīvoja VERB  ═╝═══════════╗═╝═╝═╝═╗ ROOT
trīs       NUM   <╗           ║       ║ nummod
okupācijas NOUN  ═╝═════════╗<╝       ║ obj
,          PUNCT <════════╗ ║         ║ punct
kuru       DET   <══════╗ ║ ║         ║ det
kopējais   ADJ   <╗     ║ ║ ║         ║ amod
ilgums     NOUN  ═╝═══╗═╝═╝<╝         ║ acl
,          PUNCT <══╗ ║               ║ punct
piecdesmit NUM   <╗ ║ ║               ║ nummod
gadi       NOUN  ═╝═╝<╝               ║ conj
.          PUNCT <════════════════════╝ punct
```

## ar [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("lv_lvtb")
>>> doc=nlp("Latvija vienu pēc otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   <════════════════╗ ║   acl
pēc        ADP   <╗               ║ ║   case
otras      NUM   ═╝<╗             ║ ║   nummod
pārdzīvoja VERB  ═══╝═══════════╗═╝═╝═╗ ROOT
trīs       NUM   <╗             ║     ║ nummod
okupācijas NOUN  ═╝═══════════╗<╝     ║ obj
,          PUNCT <══════════╗ ║       ║ punct
kuru       PRON  <════════╗ ║ ║       ║ obj
kopējais   ADJ   ═══════╗═╝═╝<╝       ║ acl
ilgums     NOUN  ═════╗<╝             ║ nsubj
,          PUNCT <══╗ ║               ║ punct
piecdesmit NUM   <╗ ║ ║               ║ nummod
gadi       NOUN  ═╝═╝<╝               ║ parataxis
.          PUNCT <════════════════════╝ punct
```

