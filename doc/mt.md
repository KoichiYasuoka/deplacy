# [deplacy](https://koichiyasuoka.github.io/deplacy/) għall-analiżi sintattika

## minn [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("mt")
>>> doc=nlp("Alla ħares ma kienx Majsi illi jagħmel ftit tad-dija.")
>>> import deplacy
>>> deplacy.render(doc)
Alla    PROPN <════════════════╗   nsubj
ħares   VERB  ═══════════════╗═╝═╗ root
ma      PART  <════════════╗ ║   ║ advmod:neg
kienx   AUX   <══════════╗ ║ ║   ║ aux
Majsi   VERB  ═════════╗═╝═╝<╝   ║ ccomp
illi    SCONJ <══════╗ ║         ║ mark
jagħmel VERB  ═════╗═╝<╝         ║ advcl
ftit    DET   ═══╗<╝             ║ obj
tad-    ADP   <╗ ║               ║ case:det
dija    NOUN  ═╝<╝               ║ nmod:poss
.       PUNCT <══════════════════╝ punct
```

## minn [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=mt&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:  ...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Alla ħares ma kienx Majsi illi jagħmel ftit tad-dija.")
>>> import deplacy
>>> deplacy.render(doc)
Alla    PROPN <════════════════╗   nsubj
ħares   VERB  ═══════════════╗═╝═╗ root
ma      PART  <════════════╗ ║   ║ advmod:neg
kienx   AUX   <══════════╗ ║ ║   ║ cop
Majsi   ADJ   ═════════╗═╝═╝<╝   ║ xcomp
illi    SCONJ <══════╗ ║         ║ mark
jagħmel VERB  ═════╗═╝<╝         ║ xcomp
ftit    DET   ═══╗<╝             ║ obj
tad-    ADP   <╗ ║               ║ case:det
dija    NOUN  ═╝<╝               ║ nmod:poss
.       PUNCT <══════════════════╝ punct
```

## minn [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Alla ħares ma kienx Majsi illi jagħmel ftit tad-dija.")
>>> import deplacy
>>> deplacy.render(doc)
Alla    DET   <╗                 det
ħares   NOUN  ═╝<════════════╗   nsubj
ma      PART  <════════════╗ ║   aux:neg
kienx   AUX   <══════════╗ ║ ║   cop
Majsi   NOUN  ═╗═══════╗═╝═╝═╝═╗ root
illi    ADV   <╝       ║       ║ advmod
jagħmel VERB  ═══════╗<╝       ║ xcomp
ftit    DET   ═════╗<╝         ║ obj
tad     ADP   <╗   ║           ║ case:det
-       PUNCT  ║<╗ ║           ║ punct
dija    NOUN  ═╝═╝<╝           ║ nmod:poss
.       PUNCT <════════════════╝ punct
```

