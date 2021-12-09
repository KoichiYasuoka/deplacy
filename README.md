[![Current PyPI packages](https://badge.fury.io/py/deplacy.svg)](https://pypi.org/project/deplacy/)

# deplacy

Simple dependency visualizer for [spaCy](https://spacy.io/), [UniDic2UD](https://pypi.org/project/unidic2ud), [Stanza](https://stanfordnlp.github.io/stanza), [NLP-Cube](https://github.com/Adobe/NLP-Cube), [Trankit](https://github.com/nlp-uoregon/trankit), etc.

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

`deplacy.render(doc,BoxDrawingWidth=1,EnableCR=False,WordRight=False,CatenaAnalysis=True,file=None,Japanese=False)` renders `doc` on a terminal. For old terminals, whose Box Drawing characters are "fullwidth", `BoxDrawingWidth=2` nicely works. For several languages with "proportional" characters, `EnableCR=True` or `WordRight=True` may work well. `CatenaAnalysis=False` disables Immediate Catena Analysis.

`deplacy.serve(doc,port=5000,RtoL=False)` invokes a simple web-server to visualize `doc` with SVG. Try to connect `http://127.0.0.1:5000` with your local browser. For Google Colaboratory, `port=None` visualizes `doc` directly on the notebook.

`deplacy.dot(doc,RtoL=False)` returns [raw DOT](https://graphviz.readthedocs.io/en/stable/manual.html#using-raw-dot) string for `graphviz.Source`.

## Other usages

* [Afrikaans](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/af.md)
* [العربية](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ar.md)
* [Беларуская](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/be.md)
* [Български](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/bg.md)
* [Català](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ca.md)
* [ⲙⲉⲧⲣⲉⲙⲛⲭⲏⲙⲓ](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/cop.md)
* [Čeština](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/cs.md)
* [Cymraeg](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/cy.md)
* [Dansk](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/da.md)
* [Deutsch](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/de.md)
* [Ελληνικά](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/el.md)
* [English](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/en.md)
* [Español](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/es.md)
* [Eesti](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/et.md)
* [Euskara](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/eu.md)
* [فارسی](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/fa.md)
* [Suomi](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/fi.md)
* [Føroyskt](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/fo.md)
* [Français](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/fr.md)
* [Gaeilge](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ga.md)
* [Gàidhlig](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/gd.md)
* [Galego](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/gl.md)
* [Ἑλληνική](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/grc.md)
* [עברית](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/he.md)
* [हिन्दी](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/hi.md)
* [Hrvatski](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/hr.md)
* [Magyar](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/hu.md)
* [Հայերեն](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/hy.md)
* [Bahasa Indonesia](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/id.md)
* [Íslenska](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/is.md)
* [Italiano](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/it.md)
* [日本語](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ja.md)
* [Қазақша](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/kk.md)
* [한국어](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ko.md)
* [Latina](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/la.md)
* [Lietuvių](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/lt.md)
* [Latviešu](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/lv.md)
* [漢文/文言文](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/lzh.md)
* [Македонски](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/mk.md)
* [Malti](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/mt.md)
* [Norsk(bokmål)](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/nb.md)
* [Nederlands](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/nl.md)
* [Nynorsk](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/nn.md)
* [Polski](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/pl.md)
* [Português](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/pt.md)
* [Română](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ro.md)
* [Русский](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ru.md)
* [Slovenčina](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sk.md)
* [Slovenščina](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sl.md)
* [Српски](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sr-ec.md)
* [Srpski](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sr-el.md)
* [Svenska](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/sv.md)
* [தமிழ்](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/ta.md)
* [ไทย](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/th.md)
* [Tagalog](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/tl.md)
* [Türkçe](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/tr.md)
* [Українська](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/uk.md)
* [Tiếng Việt](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/vi.md)
* [Wolof](https://github.com/KoichiYasuoka/deplacy/blob/master/doc/wo.md)
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

You need to install spaCy, UniDic2UD, Stanza, NLP-Cube, or Trankit separately. For Google Colaboratories, please follow (and edit) the templates shown below.

## Templates for Google Colaboratory

* [Afrikaans](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/af.ipynb)
* [العربية](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ar.ipynb)
* [Беларуская](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/be.ipynb)
* [Български](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/bg.ipynb)
* [Català](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ca.ipynb)
* [ⲙⲉⲧⲣⲉⲙⲛⲭⲏⲙⲓ](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/cop.ipynb)
* [Čeština](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/cs.ipynb)
* [Cymraeg](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/cy.ipynb)
* [Dansk](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/da.ipynb)
* [Deutsch](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/de.ipynb)
* [Ελληνικά](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/el.ipynb)
* [English](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/en.ipynb)
* [Español](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/es.ipynb)
* [Eesti](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/et.ipynb)
* [Euskara](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/eu.ipynb)
* [فارسی](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/fa.ipynb)
* [Suomi](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/fi.ipynb)
* [Føroyskt](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/fo.ipynb)
* [Français](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/fr.ipynb)
* [Gaeilge](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ga.ipynb)
* [Gàidhlig](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/gd.ipynb)
* [Galego](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/gl.ipynb)
* [Ἑλληνική](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/grc.ipynb)
* [עברית](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/he.ipynb)
* [हिन्दी](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/hi.ipynb)
* [Hrvatski](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/hr.ipynb)
* [Magyar](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/hu.ipynb)
* [Հայերեն](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/hy.ipynb)
* [Bahasa Indonesia](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/id.ipynb)
* [Íslenska](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/is.ipynb)
* [Italiano](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/it.ipynb)
* [日本語](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ja.ipynb)
* [Қазақша](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/kk.ipynb)
* [한국어](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ko.ipynb)
* [Latina](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/la.ipynb)
* [Lietuvių](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/lt.ipynb)
* [Latviešu](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/lv.ipynb)
* [漢文/文言文](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/lzh.ipynb)
* [Македонски](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/mk.ipynb)
* [Malti](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/mt.ipynb)
* [Norsk(bokmål)](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/nb.ipynb)
* [Nederlands](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/nl.ipynb)
* [Nynorsk](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/nn.ipynb)
* [Polski](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/pl.ipynb)
* [Português](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/pt.ipynb)
* [Română](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ro.ipynb)
* [Русский](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ru.ipynb)
* [Slovenčina](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sk.ipynb)
* [Slovenščina](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sl.ipynb)
* [Српски](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sr-ec.ipynb)
* [Srpski](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sr-el.ipynb)
* [Svenska](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/sv.ipynb)
* [தமிழ்](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/ta.ipynb)
* [ไทย](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/th.ipynb)
* [Tagalog](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/tl.ipynb)
* [Türkçe](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/tr.ipynb)
* [Українська](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/uk.ipynb)
* [Tiếng Việt](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/vi.ipynb)
* [Wolof](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/wo.ipynb)
* [中文(简体)](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/zh-cn.ipynb)
* [中文(繁體)](https://colab.research.google.com/github/KoichiYasuoka/deplacy/blob/master/doc/zh-tw.ipynb)

## Author

Koichi Yasuoka (安岡孝一)

## Reference

* Koichi Yasuoka: [deplacy: a CUI-based tree visualizer for Universal Dependencies](http://id.nii.ac.jp/1001/00208581/), IPSJ Symposium Series, Vol.2020, No.1 (December 2020), pp.95-100.

