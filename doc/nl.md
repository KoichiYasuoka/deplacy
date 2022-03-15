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

## met [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

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

## met [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("dutch")
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

## met [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("dutch-ud27")
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <══════╗                         advmod
houd       VERB  ═╗═╗═╗═╝═════════════════════╗═╗ root
ik         PRON   ║<╝ ║                       ║ ║ nsubj
ze         PRON   ║<══╝                       ║ ║ obj
vast       ADJ   <╝                           ║ ║ compound:prt
,          PUNCT <══════════════════════════╗ ║ ║ punct
ondanks    ADP   <════════════════════════╗ ║ ║ ║ case
alles      PRON  ═══════════════════════╗═╝═╝<╝ ║ parataxis
,          PUNCT <════════════════════╗ ║       ║ punct
omdat      SCONJ <══════════════════╗ ║ ║       ║ mark
ik         PRON  <════════════════╗ ║ ║ ║       ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║       ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║       ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║       ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║       ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║       ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║       ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║       ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║       ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║       ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝       ║ advcl
.          PUNCT <══════════════════════════════╝ punct
```

## met [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("nl_alpino")
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       ADV   <══════════════════════════════╗   advmod
houd       VERB  ═╗═╗═╗═══════════════════════╗═╝═╗ ROOT
ik         PRON   ║<╝ ║                       ║   ║ nsubj
ze         PRON   ║<══╝                       ║   ║ obj
vast       ADJ   <╝                           ║   ║ compound:prt
,          PUNCT <══════════════════════════╗ ║   ║ punct
ondanks    ADP   <════════════════════════╗ ║ ║   ║ case
alles      PRON  ═══════════════════════╗═╝═╝<╝   ║ obl
,          PUNCT <════════════════════╗ ║         ║ punct
omdat      SCONJ <══════════════════╗ ║ ║         ║ mark
ik         PRON  <════════════════╗ ║ ║ ║         ║ nsubj
nog        ADV   <╗               ║ ║ ║ ║         ║ advmod
steeds     ADV   ═╝<════════════╗ ║ ║ ║ ║         ║ advmod
aan        ADP   <══════════╗   ║ ║ ║ ║ ║         ║ case
de         DET   <════════╗ ║   ║ ║ ║ ║ ║         ║ det
innerlijke ADJ   <══════╗ ║ ║   ║ ║ ║ ║ ║         ║ amod
goedheid   NOUN  ═════╗═╝═╝═╝<╗ ║ ║ ║ ║ ║         ║ obl
van        ADP   <══╗ ║       ║ ║ ║ ║ ║ ║         ║ case
den        DET   <╗ ║ ║       ║ ║ ║ ║ ║ ║         ║ det
mens       NOUN  ═╝═╝<╝       ║ ║ ║ ║ ║ ║         ║ nmod
geloof     VERB  ═════════════╝═╝═╝═╝═╝<╝         ║ acl
.          PUNCT <════════════════════════════════╝ punct
```

## met [Frog](https://languagemachines.github.io/frog)

```py
>>> def nlp(t):
...   import subprocess
...   u=""
...   for s in subprocess.check_output(["frog"],input=t,encoding="utf-8").split("\n"):
...     t=s.split("\t")
...     u+=s+"\n" if len(t)!=10 else "\t".join([t[0],t[1],t[2],t[4].split("(")[0],t[4],"_",t[8],t[9],"_","_"])+"\n"
...   return u
...
>>> doc=nlp("Toch houd ik ze vast, ondanks alles, omdat ik nog steeds aan de innerlijke goedheid van den mens geloof.")
>>> import deplacy
>>> deplacy.render(doc)
Toch       BW  <══════════════════════════════╗ mod
houd       WW  ═╗═╗═════════════════════════╗═╝ ROOT
ik         VNW <╝ ║                         ║   su
ze         VNW <══╝                         ║   obj1
vast       ADJ ═╗═════════════════════════╗<╝   predc
,          LET <╝                         ║     punct
ondanks    VZ  ═════════════════════════╗<╝     mod
alles      VNW ═╗═════════════════════╗<╝       obj1
,          LET <╝                     ║         punct
omdat      VG  ═════════════════════╗<╝         mod
ik         VNW <════════════════╗   ║           su
nog        BW  <╗               ║   ║           mod
steeds     BW  ═╝<════════════╗ ║   ║           mod
aan        VZ  ═══════════╗<╗ ║ ║   ║           mod
de         LID <════════╗ ║ ║ ║ ║   ║           det
innerlijke ADJ <══════╗ ║ ║ ║ ║ ║   ║           mod
goedheid   N   ═════╗═╝═╝<╝ ║ ║ ║   ║           obj1
van        VZ  ═══╗<╝       ║ ║ ║   ║           mod
den        LID <╗ ║         ║ ║ ║   ║           det
mens       N   ═╝<╝         ║ ║ ║   ║           obj1
geloof     WW  ═════════════╝═╝═╝═╗<╝           body
.          LET <══════════════════╝             punct
```

