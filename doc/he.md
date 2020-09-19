<h1 dir="rtl"> ניתוח תחבירי על <a href="https://koichiyasuoka.github.io/deplacy/">deplacy</a></h1>

<h2 dir="rtl"> עם <a href="https://camphr.readthedocs.io/en/latest/notes/udify.html">Camphr-Udify</a></h2>

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,RightWord=True)
           case     ╔══> ADP   על
            obl   ╔>╚═╔═ NOUN  טעם
compound:smixut   ║   ╚> PROPN וריח
            aux   ║   ╔> AUX   אין
           root ╔═╚═══╚═ VERB  להתווכח
          punct ╚══════> PUNCT .
```

<h2 dir="rtl"> עם <a href="https://stanfordnlp.github.io/stanza">Stanza</a></h2>

```py
>>> import stanza
>>> nlp=stanza.Pipeline("he")
>>> doc=nlp("על טעם וריח אין להתווכח.")
>>> import deplacy
>>> deplacy.render(doc,RightWord=True)
 case       ╔════> ADP   על
  obl     ╔>╚═╔═══ NOUN  טעם
   cc     ║   ║ ╔> CCONJ ו
 conj     ║   ╚>╚═ NOUN  ריח
  aux ╔>╔═╚═══════ AUX   אין
 root ╚═══════════ VERB  להתווכח
punct   ╚════════> PUNCT .
```

