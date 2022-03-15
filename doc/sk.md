# [deplacy](https://koichiyasuoka.github.io/deplacy/) pre syntaktickú analýzu

## s [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  ═════╗═╗<╗   nsubj
druhému ADJ   <╗   ║ ║ ║   amod
jamu    NOUN  ═╝<╗ ║ ║ ║   obj
kope    VERB  ═══╝<╝ ║ ║   acl
sám     DET   <══════╝ ║   xcomp
do      ADP   <╗       ║   case
nej     PRON  ═╝<╗     ║   obl
spadne  VERB  ═══╝═════╝═╗ root
.       PUNCT <══════════╝ punct
```

## s [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=sk&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  <════╗     nsubj
druhému ADJ   <╗   ║     amod
jamu    NOUN  ═╝<╗ ║     obj
kope    VERB  ═══╝═╝<╗   advcl
sám     DET   <════╗ ║   xcomp
do      ADP   <╗   ║ ║   case
nej     PRON  ═╝<╗ ║ ║   obl
spadne  VERB  ═══╝═╝═╝═╗ root
.       PUNCT <════════╝ punct
```

## s [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("slovak")
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  <════╗     nsubj
druhému ADJ   <╗   ║     amod
jamu    NOUN  ═╝<╗ ║     obj
kope    VERB  ═══╝═╝<╗   ccomp
sám     DET   <════╗ ║   xcomp
do      ADP   <╗   ║ ║   case
nej     PRON  ═╝<╗ ║ ║   obl
spadne  VERB  ═══╝═╝═╝═╗ root
.       PUNCT <════════╝ punct
```

## s [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("sk")
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  ═══╗<══╗   nsubj
druhému ADJ   <╗ ║   ║   amod
jamu    NOUN  ═╝<╝   ║   obj
kope    VERB  ═╗═╗═╗═╝═╗ ROOT
sám     DET   <╝ ║ ║   ║ obl
do      ADP   <╗ ║ ║   ║ case
nej     PRON  ═╝<╝ ║   ║ obl
spadne  VERB  <════╝   ║ conj
.       PUNCT <════════╝ punct
```

## s [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("sk")
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  ═══╗<══╗     nsubj
druhému ADJ   <╗ ║   ║     amod
jamu    NOUN  ═╝<╝   ║     nmod
kope    VERB  ═════╗═╝<╗   csubj
sám     DET   ═══╗<╝   ║   obl
do      ADP   <╗ ║     ║   case
nej     PRON  ═╝<╝     ║   obl
spadne  VERB  ═════════╝═╗ root
.       PUNCT <══════════╝ punct
```

## s [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("sk_snk")
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  <══════╗   nsubj
druhému ADJ   <╗     ║   amod
jamu    NOUN  ═╝<╗   ║   nmod
kope    NOUN  ═╗═╝<╗ ║   obj
sám     DET   <╝   ║ ║   xcomp
do      ADP   <╗   ║ ║   case
nej     PRON  ═╝<╗ ║ ║   obl
spadne  VERB  ═══╝═╝═╝═╗ ROOT
.       PUNCT <════════╝ punct
```

## s [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("sk")
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  ═════╗<══╗   nsubj
druhému ADJ   <══╗ ║   ║   amod
jamu    NOUN  ═╗═╝ ║<╗ ║   obj
kope    NOUN  <╝   ║ ║ ║   nmod
sám     DET   <════╝ ║ ║   xcomp
do      ADP   <╗     ║ ║   case
nej     PRON  ═╝<╗   ║ ║   obl
spadne  VERB  ═══╝═══╝═╝═╗ root
.       PUNCT <══════════╝ punct
```

## s [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("sk_snk")
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  <══════════╗   nsubj
druhému ADJ   <╗         ║   amod
jamu    NOUN  ═╝<══════╗ ║   obj
kope    ADV   <══════╗ ║ ║   advmod
sám     DET   <════╗ ║ ║ ║   obl
do      ADP   <╗   ║ ║ ║ ║   case
nej     PRON  ═╝<╗ ║ ║ ║ ║   obl
spadne  VERB  ═══╝═╝═╝═╝═╝═╗ ROOT
.       PUNCT <════════════╝ punct
```

## s [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("slovak-ud27")
>>> doc=nlp("Kto druhému jamu kope sám do nej spadne.")
>>> import deplacy
>>> deplacy.render(doc)
Kto     PRON  <══════════╗   nsubj
druhému ADJ   <╗         ║   amod
jamu    NOUN  ═╝<══════╗ ║   obj
kope    NOUN  <══════╗ ║ ║   advmod
sám     DET   <════╗ ║ ║ ║   xcomp
do      ADP   <╗   ║ ║ ║ ║   case
nej     PRON  ═╝<╗ ║ ║ ║ ║   obl
spadne  VERB  ═══╝═╝═╝═╝═╝═╗ root
.       PUNCT <════════════╝ punct
```

