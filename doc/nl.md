# [deplacy](https://koichiyasuoka.github.io/deplacy/) voor syntactische analyse

## met [spaCy-Alpino](https://github.com/KoichiYasuoka/spaCy-Alpino)

```py
>>> import spacy_alpino
>>> nlp=spacy_alpino.load()
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <══════════════════════╗         advmod
houd       VERB  ═╗═╗═╗═══════════════╗═╝═╗═╗═╗═╗ ROOT
ik         PRON   ║<╝ ║               ║   ║ ║ ║ ║ nsubj
ze         PRON   ║<══╝               ║   ║ ║ ║ ║ obj
vast       ADJ   <╝                   ║   ║ ║ ║ ║ compound:prt
,          PUNCT <════════════════════║═══╝ ║ ║ ║ punct
ondanks    ADP   <╗                   ║     ║ ║ ║ case
alles      PRON  ═╝<══════════════════║═════╝ ║ ║ obl
,          PUNCT <════════════════════║═══════╝ ║ punct
omdat      SCONJ <══════════════════╗ ║         ║ mark
ik         PRON  <════════════════╗ ║ ║         ║ nsubj
nog        ADV   <╗               ║ ║ ║         ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║         ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║         ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║         ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║         ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║         ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║         ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║         ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║         ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝<╝         ║ advcl
.          PUNCT <══════════════════════════════╝ punct
```

## met [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <════════════════════════╗   advmod
houd       VERB  ═╗═╗═╗═╗═══════════════╗═╝═╗ root
ik         PRON   ║<╝ ║ ║               ║   ║ nsubj
ze         PRON   ║<══╝ ║               ║   ║ obj
vast       ADJ   <╝     ║               ║   ║ compound:prt
,          PUNCT <══╗   ║               ║   ║ punct
ondanks    ADP   <╗ ║   ║               ║   ║ case
alles      PRON  ═╝═╝<══╝               ║   ║ obl
,          PUNCT <════════════════════╗ ║   ║ punct
omdat      SCONJ <══════════════════╗ ║ ║   ║ mark
ik         PRON  <════════════════╗ ║ ║ ║   ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║   ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║   ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║   ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║   ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║   ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║   ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║   ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝   ║ advcl
.          PUNCT <══════════════════════════╝ punct
```

## met [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("nl")
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <════════════════════════╗   advmod
houd       VERB  ═╗═╗═╗═╗═══════════════╗═╝═╗ root
ik         PRON   ║<╝ ║ ║               ║   ║ nsubj
ze         PRON   ║<══╝ ║               ║   ║ obj
vast       ADJ   <╝     ║               ║   ║ compound:prt
,          PUNCT <══╗   ║               ║   ║ punct
ondanks    ADP   <╗ ║   ║               ║   ║ case
alles      PRON  ═╝═╝<══╝               ║   ║ obl
,          PUNCT <════════════════════╗ ║   ║ punct
omdat      SCONJ <══════════════════╗ ║ ║   ║ mark
ik         PRON  <════════════════╗ ║ ║ ║   ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║   ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║   ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║   ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║   ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║   ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║   ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║   ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝   ║ advcl
.          PUNCT <══════════════════════════╝ punct
```

## met [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=nl&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <════════════════════════╗   advmod
houd       VERB  ═╗═╗═╗═╗═══════════════╗═╝═╗ root
ik         PRON   ║<╝ ║ ║               ║   ║ nsubj
ze         PRON   ║<══╝ ║               ║   ║ obj
vast       ADJ   <╝     ║               ║   ║ compound:prt
,          PUNCT <══╗   ║               ║   ║ punct
ondanks    ADP   <╗ ║   ║               ║   ║ case
alles      PRON  ═╝═╝<══╝               ║   ║ obl
,          PUNCT <════════════════════╗ ║   ║ punct
omdat      SCONJ <══════════════════╗ ║ ║   ║ mark
ik         PRON  <════════════════╗ ║ ║ ║   ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║   ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║   ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║   ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║   ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║   ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║   ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║   ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝   ║ advcl
.          PUNCT <══════════════════════════╝ punct
```

## met [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("nl")
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <════════════════════════╗   advmod
houd       VERB  ═╗═╗═╗═╗═══════════════╗═╝═╗ ROOT
ik         PRON  <╝ ║ ║ ║               ║   ║ nsubj
ze         PRON  <══╝ ║ ║               ║   ║ obj
vast       ADJ   <════╝ ║               ║   ║ advmod
,          PUNCT <══╗   ║               ║   ║ punct
ondanks    ADP   <╗ ║   ║               ║   ║ case
alles      PRON  ═╝═╝<══╝               ║   ║ obl
,          PUNCT <════════════════════╗ ║   ║ punct
omdat      SCONJ <══════════════════╗ ║ ║   ║ mark
ik         PRON  <════════════════╗ ║ ║ ║   ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║   ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║   ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║   ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║   ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║   ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║   ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║   ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝   ║ advcl
.          PUNCT <══════════════════════════╝ punct
```

