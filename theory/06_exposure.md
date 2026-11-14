# What the detector sees

*Notebook sections 7 and 8 (exercises 7 and 8) · slides 20–22*

## Earth, horizon and field of view

```{figure} img/slide-20.png
:width: 100%

Slide 20 — *What the detector sees: Earth, horizon, field of view*
```

Everything is decided by one angle: $\theta$, the angle between the zenith (where the
detector points) and the object. $\theta = 0°$ is straight up; $\theta = 180°$ is
straight down (the *nadir*).

**The Earth.** Seen from the satellite, the Earth is a disc around the nadir. Its
angular radius $\rho$ comes from the right triangle with vertices C (centre of the
Earth), S (satellite) and T (the point of the horizon):

$$
\sin\rho = \frac{R + h_\mathrm{atm}}{a}
$$

$h_\mathrm{atm}$ is the thickness of the layer of atmosphere that absorbs X-rays
(about 70–100 km). At 550 km, $\rho = 67°$. Measured from the zenith, the horizon is
at $\theta = 180° - \rho = 113°$.

**The field of view (FoV).** It is a cone around the zenith. `FOV_DEG` is its full
aperture, so its edge is at $\theta = \mathrm{FoV}/2$.

**Rule, for every object, in this order:**

1. $\theta > 180° - \rho$ → **behind the Earth** (hidden, even if inside the cone);
2. otherwise, $\theta \le \mathrm{FoV}/2$ → **in the FoV**;
3. otherwise → **outside the FoV** (free sky, but the detector does not look there).

The third state exists only if $\mathrm{FoV}/2 < 180° - \rho$, that is
$\mathrm{FoV} < 226°$ at 550 km (220.5° for the ISS). The default of the notebook is
$\mathrm{FoV} = 360°$ (all-sky): only two states.

## The exposure map of a Keplerian orbit

```{figure} img/fig-slide-21.png
:width: 85%
:align: center

Slide 21 — *Exposure map: what a Keplerian orbit observes.* Crystal Eye, 3 years,
FoV = 360°.
```

**What the map shows:** for every direction of the sky, how many hours of the mission
the detector observes it.

**How it is computed.**

1. $\theta$ = the angle between the zenith $\hat{\mathbf r}$ and the direction
   $\hat{\mathbf k}$. The dot product of two unit vectors is the cosine of their angle:
   $\hat{\mathbf r}\cdot\hat{\mathbf k} = \cos\theta$.
2. $\mathrm{lim}$ = the largest $\theta$ at which a direction is still observed. The
   direction must be inside the cone and not behind the Earth:

   $$
   \mathrm{lim} = \min\left(\frac{\mathrm{FoV}}{2},\ 180° - \rho\right)
   $$

   Here $\min(180°, 113°) = 113°$.
3. **exposure** = the fraction of the mission with $\theta \le \mathrm{lim}$. Take many
   instants of the mission, check the condition at each one, and count.

The colour is the exposure multiplied by the length of the mission (26 304 h for three
years).

**The two numbers of the map.**

- **Minimum, 62.8 % (16 508 h):** the dark band along the teal line. These are the
  directions that lie in the orbital plane. Once per revolution they go behind the
  Earth for $\rho/180° = 37.2\,\%$ of the time: it is the eclipse formula at
  $\beta = 0$. So they are observed for $100 - 37.2 = 62.8\,\%$.
- **Maximum, 100 % (26 304 h):** the two yellow caps around the poles of the orbit.
  These directions are more than $\rho = 67°$ away from the orbital plane, so they
  never go behind the Earth. Each cap has a radius of $90° - 67° = 23°$.

With a Keplerian orbit the plane does not move, so the pattern is the same on every
revolution and for the whole mission. With J2 the plane turns: see [](07_j2_sky.md).

## One source: entry and exit behind the Earth

```{figure} img/fig-slide-22.png
:width: 85%
:align: center

Slide 22 — *One source: entry and exit behind the Earth.* The sky seen from Crystal
Eye one minute before the Crab goes behind the Earth (grey disc).
```

Fix a source, the Crab, and follow it instant by instant. Once per revolution the Crab
goes behind the disc of the Earth (**entry**) and comes out again (**exit**). The
condition for "hidden" is

$$
\theta = \arccos(\hat{\mathbf r}\cdot\hat{\mathbf k}) > 180° - \rho
$$

The geometry is the same as for the eclipse: the hidden time is given by the eclipse
formula with $\beta_\mathrm{src}$ in place of $\beta$.

The notebook gives the entry and the exit in Julian date and in UTC, and the duration.
For Crystal Eye, on the first day, the Crab is hidden 15 times for 35.6 min each; the
first entry is at JD 2462502.528426 = 00:40:56 UTC.

In the literature entry and exit are called *ingress* and *egress*. They are the basis
of the **Earth occultation technique** used by BATSE and Fermi-GBM, which measures the
flux of a source from the steps in the count rate at these instants.
