# [deplacy](https://koichiyasuoka.github.io/deplacy/)句法分析

## 用[Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("zh-hant")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <══════╗         nsubj
是   VERB  ═════╗═╝═╗═╗═╗═╗ root
附麗 VERB  ═╗═╗<╝   ║ ║ ║ ║ xcomp
於   VERB  <╝ ║     ║ ║ ║ ║ mark
存在 VERB  <══╝     ║ ║ ║ ║ obj
的   PART  <════════╝ ║ ║ ║ discourse
，   PUNCT <══════════╝ ║ ║ punct
有   VERB  ═╗<════╗     ║ ║ advcl
存在 NOUN  <╝     ║     ║ ║ obj
，   PUNCT <════╗ ║     ║ ║ punct
便   ADV   <══╗ ║ ║     ║ ║ mark
有   VERB  ═╗═╝═╝═╝<╗   ║ ║ acl
希望 NOUN  <╝       ║   ║ ║ obj
，   PUNCT <══════╗ ║   ║ ║ punct
有   VERB  ═╗<══╗ ║ ║   ║ ║ acl
希望 NOUN  <╝   ║ ║ ║   ║ ║ obj
，   PUNCT <══╗ ║ ║ ║   ║ ║ punct
便是 AUX   <╗ ║ ║ ║ ║   ║ ║ cop
光明 NOUN  ═╝═╝═╝═╝═╝<══╝ ║ parataxis
。   PUNCT <══════════════╝ punct
```

## 用[Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("zh")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <════════╗           nsubj
是   VERB  ═══════╗═╝<╗         dep
附麗 VERB  ═╗═╗═╗<╝   ║         xcomp
於   VERB  <╝ ║ ║     ║         mark
存在 VERB  <══╝ ║     ║         xcomp
的   X     <════╝     ║         discourse
，   PUNCT <══════════║═════╗   punct
有   VERB  ═╗<══╗     ║     ║   acl
存在 VERB  <╝   ║     ║     ║   xcomp
，   PUNCT <════║═╗   ║     ║   punct
便   ADV   <══╗ ║ ║   ║     ║   mark
有   VERB  ═╗═╝═╝═╝<╗ ║     ║   dep
希望 NOUN  <╝       ║ ║     ║   obj
，   PUNCT          ║ ║<══╗ ║   punct
有   VERB  ═╗<╗     ║ ║   ║ ║   acl
希望 NOUN  <╝ ║     ║ ║   ║ ║   obj
，   PUNCT    ║     ║ ║<╗ ║ ║   punct
便是 AUX   <╗ ║     ║ ║ ║ ║ ║   cop
光明 NOUN  ═╝═╝═════╝═╝═╝═╝═╝═╗ root
。   PUNCT <══════════════════╝ punct
```

## 用[spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("zh")
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希望 NOUN  <══════════════════╗   nsubj
是   AUX   <════════════════╗ ║   cop
附麗 PROPN <══════════════╗ ║ ║   nsubj
於   ADP   <╗             ║ ║ ║   case
存在 VERB  ═╝═╗<╗         ║ ║ ║   xcomp
的   PART  <══╝ ║         ║ ║ ║   mark:relcl
，   PUNCT <╗   ║         ║ ║ ║   punct
有   VERB  ═╝═══╝<══════╗ ║ ║ ║   advcl
存在 VERB  ═╗<════════╗ ║ ║ ║ ║   advcl
，   PUNCT <╝         ║ ║ ║ ║ ║   punct
便   ADV   <══╗       ║ ║ ║ ║ ║   mark
有   VERB  ═╗═╝<════╗ ║ ║ ║ ║ ║   advcl
希望 VERB  <╝       ║ ║ ║ ║ ║ ║   obj
，   PUNCT <══════╗ ║ ║ ║ ║ ║ ║   punct
有   VERB  ═╗<══╗ ║ ║ ║ ║ ║ ║ ║   advcl
希望 VERB  <╝   ║ ║ ║ ║ ║ ║ ║ ║   obj
，   PUNCT <══╗ ║ ║ ║ ║ ║ ║ ║ ║   punct
便是 AUX   <╗ ║ ║ ║ ║ ║ ║ ║ ║ ║   cop
光明 ADJ   ═╝═╝═╝═╝═╝═╝═╝═╝═╝═╝═╗ ROOT
。   PUNCT <════════════════════╝ punct
```

## 用[UD-Chinese](https://pypi.org/project/udchinese)

```py
>>> import udchinese
>>> nlp=udchinese.load()
>>> doc=nlp("希望是附麗於存在的，有存在，便有希望，有希望，便是光明。")
>>> import deplacy
>>> deplacy.render(doc)
希   VERB  ═╗═════╗═╗═╗═╗═╗═╗═╗═╗ root
望   VERB  <╝     ║ ║ ║ ║ ║ ║ ║ ║ mark
是   PRON  <╗     ║ ║ ║ ║ ║ ║ ║ ║ nsubj
附麗 VERB  ═╝═╗═╗<╝ ║ ║ ║ ║ ║ ║ ║ ccomp
於   ADP   <══╝ ║   ║ ║ ║ ║ ║ ║ ║ mark
存   VERB  ═╗<══╝   ║ ║ ║ ║ ║ ║ ║ mark
在   VERB  <╝       ║ ║ ║ ║ ║ ║ ║ mark
的   PART  <════════╝ ║ ║ ║ ║ ║ ║ discourse
，   PUNCT <══════════╝ ║ ║ ║ ║ ║ punct
有   VERB  <════════════╝ ║ ║ ║ ║ mark
存   VERB  ═╗<════════════╝ ║ ║ ║ xcomp
在   VERB  <╝               ║ ║ ║ mark
，   PUNCT <════╗           ║ ║ ║ punct
便   ADV   <══╗ ║           ║ ║ ║ mark
有   VERB  ═╗═╝═╝<╗         ║ ║ ║ advcl
希望 NOUN  <╝     ║         ║ ║ ║ obj
，   PUNCT <══════║═╗       ║ ║ ║ punct
有   VERB  ═╗═════╝═╝<══════╝ ║ ║ ccomp
希望 NOUN  <╝                 ║ ║ obj
，   PUNCT <══╗               ║ ║ punct
便是 AUX   <╗ ║               ║ ║ cop
光明 ADJ   ═╝═╝<══════════════╝ ║ parataxis
。   PUNCT <════════════════════╝ punct
```

