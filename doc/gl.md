# [deplacy](https://koichiyasuoka.github.io/deplacy/) para a análise sintática do galego

## con [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando ADV   <══╗       advmod
hai   VERB  ═╗═╝<══╗   advcl
fame  NOUN  <╝     ║   obj
non   ADV   <════╗ ║   advmod
hai   VERB  ═══╗═╝═╝═╗ root
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ amod
.     PUNCT <════════╝ punct
```

## con [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("gl")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══════════╗ nsubj
hai   VERB  ═╗═══════╗═╝ root
fame  NOUN  <╝       ║   obj
non   PART  <════╗   ║   advmod
hai   VERB  ═══╗═╝═╗<╝   ccomp
pan   NOUN  ═╗<╝   ║     obj
duro  ADJ   <╝     ║     amod
.     PUNCT <══════╝     punct
```

## con [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("gl_ctg")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══════════╗ nsubj
hai   VERB  ═╗═══════╗═╝ ROOT
fame  NOUN  <╝       ║   obj
non   PART  <════╗   ║   advmod
hai   VERB  ═══╗═╝═╗<╝   obj
pan   NOUN  ═╗<╝   ║     obj
duro  ADJ   <╝     ║     amod
.     PUNCT <══════╝     punct
```

## con [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("gl")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══════════╗   nsubj
hai   VERB  <════════╗ ║   aux
fame  VERB  ═══════╗═╝═╝═╗ ROOT
non   PART  <════╗ ║     ║ advmod
hai   VERB  ═══╗═╝<╝     ║ obj
pan   NOUN  ═╗<╝         ║ obj
duro  ADJ   <╝           ║ amod
.     PUNCT <════════════╝ punct
```

## con [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("galician-ud27")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <════╗     nsubj
hai   VERB  ═╗═╗═╝<╗   ccomp
fame  NOUN  <╝ ║   ║   obj
non   PART  <══╝   ║   advmod
hai   VERB  ═══╗═══╝═╗ root
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ amod
.     PUNCT <════════╝ punct
```

## con [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("gl_ctg")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══╗       nsubj
hai   VERB  ═╗═╝<══╗   nsubj
fame  NOUN  <╝     ║   obj
non   PART  <════╗ ║   advmod
hai   VERB  ═══╗═╝═╝═╗ ROOT
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ amod
.     PUNCT <════════╝ punct
```

## con [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("galician")
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══╗       nsubj
hai   VERB  ═╗═╝<══╗   nsubj
fame  NOUN  <╝     ║   obj
non   PART  <════╗ ║   advmod
hai   VERB  ═══╗═╝═╝═╗ root
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ amod
.     PUNCT <════════╝ punct
```


## con [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=gl&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Cando hai fame non hai pan duro.")
>>> import deplacy
>>> deplacy.render(doc)
Cando PRON  <══╗       nsubj
hai   VERB  ═╗═╝<══╗   nsubj
fame  NOUN  <╝     ║   obj
non   PART  <════╗ ║   advmod
hai   VERB  ═══╗═╝═╝═╗ root
pan   NOUN  ═╗<╝     ║ obj
duro  ADJ   <╝       ║ amod
.     PUNCT <════════╝ punct
```

