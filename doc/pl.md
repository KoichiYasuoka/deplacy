# [deplacy](https://koichiyasuoka.github.io/deplacy/) do analizy składniowej

## z [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("pl_core_news_sm")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗         advmod
nie        PART  <════╗ ║         advmod
chcemy     VERB  ═══╗═╝═╝═════╗═╗ ROOT
zdobywać   VERB  ═╗<╝         ║ ║ xcomp
kosmosu    NOUN  <╝           ║ ║ obj
,          PUNCT <══════════╗ ║ ║ punct
chcemy     VERB  ═════════╗═╝<╝ ║ conj
tylko      PART  <══════╗ ║     ║ advmod
rozszerzyć VERB  ═╗═══╗═╝<╝     ║ xcomp
Ziemię     NOUN  <╝   ║         ║ obj
do         ADP   <══╗ ║         ║ case
jego       PRON  <╗ ║ ║         ║ nmod
granic     NOUN  ═╝═╝<╝         ║ obl:arg
.          PUNCT <══════════════╝ punct
```

## z [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗         advmod
nie        PART  <════╗ ║         advmod
chcemy     VERB  ═══╗═╝═╝═════╗═╗ root
zdobywać   VERB  ═╗<╝         ║ ║ xcomp
kosmosu    NOUN  <╝           ║ ║ obj
,          PUNCT <══════════╗ ║ ║ punct
chcemy     VERB  ═════════╗═╝<╝ ║ conj
tylko      PART  <══════╗ ║     ║ advmod
rozszerzyć VERB  ═╗═══╗═╝<╝     ║ xcomp
Ziemię     PROPN <╝   ║         ║ obj
do         ADP   <══╗ ║         ║ case
jego       PRON  <╗ ║ ║         ║ nmod:poss
granic     NOUN  ═╝═╝<╝         ║ obl
.          PUNCT <══════════════╝ punct
```

## z [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("pl")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗         advmod
nie        PART  <════╗ ║         advmod:neg
chcemy     VERB  ═══╗═╝═╝═════╗═╗ root
zdobywać   VERB  ═╗<╝         ║ ║ xcomp
kosmosu    NOUN  <╝           ║ ║ obj
,          PUNCT <══════════╗ ║ ║ punct
chcemy     VERB  ═════════╗═╝<╝ ║ conj
tylko      PART  <══════╗ ║     ║ advmod:emph
rozszerzyć VERB  ═╗═══╗═╝<╝     ║ xcomp
Ziemię     PROPN <╝   ║         ║ obj
do         ADP   <══╗ ║         ║ case
jego       PRON  <╗ ║ ║         ║ nmod
granic     NOUN  ═╝═╝<╝         ║ obl
.          PUNCT <══════════════╝ punct
```

## z [COMBO-pytorch](https://github.com/ipipan/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.SemanticMultitaskPredictor.from_pretrained("polish-herbert-large")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗         advmod
nie        PART  <════╗ ║         advmod:neg
chcemy     VERB  ═══╗═╝═╝═════╗═╗ root
zdobywać   VERB  ═╗<╝         ║ ║ xcomp
kosmosu    NOUN  <╝           ║ ║ obj
,          PUNCT <══════════╗ ║ ║ punct
chcemy     VERB  ═════════╗═╝<╝ ║ conj
tylko      PART  <══════╗ ║     ║ advmod:emph
rozszerzyć VERB  ═╗═══╗═╝<╝     ║ xcomp
Ziemię     PROPN <╝   ║         ║ obj
do         ADP   <══╗ ║         ║ case
jego       PRON  <╗ ║ ║         ║ nmod
granic     NOUN  ═╝═╝<╝         ║ obl
.          PUNCT <══════════════╝ punct
```

## z [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=pl&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗         advmod
nie        PART  <════╗ ║         advmod:neg
chcemy     VERB  ═══╗═╝═╝═════╗═╗ root
zdobywać   VERB  ═╗<╝         ║ ║ xcomp
kosmosu    NOUN  <╝           ║ ║ obj
,          PUNCT <══════════╗ ║ ║ punct
chcemy     VERB  ═════════╗═╝<╝ ║ conj
tylko      PART  <══════╗ ║     ║ advmod:emph
rozszerzyć VERB  ═╗═══╗═╝<╝     ║ xcomp
Ziemię     PROPN <╝   ║         ║ obj
do         ADP   <══╗ ║         ║ case
jego       PRON  <╗ ║ ║         ║ nmod
granic     NOUN  ═╝═╝<╝         ║ obl
.          PUNCT <══════════════╝ punct
```

## z [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("pl",ignore_tag_map=True)
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗         advmod
nie        PART  <════╗ ║         advmod:neg
chcemy     VERB  ═══╗═╝═╝═════╗═╗ ROOT
zdobywać   VERB  ═╗<╝         ║ ║ xcomp
kosmosu    NOUN  <╝           ║ ║ obj
,          PUNCT <══════════╗ ║ ║ punct
chcemy     VERB  ═════════╗═╝<╝ ║ conj
tylko      PART  <══════╗ ║     ║ advmod:emph
rozszerzyć VERB  ═╗═══╗═╝<╝     ║ xcomp
Ziemię     PROPN <╝   ║         ║ obj
do         ADP   <══╗ ║         ║ case
jego       PRON  <╗ ║ ║         ║ nmod
granic     NOUN  ═╝═╝<╝         ║ obl
.          PUNCT <══════════════╝ punct
```

