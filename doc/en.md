# Syntax analysis by [deplacy](https://koichiyasuoka.github.io/deplacy/)

## Usage with [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("english-ud27")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=en&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("en_ewt")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ ROOT
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("english")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_en_ewt/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ root
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ obj
yesterday NOUN  <══════║═════╝   ║ obl:tmod
which     PRON  <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ acl:relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ obj
.         PUNCT <════════════════╝ punct
```

## Usage with [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("en")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <════════╗   nsubj
saw       VERB  ═══╗═╗═╗═╝═╗ ROOT
a         DET   <╗ ║ ║ ║   ║ det
horse     NOUN  ═╝<╝ ║ ║   ║ obj
yesterday NOUN  <════╝ ║   ║ obl:tmod
which     PRON  <════╗ ║   ║ nsubj
had       VERB  ═══╗═╝<╝   ║ acl:relcl
no        DET   <╗ ║       ║ det
name      NOUN  ═╝<╝       ║ obj
.         PUNCT <══════════╝ punct
```

## Usage with [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("en_ewt")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════╗   nsubj
saw       VERB  ═══╗═════╗═╝═╗ ROOT
a         DET   <╗ ║     ║   ║ det
horse     NOUN  ═╝<╝     ║   ║ obj
yesterday NOUN  ═══════╗<╝   ║ obl:tmod
which     PRON  <════╗ ║     ║ nsubj
had       VERB  ═══╗═╝<╝     ║ acl:relcl
no        DET   <╗ ║         ║ det
name      NOUN  ═╝<╝         ║ obj
.         PUNCT <════════════╝ punct
```

## Usage with [en-qai-sm](https://pypi.org/project/en-qai-sm/)

```py
>>> import spacy
>>> nlp=spacy.load("en_qai_sm")
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <══════════════╗   nsubj
saw       VERB  ═══════════╗═╗═╝═╗ ROOT
a         DET   <════════╗ ║ ║   ║ det
horse     NOUN  ═══════╗═╝<╝ ║   ║ dobj
yesterday NOUN  <══════║═════╝   ║ npadvmod
which     DET   <════╗ ║         ║ nsubj
had       VERB  ═══╗═╝<╝         ║ relcl
no        DET   <╗ ║             ║ det
name      NOUN  ═╝<╝             ║ dobj
.         PUNCT <════════════════╝ punct
```

## Usage with [AllenNLP](https://demo.allennlp.org/dependency-parsing/)

```py
>>> from allennlp.predictors.predictor import Predictor
>>> predictor=Predictor.from_path("https://storage.googleapis.com/allennlp-public-models/biaffine-dependency-parser-ptb-2020.04.01.tar.gz")
>>> def nlp(t):
...   s=predictor.predict(t)
...   return "\n".join(["\t".join([str(i+1),w,"_",p,p,"_",str(h),d,"_","_"]) for i,(w,p,h,d) in enumerate(zip(s["words"],s["pos"],s["predicted_heads"],s["predicted_dependencies"]))])+"\n\n"
>>> doc=nlp("I saw a horse yesterday which had no name.")
>>> import deplacy
>>> deplacy.render(doc)
I         PRON  <════════╗   nsubj
saw       VERB  ═════╗═╗═╝═╗ root
a         DET   <╗   ║ ║   ║ det
horse     NOUN  ═╝<╗ ║ ║   ║ nsubj
yesterday NOUN  <══║═╝ ║   ║ tmod
which     DET   ═══╝<╗ ║   ║ aux
had       AUX   ═══╗═╝<╝   ║ ccomp
no        DET   <╗ ║       ║ advmod
name      NOUN  ═╝<╝       ║ dobj
.         PUNCT <══════════╝ punct
```

