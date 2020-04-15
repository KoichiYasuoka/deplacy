# [deplacy](https://koichiyasuoka.github.io/deplacy/) pour l'analyse syntaxique

## avec [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("fr_core_news_sm")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> from stanza.utils.conll import CoNLL
>>> d=CoNLL.conll_as_string(CoNLL.convert_dict(doc.to_dict()))
>>> import deplacy
>>> deplacy.render(d)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> d="".join("".join(str(t)+"\n" for t in s)+"\n" for s in doc)
>>> import deplacy
>>> deplacy.render(d)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ root
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("fr").tokenizer.model
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> d=nlp.write(doc,"conllu")
>>> import deplacy
>>> deplacy.render(d)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

## avec [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> from camphr.pipelines import load_udify
>>> nlp=load_udify("fr")
>>> doc=nlp("L'essentiel est invisible pour les yeux.")
>>> import deplacy
>>> deplacy.render(doc)
L'        DET   <╗           det
essentiel NOUN  ═╝<══════╗   nsubj
est       AUX   <══════╗ ║   cop
invisible ADJ   ═════╗═╝═╝═╗ ROOT
pour      ADP   <══╗ ║     ║ case
les       DET   <╗ ║ ║     ║ det
yeux      NOUN  ═╝═╝<╝     ║ obl
.         PUNCT <══════════╝ punct
```

