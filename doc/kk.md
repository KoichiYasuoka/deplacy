# Синтаксистік талдау үшін [deplacy](https://koichiyasuoka.github.io/deplacy/)

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html) арқылы талдау

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

## [Stanza](https://stanfordnlp.github.io/stanza) арқылы талдау

```py
>>> import stanza
>>> nlp=stanza.Pipeline("kk")
>>> doc=nlp("Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді.")
>>> import deplacy
>>> deplacy.render(doc)
Тәннен  NOUN  <╗         nmod:poss
жан     NOUN  ═╝<╗       nsubj
артық   VERB  ═╗═╝═╗═══╗ root
еді     AUX   <╝   ║   ║ cop
,       PUNCT <════╝   ║ punct
тәнді   ADJ   <╗       ║ amod
жанға   NOUN  ═╝<╗     ║ obl
бас     NOUN  <╗ ║     ║ nsubj
ұрғызса VERB  ═╝═╝<╗   ║ acl:relcl
керек   PRON  ═╗═══╝═╗<╝ parataxis
еді     AUX   <╝     ║   cop
.       PUNCT <══════╝   punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube) арқылы талдау

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("kk")
>>> doc=nlp("Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді.")
>>> import deplacy
>>> deplacy.render(doc)
Тәннен  PRON  <══╗         nsubj
жан     NOUN  <╗ ║         advcl
артық   AUX   ═╝═╝═╗═╗═══╗ root
еді     AUX   <════╝ ║   ║ punct
,       PUNCT <══════╝   ║ punct
тәнді   NOUN  <╗         ║ nmod:poss
жанға   NOUN  ═╝<╗       ║ nsubj
бас     VERB  ═══╝<╗     ║ nsubj
ұрғызса NOUN  ═════╝<╗   ║ advcl
керек   VERB  ═╗═════╝═╗<╝ parataxis
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

## [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/) арқылы талдау

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_kk_ktb/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді.")
>>> import deplacy
>>> deplacy.render(doc)
Тәннен    NOUN  <════════╗   obl
жан       NOUN  <╗       ║   obl
артық еді VERB  ═╝═╗═════║═╗ root
,         PUNCT <══╝     ║ ║ punct
тәнді     NOUN  <╗       ║ ║ nmod:poss
жанға     NOUN  ═╝<══╗   ║ ║ obl
бас       ADJ   <╗   ║   ║ ║ det
ұрғызса   NOUN  ═╝<╗ ║   ║ ║ cop
керек     ADJ   ═╗═╝═╝═╗═╝<╝ conj
еді       AUX   <╝     ║     cop
.         PUNCT <══════╝     punct
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

