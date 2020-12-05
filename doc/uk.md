# [deplacy](https://koichiyasuoka.github.io/deplacy/) для синтаксичного аналізу

## з [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("uk")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ root
алеї     NOUN  ═════════╗<╝ ║ nsubj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [Camphr-Udify](https://camphr.readthedocs.io/en/latest/notes/udify.html)

```py
>>> import spacy
>>> nlp=spacy.load("en_udify")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ root
алеї     NOUN  ═════════╗<╝ ║ nsubj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("uk_iu")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ ROOT
алеї     NOUN  ═════════╗<╝ ║ nsubj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=uk&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ root
алеї     NOUN  ═════════╗<╝ ║ nsubj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [Turku-neural-parser-pipeline](https://turkunlp.org/Turku-neural-parser-pipeline/)

```py
>>> import sys,subprocess
>>> nlp=lambda t:subprocess.run([sys.executable,"full_pipeline_stream.py","--gpu","-1","--conf","models_uk_iu/pipelines.yaml"],cwd="Turku-neural-parser-pipeline",input=t,encoding="utf-8",stdout=subprocess.PIPE).stdout
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ root
алеї     NOUN  ═════════╗<╝ ║ nsubj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [NLP-Cube](https://github.com/Adobe/NLP-Cube)

```py
>>> from cube.api import Cube
>>> nlp=Cube()
>>> nlp.load("uk")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ root
алеї     NOUN  ═════════╗<╝ ║ obj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("uk")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ ROOT
алеї     PRON  ═════════╗<╝ ║ obj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("uk_iu")
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   VERB  ═══════════╗═╗ ROOT
алеї     NOUN  ═════════╗<╝ ║ obj
звуків   NOUN  ═══════╗<╝   ║ nmod
,        PUNCT <════╗ ║     ║ punct
саджених ADJ   ═══╗═╝<╝     ║ amod
у        ADP   <╗ ║         ║ case
гами     NOUN  ═╝<╝         ║ obl
.        PUNCT <════════════╝ punct
```

## з [DiaParser](https://github.com/Unipisa/diaparser)

```py
>>> from diaparser.parsers import Parser
>>> parser=Parser.load("uk_iu.TurkuNLP")
>>> nlp=lambda t:"\n".join([str(s) for s in parser.predict(t,text="uk",prob=True).sentences])
>>> doc=nlp("Біжать алеї звуків, саджених у гами.")
>>> import deplacy
>>> deplacy.render(doc)
Біжать   ═══════════╗═╗ root
алеї     ═════════╗<╝ ║ nsubj
звуків   ═══════╗<╝   ║ nmod
,        <════╗ ║     ║ punct
саджених ═══╗═╝<╝     ║ amod
у        <╗ ║         ║ case
гами     ═╝<╝         ║ obl
.        <════════════╝ punct
```

