# [deplacy](https://koichiyasuoka.github.io/deplacy/)を用いた日本語文法解析

## [GiNZA](https://megagonlabs.github.io/ginza/)で解析

```py
>>> import spacy
>>> nlp=spacy.load("ja_ginza")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國       NOUN  <╗             compound(複合)
境       NOUN  ═╝═╗<╗         nmod(体言による連体修飾語)
の       ADP   <══╝ ║         case(格表示)
長い     ADJ   <══╗ ║         acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗       obj(目的語)
を       ADP   <╝     ║       case(格表示)
拔け     VERB  ═╗═╗═══╝<╗     acl(連体修飾節)
る       AUX   <╝ ║     ║     aux(動詞補助成分)
と       ADP   <══╝     ║     case(格表示)
雪       NOUN  <╗       ║     compound(複合)
國       NOUN  ═╝═╗═════╝<╗   obl(斜格補語)
で       ADP   <══╝       ║   case(格表示)
あつ     VERB  ═╗═════════╝═╗ ROOT(親)
た       AUX   <╝           ║ aux(動詞補助成分)
。       PUNCT <════════════╝ punct(句読点)
```

## [UniDic2UD](https://pypi.org/project/unidic2ud)で解析

```py
>>> import unidic2ud
>>> nlp=unidic2ud.load("qkana")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     NOUN  ═╗<╗           nsubj(主語)
の       ADP   <╝ ║           case(格表示)
長い     ADJ   ═══╝<╗         acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗       obj(目的語)
を       ADP   <╝     ║       case(格表示)
拔ける   VERB  ═══════╝═╗<╗   acl(連体修飾節)
と       CCONJ <════════╝ ║   mark(標識)
雪國     NOUN  ═╗═╗═╗═════╝═╗ root(親)
で       AUX   <╝ ║ ║       ║ cop(繫辞)
あつ     AUX   <══╝ ║       ║ aux(動詞補助成分)
た       AUX   <════╝       ║ aux(動詞補助成分)
。       PUNCT <════════════╝ punct(句読点)
```

