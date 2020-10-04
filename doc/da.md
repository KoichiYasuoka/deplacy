# [deplacy](https://koichiyasuoka.github.io/deplacy/) til syntaksanalyse

## med [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

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

## med [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_da_ddt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
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
>>> nlp=spacy.load("da_core_news_sm")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════╗       advmod
sukkede   VERB  ═════╗═╝═══╗═╗ ROOT
den       DET   <══╗ ║     ║ ║ det
lille     ADJ   <╗ ║ ║     ║ ║ amod
havfrue   NOUN  ═╝═╝<╝     ║ ║ nsubj
og        CCONJ <════════╗ ║ ║ cc
så        ADV   <══════╗ ║ ║ ║ advmod
bedrøvet  VERB  ═════╗═╝═╝<╝ ║ conj
på        ADP   <══╗ ║       ║ case
sin       DET   <╗ ║ ║       ║ det
fiskehale NOUN  ═╝═╝<╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("da")
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

