# Mion-sgrùdadh gràmair tro [deplacy](https://koichiyasuoka.github.io/deplacy/)

## le [GLA](https://klc.vdu.lt/sgtoolkit/)

```py
>>> def nlp(t):
...   import urllib.request
...   with urllib.request.urlopen(urllib.request.Request("https://klc.vdu.lt/sgtoolkit/parser",t.encode(),{})) as r:
...     return r.read().decode("utf-8")
...
>>> doc=nlp("Innsidh na geòidh as t-fhoghar e.")
>>> import deplacy
>>> deplacy.render(doc)
Innsidh VERB  ═════════╗═╗═╗ root
na      DET   <══════╗ ║ ║ ║ det
geòidh  NOUN  ═════╗═╝<╝ ║ ║ nsubj
as      ADP   <══╗ ║     ║ ║ case
t-      PART  <╗ ║ ║     ║ ║ case
fhoghar NOUN  ═╝═╝<╝     ║ ║ obl
e       PRON  <══════════╝ ║ obj
.       PUNCT <════════════╝ punct
```

## le [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("gd")
>>> doc=nlp("Innsidh na geòidh as t-fhoghar e.")
>>> import deplacy
>>> deplacy.render(doc)
Innsidh   VERB  ═══╗═╗═╗═╗ root
na        DET   <╗ ║ ║ ║ ║ det
geòidh    NOUN  ═╝<╝ ║ ║ ║ nsubj
as        AUX   <╗   ║ ║ ║ cop
t-fhoghar NOUN  ═╝<══╝ ║ ║ obl
e         PRON  <══════╝ ║ nsubj
.         PUNCT <════════╝ punct
```

## le [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=gd&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Innsidh na geòidh as t-fhoghar e.")
>>> import deplacy
>>> deplacy.render(doc)
Innsidh   VERB  ═══╗═╗═╗ root
na        DET   <╗ ║ ║ ║ det
geòidh    NOUN  ═╝<╝ ║ ║ nsubj
as        AUX   <══╗ ║ ║ cop
t-fhoghar NOUN  ═╗═╝<╝ ║ ccomp
e         PRON  <╝     ║ nsubj
.         PUNCT <══════╝ punct
```

## le [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("gd")
>>> doc=nlp("Innsidh na geòidh as t-fhoghar e.")
>>> import deplacy
>>> deplacy.render(doc)
Innsidh   VERB  ═══╗═╗═╗ ROOT
na        DET   <╗ ║ ║ ║ det
geòidh    NOUN  ═╝<╝ ║ ║ nsubj
as        ADP   <══╗ ║ ║ case
t-fhoghar VERB  ═╗═╝<╝ ║ ccomp
e         PRON  <╝     ║ nsubj
.         PUNCT <══════╝ punct
```

## le [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("scottish-gaelic")
>>> doc=nlp("Innsidh na geòidh as t-fhoghar e.")
>>> import deplacy
>>> deplacy.render(doc)
Innsidh   VERB ═══╗═╗═╗ root
na        DET  <╗ ║ ║ ║ det
geòidh    NOUN ═╝<╝ ║ ║ nsubj
as        ADP  <╗   ║ ║ case
t-fhoghar VERB ═╝<══╝ ║ ccomp
e.        PRON <══════╝ punct
```

