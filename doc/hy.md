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
բարիք NOUN  ═╝═╝═╗ obj
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

## [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)-ի հետ

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_hy_armtdp/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Չկա չարիք առանց բարիք:")
>>> import deplacy
>>> deplacy.render(doc)
Չկա   ADJ   <╗     nmod:poss
չարիք NOUN  ═╝═╗<╗ obl
առանց ADJ   <╗ ║ ║ det:poss
բարիք NOUN  ═╝═══╝ root
:     PUNCT <══╝   punct
```


