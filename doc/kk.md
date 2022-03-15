# Синтаксистік талдау үшін [deplacy](https://koichiyasuoka.github.io/deplacy/)

## [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html) арқылы талдау

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді.")
>>> import deplacy
>>> deplacy.render(doc)
Тәннен  NOUN  <════╗       obl
жан     NOUN  <══╗ ║       nsubj
артық   ADJ   ═╗═╝═╝═════╗ root
еді     AUX   <╝         ║ cop
,       PUNCT <══════╗   ║ punct
тәнді   ADJ   <╗     ║   ║ amod
жанға   NOUN  ═╝<╗   ║   ║ obl
бас     ADJ   <╗ ║   ║   ║ obj
ұрғызса VERB  ═╝═╝<╗ ║   ║ ccomp
керек   ADJ   ═╗═══╝═╝═╗<╝ conj
еді     AUX   <╝       ║   cop
.       PUNCT <════════╝   punct
```

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO) арқылы талдау

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("kk_ktb")
>>> doc=nlp("Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді.")
>>> import deplacy
>>> deplacy.render(doc)
Тәннен  VERB  <╗       obl
жан     NOUN  ═╝<╗     nsubj
артық   ADJ   ═╗═╝═╗   ROOT
еді     AUX   <╝   ║   cop
,       PUNCT <════╝   punct
тәнді   ADJ   <╗       nmod:poss
жанға   NOUN  ═╝<══╗   nsubj
бас     ADJ   <╗   ║   amod
ұрғызса NOUN  ═╝<╗ ║   xcomp
керек   NOUN  ═╗═╝═╝═╗ ROOT
еді     AUX   <╝     ║ cop
.       PUNCT <══════╝ punct
```

## [Trankit](https://github.com/nlp-uoregon/trankit) арқылы талдау

```py
>>> import trankit
>>> nlp=trankit.Pipeline("kazakh")
>>> doc=nlp("Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді.")
>>> import deplacy
>>> deplacy.render(doc)
Тәннен  NOUN  <════════╗           obl
жан     NOUN  <══════╗ ║           nsubj
артық   ADJ   ═══════║═║═╗<══╗     advcl
еді     AUX          ║ ║ ║<╗ ║     cop
,       PUNCT        ║ ║ ║ ║ ║<╗   punct
тәнді   NOUN  <════╗ ║ ║ ║ ║ ║ ║   obj
жанға   NOUN  <══╗ ║ ║ ║ ║ ║ ║ ║   obl
бас     NOUN  <╗ ║ ║ ║ ║ ║ ║ ║ ║   obj
ұрғызса VERB  ═╝═╝═╝═╝═╝<╝ ║ ║ ║   parataxis
керек   ADJ   ═╗═══════════╝═╝═╝═╗ root
еді     AUX   <╝                 ║ cop
.       PUNCT <══════════════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube) арқылы талдау

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("kk")
>>> doc=nlp("Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді.")
>>> import deplacy
>>> deplacy.render(doc)
Тәннен           NOUN  <════╗     obl
жан              NOUN  <══╗ ║     nsubj
артық            ADJ   ═╗═╝═╝═╗═╗ root
еді              AUX   <╝     ║ ║ cop
,                PUNCT <══════╝ ║ punct
тәнді            ADJ   <════╗   ║ obj
жанға            NOUN  <══╗ ║   ║ obl
бас              NOUN  <╗ ║ ║   ║ obj
ұрғызсакерекеді. VERB  ═╝═╝═╝<══╝ conj
```

## [kazdet](https://github.com/nlacslab/kazdet) арқылы талдау

```py
>>> import ufal.udpipe
>>> model=ufal.udpipe.Model.load("udpipe_kdt_001.mdl")
>>> nlp=ufal.udpipe.Pipeline(model,"tokenize","","","").process
>>> doc=nlp("Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді.")
>>> import deplacy
>>> deplacy.render(doc)
Тәннен  NOUN  <════╗         nsubj
жан     NOUN  <══╗ ║         dobj
артық   VERB  ═╗═╝═╝<══╗     advcl
еді     AUX   <╝       ║     aux
,       PUNCT <════════║═╗   punct
тәнді   ADJ   <╗       ║ ║   amod
жанға   NOUN  ═╝<════╗ ║ ║   nmod
бас     NOUN  <════╗ ║ ║ ║   nsubj
ұрғызса VERB  ═╗═╗═╝═╝═╝═╝═╗ root
керек   AUX   <╝ ║         ║ aux
еді     AUX   <══╝         ║ aux
.       PUNCT <════════════╝ punct
```

