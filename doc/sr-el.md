# [deplacy](https://koichiyasuoka.github.io/deplacy/) za sintaktičku analizu na srpskom jeziku

## s [CLASSLA](https://github.com/clarinsi/classla-stanfordnlp)-om

```py
>>> import classla
>>> nlp=classla.Pipeline("sr")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝═════╗ root
sira     NOUN  ═══╗<╝       ║ obj
i        CCONJ <╗ ║         ║ cc
masla    NOUN  ═╝<╝         ║ conj
i        CCONJ <════════╗   ║ cc
moja     DET   <╗       ║   ║ det
bi       AUX    ║<════╗ ║   ║ aux
mati     NOUN  ═╝<══╗ ║ ║   ║ nsubj
znala    VERB  ═══╗═╝═╝═╝═╗<╝ conj
gibati   VERB  ═╗<╝       ║   xcomp
gibanicu NOUN  <╝         ║   obj
.        PUNCT <══════════╝   punct
```

## s [NLP-Cube](https://github.com/Adobe/NLP-Cube)-om

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("sr")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝<══╗   advcl
sira     NOUN  ═══╗<╝     ║   obj
i        CCONJ <╗ ║       ║   cc
masla    NOUN  ═╝<╝       ║   conj
i        CCONJ <════════╗ ║   cc
moja     PRON  <╗       ║ ║   det
bi       AUX    ║<════╗ ║ ║   aux
mati     NOUN  ═╝<══╗ ║ ║ ║   nsubj
znala    VERB  ═══╗═╝═╝═╝═╝═╗ root
gibati   VERB  ═╗<╝         ║ xcomp
gibanicu NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

## s [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-om

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("sr")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝═╗═╗═╗ ROOT
sira     NOUN  ═══╗<╝   ║ ║ ║ obl
i        CCONJ <╗ ║     ║ ║ ║ cc
masla    NOUN  ═╝<╝     ║ ║ ║ conj
i        CCONJ <════╗   ║ ║ ║ cc
moja     NOUN  <══╗ ║   ║ ║ ║ nsubj
bi       AUX   <╗ ║ ║   ║ ║ ║ aux
mati     VERB  ═╝═╝═╝<══╝ ║ ║ conj
znala    VERB  ═══╗<══════╝ ║ conj
gibati   VERB  ═╗<╝         ║ xcomp
gibanicu NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

## s [Stanza](https://stanfordnlp.github.io/stanza)-om

```py
>>> import stanza
>>> nlp=stanza.Pipeline("sr")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════════════════╗ mark
ima      VERB  ═════════════════╗═╝ root
sira     VERB  ═══╗═══════════╗<╝   xcomp
i        CCONJ <╗ ║           ║     cc
masla    NOUN  ═╝<╝           ║     obj
i        CCONJ <════════════╗ ║     cc
moja     DET   <══════════╗ ║ ║     nsubj
bi       AUX   <════════╗ ║ ║ ║     aux
mati     ADJ   <══════╗ ║ ║ ║ ║     advmod
znala    VERB  ═════╗═╝═╝═╝═╝<╝     conj
gibati   VERB  ═╗═╗<╝               xcomp
gibanicu NOUN  <╝ ║                 obj
.        PUNCT <══╝                 punct
```

## s [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-om

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       CCONJ <══════════════╗   discourse
i        CCONJ <╗             ║   discourse
m        PRON  ═╝<══════════╗ ║   discourse
a        CCONJ <════╗       ║ ║   cc
sira     NOUN  ═══╗═╝═╗<══╗ ║ ║   nsubj
i        CCONJ <╗ ║   ║   ║ ║ ║   cc
masla    NOUN  ═╝<╝   ║   ║ ║ ║   conj
i        CCONJ <══╗   ║   ║ ║ ║   cc
moja     DET   <╗ ║   ║   ║ ║ ║   det
bi       AUX    ║ ║<══║═╗ ║ ║ ║   aux
mati     NOUN  ═╝═╝<══╝ ║ ║ ║ ║   conj
znala    VERB  ═══╗═════╝═╝═╝═╝═╗ root
gibati   VERB  ═╗<╝             ║ xcomp
gibanicu NOUN  <╝               ║ obj
.        PUNCT <════════════════╝ punct
```

