# [deplacy](https://koichiyasuoka.github.io/deplacy/) để phân tích ngữ pháp

## với [Trankit](https://github.com/nlp-uoregon/trankit)

```py
>> import trankit
>> nlp=trankit.Pipeline("vietnamese")
>> doc=nlp("Một mũi tên trúng hai con chim.")
>> import deplacy
>> deplacy.render(doc)
Một     NUM   <╗         nummod
mũi tên NOUN  ═╝<════╗   nsubj
trúng   VERB  ═════╗═╝═╗ root
hai     NUM   <══╗ ║   ║ nummod
con     NOUN  <╗ ║ ║   ║ compound
chim    NOUN  ═╝═╝<╝   ║ obj
.       PUNCT <════════╝ punct
```

## với [Stanza](https://stanfordnlp.github.io/stanza)

```py
>>> import stanza
>>> nlp=stanza.Pipeline("vi")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   NUM   <══╗       nummod
mũi   NOUN  ═╗═╝<══╗   nsubj
tên   NOUN  <╝     ║   compound
trúng VERB  ═════╗═╝═╗ root
hai   NUM   <══╗ ║   ║ nummod
con   NOUN  ═╗═╝<╝   ║ obj
chim  NOUN  <╝       ║ compound
.     PUNCT <════════╝ punct
```

## với [spaCy-jPTDP](https://github.com/KoichiYasuoka/spaCy-jPTDP)

```py
>>> import spacy_jptdp
>>> nlp=spacy_jptdp.load("vi_vtb")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một     NUM   <╗         nummod
mũi_tên NOUN  ═╝<════╗   nsubj
trúng   VERB  ═════╗═╝═╗ ROOT
hai     NUM   <╗   ║   ║ nummod
con     NOUN  ═╝═╗<╝   ║ obj
chim    VERB  <══╝     ║ xcomp
.       PUNCT <════════╝ punct
```

## với [spaCy-COMBO](https://github.com/KoichiYasuoka/spaCy-COMBO)

```py
>>> import spacy_combo
>>> nlp=spacy_combo.load("vi_vtb")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một     NUM   <╗         nummod
mũi_tên NOUN  ═╝═════╗═╗ ROOT
trúng   VERB  ═════╗<╝ ║ xcomp
hai     NUM   <══╗ ║   ║ nummod
con     NOUN  <╗ ║ ║   ║ compound
chim    NOUN  ═╝═╝<╝   ║ obj
.       PUNCT <════════╝ punct
```

## với [COMBO-pytorch](https://gitlab.clarin-pl.eu/syntactic-tools/combo)

```py
>>> import combo.predict
>>> nlp=combo.predict.COMBO.from_pretrained("vietnamese-ud27")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   NUM   <════════╗   nummod
mũi   NOUN  ═╗═════╗═╝═╗ root
tên   NOUN  <╝     ║   ║ compound
trúng ADJ   <════╗ ║   ║ case
hai   NUM   <╗   ║ ║   ║ nummod
con   NOUN  ═╝═╗═╝<╝   ║ compound
chim  VERB  <══╝       ║ xcomp
.     PUNCT <══════════╝ punct
```

## với [UDPipe 2](http://ufal.mff.cuni.cz/udpipe/2)

```py
>>> def nlp(t):
...   import urllib.request,urllib.parse,json
...   with urllib.request.urlopen("https://lindat.mff.cuni.cz/services/udpipe/api/process?model=vi&tokenizer&tagger&parser&data="+urllib.parse.quote(t)) as r:
...     return json.loads(r.read())["result"]
...
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một       NUM   <════╗     nummod
mũi       NOUN  ═╗═╗═╝═╗═╗ root
tên       NOUN  <╝ ║   ║ ║ compound
trúng hai ADJ   <══║═══╝ ║ amod
con       NOUN  ═╗<╝     ║ compound
chim      NOUN  <╝       ║ compound
.         PUNCT <════════╝ punct
```

## với [spacy-udpipe](https://github.com/TakeLab/spacy-udpipe)

```py
>>> import spacy_udpipe
>>> nlp=spacy_udpipe.load("vi")
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một       NUM   <══╗     nummod
mũi       NOUN  ═╗═╝<╗   nsubj
tên       NOUN  <╝   ║   compound
trúng hai VERB  ═══╗═╝═╗ ROOT
con       NOUN  <╗ ║   ║ compound
chim      NOUN  ═╝<╝   ║ obj
.         PUNCT <══════╝ punct
```

## với [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP)

```py
>>> from vncorenlp import VnCoreNLP
>>> vnp=VnCoreNLP("VnCoreNLP/VnCoreNLP-1.1.1.jar",annotators="wseg,pos,parse")
>>> nlp=lambda t:"".join(["\n".join(["\t".join([str(v["index"]),v["form"],"_",v["posTag"],v["posTag"],"_",str(v["head"]),v["depLabel"],"_","_"]) for v in s])+"\n\n" for s in vnp.annotate(t)["sentences"]])
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một     M  <╗         det
mũi_tên N  ═╝<════╗   sub
trúng   V  ═════╗═╝═╗ root
hai     M  <══╗ ║   ║ det
con     Nc ═╗═╝<╝   ║ dob
chim    N  <╝       ║ nmod
.       CH <════════╝ punct
```

## với [underthesea](https://github.com/undertheseanlp/underthesea)

```py
>>> from underthesea import pos_tag,dependency_parse
>>> nlp=lambda t:"\n".join("\t".join([str(i+1),p[0],"_",p[1],p[1],"_",str(d[1]),d[2],"_","_"]) for i,(p,d) in enumerate(zip(pos_tag(t),dependency_parse(t))))+"\n\n"
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   M  <╗         nummod
mũi   N  ═╝═╗═╗═╗═╗ root
tên   N  <══╝ ║ ║ ║ nmod
trúng V  <════╝ ║ ║ acl:subj
hai   M  ═╗<╗   ║ ║ nummod
con   Nc <╝ ║   ║ ║ clf
chim  N  ═══╝<══╝ ║ nmod
.     CH <════════╝ punct
```

## với [BkParser](https://github.com/trietnm2/BkParser)

```py
>>> from bkparser import BKParser
>>> bkp=BKParser()
>>> nlp=lambda text:"".join(["\t".join([t.id,t.form,t.lemma,t.uPOSTag,t.xPOSTag,t.feats,t.head,t.depRel,t.deps,t.misc])+"\n" for t in bkp.parse(text)])+"\n"
>>> doc=nlp("Một mũi tên trúng hai con chim.")
>>> import deplacy
>>> deplacy.render(doc)
Một   DT    <══════╗   det
mũi   NN    ═╗═╗═╗═╝═╗ ROOT
tên   NN    <╝ ║ ║   ║ nmod
trúng JJ    <══╝ ║   ║ amod
hai   CD    <╗   ║   ║ nummod
con   NN    ═╝═╗<╝   ║ nmod
chim  NN    <══╝     ║ nmod
.     PUNCT <════════╝ punct
```

