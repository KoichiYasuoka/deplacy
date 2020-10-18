<h1 dir="rtl"> برای تحلیل نحو <a href="https://koichiyasuoka.github.io/deplacy/">deplacy</a></h1>

<h2 dir="rtl"> با <a href="https://turkunlp.org/Turku-neural-parser-pipeline/">Turku-neural-parser-pipeline</a></h2>

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_fa_seraji/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("به اعتقاد من موسيقي هنر نيست، بلكه متافيزيك است.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
     case         ╔══> ADP   به
      obl       ╔>╚═╔═ NOUN  اعتقاد
nmod:poss       ║   ╚> PRON  من
    nsubj       ║ ╔>╔═ NOUN  موسيقي
nmod:poss       ║ ║ ╚> NOUN  هنر
    advcl     ╔>╚═╚═══ VERB  نيست
    punct   ╔═║══════> PUNCT ،
     root ╔═╚═╚═══╔═╔═ NOUN  بلكه
nmod:poss ║       ║ ╚> NOUN  متافيزيك
      cop ║       ╚══> AUX   است
    punct ╚══════════> PUNCT .
```

<h2 dir="rtl"> با <a href="https://github.com/TakeLab/spacy-udpipe">spacy-udpipe</a></h2>

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("fa")
>>> doc=nlp("به اعتقاد من موسيقي هنر نيست، بلكه متافيزيك است.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
     case         ╔══> ADP   به
     nmod       ╔>╚═╔═ NOUN  اعتقاد
nmod:poss       ║   ╚> PRON  من
    nsubj     ╔>╚═════ NOUN  موسيقي
     ROOT ╔═╔═╚═════╔═ NOUN  هنر
      cop ║ ║       ╚> AUX   نيست
    punct ║ ║   ╔════> PUNCT ،
       cc ║ ║   ║ ╔══> CCONJ بلكه
     conj ║ ╚══>╚═╚═╔═ ADJ   متافيزيك
      cop ║         ╚> AUX   است
    punct ╚══════════> PUNCT .
```

<h2 dir="rtl"> با <a href="https://github.com/KoichiYasuoka/spaCy-COMBO">spaCy-COMBO</a></h2>

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("fa_seraji")
>>> doc=nlp("به اعتقاد من موسيقي هنر نيست، بلكه متافيزيك است.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
     case           ╔══> ADP   به
     nmod     ╔════>╚═╔═ NOUN  اعتقاد
nmod:poss     ║       ╚> PRON  من
     ROOT ╔═══║═════════ NOUN  موسيقي
nmod:poss ╚>╔═╚═╔═════╔═ NOUN  هنر
      cop   ║   ║     ╚> AUX   نيست
    punct   ║   ║ ╔════> PUNCT ،
    nsubj   ║   ║ ║ ╔══> NOUN  بلكه
     conj   ║   ╚>╚═╚═╔═ NOUN  متافيزيك
      cop   ║         ╚> AUX   است
    punct   ╚══════════> PUNCT .
```

<h2 dir="rtl"> با <a href="https://camphr.readthedocs.io/en/latest/notes/udify.html">Camphr-Udify</a></h2>

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("به اعتقاد من موسيقي هنر نيست، بلكه متافيزيك است.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
     case         ╔══> ADP   به
     nmod     ╔══>╚═╔═ NOUN  اعتقاد
nmod:poss     ║     ╚> PRON  من
    nsubj     ║ ╔>╔═══ NOUN  موسيقي
nmod:poss     ║ ║ ╚>╔═ NOUN  هنر
     flat     ║ ║   ╚> NOUN  نيست
    punct   ╔>║ ║      PUNCT ،
     root ╔═╚═╚═╚═╔═╔═ NOUN  بلكه
     amod ║       ║ ╚> ADJ   متافيزيك
      cop ║       ╚══> AUX   است
    punct ╚══════════> PUNCT .
```

<h2 dir="rtl"> با <a href="http://ufal.mff.cuni.cz/udpipe/2">UDPipe 2</a></h2>

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=fa&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("به اعتقاد من موسيقي هنر نيست، بلكه متافيزيك است.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
     case         ╔══> ADP   به
     nmod     ╔══>╚═╔═ NOUN  اعتقاد
nmod:poss     ║     ╚> PRON  من
    nsubj     ║ ╔>╔═══ NOUN  موسيقي
nmod:poss     ║ ║ ╚>╔═ NOUN  هنر
nmod:poss     ║ ║   ╚> NOUN  نيست
    punct   ╔>║ ║      PUNCT ،
     root ╔═╚═╚═╚═╔═╔═ NOUN  بلكه
nmod:poss ║       ║ ╚> NOUN  متافيزيك
      cop ║       ╚══> AUX   است
    punct ╚══════════> PUNCT .
```

<h2 dir="rtl"> با <a href="https://github.com/Adobe/NLP-Cube">NLP-Cube</a></h2>

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("fa")
>>> doc=nlp("به اعتقاد من موسيقي هنر نيست، بلكه متافيزيك است.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
     case           ╔══> ADP   به
      obl   ╔══════>╚═╔═ NOUN  اعتقاد
nmod:poss   ║         ╚> PRON  من
    nsubj   ║ ╔══════>╔═ NOUN  موسيقي
nmod:poss   ║ ║       ╚> NOUN  هنر
     root ╔═╚═╚═╔═══════ VERB  نيست
    punct ║     ║ ╔════> PUNCT ،
   advmod ║     ║ ║ ╔══> X     بلكه
     conj ║     ╚>╚═╚═╔═ ADJ   متافيزيك
      cop ║           ╚> AUX   است
    punct ╚════════════> PUNCT .
```

<h2 dir="rtl"> با <a href="https://github.com/sobhe/hazm">Hazm</a></h2>

```py
>>> import hazm
>>> nlp=lambda t:hazm.DependencyParser(tagger=hazm.POSTagger(model="resources/postagger.model"),lemmatizer=hazm.Lemmatizer()).parse(hazm.word_tokenize(t))
>>> doc=nlp("به اعتقاد من موسيقي هنر نيست، بلكه متافيزيك است.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
   ADV   ╔>╔═══ P    به
POSDEP   ║ ╚>╔═ Ne   اعتقاد
   MOZ   ║   ╚> PRO  من
   OBJ   ║ ╔>╔═ Ne   موسيقي
   MOZ   ║ ║ ╚> N    هنر
 VCONJ ╔>╚═╚═╔═ V    نيست
  PUNC ║     ╚> PUNC ،
   SBJ ║ ╔════> N    بلكه
   MOS ║ ║ ╔══> AJ   متافيزيك
  ROOT ╚═╚═╚═╔═ V    است
  PUNC       ╚> PUNC .
```

