# [deplacy](https://koichiyasuoka.github.io/deplacy/) для синтаксического анализа

## с [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ iobj
.      PUNCT <════════════╝ punct
```

## с [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("russian")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ iobj
.      PUNCT <════════════╝ punct
```

## с [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ iobj
.      PUNCT <════════════╝ punct
```

## с [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=ru&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ obl
.      PUNCT <════════════╝ punct
```

## с [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ obl
.      PUNCT <════════════╝ punct
```

## с [spaCy](https://spacy.io/)

```py
>>> import spacy
>>> nlp=spacy.load("ru_core_news_md")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ ROOT
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ obj
.      PUNCT <════════════╝ punct
```

## с [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("russian-ud27")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва NOUN  <══════════╗   nsubj
слезам NOUN  <════════╗ ║   iobj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ obj
.      PUNCT <════════════╝ punct
```

## с [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ru")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва NOUN  <════════════╗ nsubj
слезам NOUN  <══════════╗ ║ iobj
не     PART  <╗         ║ ║ advmod
верила VERB  ═╝═══════╗═╝═╝ root
,      PUNCT <════╗   ║     punct
а      CCONJ <══╗ ║   ║     cc
верила VERB  ═╗═╝═╝═╗<╝     conj
любви  NOUN  <╝     ║       obj
.      PUNCT <══════╝       punct
```

## с [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("ru_syntagrus")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва NOUN  <════════════╗ nsubj
слезам NOUN  <══════════╗ ║ iobj
не     PART  <╗         ║ ║ advmod
верила VERB  ═╝═══════╗═╝═╝ ROOT
,      PUNCT <════╗   ║     punct
а      CCONJ <══╗ ║   ║     cc
верила VERB  ═╗═╝═╝═╗<╝     conj
любви  NOUN  <╝     ║       obj
.      PUNCT <══════╝       punct
```

## с [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("ru_syntagrus")
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва NOUN  <════════════╗ nsubj
слезам NOUN  <══════════╗ ║ iobj
не     PART  <╗         ║ ║ advmod
верила VERB  ═╝═══════╗═╝═╝ ROOT
,      PUNCT <════╗   ║     punct
а      CCONJ <══╗ ║   ║     cc
верила VERB  ═╗═╝═╝═╗<╝     conj
любви  NOUN  <╝     ║       obl
.      PUNCT <══════╝       punct
```

## с [natasha](https://github.com/natasha/natasha)

```py
>>> from natasha import Doc,Segmenter,NewsEmbedding,NewsMorphTagger,NewsSyntaxParser,MorphVocab
>>> tokenizer=Segmenter()
>>> embedding=NewsEmbedding()
>>> tagger=NewsMorphTagger(embedding)
>>> parser=NewsSyntaxParser(embedding)
>>> lemmatizer=MorphVocab()
>>> def nlp(t):
...   d=Doc(t)
...   d.segment(tokenizer)
...   d.tag_morph(tagger)
...   d.parse_syntax(parser)
...   u=""
...   for s in d.sents:
...     for t in s.tokens:
...       t.lemmatize(lemmatizer)
...       i=t.id.find("_")
...       f="_" if t.feats=={} else "|".join([k+"="+v for k,v in t.feats.items()])
...       u+="\t".join([t.id if i<0 else t.id[i+1:],t.text,t.lemma,t.pos,t.pos+("" if f=="_" else "|"+f),f,t.head_id if i<0 else t.head_id[i+1:],t.rel,"_","start_char="+str(t.start)+"|end_char="+str(t.stop)])+"\n"
...     u+="\n"
...   return u
...
>>> doc=nlp("Москва слезам не верила, а верила любви.")
>>> import deplacy
>>> deplacy.render(doc)
Москва PROPN <══════════╗   nsubj
слезам NOUN  <════════╗ ║   nsubj
не     PART  <╗       ║ ║   advmod
верила VERB  ═╝═════╗═╝═╝═╗ root
,      PUNCT <════╗ ║     ║ punct
а      CCONJ <══╗ ║ ║     ║ cc
верила VERB  ═╗═╝═╝<╝     ║ conj
любви  NOUN  <╝           ║ obj
.      PUNCT <════════════╝ punct
```

