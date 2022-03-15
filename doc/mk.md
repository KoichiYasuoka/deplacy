# [deplacy](https://koichiyasuoka.github.io/deplacy/) за анализа на синтаксата 

## со [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Слобода, сакам да се радувам, а нешто не ме оставаат, разбираш.")
>>> import deplacy
>>> deplacy.render(doc)
Слобода  NOUN  ═╗<════╗       vocative
,        PUNCT <╝     ║       punct
сакам    VERB  ═════╗═╝═╗═╗═╗ root
да       AUX   <══╗ ║   ║ ║ ║ aux
се       PRON  <╗ ║ ║   ║ ║ ║ expl
радувам  VERB  ═╝═╝<╝   ║ ║ ║ xcomp
,        PUNCT <╗       ║ ║ ║ punct
а        CCONJ ═╝<════╗ ║ ║ ║ cc
нешто    PRON  <════╗ ║ ║ ║ ║ advmod
не       PART  <══╗ ║ ║ ║ ║ ║ advmod
ме       PRON  <╗ ║ ║ ║ ║ ║ ║ obj
оставаат VERB  ═╝═╝═╝═╝<╝ ║ ║ conj
,        PUNCT <╗         ║ ║ punct
разбираш VERB  ═╝<════════╝ ║ conj
.        PUNCT <════════════╝ punct
```

## со [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("mk_core_news_lg")
>>> doc=nlp("Слобода, сакам да се радувам, а нешто не ме оставаат, разбираш.")
>>> import deplacy
>>> deplacy.render(doc)
Слобода  NOUN  ═╗<══════════╗       att
,        PUNCT <╝           ║       punct
сакам    VERB  ═════╗═╗═╗═╗═╝═╗═╗═╗ ROOT
да       SCONJ <══╗ ║ ║ ║ ║   ║ ║ ║ aux
се       AUX   <╗ ║ ║ ║ ║ ║   ║ ║ ║ aux
радувам  VERB  ═╝═╝<╝ ║ ║ ║   ║ ║ ║ relcl
,        PUNCT        ║ ║ ║<══╝ ║ ║ punct
а        CONJ  <══════╝ ║ ║     ║ ║ cc
нешто    ADV   <════════╝ ║     ║ ║ dep
не       VERB  <══╗       ║     ║ ║ neg
ме       PRON  <╗ ║       ║     ║ ║ dep
оставаат VERB  ═╝═╝═╗<════║═════╝ ║ relcl
,        PUNCT <════╝     ║       ║ punct
разбираш VERB  <══════════╝       ║ relcl
.        PUNCT <══════════════════╝ punct
```

