# Orbits and observability

**From the orbital elements to what a detector sees in the sky.**

This site collects the material of a hands-on session of the
[ACME project](https://www.acme-astro.eu): one hour of theory followed by two hours
on a Jupyter notebook.

```{figure} theory/img/fig-slide-01.png
:width: 80%
:align: center

The direction straight above Crystal Eye (its zenith) during one revolution, drawn on
the galactic sky. By the end of the session you will be able to compute it.
```

## What you will do

Starting from a few numbers that describe an orbit, you will compute:

- where the satellite is at any time, in space and above the Earth (ground track);
- when it is in sunlight and when it is in the Earth's shadow (beta angle, eclipses);
- which part of the sky a detector on board can see, and for how long (exposure maps);
- when a given source — the Crab Nebula — goes behind the Earth and comes out again;
- what changes when the flattening of the Earth (the J2 perturbation) is switched on.

The same three missions are followed all the way through:

| mission | altitude | inclination | dates (UTC) |
|---|---|---|---|
| Crystal Eye | 550 km | 37° | 2030-01-01 → 2033-01-01 |
| NUSES | 550 km | 97.59° (sun-synchronous) | 2027-05-01 18:00 → 2030-04-30 18:00 |
| ISS (reference) | 420 km | 51.64° | 2030-01-01 → 2033-01-01 |

## How the material is organised

**Theory** — seven short pages, in the order of the lecture. Each page shows the slides
of the lecture with the explanation next to them. The notebook hints refer to the
slides by number and title, so you can always find the formula you need here.

**Hands-on** — the student notebook. It has the same structure as the theory. Some
cells are exercises: a few lines are marked `# TODO` and a box above the cell says what
to write and what the cell must print when it is right.

| notebook section | topic | theory page |
|---|---|---|
| 0 | time: Julian date, GMST, the Sun | [](theory/02_time.md) |
| 1 | orbital elements, the three missions, J2 | [](theory/01_orbits.md), [](theory/03_j2_propagation.md) |
| 2–4 | propagator, 3D view, ground track | [](theory/03_j2_propagation.md) |
| 5 | beta angle and eclipses | [](theory/04_eclipses.md) |
| 6 | from the orbit to the sky: coordinates | [](theory/05_sky.md) |
| 7–8 | exposure maps, one source | [](theory/06_exposure.md) |
| 9 | J2 switched on | [](theory/07_j2_sky.md) |

## Start

Read [how to run the notebook](hands_on.md), or launch it directly on Binder (nothing
to install):

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/giuliofontanella0-jpg/acme-orbits-tutorial/main?urlpath=lab/tree/notebook/ACME_orbits_handson_students.ipynb)

---

*Giulio Fontanella — Gran Sasso Science Institute (GSSI). ACME hands-on session,
December 2026.*
