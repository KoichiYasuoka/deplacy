# Շարահյուսական վերլուծություն [deplacy](https://koichiyasuoka.github.io/deplacy/)-ի միջոցով

## [Stanza](https://stanfordnlp.github.io/stanza)-ի հետ

```py
>>> import stanza
>>> nlp=stanza.Pipeline("hy")
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   VERB  ═════╗═╗ root
չարիք NOUN  ═══╗<╝ ║ nsubj
առանց ADP   <╗ ║   ║ case
բարիք NOUN  ═╝<╝   ║ compound:redup
:     PUNCT <══════╝ punct
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)-ի հետ

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   VERB  ═╗═╗═╗ root
չարիք NOUN  <╝ ║ ║ nsubj
առանց ADP   <╗ ║ ║ case
բարիք NOUN  ═╝<╝ ║ obl
:     PUNCT <════╝ punct
```

## [Trankit](https://github.com/nlp-uoregon/trankit)-ի հետ

```py
>>> import trankit
>>> nlp=trankit.Pipeline("armenian")
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   VERB  ═╗═╗═╗ root
չարիք NOUN  <╝ ║ ║ nsubj
առանց ADP   <╗ ║ ║ case
բարիք NOUN  ═╝<╝ ║ obl
:     PUNCT <════╝ punct
```

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)-ի հետ

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=hy&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   VERB  ═════╗═╗ root
չարիք NOUN  ═══╗<╝ ║ xcomp
առանց ADP   <╗ ║   ║ case
բարիք NOUN  ═╝<╝   ║ nmod:npmod
:     PUNCT <══════╝ punct
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)-ի հետ

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("hy")
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   ADJ   <════╗   amod
չարիք NOUN  ═══╗═╝═╗ ROOT
առանց ADP   <╗ ║   ║ case
բարիք NOUN  ═╝<╝   ║ nmod:npmod
:     PUNCT <══════╝ punct
```

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)-ի հետ

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("hy_armtdp")
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   ADV   <╗     aux
չարիք NOUN  ═╝<╗   obj
առանց ADJ   <╗ ║   case
բարիք NOUN  ═╝═╝═╗ ROOT
:     PUNCT <════╝ punct
```

## [YerevaNN](https://github.com/Armtreebank/End-to-end-Parser)-ի հետ

```py
>>> def nlp(t):
...   import sys,subprocess,tempfile
...   with tempfile.NamedTemporaryFile("r",encoding="utf-8") as f:
...     with tempfile.NamedTemporaryFile("w",encoding="utf-8") as g:
...       print(t,file=g,flush=True)
...       subprocess.check_output([sys.executable,"End-to-end-Parser/predict.py","--model_path","End-to-end-Parser/model.pkl","--input_path",g.name,"--output_path",f.name])
...     return f.read()
...
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   NOUN  <══╗     nmod
չարիք NOUN  ═╗═╝<╗   obl
առանց ADP   <╝   ║   case
բարիք NOUN  ═════╝═╗ root
:     PUNCT <══════╝ punct
```

