# [deplacy](https://koichiyasuoka.github.io/deplacy/) za sintaksnu analizu na srpskom jeziku

## s [CLASSLA](https://github.com/clarinsi/classla-stanfordnlp)-om

```py
>>> import classla
>>> nlp=classla.Pipeline("sr")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝═════╗ root
sira     NOUN  ═══╗<╝       ║ obj
i        CCONJ <╗ ║         ║ cc
masla    NOUN  ═╝<╝         ║ conj
i        CCONJ <════════╗   ║ cc
moja     DET   <╗       ║   ║ det
bi       AUX    ║<════╗ ║   ║ aux
mati     NOUN  ═╝<══╗ ║ ║   ║ nsubj
znala    VERB  ═══╗═╝═╝═╝═╗<╝ conj
gibati   VERB  ═╗<╝       ║   xcomp
gibanicu NOUN  <╝         ║   obj
.        PUNCT <══════════╝   punct
```

## s [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)-om

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=sr&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝═══╗═╗ root
sira     NOUN  ═══╗<╝     ║ ║ obj
i        CCONJ <╗ ║       ║ ║ cc
masla    NOUN  ═╝<╝       ║ ║ conj
i        CCONJ <════════╗ ║ ║ cc
moja     DET   <╗       ║ ║ ║ det
bi       AUX    ║<════╗ ║ ║ ║ aux
mati     NOUN  ═╝<══╗ ║ ║ ║ ║ nsubj
znala    VERB  ═══╗═╝═╝═╝<╝ ║ conj
gibati   VERB  ═╗<╝         ║ xcomp
gibanicu NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

## s [Trankit](https://github.com/nlp-uoregon/trankit)-om

```py
>>> import trankit
>>> nlp=trankit.Pipeline("serbian")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝═══╗═╗ root
sira     NOUN  ═══╗<╝     ║ ║ obj
i        CCONJ <╗ ║       ║ ║ cc
masla    NOUN  ═╝<╝       ║ ║ conj
i        CCONJ <════════╗ ║ ║ cc
moja     DET   <╗       ║ ║ ║ det
bi       AUX    ║<════╗ ║ ║ ║ aux
mati     NOUN  ═╝<══╗ ║ ║ ║ ║ nsubj
znala    VERB  ═══╗═╝═╝═╝<╝ ║ conj
gibati   VERB  ═╗<╝         ║ xcomp
gibanicu NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

## s [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-om

```py
>>> from spacy.lang.sr import Serbian
>>> nlp=Serbian()
>>> import spacy
>>> nlp.pipeline.extend(spacy.load("en_udify").pipeline)
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝═══╗═╗ root
sira     NOUN  ═══╗<╝     ║ ║ obj
i        CCONJ <╗ ║       ║ ║ cc
masla    NOUN  ═╝<╝       ║ ║ conj
i        CCONJ <════════╗ ║ ║ cc
moja     DET   <╗       ║ ║ ║ det
bi       AUX    ║<════╗ ║ ║ ║ aux
mati     NOUN  ═╝<══╗ ║ ║ ║ ║ nsubj
znala    VERB  ═══╗═╝═╝═╝<╝ ║ conj
gibati   VERB  ═╗<╝         ║ xcomp
gibanicu NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

## s [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)-om

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_sr_set/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝═══╗═╗ root
sira     NOUN  ═══╗<╝     ║ ║ obj
i        CCONJ <╗ ║       ║ ║ cc
masla    NOUN  ═╝<╝       ║ ║ conj
i        CCONJ <════════╗ ║ ║ cc
moja     PRON  <╗       ║ ║ ║ det
bi       AUX    ║<════╗ ║ ║ ║ aux
mati     PROPN ═╝<══╗ ║ ║ ║ ║ nsubj
znala    VERB  ═══╗═╝═╝═╝<╝ ║ conj
gibati   VERB  ═╗<╝         ║ xcomp
gibanicu NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

