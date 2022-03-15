# [deplacy](https://koichiyasuoka.github.io/deplacy/) के माध्यम से वाक्यविन्यास विश्लेषण

## [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO) पर विश्लेषण

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("hi_hdtb")
>>> doc=nlp("खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
     nmod     ╔══════════════> PRON  खुद
      det     ║ ╔════════════> DET   वो
      obj   ╔>╚═╚═╔═══════════ NOUN  बदलाव
     ROOT ╔═╚═════════════════ VERB  बनिए
      obj ║       ║ ╔════════> PRON  जो
    nsubj ║       ║ ║ ╔══════> PRON  आप
      obl ║       ║ ║ ║   ╔>╔═ NOUN  दुनिया
     case ║       ║ ║ ║   ║ ╚> ADP   में
      obj ║       ║ ║ ║ ╔>╚═══ VERB  देखना
acl:relcl ║       ╚>╚═╚═╚═══╔═ VERB  चाहते
      aux ║                 ╚> AUX   हैं
    punct ╚══════════════════> PUNCT ।
```

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

## [Trankit](https://github.com/nlp-uoregon/trankit) पर विश्लेषण

```py
>>> import trankit
>>> nlp=trankit.Pipeline("hindi")
>>> doc=nlp("खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
    nsubj   ╔════════════════> PRON  खुद
      det   ║   ╔════════════> DET   वो
      obj   ║ ╔>╚═╔═══════════ NOUN  बदलाव
     root ╔═╚═╚═══════════════ VERB  बनिए
      obj ║       ║     ╔════> PRON  जो
    nsubj ║       ║ ╔═══║════> PRON  आप
      obl ║       ║ ║   ║ ╔>╔═ NOUN  दुनिया
     case ║       ║ ║   ║ ║ ╚> ADP   में
      obj ║       ║ ║ ╔>╚═╚═══ VERB  देखना
acl:relcl ║       ╚>╚═╚═════╔═ VERB  चाहते
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

## [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP) पर विश्लेषण

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("hi_hdtb")
>>> doc=nlp("खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
  obl   ╔══════════════> PRON  खुद
  det   ║             ╔> DET   वो
  obj   ║ ╔══════════>╚═ NOUN  बदलाव
 ROOT ╔═╚═╚═╔═══════════ VERB  बनिए
  obj ║     ║ ╔════════> PRON  जो
nsubj ║     ║ ║ ╔══════> PRON  आप
  obl ║     ║ ║ ║   ╔>╔═ NOUN  दुनिया
 case ║     ║ ║ ║   ║ ╚> ADP   में
  obj ║     ║ ║ ║ ╔>╚═══ VERB  देखना
advcl ║     ╚>╚═╚═╚═══╔═ VERB  चाहते
  aux ║               ╚> AUX   हैं
punct ╚════════════════> PUNCT ।
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe) पर विश्लेषण

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("hi")
>>> doc=nlp("खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
    nsubj   ╔══════════════> PRON  खुद
      det   ║             ╔> DET   वो
      obj   ║ ╔══════════>╚═ NOUN  बदलाव
     ROOT ╔═╚═╚═╔═══════════ VERB  बनिए
    nsubj ║     ║ ╔════════> PRON  जो
    nsubj ║     ║ ║ ╔══════> PRON  आप
      obl ║     ║ ║ ║   ╔>╔═ NOUN  दुनिया
     case ║     ║ ║ ║   ║ ╚> ADP   में
      obj ║     ║ ║ ║ ╔>╚═══ VERB  देखना
acl:relcl ║     ╚>╚═╚═╚═══╔═ VERB  चाहते
      aux ║               ╚> AUX   हैं
    punct ╚════════════════> PUNCT ।
```

## [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html) पर विश्लेषण

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

