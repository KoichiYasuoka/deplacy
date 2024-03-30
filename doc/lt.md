# [deplacy](https://koichiyasuoka.github.io/deplacy/) sintaksinei analizei

## su [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("lt_core_news_md")
>>> doc=nlp("Dievas davė dantis, duos ir duonos.")
>>> import deplacy
>>> deplacy.render(doc)
Dievas NOUN  <══╗       nsubj
davė   VERB  ═╗═╝═══╗═╗ ROOT
dantis NOUN  <╝     ║ ║ obj
,      PUNCT <════╗ ║ ║ punct
duos   VERB  ═══╗═╝<╝ ║ conj
ir     PART  <╗ ║     ║ advmod:emph
duonos NOUN  ═╝<╝     ║ obj
.      PUNCT <════════╝ punct
```

## su [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("lithuanian")
>>> doc=nlp("Dievas davė dantis, duos ir duonos.")
>>> import deplacy
>>> deplacy.render(doc)
Dievas NOUN  <══╗       nsubj
davė   VERB  ═╗═╝═══╗═╗ root
dantis NOUN  <╝     ║ ║ obj
,      PUNCT <════╗ ║ ║ punct
duos   VERB  ═══╗═╝<╝ ║ conj
ir     PART  <╗ ║     ║ advmod:emph
duonos NOUN  ═╝<╝     ║ conj
.      PUNCT <════════╝ punct
```

## su [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("lt")
>>> doc=nlp("Dievas davė dantis, duos ir duonos.")
>>> import deplacy
>>> deplacy.render(doc)
Dievas ADJ   <══╗       amod
davė   VERB  ═╗═╝═══╗═╗ root
dantis NOUN  <╝     ║ ║ nsubj
,      PUNCT <════╗ ║ ║ punct
duos   VERB  ═══╗═╝<╝ ║ conj
ir     CCONJ <╗ ║     ║ cc
duonos NOUN  ═╝<╝     ║ obj
.      PUNCT <════════╝ punct
```

## su [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Dievas davė dantis, duos ir duonos.")
>>> import deplacy
>>> deplacy.render(doc)
Dievas NOUN  <════════╗   nsubj
davė   VERB  ═══════╗═╝═╗ root
dantis NOUN  ═══╗═╗<╝   ║ obj
,      PUNCT <╗ ║ ║     ║ punct
duos   NOUN  ═╝<╝ ║     ║ conj
ir     CCONJ <╗   ║     ║ cc
duonos NOUN  ═╝<══╝     ║ conj
.      PUNCT <══════════╝ punct
```

## su [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=lt&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:  ...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Dievas davė dantis, duos ir duonos.")
>>> import deplacy
>>> deplacy.render(doc)
Dievas NOUN  <══════════╗   nsubj
davė   VERB  ═════════╗═╝═╗ root
dantis NOUN  ═══════╗<╝   ║ nsubj
,      PUNCT <════╗ ║     ║ punct
duos   NOUN  ═══╗═╝<╝     ║ conj
ir     CCONJ <╗ ║         ║ cc
duonos NOUN  ═╝<╝         ║ conj
.      PUNCT <════════════╝ punct
```

## su [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("lt")
>>> doc=nlp("Dievas davė dantis, duos ir duonos.")
>>> import deplacy
>>> deplacy.render(doc)
Dievas NOUN  ═════════╗═╗ ROOT
davė   NOUN  ═══════╗<╝ ║ conj
dantis VERB  ═╗═══╗<╝   ║ advcl
,      PUNCT <╝   ║     ║ punct
duos   NOUN  ═══╗<╝     ║ obj
ir     CCONJ <╗ ║       ║ cc
duonos NOUN  ═╝<╝       ║ conj
.      PUNCT <══════════╝ punct
```

