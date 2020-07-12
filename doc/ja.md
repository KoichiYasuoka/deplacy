# [deplacy](https://koichiyasuoka.github.io/deplacy/)を用いた日本語文法解析

## [UniDic2UD](https://pypi.org/project/unidic2ud)で解析

```py
>>> import unidic2ud
>>> nlp=unidic2ud.load("qkana")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     NOUN  ═╗<╗             nsubj(主語)
の       ADP   <╝ ║             case(格表示)
長い     ADJ   ═══╝<╗           acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗         obj(目的語)
を       ADP   <╝     ║         case(格表示)
拔ける   VERB  ═══════╝═╗═╗<╗   advcl(連用修飾節)
と       CCONJ <════════╝ ║ ║   mark(標識)
、       PUNCT <══════════╝ ║   punct(句読点)
そこ     PRON  ═╗<══╗       ║   nsubj(主語)
は       ADP   <╝   ║       ║   case(格表示)
雪國     NOUN  ═╗<╗ ║       ║   advcl(連用修飾節)
で       AUX   <╝ ║ ║       ║   cop(繫辞)
あつ     VERB  ═╗═╝═╝═══════╝═╗ root(親)
た       AUX   <╝             ║ aux(動詞補助成分)
。       PUNCT <══════════════╝ punct(句読点)
```

## [GiNZA](https://megagonlabs.github.io/ginza/)で解析

```py
>>> import spacy
>>> nlp=spacy.load("ja_ginza")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國       NOUN  <╗             compound(複合)
境       NOUN  ═╝═╗<╗         nmod(体言による連体修飾語)
の       ADP   <══╝ ║         case(格表示)
長い     ADJ   <══╗ ║         amod(用言による連体修飾語)
トンネル NOUN  ═╗═╝═╝<╗       obj(目的語)
を       ADP   <╝     ║       case(格表示)
拔け     VERB  ═╗═╗═══╝═╗<╗   advcl(連用修飾節)
る       AUX   <╝ ║     ║ ║   aux(動詞補助成分)
と       CCONJ <══╝     ║ ║   cc(接続詞)
、       PUNCT <════════╝ ║   punct(句読点)
そこ     PRON  ═╗<════╗   ║   nsubj(主語)
は       ADP   <╝     ║   ║   case(格表示)
雪       NOUN  <╗     ║   ║   compound(複合)
國       NOUN  ═╝═╗<╗ ║   ║   nmod(体言による連体修飾語)
で       ADP   <══╝ ║ ║   ║   case(格表示)
あつ     VERB  ═╗═══╝═╝═══╝═╗ ROOT(親)
た       AUX   <╝           ║ aux(動詞補助成分)
。       PUNCT <════════════╝ punct(句読点)
```

