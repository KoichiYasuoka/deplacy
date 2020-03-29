[![Current PyPI packages](https://badge.fury.io/py/deplacy.svg)](https://pypi.org/project/deplacy/)

# deplacy

Simple dependency visualizer for [spaCy](https://spacy.io/), [UniDic2UD](https://pypi.org/project/unidic2ud), [Stanza](https://stanfordnlp.github.io/stanza), and [NLP-Cube](https://github.com/Adobe/NLP-Cube).

## Usage with spaCy

```py
>>> import spacy
>>> nlp=spacy.load("en_core_web_sm")
>>> doc=nlp("I saw three ships")
>>> import deplacy
>>> deplacy.render(doc)
I     PRON <┐   nsubj
saw   VERB ─┴─┐ ROOT
three NUM  <┐ │ nummod
ships NOUN ─┘<┘ dobj
```

`deplacy.render(doc,BoxDrawingWidth=1,EnableCR=False,file=None)` renders `doc` on a terminal. For old terminals, whose Box Drawing characters are "fullwidth", `BoxDrawingWidth=2` nicely works. For several languages with "proportional" characters, `EnableCR=True` may work well.

## Usage with UniDic2UD

```py
>>> import unidic2ud
>>> nlp=unidic2ud.load(None,"english-ewt")
>>> d=nlp("I saw three ships",raw=True)
>>> import deplacy
>>> deplacy.render(d)
```

## Usage with Stanza

```py
>>> import stanza
>>> nlp=stanza.Pipeline("en")
>>> doc=nlp("I saw three ships")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
```

## Usage with NLP-Cube

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("en")
>>> doc=nlp("I saw three ships")
>>> d="".join("".join(str(t)+"\n" for t in s) for s in doc)
>>> import deplacy
>>> deplacy.render(d)
```

## Installation

```sh
pip install deplacy
```

You need to install spaCy, UniDic2UD, Stanza, or NLP-Cube separately.