## met [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_nl_alpino/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <════════════════════════╗   advmod
houd       VERB  ═╗═╗═╗═╗═══════════════╗═╝═╗ root
ik         PRON   ║<╝ ║ ║               ║   ║ nsubj
ze         PRON   ║<══╝ ║               ║   ║ obj
vast       ADJ   <╝     ║               ║   ║ compound:prt
,          PUNCT <══╗   ║               ║   ║ punct
ondanks    ADP   <╗ ║   ║               ║   ║ case
alles      PRON  ═╝═╝<══╝               ║   ║ obl
,          PUNCT <════════════════════╗ ║   ║ punct
omdat      SCONJ <══════════════════╗ ║ ║   ║ mark
ik         PRON  <════════════════╗ ║ ║ ║   ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║   ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║   ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║   ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║   ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║   ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║   ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║   ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝   ║ advcl
.          PUNCT <══════════════════════════╝ punct
```

## met [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("nl_core_news_md")
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <════════════════════════╗   advmod
houd       VERB  ═╗═╗═╗═╗═══════════════╗═╝═╗ ROOT
ik         PRON   ║<╝ ║ ║               ║   ║ nsubj
ze         PRON   ║<══╝ ║               ║   ║ obj
vast       ADJ   <╝     ║               ║   ║ compound:prt
,          SYM   <══╗   ║               ║   ║ punct
ondanks    ADP   <╗ ║   ║               ║   ║ case
alles      PRON  ═╝═╝<══╝               ║   ║ obl
,          SYM   <════════════════════╗ ║   ║ punct
omdat      SCONJ <══════════════════╗ ║ ║   ║ mark
ik         PRON  <════════════════╗ ║ ║ ║   ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║   ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║   ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║   ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║   ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║   ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║   ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║   ║ case
den        DET   ═╗═╝<╝       ║ ║ ║ ║ ║ ║   ║ nmod
mens       NOUN  <╝           ║ ║ ║ ║ ║ ║   ║ flat
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝   ║ advcl
.          SYM   <══════════════════════════╝ punct
```

## met [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("nl_alpino")
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <══════╗                   advmod
houd       VERB  ═╗═╗═╗═╝═╗═════════════╗═╗ ROOT
ik         PRON   ║<╝ ║   ║             ║ ║ nsubj
ze         PRON   ║<══╝   ║             ║ ║ obj
vast       ADJ   <╝       ║             ║ ║ compound:prt
,          PUNCT <══╗     ║             ║ ║ punct
ondanks    ADP   <╗ ║     ║             ║ ║ case
alles      PRON  ═╝═╝<════╝             ║ ║ parataxis
,          PUNCT <════════════════════╗ ║ ║ punct
omdat      SCONJ <══════════════════╗ ║ ║ ║ mark
ik         PRON  <════════════════╗ ║ ║ ║ ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║ ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║ ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║ ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║ ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║ ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║ ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║ ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║ ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║ ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝ ║ advcl
.          PUNCT <════════════════════════╝ punct
```

## met [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("nl")
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <══════╗                   advmod
houd       VERB  ═╗═╗═╗═╝═╗═════════════╗═╗ root
ik         PRON   ║<╝ ║   ║             ║ ║ nsubj
ze         PRON   ║<══╝   ║             ║ ║ obj
vast       ADJ   <╝       ║             ║ ║ compound:prt
,          PUNCT <══╗     ║             ║ ║ punct
ondanks    ADP   <╗ ║     ║             ║ ║ case
alles      PRON  ═╝═╝<════╝             ║ ║ parataxis
,          PUNCT <════════════════════╗ ║ ║ punct
omdat      SCONJ <══════════════════╗ ║ ║ ║ mark
ik         PRON  <════════════════╗ ║ ║ ║ ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║ ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║ ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║ ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║ ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║ ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║ ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║ ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║ ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║ ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝ ║ advcl
.          PUNCT <════════════════════════╝ punct
```

