# How to run the notebook

The notebook needs only `numpy`, `matplotlib` and `pillow`. A full run takes about two
minutes; most of the time goes into the animations and the exposure maps.

## Option 1 — online, with Binder

Nothing to install. Click the badge, wait for the environment to start (the first time
it can take a few minutes), and the notebook opens in JupyterLab.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/giuliofontanella0-jpg/acme-orbits-tutorial/main?urlpath=lab/tree/notebook/ACME_orbits_handson_students.ipynb)

You can also use the rocket icon at the top of the [notebook page](notebook/ACME_orbits_handson_students.ipynb).

```{warning}
A Binder session is temporary: it closes after some minutes without activity and your
changes are lost. Download your notebook before you stop
(*File → Download* in JupyterLab).
```

## Option 2 — on your computer

1. Download the material:
   [zip of the repository](https://github.com/giuliofontanella0-jpg/acme-orbits-tutorial/archive/refs/heads/main.zip),
   then unzip it.
2. Install what is needed (any recent Python 3):

   ```
   pip install -r requirements.txt jupyterlab
   ```

3. Start JupyterLab **from the `notebook` folder**, because the notebook reads the Earth
   texture from `notebook/assets/` and writes its figures in `notebook/output/`:

   ```
   cd notebook
   jupyter lab ACME_orbits_handson_students.ipynb
   ```

## How to work

- Run the cells **from top to bottom**. A cell that uses an exercise you have not
  finished stops with an error: this is expected.
- The exercises are marked ✏️. In the code cell below each one, complete the lines
  marked `# TODO`. The box above the cell says which slide to look at and **what the
  cell must print** when your formula is right.
- When everything runs, play with the switches: `USE_J2`, `FOV_DEG`, `H_ATM_KM`,
  `ORB_8`, `TARGET`, `DAY_9`.

## The model, and its limits

- Circular orbits, with the secular J2 drifts of the node and of the along-track rate
  in sections 1–5 and 9; Keplerian (fixed-plane) orbits in sections 6–8.
- Spherical Earth, cylindrical Earth shadow, low-precision Sun (about 0.01°).
- No drag, no solar radiation pressure, no higher-order terms of the gravity field.
- The galactic rotation is ICRS/J2000 while the orbit frame is mean-of-date: about 0.4°
  of precession is neglected.
