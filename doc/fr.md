# [deplacy](https://koichiyasuoka.github.io/deplacy/) pour l'analyse syntaxique

## avec [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("fr_core_news_sm")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=fr&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("french")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> from spacy.lang.fr import French
>>> nlp=French()
>>> import spacy
>>> nlp.pipeline.extend(spacy.load("en_udify").pipeline)
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl:mod
.         PUNCT <══════════╝ punct
```

## avec [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("fr_sequoia")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl:mod
.         PUNCT <══════════╝ punct
```

## avec [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("fr_sequoia")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl:mod
.         PUNCT <══════════╝ punct
```

## avec [Talismane](https://github.com/joliciel-informatique/talismane)

```py
>>> import subprocess
>>> nlp=lambda t:"".join([s+"\n" for s in subprocess.run(["java","-Xmx1G","-Dconfig.file=talismane-fr-ud-6.1.0.conf","-jar","talismane-core-6.1.0.jar","--analyse","--sessionId=fr"],cwd="talismane",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout.split("\n") if s=="" or len(s.split("\t"))==10]).replace("\t\t","\t_\t")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel ADJ   ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("french-ud27")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'essentiel PROPN <════════╗   nsubj
est         AUX   <══════╗ ║   cop
invisible   ADJ   ═════╗═╝═╝═╗ root
pour        ADP   <══╗ ║     ║ case
les         DET   <╗ ║ ║     ║ det
yeux        NOUN  ═╝═╝<╝     ║ obl:mod
.           PUNCT <══════════╝ punct
```

