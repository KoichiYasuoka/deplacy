# [deplacy](https://koichiyasuoka.github.io/deplacy/) untuk analisis sintaksis

## dengan [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("id")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   ADP   <╗ ║     case
langit NOUN  ═╝═╝<╗   obl
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("indonesian")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   ADP   <╗ ║     case
langit NOUN  ═╝═╝<╗   obl
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("id")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   NOUN  ═╗═╝<╗   obl
langit NOUN  <╝   ║   nmod
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   ADP   ═╗═╝<╗   obl
langit NOUN  <╝   ║   nmod
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=id&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <╗         case
atas   ADP   ═╝<════╗   obl
langit NOUN  <════╗ ║   obl
masih  ADV   <══╗ ║ ║   advmod
ada    VERB  ═╗═╝═╝═╝═╗ root
langit NOUN  <╝       ║ obj
.      PUNCT <════════╝ punct
```

## dengan [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("indonesian-ud27")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <╗         case
atas   ADP   ═╝<════╗   obl
langit NOUN  <════╗ ║   obl
masih  ADV   <══╗ ║ ║   advmod
ada    VERB  ═╗═╝═╝═╝═╗ root
langit NOUN  <╝       ║ obj
.      PUNCT <════════╝ punct
```

## dengan [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("id_gsd")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <╗         case
atas   ADP   ═╝<════╗   obl
langit NOUN  <════╗ ║   obl
masih  ADV   <══╗ ║ ║   advmod
ada    VERB  ═╗═╝═╝═╝═╗ ROOT
langit NOUN  <╝       ║ obj
.      PUNCT <════════╝ punct
```

## dengan [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("id_gsd")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <╗         case
atas   NOUN  ═╝<════╗   obl
langit NOUN  <════╗ ║   nmod
masih  ADV   <══╗ ║ ║   advmod
ada    VERB  ═╗═╝═╝═╝═╗ ROOT
langit NOUN  <╝       ║ obj
.      PUNCT <════════╝ punct
```

