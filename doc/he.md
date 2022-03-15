<h1 dir="rtl"> ניתוח תחבירי על <a href="https://koichiyasuoka.github.io/deplacy/">deplacy</a></h1>

<h2 dir="rtl"> עם <a href="https://github.com/nlp-uoregon/trankit">Trankit</a></h2>

```py
>>> import trankit
>>> nlp=trankit.Pipeline("hebrew")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 case   ╔════> ADP   על
  obl ╔>╚═╔═══ NOUN  טעם
   cc ║   ║ ╔> CCONJ ו
 conj ║   ╚>╚═ NOUN  ריח
  aux ║   ╔>╔═ AUX   אין
 root ╚═══╚═══ VERB  להתווכח
punct       ╚> PUNCT .
```

<h2 dir="rtl"> עם <a href="https://github.com/amir-zeldes/HebPipe">HebPipe</a></h2>

```py
>>> def nlp(t):
...   import sys,subprocess,tempfile
...   with tempfile.NamedTemporaryFile("w",encoding="utf-8") as f:
...     print(t,file=f,flush=True)
...     return subprocess.check_output([sys.executable,"-c","import hebpipe","-q",f.name]).decode("utf-8")+"\n"
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

<h2 dir="rtl"> עם <a href="https://stanfordnlp.github.io/stanza">Stanza</a></h2>

```py
>>> import stanza
>>> nlp=stanza.Pipeline("he")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
case     ╔════> ADP   על
 obl   ╔>╚═╔═══ NOUN  טעם
  cc   ║   ║ ╔> CCONJ ו
conj   ║   ╚>╚═ NOUN  ריח
 aux ╔>╚═══════ AUX   אין
root ╚═════════ VERB  להתווכח.
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

<h2 dir="rtl"> עם <a href="https://github.com/KoichiYasuoka/spaCy-jPTDP">spaCy-jPTDP</a></h2>

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("he_htb")
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

<h2 dir="rtl"> עם <a href="http://ufal.mff.cuni.cz/udpipe/2">UDPipe 2</a></h2>

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=he&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
           case       ╔══> ADP   על
            obl     ╔>╚═╔═ NOUN  טעם
compound:smixut     ║   ╚> NOUN  וריח
            aux ╔>╔═╚═════ AUX   אין
           root ╚═════════ VERB  להתווכח
          punct   ╚══════> PUNCT .
```

<h2 dir="rtl"> עם <a href="https://gitlab.clarin-pl.eu/syntactic-tools/combo">COMBO-pytorch</a></h2>

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("hebrew-ud27")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,WordRight=True)
 case       ╔══> ADP   על
  obl     ╔>╚═╔═ NOUN  טעם
 amod     ║   ╚> ADJ   וריח
  aux ╔>╔═╚═════ AUX   אין
 root ╚═════════ VERB  להתווכח
punct   ╚══════> PUNCT .
```

<h2 dir="rtl"> עם <a href="https://camphr.readthedocs.io/en/stable/notes/udify.html">Camphr-Udify</a></h2>

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

