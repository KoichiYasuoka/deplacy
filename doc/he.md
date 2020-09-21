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

<h2 dir="rtl"> עם <a href="https://github.com/amir-zeldes/HebPipe">HebPipe</a></h2>

```py
>>> def nlp(t):
...   import sys,subprocess,tempfile
...   with tempfile.NamedTemporaryFile("w",encoding="utf-8") as f:
...     print(t,file=f,flush=True)
...     return subprocess.check_output([sys.executable,"-c","import hebpipe","-q",f.name]).decode("utf-8")
...
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 case     ╔════> ADP   על
  obl   ╔>╚═╔═══ NOUN  טעם
   cc   ║   ║ ╔> CCONJ ו
 conj   ║   ╚>╚═ NOUN  ריח
 root ╔═╚═════╔═ AUX   אין
xcomp ║       ╚> VERB  להתווכח
punct ╚════════> PUNCT .
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

<h2 dir="rtl"> עם <a href="https://github.com/KoichiYasuoka/spaCy-COMBO">spaCy-COMBO</a></h2>

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("he_htb")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
           case     ╔══> ADP   על
            obl   ╔>╚═╔═ NOUN  טעם
compound:smixut   ║   ╚> NOUN  וריח
           ROOT ╔═╚═══╔═ AUX   אין
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

