# Syntaxanalyse durch [Deplacy](https://koichiyasuoka.github.io/deplacy/)

## mit [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("de")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ xcomp
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("de")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ root
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ advmod
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("de").tokenizer.model
>>> doc=nlp("Er sieht sehr jung aus.")
>>> d=nlp.write(doc,"conllu")
>>> import deplacy
>>> deplacy.render(d)
Er    PRON  <══════╗   nsubj
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ advmod
jung  ADJ   ═╝ ║<╝   ║ advmod
aus   ADP   <══╝     ║ compound:prt
.     PUNCT <════════╝ punct
```

## mit [Spacy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("de_core_news_sm")
>>> doc=nlp("Er sieht sehr jung aus.")
>>> import deplacy
>>> deplacy.render(doc)
Er    PRON  <══════╗   sb
sieht VERB  ═══╗═╗═╝═╗ ROOT
sehr  ADV   <╗ ║ ║   ║ mo
jung  ADJ   ═╝ ║<╝   ║ oa
aus   ADP   <══╝     ║ svp
.     PUNCT <════════╝ punct
```

