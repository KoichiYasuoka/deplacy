# Analisi sintaktikoa [deplacy](https://koichiyasuoka.github.io/deplacy/)-ren bidez

## [Trankit](https://github.com/nlp-uoregon/trankit)-rekin

```py
>>> import trankit
>>> nlp=trankit.Pipeline("basque")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  ═╗<════╗   csubj
izatea    AUX   <╝     ║   cop
lan       NOUN  ═╗═╗═╗═╝═╗ root
extra     ADJ   <╝ ║ ║   ║ amod
bat       NUM   <══╝ ║   ║ nummod
izatea    AUX   ═╗<══╝   ║ cop
da        AUX   <╝       ║ cop
.         PUNCT <════════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)-rekin

```py
>>> import stanza
>>> nlp=stanza.Pipeline("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  ═╗<════╗   nsubj
izatea    AUX   <╝     ║   cop
lan       NOUN  ═╗═╗<╗ ║   obj
extra     NOUN  <╝ ║ ║ ║   nmod
bat       NUM   <══╝ ║ ║   nummod
izatea    VERB  ═╗═══╝═╝═╗ root
da        AUX   <╝       ║ cop
.         PUNCT <════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-rekin

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("eu")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  ═╗═════╗═╗═╗ ROOT
izatea    AUX   <╝     ║ ║ ║ cop
lan       NOUN  <══╗   ║ ║ ║ nmod
extra     NOUN  ═╗═╝<╗ ║ ║ ║ nsubj
bat       NUM   <╝   ║ ║ ║ ║ nummod
izatea    VERB  ═════╝<╝ ║ ║ xcomp
da        AUX   <════════╝ ║ cop
.         PUNCT <══════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)-rekin

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun ADJ   ═╗<══════╗   xcomp
izatea    AUX   <╝       ║   cop
lan       NOUN  ═╗═╗═╗<╗ ║   xcomp
extra     ADJ   <╝ ║ ║ ║ ║   amod
bat       NUM   <══╝ ║ ║ ║   nummod
izatea    AUX   ═══════╝═╝═╗ root
da        AUX   <════╝     ║ cop
.         PUNCT <══════════╝ punct
```

## [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)-rekin

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("eu_bdt")
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun NOUN  <╗         xcomp
izatea    AUX   ═╝<════╗   advcl
lan       NOUN  ═╗═╗<╗ ║   nsubj
extra     NOUN  <╝ ║ ║ ║   amod
bat       NUM   <══╝ ║ ║   nummod
izatea    VERB  ═╗═══╝═╝═╗ ROOT
da        AUX   <╝       ║ cop
.         PUNCT <════════╝ punct
```

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)-rekin

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=eu&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Euskaldun izatea lan extra bat izatea da.")
>>> import deplacy
>>> deplacy.render(doc)
Euskaldun ADJ   ═╗═════╗═╗<╗ csubj
izatea    AUX   <╝     ║ ║ ║ cop
lan       NOUN  ═╗═╗═╗═════╝ root
extra     NOUN  <╝ ║ ║ ║ ║   amod
bat       NUM   <══╝ ║ ║ ║   nummod
izatea    AUX   <════║═╝ ║   cop
da        AUX   <════║═══╝   cop
.         PUNCT <════╝       punct
```

