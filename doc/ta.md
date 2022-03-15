# [deplacy](https://koichiyasuoka.github.io/deplacy/) மூலம் தொடரியல் பகுப்பாய்வு

## [Camphr-Udify](https://camphr.readthedocs.io/en/stable/notes/udify.html) ஆல் பகுப்பாய்வு

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("காசுக்கு ஒரு குதிரையும் வேண்டும், காற்றைப் போலப் பறக்கவும் வேண்டும்.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
  obl     ╔════> NOUN  காசுக்கு
 amod     ║ ╔══> ADJ   ஒரு
 root ╔═══╚═╚═╔═ NOUN  குதிரையும்
  aux ║       ╚> AUX   வேண்டும்
punct ║   ╔════> PUNCT ,
  obl ║   ║ ╔>╔═ NOUN  காற்றைப்
 case ║   ║ ║ ╚> ADP   போலப்
 conj ╚>╔═╚═╚═╔═ VERB  பறக்கவும்
  aux   ║     ╚> AUX   வேண்டும்
punct   ╚══════> PUNCT .
```

## [Trankit](https://github.com/nlp-uoregon/trankit) ஆல் பகுப்பாய்வு

```py
>>> import trankit
>>> nlp=trankit.Pipeline("tamil")
>>> doc=nlp("காசுக்கு ஒரு குதிரையும் வேண்டும், காற்றைப் போலப் பறக்கவும் வேண்டும்.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
      nsubj ╔════════════> NOUN  காசுக்கு
       amod ║         ╔══> ADJ   ஒரு
        obj ║       ╔>╚═╔═ NOUN  குதிரைய்
advmod:emph ║       ║   ╚> PART  உம்
       root ╚═╔═════╚═════ AUX   வேண்டும்
      punct   ║   ╔══════> PUNCT ,
        obl   ║   ║ ╔══>╔═ NOUN  காற்றைப்
       case   ║   ║ ║   ╚> ADP   போலப்
       conj   ╚>╔═╚═╚═╔═╔═ VERB  பறக்கவ்
         cc     ║     ║ ╚> PART  உம்
        aux     ║     ╚══> AUX   வேண்டும்
      punct     ╚════════> PUNCT .
```

## [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2) ஆல் பகுப்பாய்வு

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=ta&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:  ...     return json.loads(r.read())["result"]
...
>>> doc=nlp("காசுக்கு ஒரு குதிரையும் வேண்டும், காற்றைப் போலப் பறக்கவும் வேண்டும்.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
        obl         ╔════> NOUN  காசுக்கு
       amod         ║ ╔══> ADJ   ஒரு
        obj     ╔══>╚═╚═╔═ NOUN  குதிரையும்
        aux     ║       ╚> AUX   வேண்டும்
      punct   ╔═║════════> PUNCT ,
        obj   ║ ║ ╔══════> NOUN  காற்றைப்
     advmod   ║ ║ ║ ╔════> ADV   போலப்
       root ╔═╚═╚═╚═╚═╔═╔═ VERB  பறக்கவ்
advmod:emph ║         ║ ╚> PART  உம்
        aux ║         ╚══> AUX   வேண்டும்
      punct ╚════════════> PUNCT .
```

## [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe) ஆல் பகுப்பாய்வு

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("ta")
>>> doc=nlp("காசுக்கு ஒரு குதிரையும் வேண்டும், காற்றைப் போலப் பறக்கவும் வேண்டும்.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
        obl     ╔════════> NOUN  காசுக்கு
       amod     ║     ╔══> ADJ   ஒரு
      nsubj     ║ ╔══>╚═╔═ PRON  குதிரையும்
        aux     ║ ║     ╚> AUX   வேண்டும்
      punct   ╔>║ ║        PUNCT ,
       nmod   ║ ║ ║     ╔> PROPN காற்றைப்
        obj   ║ ║ ║ ╔══>╚═ NOUN  போலப்
       ROOT ╔═╚═╚═╚═╚═╔═╔═ VERB  பறக்கவ்
advmod:emph ║         ║ ╚> PART  உம்
        aux ║         ╚══> AUX   வேண்டும்
      punct ╚════════════> PUNCT .
```

## [Stanza](https://stanfordnlp.github.io/stanza) ஆல் பகுப்பாய்வு

```py
>>> import stanza
>>> nlp=stanza.Pipeline("ta")
>>> doc=nlp("காசுக்கு ஒரு குதிரையும் வேண்டும், காற்றைப் போலப் பறக்கவும் வேண்டும்.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 nmod         ╔════> PROPN காசுக்கு
 amod         ║ ╔══> ADJ   ஒரு
  obj       ╔>╚═╚═╔═ NOUN  குதிரையும்
  aux       ║     ╚> AUX   வேண்டும்
punct     ╔═║══════> PUNCT ,
  obj     ║ ║     ╔> NOUN  காற்றைப்
advcl   ╔>╚═╚═════╚═ VERB  போலப்
 root ╔═╚═════════╔═ VERB  பறக்கவும்
  aux ║           ╚> AUX   வேண்டும்
punct ╚════════════> PUNCT .
```

