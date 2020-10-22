# Mállærugreining við [deplacy](https://koichiyasuoka.github.io/deplacy/)

## av [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_fo_oft/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Ofta taka trøll góða manna børn.")
>>> import deplacy
>>> deplacy.render(doc)
Ofta  ADV   <══════╗   advmod
taka  VERB  ═╗═══╗═╝═╗ root
trøll NOUN  <╝   ║   ║ obj
góða  ADV   <══╗ ║   ║ case
manna ADJ   <╗ ║ ║   ║ amod
børn  NOUN  ═╝═╝<╝   ║ obj
.     PUNCT <════════╝ punct
```

