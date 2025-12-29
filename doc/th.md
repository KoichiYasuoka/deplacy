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

## กับ [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=th&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("หลายหัวดีกว่าหัวเดียว")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
advmod       ╔> ADV  หลาย
 nsubj ╔════>╚═ NOUN หัว
  root ╚═╔═════ VERB ดี
  case   ║ ╔══> ADV  กว่า
   obl   ╚>╚═╔═ NOUN หัว
  amod       ╚> ADJ  เดียว
```

## กับ [spaCy-Thai](https://github.com/KoichiYasuoka/spaCy-Thai)

```py
>>> import spacy_thai
>>> nlp=spacy_thai.load()
>>> doc=nlp("หลายหัวดีกว่าหัวเดียว")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 det ╔══════> DET   หลาย
ROOT ╚═╔═════ NOUN  หัว
mark   ║ ╔══> SCONJ ดีกว่า
nmod   ╚>╚═╔═ NOUN  หัว
 det       ╚> DET   เดียว
```

