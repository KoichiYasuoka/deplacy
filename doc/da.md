# [deplacy](https://koichiyasuoka.github.io/deplacy/) til syntaksanalyse

## med [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("da")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> import deplacy
>>> deplacy.render(doc)
Da        ADV   <══════════╗   advmod
sukkede   VERB  ═════╗═══╗═╝═╗ root
den       DET   <══╗ ║   ║   ║ det
lille     ADJ   <╗ ║ ║   ║   ║ amod
havfrue   NOUN  ═╝═╝<╝   ║   ║ nsubj
og        CCONJ <══════╗ ║   ║ cc
så        VERB  ═╗═══╗═╝<╝   ║ conj
bedrøvet  VERB  <╝   ║       ║ xcomp
på        ADP   <══╗ ║       ║ case
sin       DET   <╗ ║ ║       ║ det
fiskehale NOUN  ═╝═╝<╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("da")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
Da        ADV   <══════════╗   advmod
sukkede   VERB  ═════╗═══╗═╝═╗ root
den       DET   <══╗ ║   ║   ║ det
lille     ADJ   <╗ ║ ║   ║   ║ amod
havfrue   NOUN  ═╝═╝<╝   ║   ║ nsubj
og        CCONJ <══════╗ ║   ║ cc
så        VERB  ═╗═══╗═╝<╝   ║ conj
bedrøvet  ADJ   <╝   ║       ║ amod
på        ADP   <══╗ ║       ║ case
sin       DET   <╗ ║ ║       ║ det
fiskehale NOUN  ═╝═╝<╝       ║ obl
.         PUNCT <════════════╝ punct
```

## med [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("da")
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
Da        ADV   <════════════╗   advmod
sukkede   VERB  ═════╗═════╗═╝═╗ root
den       DET   <══╗ ║     ║   ║ det
lille     ADJ   <╗ ║ ║     ║   ║ amod
havfrue   NOUN  ═╝═╝<╝     ║   ║ nsubj
og        CCONJ <════════╗ ║   ║ cc
så        ADV   <══════╗ ║ ║   ║ advmod
bedrøvet  VERB  ═════╗═╝═╝<╝   ║ conj
på        ADP   <══╗ ║         ║ case
sin       DET   <╗ ║ ║         ║ det
fiskehale NOUN  ═╝═╝<╝         ║ obl
.         PUNCT <══════════════╝ punct
```

## med [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("da").tokenizer.model
>>> doc=nlp("Da sukkede den lille havfrue og så bedrøvet på sin fiskehale.")
>>> d=nlp.write(doc,"conllu")
>>> import deplacy
>>> deplacy.render(d)
Da        ADV   <════════════╗   advmod
sukkede   VERB  ═════╗═════╗═╝═╗ root
den       DET   <══╗ ║     ║   ║ det
lille     ADJ   <╗ ║ ║     ║   ║ amod
havfrue   NOUN  ═╝═╝<╝     ║   ║ nsubj
og        CCONJ <════════╗ ║   ║ cc
så        ADV   <══════╗ ║ ║   ║ advmod
bedrøvet  VERB  ═════╗═╝═╝<╝   ║ conj
på        ADP   <══╗ ║         ║ case
sin       DET   <╗ ║ ║         ║ det
fiskehale NOUN  ═╝═╝<╝         ║ obl
.         PUNCT <══════════════╝ punct
```

