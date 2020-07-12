# [deplacy](https://koichiyasuoka.github.io/deplacy/)을 사용한 문법 분석

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)로 분석

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("en")
>>> doc=nlp("홍시 맛이 나서 홍시라 생각한다.")
>>> import deplacy
>>> deplacy.render(doc)
홍시     NOUN  ═╗<╗     nsubj
맛이     NOUN  <╝ ║     flat
나서     VERB  ═══╝<╗   advcl
홍시라   VERB  <╗   ║   ccomp
생각한다 VERB  ═╝═══╝═╗ root
.        PUNCT <══════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)로 분석

```py
>>> import stanza
>>> nlp=stanza.Pipeline(lang="ko",package="gsd")
>>> doc=nlp("홍시 맛이 나서 홍시라 생각한다.")
>>> import deplacy
>>> deplacy.render(doc)
홍시     NOUN  ═╗<╗     nsubj
맛이     NOUN  <╝ ║     flat
나서     VERB  ═══╝<╗   advcl
홍시라   VERB  <╗   ║   ccomp
생각한다 VERB  ═╝═══╝═╗ root
.        PUNCT <══════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)로 분석

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ko")
>>> doc=nlp("홍시 맛이 나서 홍시라 생각한다.")
>>> import deplacy
>>> deplacy.render(doc)
홍시     NOUN  ═╗<╗     nsubj
맛이     NOUN  <╝ ║     flat
나서     VERB  ═══╝<╗   advcl
홍시라   NOUN  <╗   ║   advmod
생각한다 VERB  ═╝═══╝═╗ root
.        PUNCT <══════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)로 분석

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ko-gsd")
>>> doc=nlp("홍시 맛이 나서 홍시라 생각한다.")
>>> import deplacy
>>> deplacy.render(doc)
홍시     NOUN  <══╗     nsubj
맛이     NOUN  <╗ ║     nsubj
나서     VERB  ═╝═╝<╗   advcl
홍시라   VERB  <╗   ║   acl:relcl
생각한다 VERB  ═╝═══╝═╗ ROOT
.        PUNCT <══════╝ punct
```

