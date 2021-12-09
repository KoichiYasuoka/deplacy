import setuptools

with open("README.md","r",encoding="utf-8") as r:
  long_description=r.read()
URL="https://github.com/KoichiYasuoka/deplacy"

setuptools.setup(
  name="deplacy",
  version="2.0.2",
  description="CUI-based Tree Visualizer for Universal Dependencies and Immediate Catena Analysis",
  long_description=long_description,
  long_description_content_type="text/markdown",
  url=URL,
  author="Koichi Yasuoka",
  author_email="yasuoka@kanji.zinbun.kyoto-u.ac.jp",
  license="MIT",
  keywords="spacy stanza nlp",
  packages=setuptools.find_packages(),
  package_data={
    "deplacy":["./*.html","./*.js"],
  },
  python_requires=">=3.6",
  classifiers=[
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3",
    "Operating System :: OS Independent",
    "Topic :: Text Processing :: Linguistic",
  ],
  project_urls={
    "Source":URL,
    "Tracker":URL+"/issues",
  }
)
