# Syntax analysis by [deplacy](https://github.com/KoichiYasuoka/deplacy)

## Usage with [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("en")
>>> doc=nlp("The programmer was pleased by the nicely formatted parse tree.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
The        DET   <╗               det
programmer NOUN  ═╝<══════════╗   nsubj
was        AUX   <══════════╗ ║   cop
pleased    ADJ   ═════════╗═╝═╝═╗ root
by         ADP   <══════╗ ║     ║ case
the        DET   <════╗ ║ ║     ║ det
nicely     ADV   <╗   ║ ║ ║     ║ advmod
formatted  VERB  ═╝<╗ ║ ║ ║     ║ amod
parse      NOUN  <╗ ║ ║ ║ ║     ║ compound
tree       NOUN  ═╝═╝═╝═╝<╝     ║ obl
.          PUNCT <══════════════╝ punct
```

## Usage with [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("en")
>>> doc=nlp("The programmer was pleased by the nicely formatted parse tree.")
>>> import deplacy
>>> deplacy.render(doc)
The        DET   <╗               det
programmer NOUN  ═╝<══════════╗   nsubj
was        AUX   <══════════╗ ║   cop
pleased    ADJ   ═════════╗═╝═╝═╗ ROOT
by         ADP   <══════╗ ║     ║ case
the        DET   <════╗ ║ ║     ║ det
nicely     ADV   <╗   ║ ║ ║     ║ advmod
formatted  VERB  ═╝<╗ ║ ║ ║     ║ amod
parse      NOUN  <╗ ║ ║ ║ ║     ║ compound
tree       NOUN  ═╝═╝═╝═╝<╝     ║ obl
.          PUNCT <══════════════╝ punct
```

## Usage with [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("en")
>>> doc=nlp("The programmer was pleased by the nicely formatted parse tree.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
The        DET   <╗               det
programmer NOUN  ═╝<══════════╗   nsubj
was        AUX   <══════════╗ ║   cop
pleased    ADJ   ═════════╗═╝═╝═╗ root
by         ADP   <══════╗ ║     ║ case
the        DET   <════╗ ║ ║     ║ det
nicely     ADV   <╗   ║ ║ ║     ║ advmod
formatted  VERB  ═╝<╗ ║ ║ ║     ║ amod
parse      NOUN  <╗ ║ ║ ║ ║     ║ compound
tree       NOUN  ═╝═╝═╝═╝<╝     ║ obl
.          PUNCT <══════════════╝ punct
```

