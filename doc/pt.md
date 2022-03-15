# [deplacy](https://koichiyasuoka.github.io/deplacy/) para análise sintática

## com [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("pt_core_news_sm")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══╗       nsubj
quis VERB  ═╗═╝═══╗═╗ ROOT
amar VERB  <╝     ║ ║ xcomp
,    PUNCT <════╗ ║ ║ punct
mas  CCONJ <══╗ ║ ║ ║ cc
tive VERB  ═╗═╝═╝<╝ ║ conj
medo NOUN  <╝       ║ obj
.    PUNCT <════════╝ punct
```

## com [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══╗       nsubj
quis VERB  ═╗═╝═══╗═╗ root
amar VERB  <╝     ║ ║ xcomp
,    PUNCT <════╗ ║ ║ punct
mas  CCONJ <══╗ ║ ║ ║ cc
tive VERB  ═╗═╝═╝<╝ ║ conj
medo NOUN  <╝       ║ obj
.    PUNCT <════════╝ punct
```

## com [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("pt")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══╗       nsubj
quis VERB  ═╗═╝═══╗═╗ root
amar VERB  <╝     ║ ║ xcomp
,    PUNCT <════╗ ║ ║ punct
mas  CCONJ <══╗ ║ ║ ║ cc
tive VERB  ═╗═╝═╝<╝ ║ conj
medo NOUN  <╝       ║ obj
.    PUNCT <════════╝ punct
```

## com [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("portuguese-ud27")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══╗       nsubj
quis VERB  ═╗═╝═══╗═╗ root
amar VERB  <╝     ║ ║ xcomp
,    PUNCT <════╗ ║ ║ punct
mas  CCONJ <══╗ ║ ║ ║ cc
tive VERB  ═╗═╝═╝<╝ ║ conj
medo NOUN  <╝       ║ obj
.    PUNCT <════════╝ punct
```

## com [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("pt_bosque")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══╗       nsubj
quis VERB  ═╗═╝═══╗═╗ ROOT
amar VERB  <╝     ║ ║ xcomp
,    PUNCT <════╗ ║ ║ punct
mas  CCONJ <══╗ ║ ║ ║ cc
tive VERB  ═╗═╝═╝<╝ ║ conj
medo NOUN  <╝       ║ obj
.    PUNCT <════════╝ punct
```

## com [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("pt_bosque")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══╗       nsubj
quis VERB  ═╗═╝═══╗═╗ ROOT
amar VERB  <╝     ║ ║ xcomp
,    PUNCT <════╗ ║ ║ punct
mas  CCONJ <══╗ ║ ║ ║ cc
tive VERB  ═╗═╝═╝<╝ ║ conj
medo NOUN  <╝       ║ obj
.    PUNCT <════════╝ punct
```

## com [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=pt&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══╗       nsubj
quis VERB  ═╗═╝═══╗═╗ root
amar VERB  <╝     ║ ║ xcomp
,    PUNCT <════╗ ║ ║ punct
mas  CCONJ <══╗ ║ ║ ║ cc
tive VERB  ═╗═╝═╝<╝ ║ conj
medo NOUN  <╝       ║ obj
.    PUNCT <════════╝ punct
```

## com [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("pt")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══════════╗   nsubj
quis VERB  ═════════╗═╝═╗ ROOT
amar VERB  ═══════╗<╝   ║ xcomp
,    PUNCT <════╗ ║     ║ punct
mas  CCONJ <══╗ ║ ║     ║ cc
tive VERB  ═╗═╝═╝<╝     ║ conj
medo NOUN  <╝           ║ obj
.    PUNCT <════════════╝ punct
```

## com [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("portuguese")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu       PRON  <════╗     nsubj
quis     VERB  ═╗═╗═╝═╗═╗ root
amar     VERB  <╝ ║   ║ ║ xcomp
,        PUNCT <══║═══╝ ║ punct
mas tive CCONJ ═╗<╝     ║ cc
medo     NOUN  <╝       ║ obj
.        PUNCT <════════╝ punct
```
