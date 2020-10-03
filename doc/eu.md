# Analisi sintaktikoa [deplacy](https://koichiyasuoka.github.io/deplacy/)-ren bidez

## [spaCy-ixaKat](https://github.com/KoichiYasuoka/spaCy-ixaKat)-rekin

```py
>>> import spacy_ixakat
>>> nlp=spacy_ixakat.load("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun PROPN <╗           obl
izatea    VERB  ═╝<══════╗   csubj
lan       NOUN  ═╗═╗<╗   ║   obl
extra     NOUN  <╝ ║ ║   ║   nmod
bat       NUM   <══╝ ║   ║   nummod
izatea    VERB  ═════╝<╗ ║   ccomp
da        VERB  ═══════╝═╝═╗ ROOT
.         PUNCT <══════════╝ punct
```

## [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)-rekin

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_eu_bdt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun ADJ   ═╗<══════╗   csubj
izatea    AUX   <╝       ║   cop
lan       NOUN  ═══╗═╗═╗═╝═╗ root
extra     NOUN  ═╗<╝ ║ ║   ║ nmod
bat       NUM   <╝   ║ ║   ║ nummod
izatea    AUX   <════╝ ║   ║ cop
da        AUX   <══════╝   ║ cop
.         PUNCT <══════════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)-rekin

```py
>>> import stanza
>>> nlp=stanza.Pipeline("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  ═╗<════╗   nsubj
izatea    AUX   <╝     ║   cop
lan       NOUN  ═╗═╗<╗ ║   obj
extra     NOUN  <╝ ║ ║ ║   nmod
bat       NUM   <══╝ ║ ║   nummod
izatea    VERB  ═╗═══╝═╝═╗ root
da        AUX   <╝       ║ cop
.         PUNCT <════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-rekin

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  ═╗═════╗═╗═╗ ROOT
izatea    AUX   <╝     ║ ║ ║ cop
lan       NOUN  <══╗   ║ ║ ║ nmod
extra     NOUN  ═╗═╝<╗ ║ ║ ║ nsubj
bat       NUM   <╝   ║ ║ ║ ║ nummod
izatea    VERB  ═════╝<╝ ║ ║ xcomp
da        AUX   <════════╝ ║ cop
.         PUNCT <══════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-rekin

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun ADJ   ═╗<══════╗   xcomp
izatea    AUX   <╝       ║   cop
lan       NOUN  ═╗═╗═╗<╗ ║   xcomp
extra     ADJ   <╝ ║ ║ ║ ║   amod
bat       NUM   <══╝ ║ ║ ║   nummod
izatea    AUX   ═══════╝═╝═╗ root
da        AUX   <════╝     ║ cop
.         PUNCT <══════════╝ punct
```

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)-rekin

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("eu_bdt")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun ADJ   <╗         xcomp
izatea    AUX   ═╝<════╗   cop
lan       NOUN  ═╗═╗<╗ ║   nsubj
extra     NOUN  <╝ ║ ║ ║   nmod
bat       NUM   <══╝ ║ ║   nummod
izatea    VERB  ═╗═══╝═╝═╗ ROOT
da        AUX   <╝       ║ cop
.         PUNCT <════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)-rekin

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  <════════╗   nsubj
izatea    AUX   <══════╗ ║   nsubj
lan       NOUN  ═╗═╗<╗ ║ ║   obj
extra     NOUN  <╝ ║ ║ ║ ║   amod
bat       NUM   <══╝ ║ ║ ║   nummod
izatea    AUX   ═╗═══╝═╝═╝═╗ root
da        AUX   <╝         ║ cop
.         PUNCT <══════════╝ punct
```

