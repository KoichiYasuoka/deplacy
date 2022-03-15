# [deplacy](https://koichiyasuoka.github.io/deplacy/) за синтактичен анализ

## с [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("bulgarian")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <╗       amod
мечка  NOUN  ═╝<══╗   nsubj
хоро   NOUN  <══╗ ║   obj
не     PART  <╗ ║ ║   advmod
играе  VERB  ═╝═╝═╝═╗ root
.      PUNCT <══════╝ punct
```

## с [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <╗       amod
мечка  NOUN  ═╝<══╗   nsubj
хоро   NOUN  <══╗ ║   nsubj
не     PART  <╗ ║ ║   advmod
играе  VERB  ═╝═╝═╝═╗ root
.      PUNCT <══════╝ punct
```

## с [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=bg&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <╗       amod
мечка  NOUN  ═╝<══╗   obj
хоро   NOUN  <══╗ ║   obj
не     PART  <╗ ║ ║   advmod
играе  VERB  ═╝═╝═╝═╗ root
.      PUNCT <══════╝ punct
```

## с [CLASSLA](https://github.com/clarinsi/classla)

```py
>>> import classla
>>> nlp=classla.Pipeline("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ root
.      PUNCT <══════╝ punct
```

## с [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("bg_btb")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ ROOT
.      PUNCT <══════╝ punct
```

## с [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("bg_btb")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна ADJ   <══╗     amod
мечка  NOUN  ═╗═╝<╗   nsubj
хоро   NOUN  <╝   ║   nmod
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ ROOT
.      PUNCT <══════╝ punct
```

## с [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("bg")
>>> doc=nlp("Гладна мечка хоро не играе.")
>>> import deplacy
>>> deplacy.render(doc)
Гладна DET   <══╗     det
мечка  ADJ   <╗ ║     amod
хоро   NOUN  ═╝═╝<╗   nsubj
не     PART  <╗   ║   advmod
играе  VERB  ═╝═══╝═╗ ROOT
.      PUNCT <══════╝ punct
```

