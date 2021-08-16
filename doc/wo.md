# Tëgg waxin lim ci [deplacy](https://koichiyasuoka.github.io/deplacy/)

## ag [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=wo&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Sébb bu dee tàkk, loo ci ji du sax.")
>>> import deplacy
>>> deplacy.render(doc)
Sébb NOUN  ═════╗<══╗     dislocated
bu   SCONJ <══╗ ║   ║     mark
dee  AUX   <╗ ║ ║   ║     cop
tàkk VERB  ═╝═╝<╝   ║     acl:relcl
,    PUNCT <════════║═╗   punct
lu   PRON  ═════╗<╗ ║ ║   dislocated
nga  PRON  <══╗ ║ ║ ║ ║   nsubj
ci   ADP   <╗ ║ ║ ║ ║ ║   obl
ji   DET   ═╝═╝<╝ ║ ║ ║   det
du   AUX   <╗     ║ ║ ║   aux
sax  VERB  ═╝═════╝═╝═╝═╗ root
.    PUNCT <════════════╝ punct
```

## ag [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("wo")
>>> doc=nlp("Sébb bu dee tàkk, loo ci ji du sax.")
>>> import deplacy
>>> deplacy.render(doc)
Sébb NOUN  ═══════════════════╗ root
bu   SCONJ <══════════════╗   ║ mark
dee  AUX   <════════════╗ ║   ║ aux
tàkk NOUN  ═════════╗═╗═╝═╝═╗<╝ acl
,    PUNCT <══════╗ ║ ║     ║   punct
lu   PRON  ═╗<══╗ ║ ║ ║     ║   nsubj
nga  PRON   ║<╗ ║ ║ ║ ║     ║   nsubj
ci   ADP    ║ ║ ║ ║<╝ ║     ║   obl
ji   DET   <╝ ║ ║ ║   ║     ║   det
du   AUX   ═══╝═╝═╝<╗ ║     ║   cop
sax  ADV   ═════════╝<╝     ║   advmod
.    PUNCT <════════════════╝   punct
```

