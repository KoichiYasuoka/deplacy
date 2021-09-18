# 以[deplacy](https://koichiyasuoka.github.io/deplacy/)析句

## 於[SuPar-Kanbun](https://github.com/KoichiYasuoka/SuPar-Kanbun)

```py
>>> import suparkanbun
>>> nlp=suparkanbun.load(Danku=True)
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN <╗     nmod
田 NOUN ═╝<══╗ nsubj
不 ADV  <══╗ ║ advmod
納 VERB ═╗═╝═╝ ROOT
履 NOUN <╝     obj
李 NOUN <╗     nmod
下 NOUN ═╝<══╗ nsubj
不 ADV  <══╗ ║ advmod
正 VERB ═╗═╝═╝ ROOT
冠 NOUN <╝     obj
```

## 於[UD-Kanbun](https://github.com/KoichiYasuoka/UD-Kanbun)

```py
>>> import udkanbun
>>> nlp=udkanbun.load(Danku=True)
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN <╗     nmod
田 NOUN ═╝<══╗ nsubj
不 ADV  <══╗ ║ advmod
納 VERB ═╗═╝═╝ root
履 NOUN <╝     obj
李 NOUN ═╗<══╗ nsubj
下 NOUN <╝   ║ flat
不 ADV  <══╗ ║ advmod
正 VERB ═╗═╝═╝ root
冠 NOUN <╝     obj
```

## 於[GuwenCOMBO](https://github.com/KoichiYasuoka/GuwenCOMBO)

```py
>>> import guwencombo
>>> nlp=guwencombo.load(Danku=True)
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN  <╗     nmod
田 NOUN  ═╝<══╗ nsubj
不 ADV   <══╗ ║ advmod
納 VERB  ═╗═╝═╝ root
履 NOUN  <╝     obj
李 PROPN ═╗<══╗ nsubj
下 NOUN  <╝   ║ flat
不 ADV   <══╗ ║ advmod
正 VERB  ═╗═╝═╝ root
冠 NOUN  <╝     obj
```

## 於[UD-Chinese](https://pypi.org/project/udchinese)

```py
>>> import udchinese
>>> nlp=udchinese.load()
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN <╗       nmod
田 NOUN ═╝<══╗   nsubj
不 ADV  <══╗ ║   advmod
納 VERB ═╗═╝═╝═╗ root
履 NOUN <╝     ║ obj
李 NOUN ═╗<══╗ ║ nsubj
下 NOUN <╝   ║ ║ flat
不 ADV  <══╗ ║ ║ advmod
正 VERB ═╗═╝═╝<╝ parataxis
冠 NOUN <╝       obj
```

## 於[Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("classical-chinese")
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜田 NOUN  <════╗ nsubj
不   ADV   <══╗ ║ advmod
納   VERB  ═╗═╝═╝ root
履   NOUN  <╝     obj
李   PROPN ═╗<══╗ nsubj
下   NOUN  <╝   ║ flat
不   ADV   <══╗ ║ advmod
正   VERB  ═╗═╝═╝ root
冠   VERB  <╝     obj
```

## 於[esupar](https://github.com/KoichiYasuoka/esupar)

```py
>>> import esupar
>>> nlp=esupar.load("lzh")
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN <╗         nmod
田 NOUN ═╝<════╗   nsubj
不 ADV  <════╗ ║   advmod
納 VERB ═╗═╗═╝═╝═╗ root
履 NOUN <╝ ║     ║ obj
李 NOUN <╗ ║     ║ nmod
下 NOUN ═╝<╝     ║ obj
不 ADV  <══╗     ║ advmod
正 VERB ═╗═╝<════╝ parataxis
冠 NOUN <╝         obj
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
瓜 NOUN <╗         nmod
田 NOUN ═╝<════╗   nsubj
不 ADV  <════╗ ║   advmod
納 VERB ═╗═╗═╝═╝<╗ csubj
履 NOUN <╝ ║     ║ obj
李 NOUN <╗ ║     ║ nmod
下 NOUN ═╝<╝     ║ obj
不 ADV  <══╗     ║ advmod
正 VERB ═╗═╝═════╝ root
冠 NOUN <╝         obj
```

## 於[UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=lzh&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN <╗       nmod
田 NOUN ═╝<════╗ nsubj
不 ADV  <════╗ ║ advmod
納 VERB ═══╗═╝═╝ root
履 VERB ═╗<╝     obj
李 NOUN <╝       obj
下 NOUN <════╗   nsubj
不 ADV  <══╗ ║   advmod
正 VERB ═╗═╝═╝   root
冠 NOUN <╝       obj
```

## 於[NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("lzh")
>>> doc=nlp("瓜田不納履李下不正冠")
>>> import deplacy
>>> deplacy.render(doc)
瓜 NOUN  <╗     nmod
田 NOUN  ═╝<══╗ nsubj
不 ADV   <══╗ ║ advmod
納 VERB  ═╗═╝═╝ root
履 NOUN  <╝     obj
李 PROPN <╗     nsubj
下 VERB  ═╝     root
不 ADV   <╗     advmod
正 VERB  ═╝     root
冠 VERB         root
```

