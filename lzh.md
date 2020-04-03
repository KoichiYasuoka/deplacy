# 使[deplacy](https://github.com/KoichiYasuoka/deplacy)析句

## 於[UD-Kanbun](https://github.com/KoichiYasuoka/UD-Kanbun)

```py
>>> import udkanbun
>>> nlp=udkanbun.load(Danku=True)
>>> doc=nlp("瓜田不納履李下不正冠")
>>> d=str(doc)
>>> import deplacy
>>> deplacy.render(d)
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

