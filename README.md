[![Current PyPI packages](https://badge.fury.io/py/deplacy.svg)](https://pypi.org/project/deplacy/)

# deplacy

Simple dependency visualizer for [spaCy](https://spacy.io/), [UniDic2UD](https://pypi.org/project/unidic2ud), [Stanza](https://stanfordnlp.github.io/stanza), and [NLP-Cube](https://github.com/Adobe/NLP-Cube).

## Usage with spaCy

```py
>>> import spacy
>>> nlp=spacy.load("en_core_web_sm")
>>> doc=nlp("The programmer was pleased by the nicely formatted parse tree.")
>>> import deplacy
>>> deplacy.render(doc)
The        DET   <╗               det
programmer NOUN  ═╝<══════════╗   nsubjpass
was        AUX   <══════════╗ ║   auxpass
pleased    VERB  ═════════╗═╝═╝═╗ ROOT
by         ADP   ═══════╗<╝     ║ agent
the        DET   <════╗ ║       ║ det
nicely     ADV   <╗   ║ ║       ║ advmod
formatted  VERB  ═╝<╗ ║ ║       ║ amod
parse      NOUN  <╗ ║ ║ ║       ║ compound
tree       NOUN  ═╝═╝═╝<╝       ║ pobj
.          PUNCT <══════════════╝ punct
>>> deplacy.serve(doc)
http://127.0.0.1:5000   HTTP deplacy/0.7.0
```

`deplacy.render(doc,BoxDrawingWidth=1,EnableCR=False,CatenaAnalysis=True,file=None)` renders `doc` on a terminal. For old terminals, whose Box Drawing characters are "fullwidth", `BoxDrawingWidth=2` nicely works. For several languages with "proportional" characters, `EnableCR=True` may work well. `CatenaAnalysis=False` disables Immediate Catena Analysis.

`deplacy.serve(doc,port=5000)` invokes a simple web-server to visualize `doc` with SVG. Try to connect `http://127.0.0.1:5000` with your local browser.

## Usage with UniDic2UD

```py
>>> import unidic2ud
>>> nlp=unidic2ud.load(None,"english-ewt")
>>> doc=nlp("The programmer was pleased by the nicely formatted parse tree.")
>>> d=str(doc)
>>> import deplacy
>>> deplacy.render(d)
>>> deplacy.serve(d)
```

## Usage with Stanza

```py
>>> import stanza
>>> nlp=stanza.Pipeline("en")
>>> doc=nlp("The programmer was pleased by the nicely formatted parse tree.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
>>> deplacy.serve(d)
```

## Usage with NLP-Cube

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("en")
>>> doc=nlp("The programmer was pleased by the nicely formatted parse tree.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
>>> deplacy.serve(d)
```

## Installation

```sh
pip install deplacy
```

You need to install spaCy, UniDic2UD, Stanza, or NLP-Cube separately.

## Author

Koichi Yasuoka (安岡孝一)

## Reference

* 安岡孝一: Universal Dependenciesの拡張にもとづく古典中国語(漢文)の直接構成鎖解析の試み, 情報処理学会研究報告, Vol.2019-CH-120『人文科学とコンピュータ』, No.1 (2019年5月11日), pp.1-8.

