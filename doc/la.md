# Analysis syntaxis super [deplacy](https://koichiyasuoka.github.io/deplacy/)

## per [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("la_ittb")
>>> doc=nlp("Cras amet qui numquam amavit, quique amavit cras amet.")
>>> import deplacy
>>> deplacy.render(doc)
Cras    NOUN  <══════════╗   obj
amet    VERB  ═══════╗═╗═╝═╗ ROOT
qui     PRON  <══╗   ║ ║   ║ nsubj
numquam ADV   <╗ ║   ║ ║   ║ advmod:emph
amavit  VERB  ═╝═╝═╗<╝ ║   ║ csubj
,       PUNCT <════╝   ║   ║ punct
quique  PRON  <════╗   ║   ║ nsubj
amavit  VERB  ═══╗═╝<══╝   ║ csubj
cras    NOUN  <╗ ║         ║ obj
amet    VERB  ═╝<╝         ║ ccomp
.       PUNCT <════════════╝ punct
```

## per [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("latin")
>>> doc=nlp("Cras amet qui numquam amavit, quique amavit cras amet.")
>>> import deplacy
>>> deplacy.render(doc)
Cras    NOUN  <══════╗     nsubj
amet    VERB  ═════╗═╝═╗═╗ root
qui     PRON  <══╗ ║   ║ ║ nsubj
numquam ADV   <╗ ║ ║   ║ ║ advmod
amavit  VERB  ═╝═╝<╝   ║ ║ csubj
,       PUNCT <══════╗ ║ ║ punct
quique  PRON  <════╗ ║ ║ ║ nsubj
amavit  VERB  ═══╗═╝═╝<╝ ║ conj
cras    ADV   <╗ ║       ║ obj
amet    VERB  ═╝<╝       ║ ccomp
.       PUNCT <══════════╝ punct
```

## per [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("la")
>>> doc=nlp("Cras amet qui numquam amavit, quique amavit cras amet.")
>>> import deplacy
>>> deplacy.render(doc)
Cras    PRON  <══════════════╗   nsubj
amet    VERB  ═════════════╗═╝═╗ root
qui     PRON  <══════════╗ ║   ║ nsubj
numquam ADV   <╗         ║ ║   ║ advmod:emph
amavit  VERB  ═╝═══════╗═╝<╝   ║ ccomp
,       PUNCT <══════╗ ║       ║ punct
quique  PRON  <════╗ ║ ║       ║ nsubj
amavit  VERB  ═╗═╗═╝═╝<╝       ║ conj
cras    PRON  <╝ ║             ║ obj
amet    VERB  <══╝             ║ ccomp
.       PUNCT <════════════════╝ punct
```

## per [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=la&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Cras amet qui numquam amavit, quique amavit cras amet.")
>>> import deplacy
>>> deplacy.render(doc)
Cras    NOUN  ═════╗<══╗     nsubj
amet    VERB  ═══════╗═╝═╗═╗ root
qui     PRON  <══╗ ║ ║   ║ ║ nsubj
numquam ADV   <╗ ║ ║ ║   ║ ║ advmod:emph
amavit  VERB  ═╝═╝<╝ ║   ║ ║ acl:relcl
,       PUNCT <══╗   ║   ║ ║ punct
quique  PRON  <╗ ║   ║   ║ ║ obj
amavit  VERB  ═╝═╝<══╝   ║ ║ ccomp
cras    NOUN  <╗         ║ ║ obj
amet    VERB  ═╝<════════╝ ║ conj
.       PUNCT <════════════╝ punct
```

## per [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("la")
>>> doc=nlp("Cras amet qui numquam amavit, quique amavit cras amet.")
>>> import deplacy
>>> deplacy.render(doc)
Cras    PROPN ═╗═════╗<╗   nsubj
amet    PRON  <╝     ║ ║   det
qui     PRON  <══╗   ║ ║   nsubj
numquam ADV   <╗ ║   ║ ║   advmod
amavit  VERB  ═╝═╝═╗<╝ ║   acl:relcl
,       PUNCT <════╝   ║   punct
quique  ADV   <════╗   ║   advmod
amavit  VERB  ═══╗═╝═══╝═╗ ROOT
cras    NOUN  <╗ ║       ║ obj
amet    VERB  ═╝<╝       ║ ccomp
.       PUNCT <══════════╝ punct
```

## per [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Cras amet qui numquam amavit, quique amavit cras amet.")
>>> import deplacy
>>> deplacy.render(doc)
Cras    NOUN  ═════╗<╗         nsubj
amet    VERB  ═══════╝═╗═╗═╗═╗ root
qui     PRON  <══╗ ║   ║ ║ ║ ║ nsubj
numquam ADV   <╗ ║ ║   ║ ║ ║ ║ advmod
amavit  VERB  ═╝═╝<╝   ║ ║ ║ ║ acl
,       PUNCT <════════╝ ║ ║ ║ punct
quique  PRON  <╗         ║ ║ ║ nsubj
amavit  VERB  ═╝<════════╝ ║ ║ conj
cras    ADV   <╗           ║ ║ advmod
amet    VERB  ═╝<══════════╝ ║ conj
.       PUNCT <══════════════╝ punct
```

## per [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("la_ittb")
>>> doc=nlp("Cras amet qui numquam amavit, quique amavit cras amet.")
>>> import deplacy
>>> deplacy.render(doc)
Cras    NOUN  <╗                 nsubj
amet    VERB  ═╝═══════════════╗ ROOT
qui     PRON  <════════════╗   ║ nsubj
numquam ADV   <══════════╗ ║   ║ advmod:emph
amavit  VERB  ═════════╗═╝═╝<╗ ║ csubj
,       PUNCT <══════╗ ║     ║ ║ punct
quique  PRON  <════╗ ║ ║     ║ ║ obj
amavit  VERB  ═══╗═╝═╝<╝     ║ ║ acl
cras    NOUN  <╗ ║           ║ ║ obj
amet    VERB  ═╝<╝           ║ ║ ccomp
.       PUNCT ═══════════════╝<╝ punct
```

