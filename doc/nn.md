# [deplacy](https://koichiyasuoka.github.io/deplacy/) for syntaktisk analyse på nynorsk

## med [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("nn")
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
For    CCONJ <════════════╗   cc
me     PRON  <══════════╗ ║   nsubj
priser VERB  ═╗═══════╗═╝═╝═╗ root
dauden NOUN  <╝       ║     ║ obj
,      PUNCT <══════╗ ║     ║ punct
men    CCONJ <════╗ ║ ║     ║ cc
me     PRON  <══╗ ║ ║ ║     ║ nsubj
elskar VERB  ═╗═╝═╝═╝<╝     ║ conj
live   NOUN  <╝             ║ obj
.      PUNCT <══════════════╝ punct
```

## med [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("nn").tokenizer.model
>>> doc=nlp("For me priser dauden, men me elskar live.")
>>> d=nlp.write(doc,"conllu")
>>> import deplacy
>>> deplacy.render(d)
For    CCONJ <════════════╗   cc
me     PRON  <══════════╗ ║   nsubj
priser VERB  ═╗═══════╗═╝═╝═╗ root
dauden NOUN  <╝       ║     ║ obj
,      PUNCT <══════╗ ║     ║ punct
men    CCONJ <════╗ ║ ║     ║ cc
me     PRON  <══╗ ║ ║ ║     ║ nsubj
elskar VERB  ═╗═╝═╝═╝<╝     ║ conj
live   ADV   <╝             ║ advmod
.      PUNCT <══════════════╝ punct
```

