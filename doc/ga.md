# Anailís ghramadaí trí [deplacy](https://koichiyasuoka.github.io/deplacy/)

## le [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ga")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ nmod
.         PUNCT <════════╝ punct
```

## le [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=ga&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ nmod
.         PUNCT <════════╝ punct
```

## le [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("irish-ud27")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ nmod
.         PUNCT <════════╝ punct
```

## le [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("irish")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ nmod
.         PUNCT <════════╝ punct
```

## le [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ga")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ ROOT
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ nmod
.         PUNCT <════════╝ punct
```

## le [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("ga_idt")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ ROOT
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ compound
.         PUNCT <════════╝ punct
```

## le [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("ga_idt")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ ROOT
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ xcomp:pred
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ compound
.         PUNCT <════════╝ punct
```

## le [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Táimid faoi dhraíocht ag ceol na farraige.")
>>> import deplacy
>>> deplacy.render(doc)
Táimid    VERB  ═══╗═══╗═╗ root
faoi      ADP   <╗ ║   ║ ║ case
dhraíocht NOUN  ═╝<╝   ║ ║ obl
ag        ADP   <════╗ ║ ║ case
ceol      NOUN  ═══╗═╝<╝ ║ obl
na        DET   <╗ ║     ║ det
farraige  NOUN  ═╝<╝     ║ compound
.         PUNCT <════════╝ punct
```

