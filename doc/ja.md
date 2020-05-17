# [deplacy](https://koichiyasuoka.github.io/deplacy/)を用いた日本語文法解析

## [UniDic2UD](https://pypi.org/project/unidic2ud)で解析

```py
>>> import unidic2ud
>>> nlp=unidic2ud.load("qkana")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> d=str(doc)
>>> import deplacy
>>> deplacy.render(d)
國境     NOUN  ═╗<══╗           nmod
の       ADP   <╝   ║           case
長い     ADJ   <══╗ ║           acl
トンネル NOUN  ═╗═╝═╝<╗         obj
を       ADP   <╝     ║         case
拔ける   VERB  ═══════╝═╗═╗<╗   advcl
と       CCONJ <════════╝ ║ ║   mark
、       PUNCT <══════════╝ ║   punct
そこ     PRON  ═╗<══╗       ║   nsubj
は       ADP   <╝   ║       ║   case
雪國     NOUN  ═╗<╗ ║       ║   advcl
で       AUX   <╝ ║ ║       ║   cop
あつ     VERB  ═╗═╝═╝═══════╝═╗ root
た       AUX   <╝             ║ aux
。       PUNCT <══════════════╝ punct
```

## [GiNZA](https://megagonlabs.github.io/ginza/)で解析

```py
>>> import spacy
>>> nlp=spacy.load("ja_ginza")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc)
國       NOUN  <╗             compound
境       NOUN  ═╝═╗<╗         nmod
の       ADP   <══╝ ║         case
長い     ADJ   <══╗ ║         amod
トンネル NOUN  ═╗═╝═╝<╗       obj
を       ADP   <╝     ║       case
拔け     VERB  ═╗═╗═══╝═╗<╗   advcl
る       AUX   <╝ ║     ║ ║   aux
と       CCONJ <══╝     ║ ║   cc
、       PUNCT <════════╝ ║   punct
そこ     PRON  ═╗<════╗   ║   nsubj
は       ADP   <╝     ║   ║   case
雪       NOUN  <╗     ║   ║   compound
國       NOUN  ═╝═╗<╗ ║   ║   nmod
で       ADP   <══╝ ║ ║   ║   case
あつ     VERB  ═╗═══╝═╝═══╝═╗ ROOT
た       AUX   <╝           ║ aux
。       PUNCT <════════════╝ punct
```

## [Stanza](https://stanfordnlp.github.io/stanza)で解析

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ja")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
國境     PROPN ═╗<╗             obl
の       ADP   <╝ ║             case
長い     ADJ   ═══╝<╗           acl
トンネル NOUN  ═╗═══╝<╗         obj
を       ADP   <╝     ║         case
拔ける   VERB  ═══════╝═╗═╗<╗   advcl
と       SCONJ <════════╝ ║ ║   mark
、       PUNCT <══════════╝ ║   punct
そこ     PRON  ═╗<══╗       ║   nsubj
は       ADP   <╝   ║       ║   case
雪國     PROPN ═╗═╗═╝═══════╝═╗ root
であつ   AUX   <╝ ║           ║ cop
た       AUX   <══╝           ║ aux
。       PUNCT <══════════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)で解析

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ja")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc)
國境     NOUN  ═╗<══╗           nmod
の       ADP   <╝   ║           case
長い     ADJ   <══╗ ║           acl
トンネル NOUN  ═╗═╝═╝<╗         nmod
を       ADP   <╝     ║         case
拔       NOUN  ═╗═════╝═╗═╗<╗   advcl
ける     AUX   <╝       ║ ║ ║   aux
と       SCONJ <════════╝ ║ ║   mark
、       PUNCT <══════════╝ ║   punct
そこ     PRON  ═╗<══╗       ║   nsubj
は       ADP   <╝   ║       ║   case
雪國     PROPN <══╗ ║       ║   obl
であつ   VERB  ═╗═╝═╝═══════╝═╗ ROOT
た       AUX   <╝             ║ aux
。       PUNCT <══════════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)のfugashi/unidic-lite版で解析

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("ja",punct_chars=["。"])
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc)
國       NOUN  <╗               compound
境       NOUN  ═╝═╗<╗           nmod
の       ADP   <══╝ ║           case
長い     ADJ   <══╗ ║           acl
トンネル NOUN  ═╗═╝═╝<╗         obj
を       ADP   <╝     ║         case
拔け     VERB  ═╗═════╝═╗═╗<╗   advcl
る       AUX   <╝       ║ ║ ║   aux
と       SCONJ <════════╝ ║ ║   mark
、       PUNCT <══════════╝ ║   punct
そこ     PRON  ═╗<════╗     ║   nsubj
は       ADP   <╝     ║     ║   case
雪       NOUN  <╗     ║     ║   compound
國       NOUN  ═╝═╗<╗ ║     ║   obl
で       ADP   <══╝ ║ ║     ║   case
あつ     VERB  ═╗═══╝═╝═════╝═╗ root
た       AUX   <╝             ║ aux
。       PUNCT <══════════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)のMeCab/ipadic版で解析

