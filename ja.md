# [displacy](https://pypi.org/project/displacy)を用いた日本語文法解析

## [UniDic2UD](https://pypi.org/project/unidic2ud)で解析

```py
>>> import unidic2ud
>>> nlp=unidic2ud.load("qkana")
>>> doc=nlp("國境のトンネルを拔けると、窓の外の夜の底が白くなつた。")
>>> d=str(doc)
>>> import deplacy
>>> deplacy.render(d)
國境     NOUN  ═╗<╗           nmod
の       ADP   <╝ ║           case
トンネル NOUN  ═╗═╝<╗         obj
を       ADP   <╝   ║         case
拔ける   VERB  ═════╝═╗═╗<╗   advcl
と       CCONJ <══════╝ ║ ║   mark
、       PUNCT <════════╝ ║   punct
窓       NOUN  ═╗<╗       ║   nmod
の       ADP   <╝ ║       ║   case
外       NOUN  ═╗═╝<╗     ║   nmod
の       ADP   <╝   ║     ║   case
夜       NOUN  ═╗═══╝<╗   ║   nmod
の       ADP   <╝     ║   ║   case
底       NOUN  ═╗═════╝<╗ ║   nsubj
が       ADP   <╝       ║ ║   case
白く     ADJ   ═╗═╗═════╝═╝═╗ root
なつ     VERB  <╝ ║         ║ aux
た       AUX   <══╝         ║ aux
。       PUNCT <════════════╝ punct
```

## [GiNZA](https://megagonlabs.github.io/ginza/)で解析

```py
>>> import spacy
>>> nlp=spacy.load("ja_ginza")
>>> doc=nlp("國境のトンネルを拔けると、窓の外の夜の底が白くなつた。")
>>> import deplacy
>>> deplacy.render(doc)
國       NOUN  <╗               compound
境       NOUN  ═╝═╗<╗           nmod
の       ADP   <══╝ ║           case
トンネル NOUN  ═╗═══╝<╗         obj
を       ADP   <╝     ║         case
拔け     VERB  ═╗═╗═══╝═╗<══╗   advcl
る       AUX   <╝ ║     ║   ║   aux
と       CCONJ <══╝     ║   ║   cc
、       PUNCT <════════╝   ║   punct
窓       NOUN  ═╗<╗         ║   nmod
の       ADP   <╝ ║         ║   case
外       NOUN  ═╗═╝<╗       ║   nmod
の       ADP   <╝   ║       ║   case
夜       NOUN  ═╗═══╝<╗     ║   nmod
の       ADP   <╝     ║     ║   case
底       NOUN  ═╗═════╝<╗   ║   nsubj
が       ADP   <╝       ║   ║   case
白く     ADJ   ═════════╝<╗ ║   amod
なつ     VERB  ═╗═════════╝═╝═╗ ROOT
た       AUX   <╝             ║ aux
。       PUNCT <══════════════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)で解析

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ja")
>>> doc=nlp("國境のトンネルを拔けると、窓の外の夜の底が白くなつた。")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
國境     PROPN ═╗<╗           nmod
の       ADP   <╝ ║           case
トンネル NOUN  ═╗═╝<╗         obj
を       ADP   <╝   ║         case
拔ける   VERB  ═════╝═╗═╗<╗   advcl
と       SCONJ <══════╝ ║ ║   mark
、       PUNCT <════════╝ ║   punct
窓       NOUN  ═╗<╗       ║   nmod
の       ADP   <╝ ║       ║   case
外       NOUN  ═╗═╝<╗     ║   nmod
の       ADP   <╝   ║     ║   case
夜       NOUN  ═╗═══╝<╗   ║   nmod
の       ADP   <╝     ║   ║   case
底       NOUN  ═╗═════╝<╗ ║   nsubj
が       ADP   <╝       ║ ║   case
白く     ADJ   <══╗     ║ ║   advcl
なつ     VERB  ═╗═╝═════╝═╝═╗ root
た       AUX   <╝           ║ aux
。       PUNCT <════════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)で解析

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ja")
>>> doc=nlp("國境のトンネルを拔けると、窓の外の夜の底が白くなつた。")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
國境     PROPN ═╗<╗             nmod
の       ADP   <╝ ║             case
トンネル NOUN  ═╗═╝<╗           obj
を       ADP   <╝   ║           case
拔ける   VERB  ═════╝═╗═╗<╗     advcl
と       SCONJ <══════╝ ║ ║     mark
、       PUNCT <════════╝ ║     punct
窓       NOUN  ═╗<╗       ║     nmod
の       ADP   <╝ ║       ║     case
外       NOUN  ═╗═╝<╗     ║     nmod
の       ADP   <╝   ║     ║     case
夜       NOUN  ═╗═══╝<╗   ║     nmod
の       ADP   <╝     ║   ║     case
底       NOUN  ═╗═════╝<╗ ║     nsubj
が       ADP   <╝       ║ ║     case
白く     ADJ   ═════════╝═╝<╗   acl
なつた   NOUN  ═════════════╝═╗ root
。       PUNCT <══════════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)で解析

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ja")
>>> doc=nlp("國境のトンネルを拔けると、窓の外の夜の底が白くなつた。")
>>> import deplacy
>>> deplacy.render(doc)
國境     NOUN  ═╗<╗           nmod
の       ADP   <╝ ║           case
トンネル NOUN  ═╗═╝<╗         nmod
を       ADP   <╝   ║         case
拔       NOUN  ═╗═══╝═╗═╗<╗   obl
ける     AUX   <╝     ║ ║ ║   aux
と       SCONJ <══════╝ ║ ║   mark
、       PUNCT <════════╝ ║   punct
窓       NOUN  ═╗<╗       ║   nmod
の       ADP   <╝ ║       ║   case
外       NOUN  ═╗═╝<╗     ║   nmod
の       ADP   <╝   ║     ║   case
夜       NOUN  ═╗═══╝<╗   ║   nmod
の       ADP   <╝     ║   ║   case
底       NOUN  ═╗═════╝<╗ ║   nsubj
が       ADP   <╝       ║ ║   case
白く     ADJ   <══╗     ║ ║   advcl
なつ     VERB  ═╗═╝═════╝═╝═╗ ROOT
た       AUX   <╝           ║ aux
。       PUNCT <════════════╝ punct
```

