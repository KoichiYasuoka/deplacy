# [deplacy](https://koichiyasuoka.github.io/deplacy/)を用いた日本語文法解析

## [spaCy-SynCha](https://github.com/KoichiYasuoka/spaCy-SynCha)で解析

```py
>>> import spacy_syncha
>>> nlp=spacy_syncha.load()
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<══╗       nmod(体言による連体修飾語)
の       ADP   <╝   ║       case(格表示)
長い     ADJ   <══╗ ║       amod(用言による連体修飾語)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   advcl(連用修飾節)
と       CCONJ <╝       ║   mark(標識)
雪国     NOUN  ═╗═╗═╗═══╝═╗ ROOT(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [spaCy-ChaPAS](https://github.com/KoichiYasuoka/spaCy-ChaPAS)で解析

```py
>>> import spacy_chapas
>>> nlp=spacy_chapas.load()
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<══╗       nmod(体言による連体修飾語)
の       ADP   <╝   ║       case(格表示)
長い     ADJ   <══╗ ║       amod(用言による連体修飾語)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   advcl(連用修飾節)
と       CCONJ <╝       ║   mark(標識)
雪国     NOUN  ═╗═╗═╗═══╝═╗ ROOT(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [UniDic-COMBO](https://github.com/KoichiYasuoka/UniDic-COMBO)で解析

```py
>>> import unidic_combo
>>> nlp=unidic_combo.load()
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<══╗       nmod(体言による連体修飾語)
の       ADP   <╝   ║       case(格表示)
長い     ADJ   <══╗ ║       acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   advcl(連用修飾節)
と       CCONJ <╝       ║   mark(標識)
雪国     NOUN  ═╗═╗═╗═══╝═╗ ROOT(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [spaCy](https://spacy.io/)で解析

```py
>>> import spacy
>>> nlp=spacy.load("ja_core_news_sm")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<══╗       nmod(体言による連体修飾語)
の       ADP   <╝   ║       case(格表示)
長い     ADJ   <══╗ ║       acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   acl(連体修飾節)
と       SCONJ <╝       ║   mark(標識)
雪国     NOUN  ═╗═╗═╗═══╝═╗ ROOT(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [GiNZA](https://megagonlabs.github.io/ginza/)で解析

```py
>>> import spacy
>>> nlp=spacy.load("ja_ginza")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<══╗       nmod(体言による連体修飾語)
の       ADP   <╝   ║       case(格表示)
長い     ADJ   <══╗ ║       acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   acl(連体修飾節)
と       SCONJ <╝       ║   mark(標識)
雪国     NOUN  ═══╗═╗═══╝═╗ ROOT(親)
で       AUX   ═╗<╝ ║     ║ cop(繫辞)
あっ     VERB  <╝   ║     ║ fixed(固着)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)で解析

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=ja&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<══╗       nmod(体言による連体修飾語)
の       ADP   <╝   ║       case(格表示)
長い     ADJ   <══╗ ║       acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   acl(連体修飾節)
と       SCONJ <╝       ║   mark(標識)
雪国     PROPN ═╗═╗═╗═══╝═╗ root(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [Stanza](https://stanfordnlp.github.io/stanza)で解析

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ja")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<══╗       nmod(体言による連体修飾語)
の       ADP   <╝   ║       case(格表示)
長い     ADJ   <══╗ ║       acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   acl(連体修飾節)
と       SCONJ <╝       ║   mark(標識)
雪国     PROPN ═══╗═╗═══╝═╗ root(親)
で       AUX   ═╗<╝ ║     ║ cop(繫辞)
あっ     VERB  <╝   ║     ║ fixed(固着)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)で解析

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("ja_gsd")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<══╗       nmod(体言による連体修飾語)
の       ADP   <╝   ║       case(格表示)
長い     ADJ   <══╗ ║       acl(連体修飾節)
トンネル NOUN  ═╗═╝═╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   advcl(連用修飾節)
と       SCONJ <╝       ║   mark(標識)
雪国     ADJ   ═╗═╗═╗═══╝═╗ ROOT(親)
で       AUX   <╝ ║ ║     ║ aux(動詞補助成分)
あっ     AUX   <══╝ ║     ║ fixed(固着)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [UniDic2UD](https://pypi.org/project/unidic2ud)で解析

```py
>>> import unidic2ud
>>> nlp=unidic2ud.load("gendai")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<╗         nsubj(主語)
の       ADP   <╝ ║         case(格表示)
長い     ADJ   ═══╝<╗       acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   acl(連体修飾節)
と       CCONJ <╝       ║   mark(標識)
雪国     NOUN  ═╗═╗═╗═══╝═╗ root(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [SuPar-UniDic](https://github.com/KoichiYasuoka/SuPar-UniDic)で解析

```py
>>> import suparunidic
>>> nlp=suparunidic.load()
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<╗         nsubj(主語)
の       ADP   <╝ ║         case(格表示)
長い     ADJ   ═══╝<╗       acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   advcl(連用修飾節)
と       CCONJ <╝       ║   mark(標識)
雪国     NOUN  ═╗═╗═╗═══╝═╗ ROOT(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [esupar](https://github.com/KoichiYasuoka/esupar)で解析

```py
>>> import espar
>>> nlp=esupar.load("ja")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<╗         nsubj(主語)
の       ADP   <╝ ║         case(格表示)
長い     ADJ   ═══╝<╗       acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   acl(連体修飾節)
と       CCONJ <╝       ║   mark(標識)
雪国     NOUN  ═╗═╗═╗═══╝═╗ root(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)で解析

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ja")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<╗         nsubj(主語)
の       ADP   <╝ ║         case(格表示)
長い     ADJ   ═══╝<╗       acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   acl(連体修飾節)
と       SCONJ <╝       ║   mark(標識)
雪国     PROPN ═╗═╗═╗═══╝═╗ root(親)
で       AUX   <╝ ║ ║     ║ cop(繫辞)
あっ     AUX   <══╝ ║     ║ aux(動詞補助成分)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [Trankit](https://github.com/nlp-uoregon/trankit)で解析

```py
>>> import trankit
>>> nlp=trankit.Pipeline("japanese")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<╗         obl(斜格補語)
の       ADP   <╝ ║         case(格表示)
長い     ADJ   ═══╝<╗       acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   advcl(連用修飾節)
と       SCONJ <╝       ║   mark(標識)
雪国     NOUN  ═╗═╗═════╝═╗ root(親)
であっ   AUX   <╝ ║       ║ cop(繫辞)
た       AUX   <══╝       ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)で解析

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ja")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<╗         obl(斜格補語)
の       ADP   <╝ ║         case(格表示)
長い     ADJ   ═══╝<╗       acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   advcl(連用修飾節)
と       SCONJ <╝       ║   mark(標識)
雪       NOUN  <╗       ║   compound(複合)
国       NOUN  ═╝═╗═╗═══╝═╗ ROOT(親)
であっ   AUX   <══╝ ║     ║ cop(繫辞)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)で解析

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("ja_gsd")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<╗         obl(斜格補語)
の       ADP   <╝ ║         case(格表示)
長い     ADJ   ═══╝<╗       acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   acl(連体修飾節)
と       SCONJ <╝       ║   mark(標識)
雪国     PROPN ═╗═╗═╗═══╝═╗ ROOT(親)
で       AUX   <╝ ║ ║     ║ case(格表示)
あっ     AUX   <══╝ ║     ║ fixed(固着)
た       AUX   <════╝     ║ aux(動詞補助成分)
。       PUNCT <══════════╝ punct(句読点)
```

## [Camphr-KNP](https://github.com/PKSHATechnology-Research/camphr/tree/master/packages/camphr_knp)で解析

```py
>>> import camphr
>>> nlp=camphr.load("knp")
>>> doc=nlp("国境の長いトンネルを抜けると雪国であった。")
>>> import deplacy
>>> deplacy.render(doc,Japanese=True)
国境     NOUN  ═╗<╗         nsubj(主語)
の       ADP   <╝ ║         case(格表示)
長い     ADJ   ═══╝<╗       acl(連体修飾節)
トンネル NOUN  ═╗═══╝<╗     obj(目的語)
を       ADP   <╝     ║     case(格表示)
抜ける   VERB  ═╗═════╝<╗   advcl(連用修飾節)
と       ADP   <╝       ║   mark(標識)
雪国     NOUN  ═╗═══════╝═╗ ROOT(親)
であった AUX   <╝         ║ cop(繫辞)
。       PUNCT <══════════╝ punct(句読点)
```

