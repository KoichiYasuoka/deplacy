# [deplacy](https://koichiyasuoka.github.io/deplacy/) для сінтаксічнага аналізу

## з [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Тэлебачанне стварае міфы, міфы тых, у чыіх руках тэлебачанне.")
>>> import deplacy
>>> deplacy.render(doc)
Тэлебачанне NOUN  <════════════════╗   nsubj
стварае     VERB  ═══════════════╗═╝═╗ root
міфы        NOUN  ═════════════╗<╝   ║ obj
,           PUNCT <══════════╗ ║     ║ punct
міфы        NOUN  ═╗═══════╗═╝<╝     ║ appos
тых         DET   <╝       ║         ║ det
,           PUNCT <══════╗ ║         ║ punct
у           ADP   <════╗ ║ ║         ║ case
чыіх        DET   <══╗ ║ ║ ║         ║ det
руках       NOUN  ═╗═╝═╝═╝<╝         ║ nmod
тэлебачанне NOUN  <╝                 ║ nsubj
.           PUNCT <══════════════════╝ punct
```

## з [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("be")
>>> doc=nlp("Тэлебачанне стварае міфы, міфы тых, у чыіх руках тэлебачанне.")
>>> import deplacy
>>> deplacy.render(doc)
Тэлебачанне NOUN  <══════════════════╗   nsubj
стварае     VERB  ═════════════════╗═╝═╗ root
міфы        NOUN  ═══════════════╗<╝   ║ obj
,           PUNCT <════════════╗ ║     ║ punct
міфы        NOUN  ═══════════╗═╝<╝     ║ conj
тых         DET   ═════════╗<╝         ║ det
,           PUNCT <══════╗ ║           ║ punct
у           ADP   <════╗ ║ ║           ║ case
чыіх        DET   <══╗ ║ ║ ║           ║ det
руках       NOUN  ═╗═╝═╝═╝<╝           ║ conj
тэлебачанне NOUN  <╝                   ║ nsubj
.           PUNCT <════════════════════╝ punct
```

## з [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>>> import trankit
>>> nlp=trankit.Pipeline("belarusian")
>>> doc=nlp("Тэлебачанне стварае міфы, міфы тых, у чыіх руках тэлебачанне.")
>>> import deplacy
>>> deplacy.render(doc)
Тэлебачанне PROPN <══════════════════╗   nsubj
стварае     VERB  ═════════════════╗═╝═╗ root
міфы        NOUN  ═════════════╗═╗<╝   ║ obj
,           PUNCT <══════════╗ ║ ║     ║ punct
міфы        NOUN  ═══════╗═╗═╝<╝ ║     ║ conj
тых         PRON         ║ ║<════╝     ║ det
,           PUNCT <════╗ ║ ║           ║ punct
у           ADP   <══╗ ║ ║ ║           ║ case
чыіх        DET   <╗ ║ ║ ║ ║           ║ det
руках       NOUN  ═╝═╝═╝<╝ ║           ║ nmod
тэлебачанне NOUN  <════════╝           ║ nsubj
.           PUNCT <════════════════════╝ punct
```

## з [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=be&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Тэлебачанне стварае міфы, міфы тых, у чыіх руках тэлебачанне.")
>>> import deplacy
>>> deplacy.render(doc)
Тэлебачанне NOUN  <══════════════════╗   nsubj
стварае     VERB  ═════════════════╗═╝═╗ root
міфы        NOUN  ═══════════════╗<╝   ║ obj
,           PUNCT <════════════╗ ║     ║ punct
міфы        NOUN  ═══════════╗═╝<╝     ║ conj
тых         DET   <══════╗   ║         ║ det
,           PUNCT <══════║═╗ ║         ║ punct
у           ADP   <════╗ ║ ║ ║         ║ case
чыіх        DET   <══╗ ║ ║ ║ ║         ║ det
руках       NOUN  ═╗═╝═╝═╝═╝<╝         ║ nmod
тэлебачанне NOUN  <╝                   ║ nmod
.           PUNCT <════════════════════╝ punct
```

## з [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("be")
>>> doc=nlp("Тэлебачанне стварае міфы, міфы тых, у чыіх руках тэлебачанне.")
>>> import deplacy
>>> deplacy.render(doc)
Тэлебачанне NOUN  <══╗               nsubj
стварае     VERB  ═╗═╝═══════════╗═╗ ROOT
міфы        NOUN  <╝             ║ ║ obj
,           PUNCT <════════════╗ ║ ║ punct
міфы        NOUN  ═══════════╗═╝<╝ ║ conj
тых         DET   <══════╗   ║     ║ det
,           PUNCT <══════║═╗ ║     ║ punct
у           ADP   <════╗ ║ ║ ║     ║ case
чыіх        NUM   <╗   ║ ║ ║ ║     ║ nummod:gov
руках       NOUN  ═╝═╗═╝═╝═╝<╝     ║ nmod
тэлебачанне NOUN  <══╝             ║ nmod
.           PUNCT <════════════════╝ punct
```

