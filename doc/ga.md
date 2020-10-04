# Anailís ghramadaí trí [deplacy](https://koichiyasuoka.github.io/deplacy/)

## le [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ga")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ nmod
.         PUNCT <════════╝ punct
```

## le [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ga")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ ROOT
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ nmod
.         PUNCT <════════╝ punct
```

## le [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("ga_idt")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ ROOT
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ compound
.         PUNCT <════════╝ punct
```

## le [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_ga_idt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ compound
.         PUNCT <════════╝ punct
```

## le [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ obl
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ compound
.         PUNCT <════════╝ punct
```

## le [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ga")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ obl
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ compound
.         PUNCT <════════╝ punct
```

