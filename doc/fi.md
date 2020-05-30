# syntaktista analyysiä [deplacy](https://koichiyasuoka.github.io/deplacy/)-n kautta

## [Stanza](https://stanfordnlp.github.io/stanza)-n kanssa

```py
>>> import stanza
>>> nlp=stanza.Pipeline("fi")
>>> doc=nlp("Nyt minä olen syönyt ja ajatellut ja nyt minusta alkaa tuntua, että asiat rupeavat selviämään.")
>>> import deplacy
>>> deplacy.render(doc)
Nyt        ADV   <════════════════════════╗   advmod
minä       PRON  <══════════════════════╗ ║   nsubj
olen       AUX   <════════════════════╗ ║ ║   aux
syönyt     VERB  ═══╗═══════════════╗═╝═╝═╝═╗ root
ja         CCONJ <╗ ║               ║       ║ cc
ajatellut  VERB  ═╝<╝               ║       ║ conj
ja         CCONJ <════════════════╗ ║       ║ cc
nyt        ADV   <══════════════╗ ║ ║       ║ advmod
minusta    PRON  <════════════╗ ║ ║ ║       ║ obl
alkaa      VERB  ═══════════╗═╝═╝═╝<╝       ║ conj
tuntua     VERB  ═════════╗<╝               ║ xcomp
,          PUNCT <══════╗ ║                 ║ punct
että       SCONJ <════╗ ║ ║                 ║ mark
asiat      NOUN  <══╗ ║ ║ ║                 ║ nsubj
rupeavat   VERB  ═╗═╝═╝═╝<╝                 ║ ccomp
selviämään VERB  <╝                         ║ xcomp
.          PUNCT <══════════════════════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-n kanssa

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("fi")
>>> doc=nlp("Nyt minä olen syönyt ja ajatellut ja nyt minusta alkaa tuntua, että asiat rupeavat selviämään.")
>>> import deplacy
>>> deplacy.render(doc)
Nyt        ADV   <════════════════════════╗   advmod
minä       PRON  <══════════════════════╗ ║   nsubj
olen       AUX   <════════════════════╗ ║ ║   aux
syönyt     VERB  ═══╗═══════════════╗═╝═╝═╝═╗ ROOT
ja         CCONJ <╗ ║               ║       ║ cc
ajatellut  VERB  ═╝<╝               ║       ║ conj
ja         CCONJ <════════════════╗ ║       ║ cc
nyt        ADV   <══════════════╗ ║ ║       ║ advmod
minusta    PRON  <════════════╗ ║ ║ ║       ║ obl
alkaa      VERB  ═══════════╗═╝═╝═╝<╝       ║ conj
tuntua     VERB  ═════════╗<╝               ║ xcomp
,          PUNCT <══════╗ ║                 ║ punct
että       SCONJ <════╗ ║ ║                 ║ mark
asiat      NOUN  <══╗ ║ ║ ║                 ║ nsubj
rupeavat   VERB  ═╗═╝═╝═╝<╝                 ║ ccomp
selviämään VERB  <╝                         ║ xcomp
.          PUNCT <══════════════════════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)-n kanssa

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("fi")
>>> doc=nlp("Nyt minä olen syönyt ja ajatellut ja nyt minusta alkaa tuntua, että asiat rupeavat selviämään.")
>>> import deplacy
>>> deplacy.render(doc)
Nyt        ADV   <════════════════════════╗   advmod
minä       PRON  <══════════════════════╗ ║   nsubj
olen       AUX   <════════════════════╗ ║ ║   aux
syönyt     VERB  ═══╗═══════════════╗═╝═╝═╝═╗ root
ja         CCONJ <╗ ║               ║       ║ cc
ajatellut  VERB  ═╝<╝               ║       ║ conj
ja         CCONJ <════════════════╗ ║       ║ cc
nyt        ADV   <══════════════╗ ║ ║       ║ advmod
minusta    PRON  <════════════╗ ║ ║ ║       ║ obl
alkaa      VERB  ═══════════╗═╝═╝═╝<╝       ║ conj
tuntua     VERB  ═════════╗<╝               ║ xcomp
,          PUNCT <══════╗ ║                 ║ punct
että       SCONJ <════╗ ║ ║                 ║ mark
asiat      NOUN  <══╗ ║ ║ ║                 ║ nsubj
rupeavat   VERB  ═╗═╝═╝═╝<╝                 ║ ccomp
selviämään VERB  <╝                         ║ xcomp
.          PUNCT <══════════════════════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-n kanssa

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("fi")
>>> doc=nlp("Nyt minä olen syönyt ja ajatellut ja nyt minusta alkaa tuntua, että asiat rupeavat selviämään.")
>>> import deplacy
>>> deplacy.render(doc)
Nyt        ADV   <══════════════════════════╗ advmod
minä       PRON  <════════════════════════╗ ║ nsubj
olen       VERB  <══════════════════════╗ ║ ║ aux
syönyt     VERB  ═══╗═════════════════╗═╝═╝═╝ root
ja         CCONJ <╗ ║                 ║       cc
ajatellut  VERB  ═╝<╝                 ║       conj
ja         CCONJ <════════════════╗   ║       cc
nyt        ADV   <══════════════╗ ║   ║       advmod
minusta    PRON  <════════════╗ ║ ║   ║       nmod
alkaa      VERB  <══════════╗ ║ ║ ║   ║       aux
tuntua     VERB  ═════════╗═╝═╝═╝═╝═╗<╝       conj
,          PUNCT <════════║═════════╝         punct
että       SCONJ <════╗   ║                   mark
asiat      NOUN  <══╗ ║   ║                   nsubj
rupeavat   VERB  <╗ ║ ║   ║                   aux
selviämään VERB  ═╝═╝═╝═╗<╝                   xcomp
.          PUNCT <══════╝                     punct
```

