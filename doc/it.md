# [deplacy](https://koichiyasuoka.github.io/deplacy/) per l'analisi sintattica

## con [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("it_core_news_sm")
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  <════════════╗   nsubj
non       ADV   <══════════╗ ║   advmod
beve      VERB  ═══╗═══╗═╗═╝═╝═╗ ROOT
in        ADP   <╗ ║   ║ ║     ║ case
compagnia NOUN  ═╝<╝   ║ ║     ║ obl
o         CONJ  <════╗ ║ ║     ║ cc
è         VERB  <══╗ ║ ║ ║     ║ cop
un        DET   <╗ ║ ║ ║ ║     ║ det
ladro     NOUN  ═╝═╝═╝<╝ ║     ║ conj
o         CONJ  <════╗   ║     ║ cc
è         VERB  <══╗ ║   ║     ║ cop
una       DET   <╗ ║ ║   ║     ║ det
spia      NOUN  ═╝═╝═╝<══╝     ║ conj
.         PUNCT <══════════════╝ punct
```

## con [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("it")
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> import deplacy
>>> deplacy.render(doc)
Chi       PRON  ═══════════════════╗═╗ root
non       ADV   <════════════════╗ ║ ║ advmod
beve      VERB  ═══╗═══════════╗═╝<╝ ║ acl:relcl
in        ADP   <╗ ║           ║     ║ case
compagnia NOUN  ═╝<╝           ║     ║ obl
o         CCONJ <════════════╗ ║     ║ cc
è         AUX   <══════════╗ ║ ║     ║ cop
un        DET   <════════╗ ║ ║ ║     ║ det
ladro     NOUN  ═══════╗═╝═╝═╝<╝     ║ conj
o         CCONJ <════╗ ║             ║ cc
è         AUX   <══╗ ║ ║             ║ cop
una       DET   <╗ ║ ║ ║             ║ det
spia      NOUN  ═╝═╝═╝<╝             ║ conj
.         PUNCT <════════════════════╝ punct
```

## con [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("it")
>>> import deplacy
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
Chi       PRON  ═════════════════════╗ root
non       ADV   <════════════════╗   ║ advmod
beve      VERB  ═══╗═══════════╗═╝═╗<╝ acl:relcl
in        ADP   <╗ ║           ║   ║   case
compagnia NOUN  ═╝<╝           ║   ║   obl
o         CCONJ <════════════╗ ║   ║   cc
è         AUX   <══════════╗ ║ ║   ║   cop
un        DET   <════════╗ ║ ║ ║   ║   det
ladro     NOUN  ═══════╗═╝═╝═╝<╝   ║   conj
o         CCONJ <════╗ ║           ║   cc
è         AUX   <══╗ ║ ║           ║   cop
una       DET   <╗ ║ ║ ║           ║   det
spia      NOUN  ═╝═╝═╝<╝           ║   conj
.         PUNCT <══════════════════╝   punct
```

## con [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("it")
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
Chi       PRON  ═══════════════╗ root
non       ADV   <══════════╗   ║ advmod
beve      VERB  ═══╗═══╗═╗═╝═╗<╝ acl:relcl
in        ADP   <╗ ║   ║ ║   ║   case
compagnia NOUN  ═╝<╝   ║ ║   ║   obl
o         CCONJ <════╗ ║ ║   ║   cc
è         AUX   <══╗ ║ ║ ║   ║   cop
un        DET   <╗ ║ ║ ║ ║   ║   det
ladro     NOUN  ═╝═╝═╝<╝ ║   ║   conj
o         CCONJ <════╗   ║   ║   cc
è         AUX   <══╗ ║   ║   ║   cop
una       DET   <╗ ║ ║   ║   ║   det
spia      NOUN  ═╝═╝═╝<══╝   ║   conj
.         PUNCT <════════════╝   punct
```

## con [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("it").tokenizer.model
>>> doc=nlp("Chi non beve in compagnia o è un ladro o è una spia.")
>>> d=nlp.write(doc,"conllu")
>>> import deplacy
>>> deplacy.render(d)
Chi       PRON  <════════════════╗   nsubj
non       ADV   <══════════════╗ ║   advmod
beve      VERB  ═══════════╗═╗═╝═╝═╗ root
in        ADP   <════════╗ ║ ║     ║ case
compagnia NOUN  ═══════╗═╝<╝ ║     ║ obl
o         CCONJ <════╗ ║     ║     ║ cc
è         AUX   <══╗ ║ ║     ║     ║ cop
un        DET   <╗ ║ ║ ║     ║     ║ det
ladro     NOUN  ═╝═╝═╝<╝     ║     ║ conj
o         CCONJ <════╗       ║     ║ cc
è         AUX   <══╗ ║       ║     ║ cop
una       DET   <╗ ║ ║       ║     ║ det
spia      NOUN  ═╝═╝═╝<══════╝     ║ conj
.         PUNCT <══════════════════╝ punct
```

