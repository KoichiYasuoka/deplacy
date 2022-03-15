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

## z [spaCyPL](http://zil.ipipan.waw.pl/SpacyPL)

```py
>>> import spacy
>>> nlp=spacy.load("pl_spacy_model")
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
tylko      PART  <══════╗ ║     ║ advmod
rozszerzyć VERB  ═╗═══╗═╝<╝     ║ xcomp
Ziemię     NOUN  <╝   ║         ║ obj
do         ADP   <══╗ ║         ║ case
jego       PRON  <╗ ║ ║         ║ nmod
granic     NOUN  ═╝═╝<╝         ║ obl:arg
.          PUNCT <══════════════╝ punct
```

## z [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

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

## z [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("polish")
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

## z [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("polish-herbert-large")
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
tylko      PART  <╝     ║     ║ advmod:emph
rozszerzyć VERB  ═╗═══╗<╝     ║ xcomp
Ziemię     PROPN <╝   ║       ║ obj
do         ADP   <══╗ ║       ║ case
jego       PRON  <╗ ║ ║       ║ nmod
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

## z [spaCy-jPTDP](http://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("pl_lfg")
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
Ziemię     PROPN <╝   ║       ║ obj
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

