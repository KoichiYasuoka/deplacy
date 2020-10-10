# [deplacy](https://koichiyasuoka.github.io/deplacy/) के माध्यम से वाक्यविन्यास विश्लेषण

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2) पर विश्लेषण

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=hi&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
     nmod     ╔══════════════> PRON  खुद
      det     ║ ╔════════════> DET   वो
    nsubj   ╔>╚═╚═╔═══════════ NOUN  बदलाव
     root ╔═╚═════════════════ VERB  बनिए
      obj ║       ║ ╔════════> PRON  जो
    nsubj ║       ║ ║ ╔══════> PRON  आप
      obl ║       ║ ║ ║   ╔>╔═ NOUN  दुनिया
     case ║       ║ ║ ║   ║ ╚> ADP   में
      obj ║       ║ ║ ║ ╔>╚═══ VERB  देखना
acl:relcl ║       ╚>╚═╚═╚═══╔═ VERB  चाहते
      aux ║                 ╚> AUX   हैं
    punct ╚══════════════════> PUNCT ।
```

## [Stanza](https://stanfordnlp.github.io/stanza) पर विश्लेषण

```py
>>> import stanza
>>> nlp=stanza.Pipeline("hi")
>>> doc=nlp("खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
    nsubj   ╔══════════════> PRON  खुद
      obj   ║ ╔>╔═══════════ PRON  वो
 compound   ║ ║ ║         ╔> NOUN  बदलाव
     root ╔═╚═╚═══════════╚═ VERB  बनिए
    nsubj ║     ║ ╔════════> PRON  जो
    nsubj ║     ║ ║ ╔══════> PRON  आप
      obl ║     ║ ║ ║   ╔>╔═ NOUN  दुनिया
     case ║     ║ ║ ║   ║ ╚> ADP   में
      obj ║     ║ ║ ║ ╔>╚═══ VERB  देखना
acl:relcl ║     ╚>╚═╚═╚═══╔═ VERB  चाहते
      aux ║               ╚> AUX   हैं
    punct ╚════════════════> PUNCT ।
```

## [Camphr-KNP](https://camphr.readthedocs.io/en/latest/notes/knp.html) पर विश्लेषण

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
    nsubj   ╔════════════════> PRON  खुद
    nsubj   ║ ╔══════════════> PRON  वो
      obj   ║ ║ ╔>╔═══════════ NOUN  बदलाव
     root ╔═╚═╚═╚═════════════ VERB  बनिए
      obj ║       ║ ╔════════> PRON  जो
    nsubj ║       ║ ║ ╔══════> PRON  आप
      obl ║       ║ ║ ║ ╔══>╔═ NOUN  दुनिया
     case ║       ║ ║ ║ ║   ╚> ADP   में
      obj ║       ║ ║ ║ ║ ╔══> VERB  देखना
acl:relcl ║       ╚>╚═╚═╚═╚═╔═ VERB  चाहते
      aux ║                 ╚> AUX   हैं
    punct ╚══════════════════> PUNCT ।
```

