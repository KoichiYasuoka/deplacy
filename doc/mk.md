# [deplacy](https://koichiyasuoka.github.io/deplacy/) за анализа на синтаксата 

## со [bert-base-slavic-cyrillic-upos](https://huggingface.co/KoichiYasuoka/bert-base-slavic-cyrillic-upos)

```py
>>> import esupar
>>> nlp=esupar.load("KoichiYasuoka/bert-base-slavic-cyrillic-upos")
>>> doc=nlp("Слобода, сакам да се радувам, а нешто не ме оставаат, разбираш.")
>>> import deplacy
>>> deplacy.render(doc)
Слобода  VERB  ═╗<════╗         vocative
,        PUNCT <╝     ║         punct
сакам    VERB  ═════╗═╝═════╗═╗ root
да       AUX   <══╗ ║       ║ ║ aux
се       PRON  <╗ ║ ║       ║ ║ expl
радувам  VERB  ═╝═╝<╝       ║ ║ ccomp
,        PUNCT <╗           ║ ║ punct
а        CCONJ ═╝<════════╗ ║ ║ cc
нешто    PRON  <════╗     ║ ║ ║ nsubj
не       PART  <══╗ ║     ║ ║ ║ advmod
ме       PRON  <╗ ║ ║     ║ ║ ║ obj
оставаат VERB  ═╝═╝═╝═╗<╗ ║ ║ ║ advcl
,        PUNCT <══════╝ ║ ║ ║ ║ punct
разбираш VERB  ═════════╝═╝<╝ ║ conj
.        PUNCT <══════════════╝ punct
```

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
Слобода  NOUN               ROOT
,        PUNCT <════════╗   dep
сакам    VERB  ═════╗═╗═╝═╗ ROOT
да       SCONJ <══╗ ║ ║   ║ aux
се       AUX   <╗ ║ ║ ║   ║ aux
радувам  VERB  ═╝═╝<╝ ║   ║ relcl
,        PUNCT <══════║═══╝ punct
а        CONJ  <══════╝     cc
нешто    PRON  ═════╗═╗═╗   ROOT
не       VERB  <══╗ ║ ║ ║   neg
ме       PRON  <╗ ║ ║ ║ ║   dep
оставаат VERB  ═╝═╝<╝ ║ ║   relcl
,        PUNCT <══════╝ ║   punct
разбираш ADV   <════════╝   dep
.        PUNCT              ROOT
```

