# [deplacy](https://koichiyasuoka.github.io/deplacy/) d'anàlisi sintàctica

## amb [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("ca")
>>> doc=nlp("El tennis té avui a Catalunya molta importància.")
>>> import deplacy
>>> deplacy.render(doc)
El          DET   <╗         det
tennis      NOUN  ═╝<════╗   nsubj
té          VERB  ═╗═╗═╗═╝═╗ root
avui        ADV   <╝ ║ ║   ║ advmod
a           ADP   <╗ ║ ║   ║ case
Catalunya   PROPN ═╝<╝ ║   ║ obl
molta       DET   <╗   ║   ║ det
importància NOUN  ═╝<══╝   ║ obj
.           PUNCT <════════╝ punct
```

## amb [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ca")
>>> doc=nlp("El tennis té avui a Catalunya molta importància.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
El          DET   <╗         det
tennis      NOUN  ═╝<════╗   nsubj
té          VERB  ═╗═╗═╗═╝═╗ root
avui        ADV   <╝ ║ ║   ║ advmod
a           ADP   <╗ ║ ║   ║ case
Catalunya   PROPN ═╝<╝ ║   ║ obl
molta       DET   <╗   ║   ║ det
importància NOUN  ═╝<══╝   ║ obj
.           PUNCT <════════╝ punct
```

## amb [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ca")
>>> doc=nlp("El tennis té avui a Catalunya molta importància.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
El          DET   <╗         det
tennis      NOUN  ═╝<════╗   nsubj
té          VERB  ═╗═╗═╗═╝═╗ root
avui        ADV   <╝ ║ ║   ║ advmod
a           ADP   <╗ ║ ║   ║ case
Catalunya   PROPN ═╝<╝ ║   ║ obl
molta       DET   <╗   ║   ║ det
importància NOUN  ═╝<══╝   ║ obj
.           PUNCT <════════╝ punct
```

## amb [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ca").tokenizer.model
>>> doc=nlp("El tennis té avui a Catalunya molta importància.")
>>> d=nlp.write(doc,"conllu")
>>> import deplacy
>>> deplacy.render(d)
El          DET   <╗         det
tennis      NOUN  ═╝<════╗   nsubj
té          VERB  ═╗═╗═╗═╝═╗ root
avui        ADV   <╝ ║ ║   ║ advmod
a           ADP   <╗ ║ ║   ║ case
Catalunya   PROPN ═╝<╝ ║   ║ obl
molta       DET   <╗   ║   ║ det
importància NOUN  ═╝<══╝   ║ obj
.           PUNCT <════════╝ punct
```

