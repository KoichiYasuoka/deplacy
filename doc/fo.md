# Mállærugreining við [deplacy](https://koichiyasuoka.github.io/deplacy/)

## av [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("fo")
>>> doc=nlp("Ofta taka trøll góða manna børn.")
>>> import deplacy
>>> deplacy.render(doc)
Ofta  ADV   <════════╗ advmod
taka  VERB  ═╗═════╗═╝ root
trøll PRON  <╝     ║   nsubj
góða  ADJ   <══╗   ║   amod
manna NOUN  <╗ ║   ║   nmod:poss
børn  NOUN  ═╝═╝═╗<╝   obj
.     PUNCT <════╝     punct
```

## av [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=fo&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Ofta taka trøll góða manna børn.")
>>> import deplacy
>>> deplacy.render(doc)
Ofta  ADV   <════════╗ advmod
taka  VERB  ═╗═════╗═╝ root
trøll NOUN  <╝     ║   nsubj
góða  ADJ   <══╗   ║   amod
manna NOUN  <╗ ║   ║   nmod:poss
børn  NOUN  ═╝═╝═╗<╝   obj
.     PUNCT <════╝     punct
```