## [Stanza](https://stanfordnlp.github.io/stanza)で解析

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ja")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     PROPN ═╗<╗             obl(斜格補語)
の       ADP   <╝ ║             case(格表示)
長い     ADJ   ═══╝<╗           acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗         obj(目的語)
を       ADP   <╝     ║         case(格表示)
拔ける   VERB  ═══════╝═╗═╗<╗   advcl(連用修飾節)
と       SCONJ <════════╝ ║ ║   mark(標識)
、       PUNCT <══════════╝ ║   punct(句読点)
そこ     PRON  ═╗<══╗       ║   nsubj(主語)
は       ADP   <╝   ║       ║   case(格表示)
雪國     PROPN ═╗═╗═╝═══════╝═╗ root(親)
であつ   AUX   <╝ ║           ║ cop(繫辞)
た       AUX   <══╝           ║ aux(動詞補助成分)
。       PUNCT <══════════════╝ punct(句読点)
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)で解析

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ja")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     NOUN  ═╗<══╗           nmod(体言による連体修飾語)
の       ADP   <╝   ║           case(格表示)
長い     ADJ   <══╗ ║           acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗         nmod(体言による連体修飾語)
を       ADP   <╝     ║         case(格表示)
拔       NOUN  ═╗═════╝═╗═╗<╗   advcl(連用修飾節)
ける     AUX   <╝       ║ ║ ║   aux(動詞補助成分)
と       SCONJ <════════╝ ║ ║   mark(標識)
、       PUNCT <══════════╝ ║   punct(句読点)
そこ     PRON  ═╗<══╗       ║   nsubj(主語)
は       ADP   <╝   ║       ║   case(格表示)
雪國     PROPN <══╗ ║       ║   obl(斜格補語)
であつ   VERB  ═╗═╝═╝═══════╝═╗ ROOT(親)
た       AUX   <╝             ║ aux(動詞補助成分)
。       PUNCT <══════════════╝ punct(句読点)
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)で解析

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("ja",punct_chars=["。"])
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國       NOUN  <╗               compound(複合)
境       NOUN  ═╝═╗<╗           nmod(体言による連体修飾語)
の       ADP   <══╝ ║           case(格表示)
長い     ADJ   <══╗ ║           acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗         obj(目的語)
を       ADP   <╝     ║         case(格表示)
拔け     VERB  ═╗═════╝═╗═╗<╗   advcl(連用修飾節)
る       AUX   <╝       ║ ║ ║   aux(動詞補助成分)
と       SCONJ <════════╝ ║ ║   mark(標識)
、       PUNCT <══════════╝ ║   punct(句読点)
そこ     PRON  ═╗<════╗     ║   nsubj(主語)
は       ADP   <╝     ║     ║   case(格表示)
雪       NOUN  <╗     ║     ║   compound(複合)
國       NOUN  ═╝═╗<╗ ║     ║   obl(斜格補語)
で       ADP   <══╝ ║ ║     ║   case(格表示)
あつ     VERB  ═╗═══╝═╝═════╝═╗ root(親)
た       AUX   <╝             ║ aux(動詞補助成分)
。       PUNCT <══════════════╝ punct(句読点)
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)で解析

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ja")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境   PROPN ═╗<╗             obl(斜格補語)
の     ADP   <╝ ║             case(格表示)
長い   ADJ   ═══╝<╗           acl(連体修飾節)
トン   NOUN  <╗   ║           compound(複合)
ネル   NOUN  ═╝═╗═╝<╗         obj(目的語)
を     ADP   <══╝   ║         case(格表示)
拔ける VERB  ═══════╝═╗═╗<╗   advcl(連用修飾節)
と     SCONJ <════════╝ ║ ║   mark(標識)
、     PUNCT <══════════╝ ║   punct(句読点)
そこ   PRON  ═╗<══╗       ║   nmod(体言による連体修飾語)
は     ADP   <╝   ║       ║   case(格表示)
雪國   PROPN ═╗<╗ ║       ║   nmod(体言による連体修飾語)
で     ADP   <╝ ║ ║       ║   case(格表示)
あつた NOUN  ═══╝═╝═══════╝═╗ root(親)
。     PUNCT <══════════════╝ punct(句読点)
```

## [Camphr-KNP](https://camphr.readthedocs.io/en/latest/notes/knp.html)で解析

```py
>>> import camphr
>>> nlp=camphr.load("knp")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國       SYM   <╗                 compound(複合)
境       NOUN  ═╝═╗<╗             nsubj(主語)
の       ADP   <══╝ ║             case(格表示)
長い     ADJ   ═════╝<╗           acl(連体修飾節)
トンネル NOUN  ═╗═════╝<╗         obj(目的語)
を       ADP   <╝       ║         case(格表示)
拔       SYM   <╗       ║         nsubj(主語)
ける     VERB  ═╝═══════╝═╗═╗<╗   advcl(連用修飾節)
と       ADP   <══════════╝ ║ ║   mark(標識)
、       PUNCT <════════════╝ ║   punct(句読点)
そこ     PRON  ═╗<══╗         ║   nsubj(主語)
は       ADP   <╝   ║         ║   case(格表示)
雪國     NOUN  ═╗<╗ ║         ║   obl(斜格補語)
で       ADP   <╝ ║ ║         ║   case(格表示)
あつた   NOUN  ═══╝═╝═════════╝═╗ ROOT(親)
。       PUNCT <════════════════╝ punct(句読点)
```

## [spaCy](https://spacy.io/)で解析
```py
>>> import spacy
>>> nlp=spacy.load("ja_core_news_sm")
>>> doc=nlp("國境の長いトンネルを拔けると、そこは雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國       NOUN  <╗               compound(複合)
境       NOUN  ═╝═╗<╗           nsubj(主語)
の       ADP   <══╝ ║           case(格表示)
長い     ADJ   ═════╝<╗         acl(連体修飾節)
トンネル NOUN  ═╗═════╝<╗       obj(目的語)
を       ADP   <╝       ║       case(格表示)
拔け     VERB  <╗       ║       compound(複合)
る       AUX   ═╝═══════╝═╗═╗═╗ ROOT(親)
と       SCONJ <══════════╝ ║ ║ mark(標識)
、       PUNCT <════════════╝ ║ punct(句読点)
そこ     PRON  ═╗<══════╗     ║ nsubj(主語)
は       ADP   <╝       ║     ║ case(格表示)
雪       NOUN  <╗       ║     ║ compound(複合)
國       NOUN  ═╝═╗═╗═╗═╝═╗<══╝ mark(標識)
で       ADP   <══╝ ║ ║   ║     cop(繫辞)
あつ     VERB  <════╝ ║   ║     aux(動詞補助成分)
た       AUX   <══════╝   ║     aux(動詞補助成分)
。       PUNCT <══════════╝     punct(句読点)
```

