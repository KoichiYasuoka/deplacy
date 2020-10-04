# [deplacy](https://koichiyasuoka.github.io/deplacy/) pour l'analyse syntaxique

## avec [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("fr_core_news_sm")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from spacy.lang.fr import French
>>> nlp=French()
>>> import spacy
>>> nlp.pipeline.extend(spacy.load("en_udify").pipeline)
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("fr_sequoia")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl:mod
.         PUNCT <══════════╝ punct
```

## avec [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_fr_sequoia/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl:mod
.         PUNCT <══════════╝ punct
```

