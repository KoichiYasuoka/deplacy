# [deplacy](https://koichiyasuoka.github.io/deplacy/) para análisis sintáctico

## con [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("es")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗             det
pluma  NOUN  ═╝<════════╗   nsubj
es     AUX   <════════╗ ║   cop
la     DET   <══════╗ ║ ║   det
lengua NOUN  ═════╗═╝═╝═╝═╗ root
de     ADP   <══╗ ║       ║ case
el     DET   <╗ ║ ║       ║ det
alma   NOUN  ═╝═╝<╝       ║ nmod
.      PUNCT <════════════╝ punct
```

## con [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("es")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗             det
pluma  NOUN  ═╝<════════╗   nsubj
es     AUX   <════════╗ ║   cop
la     DET   <══════╗ ║ ║   det
lengua NOUN  ═════╗═╝═╝═╝═╗ root
de     ADP   <══╗ ║       ║ case
el     DET   <╗ ║ ║       ║ det
alma   NOUN  ═╝═╝<╝       ║ nmod
.      PUNCT <════════════╝ punct
```

## con [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("es_core_news_sm")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ ROOT
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=es&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("es")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("spanish")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> from spacy.lang.es import Spanish
>>> nlp=Spanish()
>>> import spacy
>>> nlp.pipeline.extend(spacy.load("en_udify").pipeline)
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ root
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("es_ancora")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ ROOT
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

## con [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("es_ancora")
>>> doc=nlp("La pluma es la lengua del alma.")
>>> import deplacy
>>> deplacy.render(doc)
La     DET   <╗           det
pluma  NOUN  ═╝<══════╗   nsubj
es     AUX   <══════╗ ║   cop
la     DET   <════╗ ║ ║   det
lengua NOUN  ═══╗═╝═╝═╝═╗ ROOT
del    ADP   <╗ ║       ║ case
alma   NOUN  ═╝<╝       ║ nmod
.      PUNCT <══════════╝ punct
```

