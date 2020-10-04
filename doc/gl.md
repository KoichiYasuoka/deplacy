# [deplacy](https://koichiyasuoka.github.io/deplacy/) para a análise sintática do galego

## con [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando ADV   <══╗       advmod
hai   VERB  ═╗═╝<══╗   advcl
fame  NOUN  <╝     ║   obj
non   ADV   <════╗ ║   advmod
hai   VERB  ═══╗═╝═╝═╗ root
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ amod
.     PUNCT <════════╝ punct
```

## con [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("gl")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══════════╗ nsubj
hai   VERB  ═╗═══════╗═╝ root
fame  NOUN  <╝       ║   obj
non   PART  <════╗   ║   advmod
hai   VERB  ═══╗═╝═╗<╝   ccomp
pan   NOUN  ═╗<╝   ║     obj
duro  ADJ   <╝     ║     amod
.     PUNCT <══════╝     punct
```

## con [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_gl_ctg/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══╗       case
hai   VERB  ═╗═╝<══╗   nsubj
fame  NOUN  <╝     ║   obj
non   PART  <════╗ ║   advmod
hai   VERB  ═══╗═╝═╝═╗ root
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ amod
.     PUNCT <════════╝ punct
```

## con [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("gl")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══╗       case
hai   VERB  ═╗═╝<══╗   nsubj
fame  NOUN  <╝     ║   obj
non   PART  <════╗ ║   advmod
hai   VERB  ═══╗═╝═╝═╗ root
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ obj
.     PUNCT <════════╝ punct
```

## con [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("gl")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══════════╗   nsubj
hai   VERB  <════════╗ ║   aux
fame  VERB  ═══════╗═╝═╝═╗ ROOT
non   PART  <════╗ ║     ║ advmod
hai   VERB  ═══╗═╝<╝     ║ obj
pan   NOUN  ═╗<╝         ║ obj
duro  ADJ   <╝           ║ amod
.     PUNCT <════════════╝ punct
```

## con [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("gl_ctg")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══╗       nsubj
hai   VERB  ═╗═╝<══╗   nsubj
fame  NOUN  <╝     ║   obj
non   PART  <════╗ ║   advmod
hai   VERB  ═══╗═╝═╝═╗ ROOT
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ amod
.     PUNCT <════════╝ punct
```