## s [NLP-Cube](https://github.com/Adobe/NLP-Cube)-om

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("sr")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝<══╗   advcl
sira     NOUN  ═══╗<╝     ║   obj
i        CCONJ <╗ ║       ║   cc
masla    NOUN  ═╝<╝       ║   conj
i        CCONJ <════════╗ ║   cc
moja     PRON  <╗       ║ ║   det
bi       AUX    ║<════╗ ║ ║   aux
mati     NOUN  ═╝<══╗ ║ ║ ║   nsubj
znala    VERB  ═══╗═╝═╝═╝═╝═╗ root
gibati   VERB  ═╗<╝         ║ xcomp
gibanicu NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

## s [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-om

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("sr")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗       mark
ima      VERB  ═════╗═╝═╗═╗═╗ ROOT
sira     NOUN  ═══╗<╝   ║ ║ ║ obl
i        CCONJ <╗ ║     ║ ║ ║ cc
masla    NOUN  ═╝<╝     ║ ║ ║ conj
i        CCONJ <════╗   ║ ║ ║ cc
moja     NOUN  <══╗ ║   ║ ║ ║ nsubj
bi       AUX   <╗ ║ ║   ║ ║ ║ aux
mati     VERB  ═╝═╝═╝<══╝ ║ ║ conj
znala    VERB  ═══╗<══════╝ ║ conj
gibati   VERB  ═╗<╝         ║ xcomp
gibanicu NOUN  <╝           ║ obj
.        PUNCT <════════════╝ punct
```

## s [Stanza](https://stanfordnlp.github.io/stanza)-om

```py
>>> import stanza
>>> nlp=stanza.Pipeline("sr")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════════════════╗ mark
ima      VERB  ═════════════════╗═╝ root
sira     VERB  ═══╗═══════════╗<╝   xcomp
i        CCONJ <╗ ║           ║     cc
masla    NOUN  ═╝<╝           ║     obj
i        CCONJ <════════════╗ ║     cc
moja     DET   <══════════╗ ║ ║     nsubj
bi       AUX   <════════╗ ║ ║ ║     aux
mati     ADJ   <══════╗ ║ ║ ║ ║     advmod
znala    VERB  ═════╗═╝═╝═╝═╝<╝     conj
gibati   VERB  ═╗═╗<╝               xcomp
gibanicu NOUN  <╝ ║                 obj
.        PUNCT <══╝                 punct
```

## s [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)-om

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("sr_set")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗         mark
ima      VERB  ═════╗═╝═══════╗ ROOT
sira     NOUN  ═══╗<╝         ║ obj
i        CCONJ <╗ ║           ║ cc
masla    NOUN  ═╝<╝           ║ conj
i        CCONJ <══════════╗   ║ cc
moja     PRON  <════════╗ ║   ║ nsubj
bi       AUX   <══════╗ ║ ║   ║ aux
mati     ADV   <════╗ ║ ║ ║   ║ advmod
znala    VERB  ═══╗═╝═╝═╝═╝═╗<╝ conj
gibati   VERB  ═╗<╝         ║   xcomp
gibanicu NOUN  <╝           ║   obj
.        PUNCT <════════════╝   punct
```

## s [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)-om

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("sr_set")
>>> doc=nlp("Da ima sira i masla i moja bi mati znala gibati gibanicu.")
>>> import deplacy
>>> deplacy.render(doc)
Da       SCONJ <══════╗         mark
ima      VERB  ═════╗═╝═════╗═╗ ROOT
sira     NOUN  ═══╗<╝       ║ ║ obj
i        CCONJ <╗ ║         ║ ║ cc
masla    NOUN  ═╝<╝         ║ ║ conj
i        CCONJ <══════════╗ ║ ║ cc
moja     PRON  <════════╗ ║ ║ ║ nsubj
bi       AUX   <══════╗ ║ ║ ║ ║ aux
mati     ADJ   <════╗ ║ ║ ║ ║ ║ nsubj
znala    VERB  ═══╗═╝═╝═╝═╝<╝ ║ conj
gibati   ADJ   <╗ ║           ║ amod
gibanicu NOUN  ═╝<╝           ║ obj
.        PUNCT <══════════════╝ punct
```

