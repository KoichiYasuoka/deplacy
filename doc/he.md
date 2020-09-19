<h1 dir="rtl"> ניתוח תחבירי על <a href="https://koichiyasuoka.github.io/deplacy/">deplacy</a></h1>

<h2 dir="rtl"> עם <a href="https://stanfordnlp.github.io/stanza">Stanza</a></h2>

```py
>>> import stanza
>>> nlp=stanza.Pipeline("he")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 case       ╔════> ADP   על
  obl     ╔>╚═╔═══ NOUN  טעם
   cc     ║   ║ ╔> CCONJ ו
 conj     ║   ╚>╚═ NOUN  ריח
  aux ╔>╔═╚═══════ AUX   אין
 root ╚═══════════ VERB  להתווכח
punct   ╚════════> PUNCT .
```

<h2 dir="rtl"> עם <a href="https://camphr.readthedocs.io/en/latest/notes/udify.html">Camphr-Udify</a></h2>

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
           case     ╔══> ADP   על
            obl   ╔>╚═╔═ NOUN  טעם
compound:smixut   ║   ╚> PROPN וריח
            aux   ║   ╔> AUX   אין
           root ╔═╚═══╚═ VERB  להתווכח
          punct ╚══════> PUNCT .
```

<h2 dir="rtl"> עם <a href="https://github.com/Adobe/NLP-Cube">NLP-Cube</a></h2>

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("he")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
           case     ╔══> ADP   על
            obl   ╔>╚═╔═ NOUN  טעם
compound:smixut   ║   ╚> PROPN וריח
           root ╔═╚═══╔═ AUX   אין
          xcomp ║     ╚> VERB  להתווכח
          punct ╚══════> PUNCT .
```

<h2 dir="rtl"> עם <a href="https://github.com/TakeLab/spacy-udpipe">spacy-udpipe</a></h2>

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("he")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
           case     ╔══> ADP   על
            obl   ╔>╚═╔═ NOUN  טעם
compound:smixut   ║   ╚> PROPN וריח
           ROOT ╔═╚═══╔═ VERB  אין
          nsubj ║     ╚> NOUN  להתווכח
          punct ╚══════> PUNCT .
```

