# [deplacy](https://koichiyasuoka.github.io/deplacy/) do analizy składniowej

## z [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("pl")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> import deplacy
>>> deplacy.render(doc)
Wcale      ADV   <════════════════╗   advmod
nie        PART  <══════════════╗ ║   advmod
chcemy     VERB  ═══╗═════════╗═╝═╝═╗ root
zdobywać   VERB  ═╗<╝         ║     ║ xcomp
kosmosu    NOUN  <╝           ║     ║ obj
,          PUNCT <══════════╗ ║     ║ punct
chcemy     VERB  ═════════╗═╝<╝     ║ conj
tylko      PART  <══════╗ ║         ║ advmod
rozszerzyć VERB  ═╗═══╗═╝<╝         ║ xcomp
Ziemię     PROPN <╝   ║             ║ obj
do         ADP   <══╗ ║             ║ case
jego       PRON  <╗ ║ ║             ║ nmod:poss
granic     NOUN  ═╝═╝<╝             ║ obl
.          PUNCT <══════════════════╝ punct
```

## z [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("pl")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
Wcale      ADV   <══════════════╗   advmod
nie        PART  <════════════╗ ║   advmod
chcemy     VERB  ═══╗═══════╗═╝═╝═╗ root
zdobywać   VERB  ═╗<╝       ║     ║ xcomp
kosmosu    NOUN  <╝         ║     ║ obj
,          PUNCT <════════╗ ║     ║ punct
chcemy     VERB  ═╗═════╗═╝<╝     ║ conj
tylko      PART  <╝     ║         ║ advmod
rozszerzyć VERB  ═╗═══╗<╝         ║ xcomp
Ziemię     NOUN  <╝   ║           ║ obj
do         ADP   <══╗ ║           ║ case
jego       PRON  <╗ ║ ║           ║ nmod:poss
granic     NOUN  ═╝═╝<╝           ║ obl
.          PUNCT <════════════════╝ punct
```

## z [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("pl")
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
Wcale      ADV   <══════════════╗   advmod
nie        PART  <════════════╗ ║   advmod
chcemy     VERB  ═══╗═══════╗═╝═╝═╗ root
zdobywać   VERB  ═╗<╝       ║     ║ xcomp
kosmosu    NOUN  <╝         ║     ║ obj
,          PUNCT <════════╗ ║     ║ punct
chcemy     VERB  ═╗═════╗═╝<╝     ║ conj
tylko      PART  <╝     ║         ║ advmod
rozszerzyć VERB  ═╗═══╗<╝         ║ xcomp
Ziemię     NOUN  <╝   ║           ║ obj
do         ADP   <══╗ ║           ║ case
jego       PRON  <╗ ║ ║           ║ nmod:poss
granic     NOUN  ═╝═╝<╝           ║ obl
.          PUNCT <════════════════╝ punct
```

## z [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("pl").tokenizer.model
>>> doc=nlp("Wcale nie chcemy zdobywać kosmosu, chcemy tylko rozszerzyć Ziemię do jego granic.")
>>> d=nlp.write(doc,"conllu")
>>> import deplacy
>>> deplacy.render(d)
Wcale      ADV   <════════════════╗   advmod
nie        PART  <══════════════╗ ║   advmod:neg
chcemy     VERB  ═══╗═════════╗═╝═╝═╗ root
zdobywać   VERB  ═╗<╝         ║     ║ xcomp
kosmosu    NOUN  <╝           ║     ║ obj
,          PUNCT <══════════╗ ║     ║ punct
chcemy     VERB  ═════════╗═╝<╝     ║ conj
tylko      PART  <══════╗ ║         ║ advmod:emph
rozszerzyć VERB  ═╗═══╗═╝<╝         ║ xcomp
Ziemię     PROPN <╝   ║             ║ obj
do         ADP   <══╗ ║             ║ case
jego       PRON  <╗ ║ ║             ║ nmod
granic     NOUN  ═╝═╝<╝             ║ obl
.          PUNCT <══════════════════╝ punct
```

