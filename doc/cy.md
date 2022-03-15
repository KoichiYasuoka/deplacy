# Dadansoddiad cystrawen trwy [deplacy](https://koichiyasuoka.github.io/deplacy/)

## gyda [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=cy&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Benthyg dros amser byr yw popeth a geir yn y byd hwn.")
>>> import deplacy
>>> deplacy.render(doc)
Benthyg NOUN  ═════╗<════════╗   nsubj
dros    ADP   <══╗ ║         ║   case
amser   NOUN  ═╗═╝<╝         ║   nmod
byr     NOUN  <╝             ║   nmod
yw      AUX   <════════════╗ ║   cop
popeth  NOUN  ═══════════╗═╝═╝═╗ root
a       PRON  <════════╗ ║     ║ obj
geir    VERB  ═══════╗═╝<╝     ║ acl:relcl
yn      ADP   <════╗ ║         ║ case
y       DET   <══╗ ║ ║         ║ det
byd     NOUN  ═╗═╝═╝<╝         ║ obl
hwn     PRON  <╝               ║ det
.       PUNCT <════════════════╝ punct
```

## gyda [luigi/custom_models](https://git.rahona.be/luigi/custom_models)

```py
>>> import ufal.udpipe
>>> model=ufal.udpipe.Model.load("welsh-ccg-ud-2.5-200907.udpipe")
>>> nlp=ufal.udpipe.Pipeline(model,"tokenize","","","").process
>>> doc=nlp("Benthyg dros amser byr yw popeth a geir yn y byd hwn.")
>>> import deplacy
>>> deplacy.render(doc)
Benthyg NOUN  ═════╗<════════╗   nsubj
dros    ADP   <══╗ ║         ║   case
amser   NOUN  ═╗═╝<╝         ║   nmod
byr     NOUN  <╝             ║   nmod
yw      AUX   <════════════╗ ║   cop
popeth  NOUN  ═══════════╗═╝═╝═╗ root
a       PRON  <════════╗ ║     ║ obj
geir    VERB  ═══════╗═╝<╝     ║ acl:relcl
yn      ADP   <════╗ ║         ║ case
y       DET   <══╗ ║ ║         ║ det
byd     NOUN  ═╗═╝═╝<╝         ║ obl
hwn     PRON  <╝               ║ det
.       PUNCT <════════════════╝ punct
```

## gyda [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("cy")
>>> doc=nlp("Benthyg dros amser byr yw popeth a geir yn y byd hwn.")
>>> import deplacy
>>> deplacy.render(doc)
Benthyg NOUN  ═════╗<════════╗   nsubj
dros    ADP   <══╗ ║         ║   case
amser   NOUN  ═╗═╝<╝         ║   nmod
byr     ADJ   <╝             ║   amod
yw      AUX   <════════════╗ ║   cop
popeth  NOUN  ═══════════╗═╝═╝═╗ root
a       PRON  <════════╗ ║     ║ case:pred
geir    ADJ   ═══════╗═╝<╝     ║ amod
yn      ADP   <════╗ ║         ║ case
y       DET   <══╗ ║ ║         ║ det
byd     NOUN  ═╗═╝═╝<╝         ║ obl
hwn     PRON  <╝               ║ det
.       PUNCT <════════════════╝ punct
```

## gyda [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Benthyg dros amser byr yw popeth a geir yn y byd hwn.")
>>> import deplacy
>>> deplacy.render(doc)
Benthyg ADV   ═══╗<════════════╗   advmod
dros    ADP   <╗ ║             ║   case
amser   NOUN  ═╝<╝             ║   obl
byr     NOUN  <══════════════╗ ║   nsubj
yw      AUX   <════════════╗ ║ ║   cop
popeth  NOUN  ═══════════╗═╝═╝═╝═╗ root
a       PART  <════════╗ ║       ║ mark
geir    VERB  ═══════╗═╝<╝       ║ acl
yn      ADP   <════╗ ║           ║ case
y       DET   <══╗ ║ ║           ║ det
byd     NOUN  ═╗═╝═╝<╝           ║ obl
hwn     PRON  <╝                 ║ det
.       PUNCT <══════════════════╝ punct
```

