# Syntax analysis by [deplacy](https://koichiyasuoka.github.io/deplacy/)

## Usage with [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("english-ud27")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=en&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("en_ewt")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ ROOT
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("english")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <════════╗   nsubj
saw       VERB  ═══╗═╗═╗═╝═╗ ROOT
a         DET   <╗ ║ ║ ║   ║ det
horse     NOUN  ═╝<╝ ║ ║   ║ obj
yesterday NOUN  <════╝ ║   ║ obl:tmod
which     PRON  <════╗ ║   ║ nsubj
had       VERB  ═══╗═╝<╝   ║ acl:relcl
no        DET   <╗ ║       ║ det
name      NOUN  ═╝<╝       ║ obj
.         PUNCT <══════════╝ punct
```

## Usage with [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("en_ewt")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════╗   nsubj
saw       VERB  ═══╗═════╗═╝═╗ ROOT
a         DET   <╗ ║     ║   ║ det
horse     NOUN  ═╝<╝     ║   ║ obj
yesterday NOUN  ═══════╗<╝   ║ obl:tmod
which     PRON  <════╗ ║     ║ nsubj
had       VERB  ═══╗═╝<╝     ║ acl:relcl
no        DET   <╗ ║         ║ det
name      NOUN  ═╝<╝         ║ obj
.         PUNCT <════════════╝ punct
```