```py
>>> import spacy
>>> nlp=spacy.load("ja_mecab_udify")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc)
國       NOUN  <╗               compound
境       NOUN  ═╝═╗<╗           nmod
の       ADP   <══╝ ║           case
長い     ADJ   <══╗ ║           acl
トンネル NOUN  ═╗═╝═╝<╗         obj
を       ADP   <╝     ║         case
拔       VERB  ═╗═════╝═╗═╗<╗   advcl
ける     AUX   <╝       ║ ║ ║   aux
と       SCONJ <════════╝ ║ ║   mark
、       PUNCT <══════════╝ ║   punct
そこ     PRON  ═╗<════╗     ║   nsubj
は       ADP   <╝     ║     ║   case
雪       NOUN  <╗     ║     ║   compound
國       NOUN  ═╝═╗<╗ ║     ║   obl
で       ADP   <══╝ ║ ║     ║   case
あつ     VERB  ═╗═══╝═╝═════╝═╗ root
た       AUX   <╝             ║ aux
。       PUNCT <══════════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)で解析

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ja")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
國境   PROPN ═╗<╗             obl
の     ADP   <╝ ║             case
長い   ADJ   ═══╝<╗           acl
トン   NOUN  <╗   ║           compound
ネル   NOUN  ═╝═╗═╝<╗         obj
を     ADP   <══╝   ║         case
拔ける VERB  ═══════╝═╗═╗<╗   advcl
と     SCONJ <════════╝ ║ ║   mark
、     PUNCT <══════════╝ ║   punct
そこ   PRON  ═╗<══╗       ║   nmod
は     ADP   <╝   ║       ║   case
雪國   PROPN ═╗<╗ ║       ║   nmod
で     ADP   <╝ ║ ║       ║   case
あつた NOUN  ═══╝═╝═══════╝═╗ root
。     PUNCT <══════════════╝ punct
```

## [Camphr-KNP](https://camphr.readthedocs.io/en/latest/notes/knp.html)で解析

```py
>>> import camphr
>>> nlp=camphr.load("knp")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc)
國       SYM   <╗                 compound
境       NOUN  ═╝═╗<╗             nsubj
の       ADP   <══╝ ║             case
長い     ADJ   ═════╝<╗           acl
トンネル NOUN  ═╗═════╝<╗         obj
を       ADP   <╝       ║         case
拔       SYM   <╗       ║         nsubj
ける     VERB  ═╝═══════╝═╗═╗<╗   advcl
と       ADP   <══════════╝ ║ ║   mark
、       PUNCT <════════════╝ ║   punct
そこ     PRON  ═╗<══╗         ║   nsubj
は       ADP   <╝   ║         ║   case
雪國     NOUN  ═╗<╗ ║         ║   obl
で       ADP   <╝ ║ ║         ║   case
あつた   NOUN  ═══╝═╝═════════╝═╗ ROOT
。       PUNCT <════════════════╝ punct
```

