# [deplacy](https://koichiyasuoka.github.io/deplacy/) för syntaktisk analys

## med [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <══════════╗   nsubj
har       AUX   <══╗       ║   aux
förändrat VERB  ═╗═╝═════╗═╝═╗ root
dej       PRON  <╝       ║   ║ obj
och       CCONJ <══════╗ ║   ║ cc
är        VERB  ═══╗═╗═╝<╝   ║ conj
så        ADV   <╗ ║ ║       ║ advmod
långt     ADV   ═╝<╝ ║       ║ advmod
från      ADP   <╗   ║       ║ case
mej       PRON  ═╝<══╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("swedish-ud27")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <══════════╗   nsubj
har       AUX   <══╗       ║   aux
förändrat VERB  ═╗═╝═════╗═╝═╗ root
dej       PRON  <╝       ║   ║ obj
och       CCONJ <══════╗ ║   ║ cc
är        VERB  ═══╗═╗═╝<╝   ║ conj
så        ADV   <╗ ║ ║       ║ advmod
långt     ADV   ═╝<╝ ║       ║ advmod
från      ADP   <╗   ║       ║ case
mej       NOUN  ═╝<══╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("swedish")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <══════════╗   nsubj
har       AUX   <══╗       ║   aux
förändrat VERB  ═╗═╝═════╗═╝═╗ root
dej       PRON  <╝       ║   ║ obj
och       CCONJ <══════╗ ║   ║ cc
är        VERB  ═══╗═╗═╝<╝   ║ conj
så        ADV   <╗ ║ ║       ║ advmod
långt     ADV   ═╝<╝ ║       ║ advmod
från      ADP   <╗   ║       ║ case
mej       PRON  ═╝<══╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("sv")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <════╗         nsubj
har       AUX   <══╗ ║         aux
förändrat VERB  ═╗═╝═╝═════╗═╗ root
dej       PRON  <╝         ║ ║ obj
och       CCONJ <════════╗ ║ ║ cc
är        AUX   <══════╗ ║ ║ ║ cop
så        ADV   <════╗ ║ ║ ║ ║ advmod
långt     ADV   ═══╗═╝═╝═╝<╝ ║ conj
från      ADP   <╗ ║         ║ case
mej       PRON  ═╝<╝         ║ obl
.         PUNCT <════════════╝ punct
```

## med [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("sv_talbanken")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <════╗         nsubj
har       AUX   <══╗ ║         aux
förändrat VERB  ═╗═╝═╝═════╗═╗ ROOT
dej       PRON  <╝         ║ ║ obj
och       CCONJ <════════╗ ║ ║ cc
är        AUX   <══════╗ ║ ║ ║ cop
så        ADV   <════╗ ║ ║ ║ ║ advmod
långt     ADV   ═══╗═╝═╝═╝<╝ ║ conj
från      ADP   <╗ ║         ║ case
mej       PRON  ═╝<╝         ║ obl
.         PUNCT <════════════╝ punct
```

## med [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=sv&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <════╗         nsubj
har       AUX   <══╗ ║         aux
förändrat VERB  ═╗═╝═╝═════╗═╗ root
dej       PRON  <╝         ║ ║ obj
och       CCONJ <════════╗ ║ ║ cc
är        VERB  <══════╗ ║ ║ ║ cop
så        ADV   <════╗ ║ ║ ║ ║ advmod
långt     ADV   ═══╗═╝═╝═╝<╝ ║ conj
från      ADP   <╗ ║         ║ case
mej       NOUN  ═╝<╝         ║ obl
.         PUNCT <════════════╝ punct
```

## med [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("sv")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <════╗       nsubj
har       AUX   <══╗ ║       aux
förändrat VERB  ═╗═╝═╝═══╗═╗ ROOT
dej       PART  <╝       ║ ║ advmod
och       CCONJ <══════╗ ║ ║ cc
är        AUX   <════╗ ║ ║ ║ cop
så        ADV   <╗   ║ ║ ║ ║ advmod
långt     ADV   ═╝<╗ ║ ║ ║ ║ advmod
från      ADP   <╗ ║ ║ ║ ║ ║ case
mej       NOUN  ═╝═╝═╝═╝<╝ ║ conj
.         PUNCT <══════════╝ punct
```

## med [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("sv_talbanken")
>>> doc=nlp("Du har förändrat dej och är så långt från mej.")
>>> import deplacy
>>> deplacy.render(doc)
Du        PRON  <════╗         nsubj
har       AUX   <══╗ ║         aux
förändrat VERB  ═╗═╝═╝═════╗═╗ ROOT
dej       PRON  <╝         ║ ║ obj
och       CCONJ <════════╗ ║ ║ cc
är        AUX   <══╗     ║ ║ ║ cop
så        ADV   <╗ ║     ║ ║ ║ advmod
långt     ADV   ═╝═╝<╗   ║ ║ ║ advmod
från      ADP   ═════╝<╗ ║ ║ ║ case
mej       NOUN  ═══════╝═╝<╝ ║ conj
.         PUNCT <════════════╝ punct
```

