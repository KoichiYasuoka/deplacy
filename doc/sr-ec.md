# [deplacy](https://koichiyasuoka.github.io/deplacy/) за синтаксну анализу на српском језику

## с [esupar](https://github.com/KoichiYasuoka/esupar)-ом

```py
>>> import esupar
>>> nlp=esupar.load("sr")
>>> doc=nlp("Да има сира и масла и моја би мати знала гибати гибаницу.")
>>> import deplacy
>>> deplacy.render(doc)
Да       SCONJ <══════╗       mark
има      VERB  ═════╗═╝═════╗ root
сира     NOUN  ═══╗<╝       ║ obj
и        CCONJ <╗ ║         ║ cc
масла    NOUN  ═╝<╝         ║ conj
и        CCONJ <════════╗   ║ cc
моја     DET   <╗       ║   ║ det
би       AUX    ║<════╗ ║   ║ aux
мати     NOUN  ═╝<══╗ ║ ║   ║ nsubj
знала    VERB  ═══╗═╝═╝═╝═╗<╝ conj
гибати   VERB  ═╗<╝       ║   xcomp
гибаницу NOUN  <╝         ║   obj
.        PUNCT <══════════╝   punct
```

## с [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)-ом

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Да има сира и масла и моја би мати знала гибати гибаницу.")
>>> import deplacy
>>> deplacy.render(doc)
Да       AUX   <══════╗       aux
има      VERB  ═════╗═╝═══╗═╗ root
сира     NOUN  ═══╗<╝     ║ ║ obj
и        CCONJ <╗ ║       ║ ║ cc
масла    NOUN  ═╝<╝       ║ ║ conj
и        CCONJ <════════╗ ║ ║ cc
моја     DET   <╗       ║ ║ ║ det
би       AUX    ║<════╗ ║ ║ ║ aux
мати     NOUN  ═╝<══╗ ║ ║ ║ ║ nsubj
знала    VERB  ═══╗═╝═╝═╝<╝ ║ conj
гибати   VERB  ═╗<╝         ║ xcomp
гибаницу NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

