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

## [NLP-Cube](https://github.com/Adobe/NLP-Cube) ile analiz

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("tr")
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

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html) ile analiz

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

