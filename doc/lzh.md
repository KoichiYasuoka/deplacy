# 以[deplacy](https://koichiyasuoka.github.io/deplacy/)析句

## 於[UD-Kanbun](https://github.com/KoichiYasuoka/UD-Kanbun)

```py
>>> import udkanbun
>>> nlp=udkanbun.load(Danku=True)
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN ═╗<══╗ nsubj
田 NOUN <╝   ║ conj
不 ADV  <══╗ ║ advmod
納 VERB ═╗═╝═╝ root
履 NOUN <╝     obj
李 NOUN <╗     compound
下 NOUN ═╝<══╗ nsubj
不 ADV  <══╗ ║ advmod
正 VERB ═╗═╝═╝ root
冠 NOUN <╝     obj
```

## 於[spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("lzh")
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN <╗         nmod
田 NOUN ═╝<════╗   nsubj
不 ADV  <════╗ ║   advmod
納 VERB ═╗═╗═╝═╝═╗ ROOT
履 NOUN <╝ ║     ║ obj
李 NOUN <╗ ║     ║ compound
下 NOUN ═╝<╝     ║ obj
不 ADV  <══╗     ║ advmod
正 VERB ═╗═╝<════╝ parataxis
冠 NOUN <╝         obj
```

## 於[Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("lzh")
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN <╗           nmod
田 NOUN ═╝<════════╗ nsubj
不 ADV  <════════╗ ║ advmod
納 VERB ═══════╗═╝═╝ root
履 VERB ═══╗═╗<╝     ccomp
李 NOUN ═╗<╝ ║       obj
下 NOUN <╝   ║       flat
不 ADV  <══╗ ║       advmod
正 VERB ═╗═╝<╝       conj
冠 NOUN <╝           obj
```

## 於[UD-Chinese](https://pypi.org/project/udchinese)

```py
>>> import udchinese
>>> nlp=udchinese.load()
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN <╗           nmod
田 NOUN ═╝<══════╗   nsubj
不 ADV  <══════╗ ║   advmod
納 VERB ═════╗═╝═╝<╗ csubj
履 NOUN <╗   ║     ║ nmod
李 NOUN ═╝<╗ ║     ║ nmod
下 NOUN ═══╝<╝     ║ obj
不 ADV  <══╗       ║ advmod
正 VERB ═╗═╝═══════╝ root
冠 NOUN <╝           obj
```

