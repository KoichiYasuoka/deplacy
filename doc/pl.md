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

