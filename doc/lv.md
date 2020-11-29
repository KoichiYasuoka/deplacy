# [deplacy](https://koichiyasuoka.github.io/deplacy/) sintakses analīzei

## ar [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=lv&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Latvija vienu pec otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   ═══╗<════════════╗ ║   obj
pec        ADP   <╗ ║             ║ ║   case
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
>>> doc=nlp("Latvija vienu pec otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <════════════════╗   nsubj
vienu      NUM   ═══╗<══════════╗ ║   obj
pec        ADP   <╗ ║           ║ ║   case
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

## ar [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_lv_lvtb/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Latvija vienu pec otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   ═══╗<════════════╗ ║   obj
pec        ADP   <╗ ║             ║ ║   case
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

## ar [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("lv")
>>> doc=nlp("Latvija vienu pec otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   <╗                 ║   nummod
pec        PROPN ═╝═╗<════════════╗ ║   nsubj
otras      NUM   <══╝             ║ ║   nummod
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

## ar [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Latvija vienu pec otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   <════════════════╗ ║   nummod
pec        ADP   <╗               ║ ║   case
otras      NUM   ═╝<════════════╗ ║ ║   obl
pārdzīvoja VERB  ═════════════╗═╝═╝═╝═╗ root
trīs       NUM   <╗           ║       ║ nummod
okupācijas NOUN  ═╝═════════╗<╝       ║ obj
,          PUNCT <════╗     ║         ║ punct
kuru       DET   <══╗ ║     ║         ║ det
kopējais   ADJ   <╗ ║ ║     ║         ║ amod
ilgums     NOUN  ═╝═╝═╝<╗   ║         ║ nsubj
,          PUNCT <══════║═╗ ║         ║ punct
piecdesmit NUM   <╗     ║ ║ ║         ║ nummod
gadi       NOUN  ═╝═════╝═╝<╝         ║ acl
.          PUNCT <════════════════════╝ punct
```

## ar [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("lv")
>>> doc=nlp("Latvija vienu pec otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   <════════════════╗ ║   obj
pec        VERB  ═══════════════╗═╝═╝═╗ ROOT
otras      NUM   <╗             ║     ║ nummod
pārdzīvoja VERB  ═╝═══════════╗<╝     ║ conj
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

## ar [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("lv_lvtb")
>>> doc=nlp("Latvija vienu pec otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    PROPN <══════════════════╗   nsubj
vienu      NUM   <╗                 ║   nummod
pec        X     ═╝═╗<════════════╗ ║   nmod
otras      NUM   <══╝             ║ ║   nummod
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

## ar [DiaParser](https://github.com/Unipisa/diaparser)

```py
>>> from diaparser.parsers import Parser
>>> parser=Parser.load("lv_lvtb.mbert")
>>> nlp=lambda t:"\n".join([str(s) for s in parser.predict(t,text="lv",prob=True).sentences])
>>> doc=nlp("Latvija vienu pec otras pārdzīvoja trīs okupācijas, kuru kopējais ilgums, piecdesmit gadi.")
>>> import deplacy
>>> deplacy.render(doc)
Latvija    <════════════════╗   nsubj
vienu      ═╗═╗<══════════╗ ║   obj
pec        <╝ ║           ║ ║   compound
otras      <══╝           ║ ║   compound
pārdzīvoja ═════════════╗═╝═╝═╗ root
trīs       <╗           ║     ║ nummod
okupācijas ═╝═════════╗<╝     ║ nsubj
,          <════════╗ ║       ║ punct
kuru       <══╗     ║ ║       ║ det
kopējais   <╗ ║     ║ ║       ║ amod
ilgums     ═╝═╝<╗   ║ ║       ║ nsubj
,          <════║═╗ ║ ║       ║ punct
piecdesmit <╗   ║ ║ ║ ║       ║ nummod
gadi       ═╝═══╝═╝═╝<╝       ║ appos
.          <══════════════════╝ punct
```

