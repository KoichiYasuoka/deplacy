# [deplacy](https://koichiyasuoka.github.io/deplacy/)'de sözdizimsel analiz

## [Stanza](https://stanfordnlp.github.io/stanza) ile analiz

```py
>>> import stanza
>>> nlp=stanza.Pipeline("tr")
>>> doc=nlp("İyi insan sözünün üstüne gelir.")
>>> import deplacy
>>> deplacy.render(doc)
İyi     ADJ   <╗       amod
insan   NOUN  ═╝<══╗   nsubj
sözünün NOUN  <╗   ║   nmod:poss
üstüne  ADJ   ═╝<╗ ║   amod
gelir   VERB  ═══╝═╝═╗ root
.       PUNCT <══════╝ punct
```

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO) ile analiz

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("tr_imst")
>>> doc=nlp("İyi insan sözünün üstüne gelir.")
>>> import deplacy
>>> deplacy.render(doc)
İyi     ADJ   <╗       amod
insan   NOUN  ═╝<══╗   nsubj
sözünün NOUN  <╗   ║   nmod:poss
üstüne  ADJ   ═╝<╗ ║   amod
gelir   VERB  ═══╝═╝═╗ ROOT
.       PUNCT <══════╝ punct
```

## [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP) ile analiz

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("tr_imst")
>>> doc=nlp("İyi insan sözünün üstüne gelir.")
>>> import deplacy
>>> deplacy.render(doc)
İyi     ADJ   <╗       amod
insan   NOUN  ═╝<══╗   nsubj
sözünün NOUN  <╗   ║   nmod:poss
üstüne  ADJ   ═╝<╗ ║   amod
gelir   VERB  ═══╝═╝═╗ ROOT
.       PUNCT <══════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html) ile analiz

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("İyi insan sözünün üstüne gelir.")
>>> import deplacy
>>> deplacy.render(doc)
İyi     ADJ   <══════╗   amod
insan   NOUN  <════╗ ║   nsubj
sözünün NOUN  <╗   ║ ║   nmod:poss
üstüne  ADJ   ═╝<╗ ║ ║   amod
gelir   VERB  ═══╝═╝═╝═╗ root
.       PUNCT <════════╝ punct
```

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2) ile analiz

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=tr&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("İyi insan sözünün üstüne gelir.")
>>> import deplacy
>>> deplacy.render(doc)
İyi     ADJ   <╗         amod
insan   NOUN  ═╝<╗       nmod:poss
sözünün NOUN  ═══╝<╗     nmod:poss
üstüne  ADJ   ═════╝<╗   amod
gelir   VERB  ═══════╝═╗ root
.       PUNCT <════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe) ile analiz

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("tr")
>>> doc=nlp("İyi insan sözünün üstüne gelir.")
>>> import deplacy
>>> deplacy.render(doc)
İyi     ADJ   <══╗       amod
insan   NOUN  <╗ ║       nmod:poss
sözünün NOUN  ═╝═╝<╗     nmod:poss
üstüne  ADJ   ═════╝<╗   amod
gelir   VERB  ═══════╝═╗ ROOT
.       PUNCT <════════╝ punct
```

## [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo) ile analiz

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("turkish-ud27")
>>> doc=nlp("İyi insan sözünün üstüne gelir.")
>>> import deplacy
>>> deplacy.render(doc)
İyi     ADJ   <╗         amod
insan   NOUN   ║<════╗   nsubj
sözünün NOUN  ═╝<╗   ║   nmod:poss
üstüne  ADJ   ═══╝<╗ ║   obl
gelir   VERB  ═════╝═╝═╗ root
.       PUNCT <════════╝ punct
```

## [Trankit](https://github.com/nlp-uoregon/trankit) ile analiz

```py
>>> import trankit
>>> nlp=trankit.Pipeline("turkish")
>>> doc=nlp("İyi insan sözünün üstüne gelir.")
>>> import deplacy
>>> deplacy.render(doc)
İyi     ADJ   <╗       amod
insan   NOUN  ═╝<╗     nsubj
sözünün NOUN  ═╗═╝<╗   nmod:poss
üstüne  ADJ   ═════╝═╗ root
gelir   VERB  <╝     ║ compound
.       PUNCT <══════╝ punct
```

