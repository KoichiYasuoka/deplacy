# [deplacy](https://koichiyasuoka.github.io/deplacy/) สำหรับการวิเคราะห์ไวยากรณ์

## กับ [esupar](https://github.com/KoichiYasuoka/esupar)

```py
>>> import esupar
>>> nlp=esupar.load("th")
>>> doc=nlp("หลายหัวดีกว่าหัวเดียว")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
   det       ╔> DET  หลาย
 nsubj ╔════>╚═ NOUN หัว
  root ╚═╔═════ VERB ดี
  case   ║ ╔══> ADP  กว่า
   obl   ╚>╚═╔═ NOUN หัว
nummod       ╚> NUM  เดียว
```

## กับ [spaCy-Thai](https://github.com/KoichiYasuoka/spaCy-Thai)

```py
>>> import spacy_thai
>>> nlp=spacy_thai.load()
>>> doc=nlp("หลายหัวดีกว่าหัวเดียว")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
  det     ╔> DET   หลาย
nsubj ╔══>╚═ NOUN  หัว
 ROOT ╚═╔═══ SCONJ ดีกว่า
  obj   ╚>╔═ NOUN  หัว
  det     ╚> DET   เดียว
```

