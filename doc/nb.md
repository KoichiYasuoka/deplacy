# [deplacy](https://koichiyasuoka.github.io/deplacy/) for syntaktisk analyse på bokmål

## med [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("nb")
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      PART  <╗             advmod
tusen     NUM   ═╝<╗           nummod
ord       NOUN  ═══╝<══════╗   nsubj
seg       PRON  <════════╗ ║   nsubj
prenter   VERB  ═══════╗═╝═╝═╗ root
som       SCONJ <════╗ ║     ║ mark
én        NUM   <╗   ║ ║     ║ nummod
gjernings NOUN  ═╝<╗ ║ ║     ║ nmod
spor      NOUN  ═══╝═╝<╝     ║ xcomp
.         PUNCT <════════════╝ punct
```

## med [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("no_bokmaal")
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      PART  <╗             advmod
tusen     NUM   ═╝<╗           nummod
ord       NOUN  ═══╝<══════╗   nsubj
seg       PRON  <════════╗ ║   nsubj
prenter   VERB  ═══════╗═╝═╝═╗ ROOT
som       SCONJ <════╗ ║     ║ mark
én        NUM   <╗   ║ ║     ║ nummod
gjernings NOUN  ═╝<╗ ║ ║     ║ nmod
spor      NOUN  ═══╝═╝<╝     ║ xcomp
.         PUNCT <════════════╝ punct
```

## med [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      PART  <╗             advmod
tusen     NUM   ═╝<╗           nummod
ord       NOUN  ═══╝<══════╗   nsubj
seg       PRON  <════════╗ ║   obj
prenter   VERB  ═══════╗═╝═╝═╗ root
som       SCONJ <════╗ ║     ║ mark
én        NUM   <╗   ║ ║     ║ nummod
gjernings NOUN  ═╝<╗ ║ ║     ║ nmod
spor      NOUN  ═══╝═╝<╝     ║ xcomp
.         PUNCT <════════════╝ punct
```

## med [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=nb&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      PART  <╗             advmod
tusen     NUM   ═╝<╗           nummod
ord       NOUN  ═══╝<══════╗   nsubj
seg       PRON  <════════╗ ║   obj
prenter   VERB  ═══════╗═╝═╝═╗ root
som       SCONJ <════╗ ║     ║ mark
én        NUM   <╗   ║ ║     ║ nummod
gjernings NOUN  ═╝<╗ ║ ║     ║ nmod
spor      NOUN  ═══╝═╝<╝     ║ xcomp
.         PUNCT <════════════╝ punct
```

## med [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_no_bokmaal/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      PART  <╗           advmod
tusen     NUM   ═╝<╗         nummod
ord       NOUN  ═══╝═╗<══╗   nsubj
seg       PRON  <════╝   ║   nmod
prenter   VERB  ═══════╗═╝═╗ root
som       SCONJ <════╗ ║   ║ mark
én        NUM   <╗   ║ ║   ║ nummod
gjernings NOUN  ═╝<╗ ║ ║   ║ nmod
spor      NOUN  ═══╝═╝<╝   ║ xcomp
.         PUNCT <══════════╝ punct
```

## med [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("no_bokmaal")
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      PART  <╗             advmod
tusen     NOUN  ═╝<╗           nummod
ord       NOUN  ═══╝<══════╗   nsubj
seg       PRON  <════════╗ ║   nsubj
prenter   VERB  ═══════╗═╝═╝═╗ ROOT
som       SCONJ <════╗ ║     ║ mark
én        NUM   <══╗ ║ ║     ║ nummod
gjernings NOUN  <╗ ║ ║ ║     ║ nmod
spor      NOUN  ═╝═╝═╝<╝     ║ obl
.         PUNCT <════════════╝ punct
```

## med [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("nb_core_news_sm")
>>> doc=nlp("Ikke tusen ord seg prenter som én gjernings spor.")
>>> import deplacy
>>> deplacy.render(doc)
Ikke      ADV   <╗             neg
tusen     NUM   ═╝<════════╗   det
ord       NOUN  ═╗═══════╗═╝═╗ ROOT
seg       PRON  <╝       ║   ║ nmod
prenter   NOUN  ═══════╗<╝   ║ appos
som       ADP   <════╗ ║     ║ case
én        NUM   <╗   ║ ║     ║ nummod
gjernings VERB  ═╝<╗ ║ ║     ║ det
spor      NOUN  ═══╝═╝<╝     ║ nmod
.         PUNCT <════════════╝ punct
```

