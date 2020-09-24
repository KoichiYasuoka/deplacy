# [deplacy](https://koichiyasuoka.github.io/deplacy/) ⲉⲛⲁⲛⲁⲗⲩ ⲙⲡⲥⲩⲛⲧⲁⲜ

## ϩⲛ[spaCy-Coptic](https://github.com/KoichiYasuoka/spaCy-Coptic)

```py
>>> import spacy_coptic
>>> nlp=spacy_coptic.load()
>>> doc=nlp("ⲙⲟⲟϣⲉ ϩⲱⲥ ϣⲏⲣⲉ ⲙⲡⲟⲩⲟⲉⲓⲛ ·")
>>> import deplacy
>>> deplacy.render(doc)
ⲙⲟⲟϣⲉ  VERB  ═════════╗ ROOT
ϩⲱⲥ    CCONJ <══════╗ ║ mark
ϣⲏⲣⲉ   NOUN  ═════╗═╝<╝ advcl
ⲙ      ADP   <══╗ ║     case
ⲡ      DET   <╗ ║ ║     det
ⲟⲩⲟⲉⲓⲛ NOUN  ═╝═╝<╝     nmod
·      PUNCT            punct
```

## ϩⲛ[spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("coptic")
>>> doc=nlp("ⲙⲟⲟϣⲉ ϩⲱⲥ ϣⲏⲣⲉ ⲙⲡⲟⲩⲟⲉⲓⲛ ·")
>>> import deplacy
>>> deplacy.render(doc)
ⲙⲟⲟϣⲉ    VERB  ═════╗═╗ ROOT
ϩⲱⲥ      CCONJ <══╗ ║ ║ mark
ϣⲏⲣⲉ     NOUN  ═╗═╝<╝ ║ advcl
ⲙⲡⲟⲩⲟⲉⲓⲛ PROPN <╝     ║ appos
·        PUNCT <══════╝ punct
```

## ϩⲛ[Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("cop")
>>> doc=nlp("ⲙⲟⲟϣⲉ ϩⲱⲥ ϣⲏⲣⲉ ⲙⲡⲟⲩⲟⲉⲓⲛ ·")
>>> import deplacy
>>> deplacy.render(doc)
ⲙⲟⲟ     ADV   <════════╗   advmod
ϣⲉ      PART  <══════╗ ║   advmod
ϩⲱⲥ     VERB  ═════╗═╝═╝═╗ root
ϣⲏⲣⲉ    NOUN  ═══╗<╝     ║ nsubj
ⲙ       ADP   <╗ ║       ║ case
ⲡⲟⲩⲟⲉⲓⲛ NOUN  ═╝<╝       ║ nmod
·       PUNCT <══════════╝ punct
```

