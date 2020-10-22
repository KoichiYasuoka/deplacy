<h1 dir="rtl"><a href="https://koichiyasuoka.github.io/deplacy/">deplacy</a> لتحليل النحو</h1>

<h2 dir="rtl"> مع <a href="http://ufal.mff.cuni.cz/udpipe/2">UDPipe 2</a></h2>

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=ar&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("من قال لا أدري فقد أفتى.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 nsubj     ╔════> DET   من
  root ╔═╔═╚═╔═══ VERB  قال
advmod ║ ║   ║ ╔> PART  لا
 ccomp ║ ║   ╚>╚═ VERB  أدري
    cc ║ ║   ╔══> CCONJ ف
   aux ║ ║   ║ ╔> AUX   قد
  conj ║ ╚══>╚═╚═ VERB  أفتى
 punct ╚════════> PUNCT .
```

<h2 dir="rtl"> مع <a href="https://turkunlp.org/Turku-neural-parser-pipeline/">Turku-neural-parser-pipeline</a></h2>

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_ar_padt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("من قال لا أدري فقد أفتى.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
   nsubj     ╔════> DET   من
    root ╔═╔═╚═╔═══ VERB  قال
  advmod ║ ║   ║ ╔> PART  لا
   xcomp ║ ║   ╚>╚═ VERB  أدري
      cc ║ ║   ╔══> CCONJ ف
aux:pass ║ ║   ║ ╔> PART  قد
    conj ║ ╚══>╚═╚═ VERB  أفتى
   punct ╚════════> PUNCT .
```

<h2 dir="rtl"> مع <a href="https://github.com/TakeLab/spacy-udpipe">spacy-udpipe</a></h2>

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ar")
>>> doc=nlp("من قال لا أدري فقد أفتى.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 nsubj   ╔════════> DET   من
  ROOT ╔═╚═╔═══════ VERB  قال
advmod ║   ║     ╔> PART  لا
 ccomp ║   ╚>╔═══╚═ VERB  أدري
    cc ║     ║ ╔══> CCONJ ف
   aux ║     ║ ║ ╔> AUX   قد
  conj ║     ╚>╚═╚═ VERB  أفتى
 punct ╚══════════> PUNCT .
```

<h2 dir="rtl"> مع <a href="https://github.com/Adobe/NLP-Cube">NLP-Cube</a></h2>

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ar")
>>> doc=nlp("من قال لا أدري فقد أفتى.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 nsubj   ╔════════> DET   من
  root ╔═╚═╔═══════ VERB  قال
advmod ║   ║ ╔════> PART  لا
 xcomp ║   ╚>╚═╔═══ VERB  أدري
   obj ║       ╚>╔═ NOUN  فقد
  nmod ║         ╚> VERB  أفتى
 punct ╚══════════> PUNCT .
```

<h2 dir="rtl"> مع <a href="https://github.com/KoichiYasuoka/spaCy-COMBO">spaCy-COMBO</a></h2>

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("ar_padt")
>>> doc=nlp("من قال لا أدري فقد أفتى.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 nsubj   ╔════════> DET   من
  ROOT ╔═╚═╔═══════ VERB  قال
advmod ║   ║ ╔════> PART  لا
 xcomp ║   ╚>╚═╔═══ X     أدري
   obj ║       ╚>╔═ NOUN  فقد
   acl ║         ╚> VERB  أفتى
 punct ╚══════════> PUNCT .
```

<h2 dir="rtl"> مع <a href="https://stanfordnlp.github.io/stanza">Stanza</a></h2>

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ar")
>>> doc=nlp("من قال لا أدري فقد أفتى.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
  mark   ╔════════> ADP   من
  root ╔═╚═╔═══════ VERB  قال
advmod ║   ║ ╔════> PART  لا
   obj ║   ╚>╚═╔═══ X     أدري
   obj ║       ╚>╔═ NOUN  فقد
   acl ║         ╚> VERB  أفتى
 punct ╚══════════> PUNCT .
```

