# Շարահյուսական վերլուծություն [deplacy](https://koichiyasuoka.github.io/deplacy/)-ի միջոցով

## [Stanza](https://stanfordnlp.github.io/stanza)-ի հետ

```py
>>> import stanza
>>> nlp=stanza.Pipeline("hy")
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   VERB  ═════╗═╗ root
չարիք NOUN  ═══╗<╝ ║ nsubj
առանց ADP   <╗ ║   ║ case
բարիք NOUN  ═╝<╝   ║ compound:redup
:     PUNCT <══════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-ի հետ

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("hy")
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   ADJ   <════╗   amod
չարիք NOUN  ═══╗═╝═╗ ROOT
առանց ADP   <╗ ║   ║ case
բարիք NOUN  ═╝<╝   ║ nmod:npmod
:     PUNCT <══════╝ punct
```

