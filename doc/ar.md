<h1 dir="rtl"><a href="https://koichiyasuoka.github.io/deplacy/">deplacy</a> لتحليل النحو</h1>

<h2 dir="rtl"> مع <a href="http://github.com/nlp-uoregon/trankit">Trankit</a></h2>

```py
>>> import trankit
>>> nlp=trankit.Pipeline("arabic")
>>> doc=nlp("من قال لا أدري فقد أفتى.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 nsubj   ╔>╔═════ DET   من
   acl   ║ ╚>╔═══ VERB  قال
advmod   ║   ║ ╔> PART  لا
 ccomp   ║   ╚>╚═ VERB  أدري
    cc   ║   ╔══> CCONJ ف
   aux   ║   ║ ╔> AUX   قد
  root ╔═╚═══╚═╚═ VERB  أفتى
 punct ╚════════> PUNCT .
```

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

<h2 dir="rtl"> مع <a href="https://github.com/KoichiYasuoka/spaCy-jPTDP">spaCy-jPTDP</a></h2>

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("ar_padt")
>>> doc=nlp("من قال لا أدري فقد أفتى.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 nsubj   ╔════════> DET   من
  ROOT ╔═╚═╔═══════ VERB  قال
advmod ║   ║ ╔════> PART  لا
   obj ║   ╚>╚═╔═══ X     أدري
   obj ║       ╚>╔═ NOUN  فقد
  nmod ║         ╚> X     أفتى
 punct ╚══════════> PUNCT .
```

