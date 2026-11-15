# Orbits and observability — ACME hands-on session

Theory pages and student notebook for the ACME hands-on session on satellite orbits
and sky observability (Giulio Fontanella, GSSI — December 2026).

**Website:** https://giuliofontanella0-jpg.github.io/acme-orbits-tutorial/

## Contents

```
intro.md, hands_on.md          landing page and instructions for the session
theory/                        theory pages (one per block of the lecture) + figures
notebook/                      student notebook + the Earth texture it needs
_config.yml, _toc.yml          Jupyter Book configuration and table of contents
requirements.txt               what the notebook needs (also used by Binder)
requirements-book.txt          what is needed to build the website
start                          Binder start-up script (limits numpy to one thread: Binder gives one CPU core)
.github/workflows/deploy.yml   builds the site and publishes it on every push to main
```

## Run the notebook

* Online, nothing to install: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/giuliofontanella0-jpg/acme-orbits-tutorial/main?urlpath=lab/tree/notebook/ACME_orbits_handson_students.ipynb)
* On your computer: download this repository, then

  ```
  pip install -r requirements.txt jupyterlab
  cd notebook
  jupyter lab ACME_orbits_handson_students.ipynb
  ```

## Build the website locally

```
pip install -r requirements-book.txt
jupyter-book build .
```

The result is in `_build/html/index.html`.
