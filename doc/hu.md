# [deplacy](https://koichiyasuoka.github.io/deplacy/) a szintaktikai elemzéshez

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)-vel

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=hu&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══╗       obj
ma         ADV   <╗ ║       advmod:tlocy
megtehetsz VERB  ═╝═╝<╗     advcl
,          PUNCT <════║═╗   punct
ne         ADV   <══╗ ║ ║   advmod
halaszd    VERB  ═╗═╝═╝═╝═╗ root
holnapra   NOUN  <╝       ║ nmod:obl
.          PUNCT <════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-vel

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══╗       obj
ma         ADV   <╗ ║       advmod
megtehetsz VERB  ═╝═╝═╗<╗   advcl
,          PUNCT <════╝ ║   punct
ne         CCONJ <══╗   ║   mark
halaszd    VERB  ═╗═╝═══╝═╗ root
holnapra   ADV   <╝       ║ advmod:mode
.          PUNCT <════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)-vel

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("hu")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══╗       obj
ma         ADV   <╗ ║       advmod:tlocy
megtehetsz VERB  ═╝═╝<╗     advcl
,          PUNCT <════║═╗   punct
ne         VERB  <══╗ ║ ║   advmod
halaszd    NUM   ═╗═╝═╝═╝═╗ root
holnapra   NOUN  <╝       ║ nmod:obl
.          PUNCT <════════╝ punct
```

## [COMBO-pytorch](https://github.com/ipipan/combo)-vel

```py
>>> import combo.predict
>>> nlp=combo.predict.SemanticMultitaskPredictor.from_pretrained("hungarian")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <════════╗   obj
ma         ADV   <╗       ║   advmod:tlocy
megtehetsz VERB  ═╝═════╗═╝═╗ root
,          PUNCT <════╗ ║   ║ punct
ne         ADV   <╗   ║ ║   ║ compound:preverb
halaszd    VERB  ═╝═╗═╝<╝   ║ conj
holnapra   NOUN  <══╝       ║ nmod:obl
.          PUNCT <══════════╝ punct
```

## [hu_core_ud_lg](https://github.com/oroszgy/spacy-hungarian-models)-vel

```py
>>> import spacy
>>> nlp=spacy.load("hu_core_ud_lg")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <════════╗     obj
ma         ADV   <══════╗ ║     advmod
megtehetsz VERB  ═════╗═╝═╝═╗═╗ ROOT
,          PUNCT <════║═════╝ ║ punct
ne         ADV   <══╗ ║       ║ mark
halaszd    VERB  ═╗═╝<╝       ║ ccomp
holnapra   ADV   <╝           ║ nmod
.          PUNCT <════════════╝ punct
```

## [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)-vel

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_hu_szeged/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══════════╗   obj
ma         ADV   <════════╗ ║   advmod:tlocy
megtehetsz VERB  ═══════╗═╝═╝═╗ root
,          PUNCT <════╗ ║     ║ punct
ne         ADV   <══╗ ║ ║     ║ advmod:to
halaszd    VERB  ═╗═╝═╝<╝     ║ ccomp:obj
holnapra   ADV   <╝           ║ compound:preverb
.          PUNCT <════════════╝ punct
```

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)-val

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("hu_szeged")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <════════╗   obj
ma         ADV   <╗       ║   advmod:tlocy
megtehetsz VERB  ═╝═════╗═╝═╗ ROOT
,          PUNCT <════╗ ║   ║ punct
ne         PRON  <══╗ ║ ║   ║ aux
halaszd    VERB  ═╗═╝═╝<╝   ║ conj
holnapra   NOUN  <╝         ║ nmod:obl
.          PUNCT <══════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-vel

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("hu")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══════════╗   obj
ma         ADV   <════════╗ ║   advmod:tlocy
megtehetsz VERB  ═══════╗═╝═╝═╗ ROOT
,          PUNCT <════╗ ║     ║ punct
ne         VERB  ═══╗═╝<╝     ║ conj
halaszd    VERB  ═╗<╝         ║ xcomp
holnapra   NOUN  <╝           ║ nmod:obl
.          PUNCT <════════════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)-val

```py
>>> import stanza
>>> nlp=stanza.Pipeline("hu")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══════════╗   obj
ma         ADV   <════════╗ ║   advmod:tlocy
megtehetsz VERB  ═══════╗═╝═╝═╗ root
,          PUNCT <════╗ ║     ║ punct
ne         VERB  ═══╗═╝<╝     ║ conj
halaszd    VERB  ═╗<╝         ║ conj
holnapra   NOUN  <╝           ║ nmod:obl
.          PUNCT <════════════╝ punct
```

## [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)-val

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("hu_szeged")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <════════╗     obj
ma         ADV   <══════╗ ║     advmod:tlocy
megtehetsz VERB  ═════╗═╝═╝═╗═╗ ROOT
,          PUNCT <════║═════╝ ║ punct
ne         ADV   <══╗ ║       ║ nsubj
halaszd    ADJ   <╗ ║ ║       ║ amod:att
holnapra   NOUN  ═╝═╝<╝       ║ ccomp:obj
.          PUNCT <════════════╝ punct
```

