# [deplacy](https://koichiyasuoka.github.io/deplacy/) za sklandenjsko analizo

## z [CLASSLA](https://github.com/clarinsi/classla)

```py
>>> import classla
>>> nlp=classla.Pipeline("sl")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <╗         case
koroškem  ADJ   ═╝<════╗   obl
po        ADP   <╗     ║   case
kranjskem ADJ   ═╝<══╗ ║   obl
že        PART  <══╗ ║ ║   advmod
ajda      NOUN  <╗ ║ ║ ║   nsubj
zori      VERB  ═╝═╝═╝═╝═╗ root
.         PUNCT <════════╝ punct
```

## z [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=sl&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <╗         case
koroškem  ADJ   ═╝<════╗   obl
po        ADP   <╗     ║   case
kranjskem ADJ   ═╝<══╗ ║   obl
že        PART  <══╗ ║ ║   advmod
ajda      ADV   <╗ ║ ║ ║   advmod
zori      VERB  ═╝═╝═╝═╝═╗ root
.         PUNCT <════════╝ punct
```

## z [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("slovenian-ud27")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <╗         case
koroškem  ADJ   ═╝<════╗   obl
po        ADP   <╗     ║   case
kranjskem ADJ   ═╝<══╗ ║   obl
že        PART  <══╗ ║ ║   advmod
ajda      ADV   <╗ ║ ║ ║   advmod
zori      VERB  ═╝═╝═╝═╝═╗ root
.         PUNCT <════════╝ punct
```

## z [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("sl")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <╗         case
koroškem  ADJ   ═╝<════╗   obl
po        ADP   <╗     ║   case
kranjskem ADJ   ═╝<══╗ ║   obl
že        PART  <══╗ ║ ║   advmod
ajda      ADV   <╗ ║ ║ ║   advmod
zori      VERB  ═╝═╝═╝═╝═╗ ROOT
.         PUNCT <════════╝ punct
```

## z [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <════╗     case
koroškem  ADJ   ═══╗═╝<╗   obl
po        ADP   <╗ ║   ║   case
kranjskem ADJ   ═╝<╝   ║   conj
že        PART  <══╗   ║   advmod
ajda      PART  <╗ ║   ║   advmod
zori      VERB  ═╝═╝═══╝═╗ root
.         PUNCT <════════╝ punct
```

## z [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("slovenian")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <╗         case
koroškem  PROPN ═╝<════╗   obl
po        ADP   <╗     ║   case
kranjskem ADJ   ═╝<══╗ ║   obl
že        PART  <══╗ ║ ║   advmod
ajda      ADV   <╗ ║ ║ ║   advmod
zori      VERB  ═╝═╝═╝═╝═╗ root
.         PUNCT <════════╝ punct
```

## z [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("sl_ssj")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <════╗     case
koroškem  PROPN ═══╗═╝<╗   obl
po        ADP   <╗ ║   ║   case
kranjskem PROPN ═╝<╝   ║   nmod
že        PART  <══╗   ║   advmod
ajda      PROPN <╗ ║   ║   nsubj
zori      VERB  ═╝═╝═══╝═╗ ROOT
.         PUNCT <════════╝ punct
```

## z [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("sl_ssj")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <════╗     case
koroškem  PROPN ═══╗═╝<╗   obl
po        ADP   <╗ ║   ║   case
kranjskem ADJ   ═╝<╝   ║   nmod
že        PART  <══╗   ║   advmod
ajda      VERB  ═╗═╝═══╝═╗ ROOT
zori      NOUN  <╝       ║ obj
.         PUNCT <════════╝ punct
```

## z [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("sl")
>>> doc=nlp("Po koroškem po kranjskem že ajda zori.")
>>> import deplacy
>>> deplacy.render(doc)
Po        ADP   <════╗       case
koroškem  ADJ   ═══╗═╝<══╗   amod
po        ADP   <══║═══╗ ║   case
kranjskem ADJ   ═╗ ║<╗ ║ ║   amod
že        PART   ║<╝ ║ ║ ║   advmod
ajda      ADJ   <╝   ║ ║ ║   conj
zori      NOUN  ═════╝═╝═╝═╗ root
.         PUNCT <══════════╝ punct
```