## [Stanza](https://stanfordnlp.github.io/stanza)で解析

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ja")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     PROPN ═╗<╗           obl(斜格補語)
の       ADP   <╝ ║           case(格表示)
長い     ADJ   ═══╝<╗         acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗       obj(目的語)
を       ADP   <╝     ║       case(格表示)
拔ける   VERB  ═══════╝═╗<╗   advcl(連用修飾節)
と       SCONJ <════════╝ ║   mark(標識)
雪國     PROPN ═╗═╗═══════╝═╗ root(親)
であつ   AUX   <╝ ║         ║ cop(繫辞)
た       AUX   <══╝         ║ aux(動詞補助成分)
。       PUNCT <════════════╝ punct(句読点)
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)で解析

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ja")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     NOUN  ═╗<╗           obl(斜格補語)
の       ADP   <╝ ║           case(格表示)
長い     ADJ   ═══╝<╗         acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗       obj(目的語)
を       ADP   <╝     ║       case(格表示)
拔ける   VERB  ═══════╝═╗<╗   advcl(連用修飾節)
と       SCONJ <════════╝ ║   mark(標識)
雪國     PROPN <══╗       ║   obl(斜格補語)
であつ   VERB  ═╗═╝═══════╝═╗ ROOT(親)
た       AUX   <╝           ║ aux(動詞補助成分)
。       PUNCT <════════════╝ punct(句読点)
```

## [spaCy-SynCha](https://github.com/KoichiYasuoka/spaCy-SynCha)で解析

```py
>>> import spacy_syncha
>>> nlp=spacy_syncha.load("qkana")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     NOUN  ═╗<══╗         obj(目的語)
の       ADP   <╝   ║         case(格表示)
長い     ADJ   <══╗ ║         amod(用言による連体修飾語)
トンネル NOUN  ═╗═╝═╝<╗       obl(斜格補語)
を       ADP   <╝     ║       case(格表示)
拔ける   VERB  ═══════╝═╗<╗   advcl(連用修飾節)
と       CCONJ <════════╝ ║   mark(標識)
雪國     NOUN  ═╗═╗═╗═════╝═╗ ROOT(親)
で       AUX   <╝ ║ ║       ║ cop(繫辞)
あつ     AUX   <══╝ ║       ║ aux(動詞補助成分)
た       AUX   <════╝       ║ aux(動詞補助成分)
。       PUNCT <════════════╝ punct(句読点)
```

## [spaCy-ChaPAS](https://github.com/KoichiYasuoka/spaCy-ChaPAS)で解析

```py
>>> import spacy_chapas
>>> nlp=spacy_chapas.load("qkana")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     NOUN  ═╗<══╗         obj(目的語)
の       ADP   <╝   ║         case(格表示)
長い     ADJ   <══╗ ║         amod(用言による連体修飾語)
トンネル NOUN  ═╗═╝═╝<╗       obl(斜格補語)
を       ADP   <╝     ║       case(格表示)
拔ける   VERB  ═══════╝═╗<╗   advcl(連用修飾節)
と       CCONJ <════════╝ ║   mark(標識)
雪國     NOUN  ═╗═╗═╗═════╝═╗ ROOT(親)
で       AUX   <╝ ║ ║       ║ cop(繫辞)
あつ     AUX   <══╝ ║       ║ aux(動詞補助成分)
た       AUX   <════╝       ║ aux(動詞補助成分)
。       PUNCT <════════════╝ punct(句読点)
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)で解析

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ja")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境   PROPN ═╗<════╗         nmod(体言による連体修飾語)
の     ADP   <╝     ║         case(格表示)
長い   ADJ   <════╗ ║         acl(連体修飾節)
トン   NOUN  <╗   ║ ║         compound(複合)
ネル   NOUN  ═╝═╗═╝═╝<╗       obj(目的語)
を     ADP   <══╝     ║       case(格表示)
拔ける VERB  ═════════╝═╗<╗   acl(連体修飾節)
と     SCONJ <══════════╝ ║   mark(標識)
雪國   PROPN ═╗<╗         ║   nmod(体言による連体修飾語)
で     ADP   <╝ ║         ║   case(格表示)
あつた VERB  ═══╝═════════╝═╗ root(親)
。     PUNCT <══════════════╝ punct(句読点)
```

## [Camphr-KNP](https://camphr.readthedocs.io/en/latest/notes/knp.html)で解析

```py
>>> import camphr
>>> nlp=camphr.load("knp")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國境     SYM   ═╗<╗           nsubj(主語)
の       ADP   <╝ ║           case(格表示)
長い     ADJ   ═══╝<╗         acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗       obj(目的語)
を       ADP   <╝     ║       case(格表示)
拔       SYM   <╗     ║       nsubj(主語)
ける     VERB  ═╝═════╝═╗<╗   advcl(連用修飾節)
と       ADP   <════════╝ ║   mark(標識)
雪國     NOUN  ═╗<╗       ║   obl(斜格補語)
で       ADP   <╝ ║       ║   case(格表示)
あつた   NOUN  ═══╝═══════╝═╗ ROOT(親)
。       PUNCT <════════════╝ punct(句読点)
```

## [spaCy](https://spacy.io/)で解析

```py
>>> import spacy
>>> nlp=spacy.load("ja_core_news_md")
>>> doc=nlp("國境の長いトンネルを拔けると雪國であつた。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
國       NOUN  <╗           compound(複合)
境       NOUN  ═╝═╗<╗       nmod(体言による連体修飾語)
の       ADP   <══╝ ║       case(格表示)
長い     ADJ   <══╗ ║       acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
拔け     VERB  <╗     ║     compound(複合)
る       AUX   ═╝═╗═══╝<╗   obl(斜格補語)
と       ADP   <══╝     ║   case(格表示)
雪       NOUN  <╗       ║   dep
國       NOUN  ═╝<══╗   ║   obl(斜格補語)
で       ADP   <══╗ ║   ║   dep
あつ     VERB  ═╗═╝═╝═══╝═╗ ROOT(親)
た       AUX   <╝         ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