## z [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("pl")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗       advmod
nie        PART  <════╗ ║       advmod
chcemy     VERB  ═══╗═╝═╝═══╗═╗ root
zdobywać   VERB  ═╗<╝       ║ ║ xcomp
kosmosu    NOUN  <╝         ║ ║ obj
,          PUNCT <════════╗ ║ ║ punct
chcemy     VERB  ═╗═════╗═╝<╝ ║ conj
tylko      PART  <╝     ║     ║ advmod
rozszerzyć VERB  ═╗═══╗<╝     ║ xcomp
Ziemię     NOUN  <╝   ║       ║ obj
do         ADP   <══╗ ║       ║ case
jego       PRON  <╗ ║ ║       ║ nmod:poss
granic     NOUN  ═╝═╝<╝       ║ obl
.          PUNCT <════════════╝ punct
```

## z [spaCy-COMBO](http://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("pl_lfg")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗       advmod
nie        PART  <════╗ ║       advmod
chcemy     VERB  ═══╗═╝═╝═══╗═╗ ROOT
zdobywać   VERB  ═╗<╝       ║ ║ xcomp
kosmosu    NOUN  <╝         ║ ║ obj
,          PUNCT <════════╗ ║ ║ punct
chcemy     VERB  ═╗═════╗═╝<╝ ║ conj
tylko      PART  <╝     ║     ║ advmod
rozszerzyć VERB  ═╗═══╗<╝     ║ xcomp
Ziemię     NOUN  <╝   ║       ║ obj
do         ADP   <══╗ ║       ║ case
jego       PRON  <╗ ║ ║       ║ nmod:poss
granic     NOUN  ═╝═╝<╝       ║ obl
.          PUNCT <════════════╝ punct
```

## z [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_pl_lfg/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗       advmod
nie        PART  <════╗ ║       advmod
chcemy     VERB  ═══╗═╝═╝═══╗═╗ root
zdobywać   VERB  ═╗<╝       ║ ║ xcomp
kosmosu    NOUN  <╝         ║ ║ obj
,          PUNCT <════════╗ ║ ║ punct
chcemy     VERB  ═╗═════╗═╝<╝ ║ conj
tylko      PART  <╝     ║     ║ advmod
rozszerzyć VERB  ═╗═══╗<╝     ║ xcomp
Ziemię     NOUN  <╝   ║       ║ obj
do         ADP   <══╗ ║       ║ case
jego       PRON  <╗ ║ ║       ║ nmod:poss
granic     NOUN  ═╝═╝<╝       ║ obl
.          PUNCT <════════════╝ punct
```

## z [PDBparser](http://zil.ipipan.waw.pl/PDB/PDBparser)

```py
>>> import ufal.udpipe
>>> model=ufal.udpipe.Model.load("190423_PDBUD_ttp_embedd.udpipe")
>>> nlp=ufal.udpipe.Pipeline(model,"tokenize","","","").process
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <══════╗       advmod
nie        PART  <════╗ ║       advmod:neg
chcemy     VERB  ═══╗═╝═╝═══╗═╗ root
zdobywać   VERB  ═╗<╝       ║ ║ xcomp
kosmosu    NOUN  <╝         ║ ║ obj
,          PUNCT <════════╗ ║ ║ punct
chcemy     VERB  ═╗═════╗═╝<╝ ║ conj
tylko      PART  <╝     ║     ║ advmod
rozszerzyć VERB  ═╗═══╗<╝     ║ xcomp
Ziemię     PROPN <╝   ║       ║ obj
do         ADP   <══╗ ║       ║ case
jego       PRON  <╗ ║ ║       ║ nmod
granic     NOUN  ═╝═╝<╝       ║ obl
.          PUNCT <════════════╝ punct
```

