# Orbits and observability

```{image} _static/acme_eu.png
:alt: ACME — Astrophysics Centre for Multimessenger studies in Europe. Funded by the European Union.
:width: 62%
```
```{image} _static/gssi.png
:alt: Gran Sasso Science Institute
:width: 30%
```

**From the orbital elements to what a detector sees in the sky.**

**Giulio Fontanella** — Gran Sasso Science Institute (GSSI)

Welcome! This site collects the material of a hands-on session of the
[ACME project](https://www.acme-astro.eu) on satellite orbits and sky observability:
one hour of theory, then two hours on a Jupyter notebook.

```{figure} theory/img/fig-slide-01.png
:width: 75%
:align: center

The direction straight above Crystal Eye (its zenith) during one revolution, drawn on
the galactic sky. By the end of the session you will be able to compute it.
```

## Contents

**Theory slides** — the slides of the lecture, with the explanation next to them:

- [](theory/01_orbits.md): what an orbit is, the six orbital parameters, our three missions
- [](theory/02_time.md): UTC, Julian date, GMST, the position of the Sun
- [](theory/03_j2_propagation.md): the flattening of the Earth, how to compute the position of the satellite, the ground track
- [](theory/04_eclipses.md): when the satellite is in the Earth's shadow, and for how long
- [](theory/05_sky.md): from the orbit to equatorial and galactic coordinates, all-sky maps
- [](theory/06_exposure.md): Earth, horizon and field of view; exposure maps; one source behind the Earth
- [](theory/07_j2_sky.md): what the J2 perturbation changes in the sky

**Interactive Notebooks** — the hands-on part:

- [Student notebook](notebook/ACME_orbits_handson_students.ipynb): from the orbital elements to the exposure maps, for Crystal Eye, NUSES and the ISS, with exercises to complete
- [](hands_on.md): the ways to run it, and how to work on the exercises

## Interactive Notebooks

The notebook of this site can be run interactively, with nothing to install. Open the
[notebook page](notebook/ACME_orbits_handson_students.ipynb) and click the 🚀 rocket
icon at the top:

- **Live Code** makes the code cells of the page editable and runnable, directly on
  this site;
- **Binder** opens the notebook in JupyterLab, in a separate tab.

## Getting Started

Browse the material using the navigation menu on the left, or click on any of the
topics above to jump directly to it. Start from the theory slides, then open the
notebook.

---

```{image} _static/acme_eu.png
:alt: ACME — Funded by the European Union
:width: 45%
```

*Funded by the European Union. Views and opinions expressed are however those of the
author(s) only and do not necessarily reflect those of the European Union or of the
European Research Executive Agency (REA). Neither the European Union nor the granting
authority can be held responsible for them. The ACME project has received funding from
the European Union's Horizon Europe Research and innovation programme under Grant
Agreement No 101131928.*
