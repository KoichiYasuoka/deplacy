# [deplacy](https://koichiyasuoka.github.io/deplacy/) a szintaktikai elemzéshez

## [Trankit](https://github.com/nlp-uoregon/trankit)-vel

```py
>>> import trankit
>>> nlp=trankit.Pipeline("hungarian")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <══╗       obj
ma         ADV   <╗ ║       advmod:tlocy
megtehetsz VERB  ═╝═╝═╗<╗   advcl
,          PUNCT <════╝ ║   punct
ne         ADV   <══╗   ║   advmod
halaszd    VERB  ═╗═╝═══╝═╗ root
holnapra   ADV   <╝       ║ advmod:tlocy
.          PUNCT <════════╝ punct
```

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

## [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)-vel

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("hungarian-ud27")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <════════╗   obj
ma         ADV   <╗       ║   advmod:tlocy
megtehetsz VERB  ═╝═════╗═╝═╗ root
,          PUNCT <════╗ ║   ║ punct
ne         ADV   <╗   ║ ║   ║ compound:preverb
halaszd    VERB  ═╝═╗═╝<╝   ║ conj
holnapra   ADV   <══╝       ║ nmod:obl
.          PUNCT <══════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)-vel

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

## [HuSpaCy](https://github.com/huspacy/huspacy)-vel

```py
>>> import huspacy
>>> nlp=huspacy.load()
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PRON  <════════╗   obj
ma         ADV   <╗       ║   advmod:tlocy
megtehetsz VERB  ═╝═════╗═╝═╗ ROOT
,          PUNCT <════╗ ║   ║ punct
ne         ADV   <══╗ ║ ║   ║ advmod
halaszd    VERB  ═╗═╝═╝<╝   ║ conj
holnapra   NOUN  <╝         ║ obl
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

## [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)-vel

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

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)-vel

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("hu")
>>> doc=nlp("Amit ma megtehetsz, ne halaszd holnapra.")
>>> import deplacy
>>> deplacy.render(doc)
Amit       PROPN        root
ma         ADV          root
megtehetsz VERB  ═╗═══╗ root
,          PUNCT <╝   ║ punct
ne         ADV   <══╗ ║ advmod
halaszd    VERB  ═╗═╝<╝ ccomp:pred
holnapra   NOUN  <╝     advmod:tlocy
.          PUNCT        root
```

