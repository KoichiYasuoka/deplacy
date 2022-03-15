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

## [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)-ga

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("estonian-ud27")
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
kärbse ADJ   <╗ ║         ║ amod
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

## [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)-ga

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("et_edt")
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

## [Trankit](https://github.com/nlp-uoregon/trankit)-ga

```py
>>> import trankit
>>> nlp=trankit.Pipeline("estonian")
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
kärbse NOUN  <╝ ║         ║ obl
pesagi NOUN  <══╝         ║ obj
.      PUNCT <════════════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)-ga

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

