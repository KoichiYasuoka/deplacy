# [deplacy](https://koichiyasuoka.github.io/deplacy/) untuk analisis sintaksis

## dengan [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("id")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   ADP   <╗ ║     case
langit NOUN  ═╝═╝<╗   obl
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_id_gsd/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   ADP   <╗ ║     case
langit NOUN  ═╝═╝<╗   obl
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("id")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   NOUN  ═╗═╝<╗   obl
langit NOUN  <╝   ║   nmod
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("id")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   NOUN  ═╗═╝<╗   obl
langit NOUN  <╝   ║   nmod
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   ADP   ═╗═╝<╗   obl
langit NOUN  <╝   ║   nmod
masih  ADV   <══╗ ║   advmod
ada    VERB  ═╗═╝═╝═╗ root
langit NOUN  <╝     ║ obj
.      PUNCT <══════╝ punct
```

## dengan [Malaya](https://malaya.readthedocs.io/)

```py
>>> import malaya
>>> tokenizer=malaya.preprocessing.SocialTokenizer()
>>> tagger=malaya.pos.transformer()
>>> parser=malaya.dependency.transformer()
>>> def nlp(t):
...   s=" ".join(tokenizer.tokenize(t))
...   e,f,g,h=None,None,[],[]
...   while g!=e or h!=f:
...     e,f=g,h
...     d,g,h=parser.predict(s)
...   for i,(w,p) in enumerate(tagger.predict(s)):
...     d.nodes[i+1]["ctag"]=p
...   return d.to_conll(10)
...
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <══╗     case
atas   NOUN  ═╗═╝<══╗ obl
langit NOUN  <╝     ║ nmod
masih  ADV   <════╗ ║ advmod
ada    VERB  ═══╗═╝═╝ root
langit NOUN  ═╗<╝     obj
.      PUNCT <╝       punct
```

## dengan [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=id&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <╗         case
atas   ADP   ═╝<════╗   obl
langit NOUN  <════╗ ║   obl
masih  ADV   <══╗ ║ ║   advmod
ada    VERB  ═╗═╝═╝═╝═╗ root
langit NOUN  <╝       ║ obj
.      PUNCT <════════╝ punct
```

## dengan [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("id_gsd")
>>> doc=nlp("Di atas langit masih ada langit.")
>>> import deplacy
>>> deplacy.render(doc)
Di     ADP   <╗         case
atas   NOUN  ═╝<════╗   obl
langit NOUN  <════╗ ║   nmod
masih  ADV   <══╗ ║ ║   advmod
ada    VERB  ═╗═╝═╝═╝═╗ ROOT
langit NOUN  <╝       ║ obj
.      PUNCT <════════╝ punct
```

