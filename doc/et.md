# süntaktiline analüüs [deplacy](https://koichiyasuoka.github.io/deplacy/) kaudu

## [Stanza](https://stanfordnlp.github.io/stanza)-ga

```py
>>> import stanza
>>> nlp=stanza.Pipeline("et")
>>> doc=nlp("Suuga teeb suure linna, käega ei tee kärbse pesagi.")
>>> import deplacy
>>> deplacy.render(doc)
Suuga  NOUN  <════╗         obl
teeb   VERB  ═══╗═╝═════╗═╗ root
suure  ADJ   <╗ ║       ║ ║ amod
linna  NOUN  ═╝<╝       ║ ║ obj
,      PUNCT <════════╗ ║ ║ punct
käega  NOUN  <══════╗ ║ ║ ║ obl
ei     AUX   <════╗ ║ ║ ║ ║ aux
tee    VERB  ═══╗═╝═╝═╝<╝ ║ conj
kärbse NOUN  <╗ ║         ║ nmod
pesagi NOUN  ═╝<╝         ║ obj
.      PUNCT <════════════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-ga

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("et")
>>> doc=nlp("Suuga teeb suure linna, käega ei tee kärbse pesagi.")
>>> import deplacy
>>> deplacy.render(doc)
Suuga  NOUN  <════╗         obl
teeb   VERB  ═══╗═╝═════╗═╗ ROOT
suure  ADJ   <╗ ║       ║ ║ amod
linna  NOUN  ═╝<╝       ║ ║ obj
,      PUNCT <════════╗ ║ ║ punct
käega  NOUN  <══════╗ ║ ║ ║ obl
ei     AUX   <════╗ ║ ║ ║ ║ aux
tee    VERB  ═══╗═╝═╝═╝<╝ ║ conj
kärbse NOUN  <╗ ║         ║ nmod
pesagi NOUN  ═╝<╝         ║ obj
.      PUNCT <════════════╝ punct
```

## [EstMalt](https://github.com/EstSyntax/EstMalt/)-ga

```py
>>> import ufal.udpipe
>>> model=ufal.udpipe.Model.load("estudmodel4")
>>> nlp=ufal.udpipe.Pipeline(model,"tokenize","","","").process
>>> doc=nlp("Suuga teeb suure linna, käega ei tee kärbse pesagi.")
>>> import deplacy
>>> deplacy.render(doc)
Suuga  NOUN  <════╗         obl
teeb   VERB  ═══╗═╝═════╗═╗ root
suure  ADJ   <╗ ║       ║ ║ amod
linna  NOUN  ═╝<╝       ║ ║ obj
,      PUNCT <════════╗ ║ ║ punct
käega  NOUN  <══════╗ ║ ║ ║ obl
ei     AUX   <════╗ ║ ║ ║ ║ aux
tee    VERB  ═══╗═╝═╝═╝<╝ ║ conj
kärbse NOUN  <╗ ║         ║ nmod
pesagi NOUN  ═╝<╝         ║ obj
.      PUNCT <════════════╝ punct
```

## [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)-ga

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_et_edt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Suuga teeb suure linna, käega ei tee kärbse pesagi.")
>>> import deplacy
>>> deplacy.render(doc)
Suuga  NOUN  <════╗         obl
teeb   VERB  ═══╗═╝═════╗═╗ root
suure  ADJ   <╗ ║       ║ ║ amod
linna  NOUN  ═╝<╝       ║ ║ obj
,      PUNCT <════════╗ ║ ║ punct
käega  NOUN  <══════╗ ║ ║ ║ obl
ei     AUX   <════╗ ║ ║ ║ ║ aux
tee    VERB  ═══╗═╝═╝═╝<╝ ║ conj
kärbse NOUN  <╗ ║         ║ nmod
pesagi NOUN  ═╝<╝         ║ obj
.      PUNCT <════════════╝ punct
```

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)-ga

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("et_edt")
>>> doc=nlp("Suuga teeb suure linna, käega ei tee kärbse pesagi.")
>>> import deplacy
>>> deplacy.render(doc)
Suuga  NOUN  <════╗         obl
teeb   VERB  ═══╗═╝═════╗═╗ ROOT
suure  ADJ   <╗ ║       ║ ║ amod
linna  NOUN  ═╝<╝       ║ ║ obj
,      PUNCT <════════╗ ║ ║ punct
käega  NOUN  <══════╗ ║ ║ ║ obl
ei     AUX   <════╗ ║ ║ ║ ║ aux
tee    VERB  ═══╗═╝═╝═╝<╝ ║ conj
kärbse NOUN  <╗ ║         ║ nmod
pesagi NOUN  ═╝<╝         ║ nsubj
.      PUNCT <════════════╝ punct
```

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)-ga

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=et&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Suuga teeb suure linna, käega ei tee kärbse pesagi.")
>>> import deplacy
>>> deplacy.render(doc)
Suuga  NOUN  <════╗         obl
teeb   VERB  ═══╗═╝═════╗═╗ root
suure  ADJ   <╗ ║       ║ ║ amod
linna  NOUN  ═╝<╝       ║ ║ obj
,      PUNCT <════════╗ ║ ║ punct
käega  NOUN  <══════╗ ║ ║ ║ obl
ei     AUX   <════╗ ║ ║ ║ ║ aux
tee    VERB  ═══╗═╝═╝═╝<╝ ║ conj
kärbse NOUN  <╗ ║         ║ nmod
pesagi NOUN  ═╝<╝         ║ nsubj
.      PUNCT <════════════╝ punct
```

## [NLP-Cube](https://github.com/Adobe/NLP-Cube)-ga

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("et")
>>> doc=nlp("Suuga teeb suure linna, käega ei tee kärbse pesagi.")
>>> import deplacy
>>> deplacy.render(doc)
Suuga  NOUN  <════╗         nsubj
teeb   VERB  ═══╗═╝═════╗═╗ root
suure  ADJ   <╗ ║       ║ ║ amod
linna  NOUN  ═╝<╝       ║ ║ obj
,      PUNCT <════════╗ ║ ║ punct
käega  NOUN  <══════╗ ║ ║ ║ obl
ei     AUX   <════╗ ║ ║ ║ ║ aux
tee    VERB  ═╗═╗═╝═╝═╝<╝ ║ conj
kärbse NOUN   ║<╝         ║ nsubj
pesagi NOUN  <╝           ║ compound:prt
.      PUNCT <════════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-ga

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Suuga teeb suure linna, käega ei tee kärbse pesagi.")
>>> import deplacy
>>> deplacy.render(doc)
Suuga  NOUN  <════╗         obl
teeb   VERB  ═══╗═╝═════╗═╗ root
suure  ADJ   <╗ ║       ║ ║ amod
linna  NOUN  ═╝<╝       ║ ║ obj
,      PUNCT <════════╗ ║ ║ punct
käega  NOUN  <══════╗ ║ ║ ║ obl
ei     AUX   <════╗ ║ ║ ║ ║ aux
tee    VERB  ═╗═╗═╝═╝═╝<╝ ║ conj
kärbse NOUN  <╝ ║         ║ obj
pesagi NOUN  <══╝         ║ obj
.      PUNCT <════════════╝ punct
```

