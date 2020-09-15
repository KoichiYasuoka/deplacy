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

`deplacy.render(doc,BoxDrawingWidth=1,EnableCR=False,CatenaAnalysis=True,file=None,Japanese=False)` renders `doc` on a terminal. For old terminals, whose Box Drawing characters are "fullwidth", `BoxDrawingWidth=2` nicely works. For several languages with "proportional" characters, `EnableCR=True` may work well. `CatenaAnalysis=False` disables Immediate Catena Analysis.

`deplacy.serve(doc,port=5000)` invokes a simple web-server to visualize `doc` with SVG. Try to connect `http://127.0.0.1:5000` with your local browser. For Google Colaboratory, `port=None` visualizes `doc` directly on the notebook.

`deplacy.dot(doc)` returns [raw DOT](https://graphviz.readthedocs.io/en/stable/manual.html#using-raw-dot) string for `graphviz.Source`.

## Other usages

* [Afrikaans](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/af.md)
* [Български](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/bg.md)
* [Català](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ca.md)
* [Čeština](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/cs.md)
* [Dansk](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/da.md)
* [Deutsch](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/de.md)
* [English](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/en.md)
* [Español](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/es.md)
* [Eesti](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/et.md)
* [Suomi](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/fi.md)
* [Français](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/fr.md)
* [Gaeilge](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ga.md)
* [Galego](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/gl.md)
* [Hrvatski](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/hr.md)
* [Magyar](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/hu.md)
* [Հայերեն](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/hy.md)
* [Bahasa Indonesia](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/id.md)
* [Italiano](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/it.md)
* [日本語](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ja.md)
* [한국어](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ko.md)
* [Lietuvių](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/lt.md)
* [漢文/文言文](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/lzh.md)
* [Norsk(bokmål)](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/nb.md)
* [Nederlands](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/nl.md)
* [Nynorsk](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/nn.md)
* [Polski](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/pl.md)
* [Português](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/pt.md)
* [Русский](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ru.md)
* [Slovenčina](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sk.md)
* [Slovenščina](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sl.md)
* [Српски](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sr-ec.md)
* [Srpski](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sr-el.md)
* [Svenska](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sv.md)
* [Українська](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/uk.md)
* [Tiếng Việt](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/vi.md)
* [中文(简体)](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/zh-cn.md)
* [中文(繁體)](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/zh-tw.md)

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

You need to install spaCy, UniDic2UD, Stanza, or NLP-Cube separately. For Google Colaboratories, please follow (and edit) the templates shown below.

## Templates for Google Colaboratory

* [Afrikaans](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/af.ipynb)
* [Български](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/bg.ipynb)
* [Català](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ca.ipynb)
* [Čeština](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/cs.ipynb)
* [Dansk](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/da.ipynb)
* [Deutsch](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/de.ipynb)
* [English](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/en.ipynb)
* [Español](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/es.ipynb)
* [Eesti](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/et.ipynb)
* [Suomi](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/fi.ipynb)
* [Français](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/fr.ipynb)
* [Gaeilge](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ga.ipynb)
* [Galego](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/gl.ipynb)
* [Hrvatski](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/hr.ipynb)
* [Magyar](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/hu.ipynb)
* [Հայերեն](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/hy.ipynb)
* [Bahasa Indonesia](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/id.ipynb)
* [Italiano](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/it.ipynb)
* [日本語](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ja.ipynb)
* [한국어](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ko.ipynb)
* [Lietuvių](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/lt.ipynb)
* [漢文/文言文](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/lzh.ipynb)
* [Norsk(bokmål)](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/nb.ipynb)
* [Nederlands](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/nl.ipynb)
* [Nynorsk](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/nn.ipynb)
* [Polski](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/pl.ipynb)
* [Português](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/pt.ipynb)
* [Русский](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ru.ipynb)
* [Slovenčina](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sk.ipynb)
* [Slovenščina](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sl.ipynb)
* [Српски](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sr-ec.ipynb)
* [Srpski](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sr-el.ipynb)
* [Svenska](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sv.ipynb)
* [Українська](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/uk.ipynb)
* [Tiếng Việt](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/vi.ipynb)
* [中文(简体)](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/zh-cn.ipynb)
* [中文(繁體)](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/zh-tw.ipynb)

## Author

Koichi Yasuoka (安岡孝一)

## Reference

* 安岡孝一: [Universal Dependenciesの拡張にもとづく古典中国語(漢文)の直接構成鎖解析の試み](http://hdl.handle.net/2433/241358), 情報処理学会研究報告, Vol.2019-CH-120『人文科学とコンピュータ』, No.1 (2019年5月11日), pp.1-8.

