[![Current PyPI packages](https://badge.fury.io/py/deplacy.svg)](https://pypi.org/project/deplacy/)

# deplacy

Simple dependency visualizer for [spaCy](https://spacy.io/).

# Basic usage with spaCy

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
>>> deplacy.render(doc,2)
I     PRON  <┐     nsubj
saw   VERB ─┴─┐ ROOT
three NUM   <┐  │ nummod
ships NOUN ─┘ <┘ dobj
```

`deplacy.render(doc,BoxDrawingWidth=1,file=None)` renders `doc` on a terminal. For old terminals, whose Box Drawing characters are "fullwidth", `BoxDrawingWidth=2` nicely works.

