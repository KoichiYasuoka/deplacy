# [deplacy](https://koichiyasuoka.github.io/deplacy/) สำหรับการวิเคราะห์ไวยากรณ์

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
  clf   ╚>╔═ NOUN  หัว
  det     ╚> DET   เดียว
```

## กับ [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_th_pud/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("หลายหัวดีกว่าหัวเดียว")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
    root ╔═══ VERB  หลายหัว
compound ║ ╔> PROPN ดีกว่า
     obj ╚>╚═ NOUN  หัวเดียว
```

