# [deplacy](https://koichiyasuoka.github.io/deplacy/) fyrir setningafræðilega greiningu

## við [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("icelandic-ud27")
>>> doc=nlp("Hugsjónina sakar ekkert þótt einstaklíngarnir deyi eða svíki.")
>>> import deplacy
>>> deplacy.render(doc)
Hugsjónina       NOUN  <════════════╗ nsubj
sakar            VERB  ═╗═════════╗═╝ root
ekkert           DET   <╝         ║   obj
þótt             ADP   <════════╗ ║   case
einstaklíngarnir NOUN  <══════╗ ║ ║   nsubj
deyi             VERB  ═════╗═╝═╝<╝   obl
eða              CCONJ <╗   ║         cc
svíki            VERB  ═╝═╗<╝         conj
.                PUNCT <══╝           punct
```

## við [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("is")
>>> doc=nlp("Hugsjónina sakar ekkert þótt einstaklíngarnir deyi eða svíki.")
>>> import deplacy
>>> deplacy.render(doc)
Hugsjónina       NOUN  <════════════╗ nsubj
sakar            VERB  ═╗═════════╗═╝ root
ekkert           DET   <╝         ║   nsubj
þótt             ADP   <════════╗ ║   case
einstaklíngarnir NOUN  <══════╗ ║ ║   nsubj
deyi             VERB  ═════╗═╝═╝<╝   obl
eða              CCONJ <╗   ║         cc
svíki            VERB  ═╝═╗<╝         conj
.                PUNCT <══╝           punct
```

## við [is_ud_is_pud](https://huggingface.co/elisno/is_ud_is_pud)

```py
>>> import spacy
>>> nlp=spacy.load("is_ud_is_pud")
>>> doc=nlp("Hugsjónina sakar ekkert þótt einstaklíngarnir deyi eða svíki.")
>>> import deplacy
>>> deplacy.render(doc)
Hugsjónina       NOUN  <════════════╗   nsubj
sakar            VERB  ═══════════╗═╝═╗ ROOT
ekkert           PRON  <════════╗ ║   ║ det
þótt             SCONJ <══════╗ ║ ║   ║ mark
einstaklíngarnir NOUN  <════╗ ║ ║ ║   ║ amod
deyi             NOUN  ═══╗═╝═╝═╝<╝   ║ obj
eða              CCONJ <╗ ║           ║ cc
svíki            NOUN  ═╝<╝           ║ conj
.                PUNCT <══════════════╝ punct
```

