[![Current PyPI packages](https://badge.fury.io/py/deplacy.svg)](https://pypi.org/project/deplacy/)

# deplacy

Simple dependency visualizer for [spaCy](https://spacy.io/), [UniDic2UD](https://pypi.org/project/unidic2ud), [Stanza](https://stanfordnlp.github.io/stanza), [NLP-Cube](https://github.com/Adobe/NLP-Cube), etc.

## Usage with spaCy

```py
>>> import spacy
>>> nlp=spacy.load("en_core_web_sm")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ ROOT
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ dobj
yesterday NOUN  <══════║═════╝   ║ npadvmod
which     DET   <════╗ ║         ║ nsubj
had       AUX   ═══╗═╝<╝         ║ relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ dobj
.         PUNCT <════════════════╝ punct
```

`deplacy.render(doc,BoxDrawingWidth=1,EnableCR=False,CatenaAnalysis=True,file=None)` renders `doc` on a terminal. For old terminals, whose Box Drawing characters are "fullwidth", `BoxDrawingWidth=2` nicely works. For several languages with "proportional" characters, `EnableCR=True` may work well. `CatenaAnalysis=False` disables Immediate Catena Analysis.

`deplacy.serve(doc,port=5000)` invokes a simple web-server to visualize `doc` with SVG. Try to connect `http://127.0.0.1:5000` with your local browser. For Google Colaboratory, `port=None` visualizes `doc` directly on the notebook.

`deplacy.dot(doc)` returns [raw DOT](https://graphviz.readthedocs.io/en/stable/manual.html#using-raw-dot) string for `graphviz.Source`.

## Other usages

* [English](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/en.md)
* [日本語](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ja.md)
* [漢文/文言文](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/lzh.md)
* [Português](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/pt.md)

## Visualization examples

### `deplacy.render()`

![deplacy.render()](https://raw.githubusercontent.com/KoichiYasuoka/deplacy/master/render.png)

### `deplacy.serve()`

![deplacy.serve()](https://raw.githubusercontent.com/KoichiYasuoka/deplacy/master/serve.png)

### `deplacy.dot()`

![deplacy.dot()](https://raw.githubusercontent.com/KoichiYasuoka/deplacy/master/dot.png)

## Installation

```sh
pip install deplacy
```

You need to install spaCy, UniDic2UD, Stanza, or NLP-Cube separately.

## Author

Koichi Yasuoka (安岡孝一)

## Reference

* 安岡孝一: [Universal Dependenciesの拡張にもとづく古典中国語(漢文)の直接構成鎖解析の試み](http://hdl.handle.net/2433/241358), 情報処理学会研究報告, Vol.2019-CH-120『人文科学とコンピュータ』, No.1 (2019年5月11日), pp.1-8.

