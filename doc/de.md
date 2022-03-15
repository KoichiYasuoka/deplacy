# Syntaxanalyse durch [Deplacy](https://koichiyasuoka.github.io/deplacy/)

## mit [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ xcomp
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("de")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ xcomp
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("german-ud27")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ xcomp
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=de&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ xcomp
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [SpaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("de_gsd")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ xcomp
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("de")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ advmod
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("de")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ advmod
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [SpaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("de_gsd")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ advmod
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("german")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   nsubj
sieht VERB  ═════╗═╝═╗ root
sehr  ADV   <══╗ ║   ║ advmod
jung  ADJ   ═╗═╝<╝   ║ xcomp
aus   ADP   <╝       ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Spacy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("de_core_news_sm")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   sb
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ mo
jung  ADJ   ═╝ ║<╝   ║ oa
aus   ADP   <══╝     ║ svp
.     PUNCT <════════╝ punct
```

## mit [ParZu](https://github.com/rsennrich/ParZu)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse
...   with urllib.request.urlopen("https://pub.cl.uzh.ch/demo/parzu/parse/?format=conll&text="+urllib.parse.quote(t)) as r:
...     return r.read().decode("utf-8")
...
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRO   <══════╗ subj
sieht V     ═══╗═╗═╝ root
sehr  ADV   <╗ ║ ║   adv
jung  ADV   ═╝<╝ ║   pred
aus   PTKVZ <════╝   avz
.     $.             root
```

