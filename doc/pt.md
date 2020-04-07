# [deplacy](https://koichiyasuoka.github.io/deplacy/) para análise sintática

## com [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("pt_core_news_sm")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <════════╗   nsubj
quis VERB  ═╗═════╗═╝═╗ ROOT
amar VERB  <╝     ║   ║ xcomp
,    PUNCT <════╗ ║   ║ punct
mas  CCONJ <══╗ ║ ║   ║ cc
tive VERB  ═╗═╝═╝<╝   ║ conj
medo NOUN  <╝         ║ obj
.    PUNCT <══════════╝ punct
```

## com [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("pt")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
Eu   PRON  <════════╗   nsubj
quis VERB  ═╗═════╗═╝═╗ root
amar VERB  <╝     ║   ║ xcomp
,    PUNCT <════╗ ║   ║ punct
mas  CCONJ <══╗ ║ ║   ║ cc
tive VERB  ═╗═╝═╝<╝   ║ conj
medo NOUN  <╝         ║ obj
.    PUNCT <══════════╝ punct
```

## com [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("pt")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
Eu   PRON  <════════╗   nsubj
quis VERB  ═╗═════╗═╝═╗ root
amar VERB  <╝     ║   ║ xcomp
,    PUNCT <════╗ ║   ║ punct
mas  CCONJ <══╗ ║ ║   ║ cc
tive VERB  ═╗═╝═╝<╝   ║ conj
medo NOUN  <╝         ║ obj
.    PUNCT <══════════╝ punct
```

## com [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("pt")
>>> doc=nlp("Eu quis amar, mas tive medo.")
>>> import deplacy
>>> deplacy.render(doc)
Eu   PRON  <══════════╗   nsubj
quis VERB  ═════════╗═╝═╗ ROOT
amar VERB  ═══════╗<╝   ║ xcomp
,    PUNCT <════╗ ║     ║ punct
mas  CCONJ <══╗ ║ ║     ║ cc
tive VERB  ═╗═╝═╝<╝     ║ conj
medo NOUN  <╝           ║ obj
.    PUNCT <════════════╝ punct
```

