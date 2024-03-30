# [deplacy](https://koichiyasuoka.github.io/deplacy/) fyrir setningafræðilega greiningu

## við [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("is")
>>> doc=nlp("Hugsjónina sakar ekkert þótt einstaklíngarnir deyi eða svíki.")
>>> import deplacy
>>> deplacy.render(doc)
Hugsjónina       NOUN  <══════════╗ nsubj
sakar            VERB  ═╗═══════╗═╝ root
ekkert           DET   <╝       ║   obl
þótt             SCONJ <══════╗ ║   mark
einstaklíngarnir NOUN  <════╗ ║ ║   nsubj
deyi             VERB  ═╗═╗═╝═╝<╝   advcl
eða              CCONJ <╝ ║         cc
svíki            VERB  ═╗<╝         conj
.                PUNCT <╝           punct
```

## við [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=is&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Hugsjónina sakar ekkert þótt einstaklíngarnir deyi eða svíki.")
>>> import deplacy
>>> deplacy.render(doc)
Hugsjónina       NOUN  <══════════╗ obj
sakar            VERB  ═╗═══════╗═╝ root
ekkert           DET   <╝       ║   nsubj
þótt             ADP   <══════╗ ║   case
einstaklíngarnir NOUN  <════╗ ║ ║   nsubj
deyi             VERB  ═╗═╗═╝═╝<╝   obl
eða              CCONJ <╝ ║         cc
svíki            VERB  ═╗<╝         dep
.                PUNCT <╝           punct
```

## við [is_ud_is_pud](https://huggingface.co/elisno/is_ud_is_pud)

```py
>>> import spacy
>>> nlp=spacy.load("is_ud_is_pud")
>>> doc=nlp("Hugsjónina sakar ekkert þótt einstaklíngarnir deyi eða svíki.")
>>> import deplacy
>>> deplacy.render(doc)
Hugsjónina       NOUN  <════════════╗   nsubj
sakar            VERB  ═══════════╗═╝═╗ ROOT
ekkert           PRON  <════════╗ ║   ║ det
þótt             SCONJ <══════╗ ║ ║   ║ mark
einstaklíngarnir NOUN  <════╗ ║ ║ ║   ║ amod
deyi             NOUN  ═══╗═╝═╝═╝<╝   ║ obj
eða              CCONJ <╗ ║           ║ cc
svíki            NOUN  ═╝<╝           ║ conj
.                PUNCT <══════════════╝ punct
```

