# [deplacy](https://koichiyasuoka.github.io/deplacy/)을 사용한 문법 분석

## [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)로 분석

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
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

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)로 분석

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=ko_gsd&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
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

## [Trankit](https://github.com/nlp-uoregon/trankit)로 분석

```py
>>> import trankit
>>> nlp=trankit.Pipeline("korean")
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

## [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)로 분석

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("ko_gsd")
>>> doc=nlp("홍시 맛이 나서 홍시라 생각한다.")
>>> import deplacy
>>> deplacy.render(doc)
홍시     NOUN  ═╗<╗     nsubj
맛이     NOUN  <╝ ║     flat
나서     VERB  ═══╝<╗   advcl
홍시라   VERB  <╗   ║   ccomp
생각한다 VERB  ═╝═══╝═╗ ROOT
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

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)로 분석

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("ko_gsd")
>>> doc=nlp("홍시 맛이 나서 홍시라 생각한다.")
>>> import deplacy
>>> deplacy.render(doc)
홍시     NOUN  ═╗<╗     nsubj
맛이     NOUN  <╝ ║     flat
나서     VERB  ═══╝<╗   advcl
홍시라   NOUN  <╗   ║   nsubj
생각한다 VERB  ═╝═══╝═╗ ROOT
.        PUNCT <══════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)로 분석

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ko")
>>> doc=nlp("홍시 맛이 나서 홍시라 생각한다.")
>>> import deplacy
>>> deplacy.render(doc)
홍시     NOUN  <╗       compound
맛이     NOUN  ═╝<╗     nsubj
나서     SCONJ ═══╝<╗   ccomp
홍시라   VERB  <╗   ║   ccomp
생각한다 VERB  ═╝═══╝═╗ root
.        PUNCT <══════╝ punct
```

