# [deplacy](https://koichiyasuoka.github.io/deplacy/) для синтаксического анализа

## с [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <════════════╗   nsubj
слезам NOUN  <══════════╗ ║   iobj
не     PART  <════════╗ ║ ║   advmod
верила VERB  ═══════╗═╝═╝═╝═╗ root
,      PUNCT <════╗ ║       ║ punct
а      CCONJ <══╗ ║ ║       ║ cc
верила VERB  ═╗═╝═╝<╝       ║ conj
любви  NOUN  <╝             ║ iobj
.      PUNCT <══════════════╝ punct
```

## с [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
Москва PROPN <════════════╗   nsubj
слезам NOUN  <══════════╗ ║   iobj
не     PART  <════════╗ ║ ║   advmod
верила VERB  ═══════╗═╝═╝═╝═╗ root
,      PUNCT <════╗ ║       ║ punct
а      CCONJ <══╗ ║ ║       ║ cc
верила VERB  ═╗═╝═╝<╝       ║ conj
любви  NOUN  <╝             ║ iobj
.      PUNCT <══════════════╝ punct
```

## с [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
Москва NOUN  <══════════════╗ nsubj
слезам NOUN  <════════════╗ ║ iobj
не     PART  <══════════╗ ║ ║ advmod
верила VERB  ═════════╗═╝═╝═╝ root
,      PUNCT <════╗   ║       punct
а      CCONJ <══╗ ║   ║       cc
верила VERB  ═╗═╝═╝═╗<╝       conj
любви  NOUN  <╝     ║         obj
.      PUNCT <══════╝         punct
```

## с [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ru").tokenizer.model
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> d=nlp.write(doc,"conllu")
>>> import deplacy
>>> deplacy.render(d)
Москва PROPN <════════════╗   nsubj
слезам NOUN  <══════════╗ ║   iobj
не     PART  <════════╗ ║ ║   advmod
верила VERB  ═══════╗═╝═╝═╝═╗ root
,      PUNCT <════╗ ║       ║ punct
а      CCONJ <══╗ ║ ║       ║ cc
верила NOUN  ═╗═╝═╝<╝       ║ conj
любви  NOUN  <╝             ║ nmod
.      PUNCT <══════════════╝ punct
```

