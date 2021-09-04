# [deplacy](https://koichiyasuoka.github.io/deplacy/) for syntaktisk analyse på nynorsk

## med [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("nn")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════╗       cc
me     PRON  <══╗ ║       nsubj
priser VERB  ═╗═╝═╝═══╗═╗ root
dauden NOUN  <╝       ║ ║ obj
,      PUNCT <══════╗ ║ ║ punct
men    CCONJ <════╗ ║ ║ ║ cc
me     PRON  <══╗ ║ ║ ║ ║ nsubj
elskar VERB  ═╗═╝═╝═╝<╝ ║ conj
live   NOUN  <╝         ║ obj
.      PUNCT <══════════╝ punct
```

## med [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("nn")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════╗       cc
me     PRON  <══╗ ║       nsubj
priser VERB  ═╗═╝═╝═══╗═╗ ROOT
dauden NOUN  <╝       ║ ║ obj
,      PUNCT <══════╗ ║ ║ punct
men    CCONJ <════╗ ║ ║ ║ cc
me     PRON  <══╗ ║ ║ ║ ║ nsubj
elskar VERB  ═╗═╝═╝═╝<╝ ║ conj
live   ADV   <╝         ║ advmod
.      PUNCT <══════════╝ punct
```

## med [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("no_nynorsk")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════╗       cc
me     PRON  <══╗ ║       nsubj
priser VERB  ═╗═╝═╝═╗═╗═╗ ROOT
dauden NOUN  <╝     ║ ║ ║ obj
,      PUNCT <══════╝ ║ ║ punct
men    CCONJ <════╗   ║ ║ cc
me     PRON  <══╗ ║   ║ ║ nsubj
elskar VERB  ═╗═╝═╝<══╝ ║ conj
live   ADJ   <╝         ║ advmod
.      PUNCT <══════════╝ punct
```

## med [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("no_nynorsk")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════╗       cc
me     PRON  <══╗ ║       nsubj
priser VERB  ═╗═╝═╝═╗═╗═╗ ROOT
dauden NOUN  <╝     ║ ║ ║ obj
,      PUNCT <══════╝ ║ ║ punct
men    CCONJ <════╗   ║ ║ cc
me     PRON  <══╗ ║   ║ ║ nsubj
elskar VERB  ═╗═╝═╝<══╝ ║ conj
live   NOUN  <╝         ║ obj
.      PUNCT <══════════╝ punct
```

## med [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=nn&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    CCONJ <════╗       cc
me     PRON  <══╗ ║       nsubj
priser VERB  ═╗═╝═╝═══╗═╗ root
dauden ADJ   <╝       ║ ║ advmod
,      PUNCT <══════╗ ║ ║ punct
men    CCONJ <════╗ ║ ║ ║ cc
me     PRON  <══╗ ║ ║ ║ ║ nsubj
elskar VERB  ═╗═╝═╝═╝<╝ ║ conj
live   ADJ   <╝         ║ advmod
.      PUNCT <══════════╝ punct
```

## med [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("norwegian-nynorsk")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> import deplacy
>>> deplacy.render(doc)
For    ADP   <╗           case
me     PRON  ═╝<╗         obl
priser NOUN  <╗ ║         nsubj
dauden ADJ   ═╝═╝═════╗═╗ root
,      PUNCT <══════╗ ║ ║ punct
men    CCONJ <════╗ ║ ║ ║ cc
me     PRON  <══╗ ║ ║ ║ ║ nsubj
elskar VERB  ═╗═╝═╝═╝<╝ ║ conj
live   ADV   <╝         ║ advmod
.      PUNCT <══════════╝ punct
```

