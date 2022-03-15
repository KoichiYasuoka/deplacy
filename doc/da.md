# [deplacy](https://koichiyasuoka.github.io/deplacy/) til syntaksanalyse

## med [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════╗     advmod
sukkede   VERB  ═════╗═╝═╗═╗ root
den       DET   <══╗ ║   ║ ║ det
lille     ADJ   <╗ ║ ║   ║ ║ amod
havfrue   NOUN  ═╝═╝<╝   ║ ║ nsubj
og        CCONJ <══════╗ ║ ║ cc
så        VERB  ═╗═══╗═╝<╝ ║ conj
bedrøvet  VERB  <╝   ║     ║ xcomp
på        ADP   <══╗ ║     ║ case
sin       DET   <╗ ║ ║     ║ det
fiskehale NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## med [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=da&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════╗     advmod
sukkede   VERB  ═════╗═╝═╗═╗ root
den       DET   <══╗ ║   ║ ║ det
lille     ADJ   <╗ ║ ║   ║ ║ amod
havfrue   NOUN  ═╝═╝<╝   ║ ║ nsubj
og        CCONJ <══════╗ ║ ║ cc
så        VERB  ═╗═══╗═╝<╝ ║ conj
bedrøvet  VERB  <╝   ║     ║ xcomp
på        ADP   <══╗ ║     ║ case
sin       DET   <╗ ║ ║     ║ det
fiskehale NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## med [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("da")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════════╗   advmod
sukkede   VERB  ═════╗═══╗═╝═╗ root
den       DET   <══╗ ║   ║   ║ det
lille     ADJ   <╗ ║ ║   ║   ║ amod
havfrue   NOUN  ═╝═╝<╝   ║   ║ nsubj
og        CCONJ <══════╗ ║   ║ cc
så        VERB  ═╗═══╗═╝<╝   ║ conj
bedrøvet  ADJ   <╝   ║       ║ amod
på        ADP   <══╗ ║       ║ case
sin       DET   <╗ ║ ║       ║ det
fiskehale NOUN  ═╝═╝<╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("danish")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════╗     advmod
sukkede   VERB  ═════╗═╝═╗═╗ root
den       DET   <══╗ ║   ║ ║ det
lille     ADJ   <╗ ║ ║   ║ ║ amod
havfrue   NOUN  ═╝═╝<╝   ║ ║ nsubj
og        CCONJ <══════╗ ║ ║ cc
så        VERB  ═╗═══╗═╝<╝ ║ conj
bedrøvet  ADJ   <╝   ║     ║ amod
på        ADP   <══╗ ║     ║ case
sin       DET   <╗ ║ ║     ║ det
fiskehale NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## med [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("da_core_news_trf")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════╗     advmod
sukkede   VERB  ═════╗═╝═╗═╗ ROOT
den       DET   <══╗ ║   ║ ║ det
lille     ADJ   <╗ ║ ║   ║ ║ amod
havfrue   NOUN  ═╝═╝<╝   ║ ║ nsubj
og        CCONJ <══════╗ ║ ║ cc
så        VERB  ═╗═══╗═╝<╝ ║ conj
bedrøvet  ADV   <╝   ║     ║ amod
på        ADP   <══╗ ║     ║ case
sin       DET   <╗ ║ ║     ║ det
fiskehale NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## med [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("danish-ud27")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════╗       advmod
sukkede   VERB  ═════╗═╝═══╗═╗ root
den       DET   <══╗ ║     ║ ║ det
lille     ADJ   <╗ ║ ║     ║ ║ amod
havfrue   NOUN  ═╝═╝<╝     ║ ║ nsubj
og        CCONJ <══════╗   ║ ║ cc
så        ADV   ═════╗═╝<╗ ║ ║ advmod
bedrøvet  VERB  ═════════╝<╝ ║ conj
på        ADP   <══╗ ║       ║ case
sin       DET   <╗ ║ ║       ║ det
fiskehale NOUN  ═╝═╝<╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("da")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <════════════╗   advmod
sukkede   VERB  ═════╗═════╗═╝═╗ root
den       DET   <══╗ ║     ║   ║ det
lille     ADJ   <╗ ║ ║     ║   ║ amod
havfrue   NOUN  ═╝═╝<╝     ║   ║ nsubj
og        CCONJ <════════╗ ║   ║ cc
så        ADV   <══════╗ ║ ║   ║ advmod
bedrøvet  VERB  ═════╗═╝═╝<╝   ║ conj
på        ADP   <══╗ ║         ║ case
sin       DET   <╗ ║ ║         ║ det
fiskehale NOUN  ═╝═╝<╝         ║ obl
.         PUNCT <══════════════╝ punct
```

## med [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("da_ddt")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════╗       advmod
sukkede   VERB  ═════╗═╝═══╗═╗ ROOT
den       DET   <══╗ ║     ║ ║ det
lille     ADJ   <╗ ║ ║     ║ ║ amod
havfrue   NOUN  ═╝═╝<╝     ║ ║ nsubj
og        CCONJ <════════╗ ║ ║ cc
så        VERB  <══════╗ ║ ║ ║ advmod
bedrøvet  VERB  ═════╗═╝═╝<╝ ║ conj
på        ADP   <══╗ ║       ║ case
sin       DET   <╗ ║ ║       ║ det
fiskehale NOUN  ═╝═╝<╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("da_ddt")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════════╗     advmod
sukkede   VERB  ═════╗═══╗═╝═╗═╗ ROOT
den       DET   <══╗ ║   ║   ║ ║ det
lille     ADJ   <╗ ║ ║   ║   ║ ║ amod
havfrue   NOUN  ═╝═╝<╝   ║   ║ ║ nsubj
og        CCONJ <══════╗ ║   ║ ║ cc
så        ADV   <══════║═╝   ║ ║ advmod
bedrøvet  VERB  ═════╗═╝<════╝ ║ conj
på        ADP   <══╗ ║         ║ case
sin       DET   <╗ ║ ║         ║ det
fiskehale NOUN  ═╝═╝<╝         ║ obl
.         PUNCT <══════════════╝ punct
```

