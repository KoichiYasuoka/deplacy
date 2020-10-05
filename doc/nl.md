# [deplacy](https://koichiyasuoka.github.io/deplacy/) voor syntactische analyse

## met [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("nl_core_news_sm")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ ROOT
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("nl")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("nl")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("nl")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("nl_alpino")
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ ROOT
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

## met [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_nl_alpino/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Ondanks alles geloof ik in de innerlijke goedheid van de mens.")
>>> import deplacy
>>> deplacy.render(doc)
Ondanks    ADP   <╗                 case
alles      PRON  ═╝<════════════╗   obl
geloof     VERB  ═╗═══════════╗═╝═╗ root
ik         PRON  <╝           ║   ║ nsubj
in         ADP   <══════════╗ ║   ║ case
de         DET   <════════╗ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╝   ║ obl
van        ADP   <══╗ ║           ║ case
de         DET   <╗ ║ ║           ║ det
mens       NOUN  ═╝═╝<╝           ║ nmod
.          PUNCT <════════════════╝ punct
```

