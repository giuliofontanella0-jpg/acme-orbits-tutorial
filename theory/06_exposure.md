# What the detector sees

*Notebook sections 7 and 8 (exercises 7 and 8)*

:::{admonition} The key idea: when does the detector see a source?
:class: important

Three things decide it:

1. **where the detector points**: the zenith $\hat{\mathbf r}$, which turns once per
   orbit along the orbital plane;
2. **how wide it looks**: the field of view, a cone of half-aperture FoV/2 around the
   zenith;
3. **what the Earth hides**: a disc of angular radius $\rho$ around the nadir (straight
   down).

All three are compared through one angle, $\theta$: the angle between the zenith and the
source **at that instant**.

**The conditions, at each instant**

| condition | the source is… |
|---|---|
| $\theta > 180° - \rho$ | **behind the Earth**: hidden, even if it is inside the cone |
| $\theta \le 180° - \rho$ and $\theta \le$ FoV/2 | **visible**: in the field of view |
| $\theta \le 180° - \rho$ and $\theta >$ FoV/2 | in free sky, but **outside the field of view** |

At 550 km, $180° - \rho = 113°$: everything more than 113° from the zenith is behind the Earth.

:::

## Earth, horizon and field of view

```{figure} img/slide-20.png
:width: 100%

*What the detector sees: Earth, horizon, field of view*
```


**How $\theta$ changes.** $\theta$ is not fixed: it is the angle between the zenith and
the object *at a given instant*,

$$
\theta(t) = \arccos\big(\hat{\mathbf r}(t)\cdot\hat{\mathbf k}\big).
$$

- The direction of a source, $\hat{\mathbf k}$, is fixed in the sky.
- The zenith $\hat{\mathbf r}(t)$ turns with the satellite: one full turn, along the
  orbital plane, every revolution.
- The FoV is a cone fixed to the detector, around the zenith, so it turns with it and
  sweeps the sky.

During one revolution $\theta$ goes from $|\beta_\mathrm{src}|$ when the zenith passes
closest to it, to $180° - |\beta_\mathrm{src}|$, so $\beta_\mathrm{src}$ tells in
advance what the rule on $\theta$ will give over the **whole orbit**:

- the maximum of $\theta$, $180° - |\beta_\mathrm{src}|$, passes $180° - \rho$ only if
  $|\beta_\mathrm{src}| < \rho$: the source is hidden during this orbit;
- the minimum of $\theta$, $|\beta_\mathrm{src}|$, goes below FoV/2 only if
  $|\beta_\mathrm{src}| \le$ FoV/2: the source enters the cone during this orbit.

$\beta_\mathrm{src}$:
the angle of the source from the orbital plane, $\sin\beta_\mathrm{src} = \hat{\mathbf k}\cdot\hat{\mathbf h}$,
the same as $\beta$ for the Sun.

:::{admonition} What to monitor
:class: important

| parameter | what it tells | what sets it | how it changes |
|---|---|---|---|
| $\theta(t)$ | where the source is with respect to the detector axis, now | the orbit and the direction of the source | continuously: one cycle per orbit, between $\lvert\beta_\mathrm{src}\rvert$ and $180° - \lvert\beta_\mathrm{src}\rvert$ |
| $\beta_\mathrm{src}$ | how far the source is from the orbital plane | the orbital plane ($i$, $\Omega$) and the source | Keplerian orbit: fixed. With J2: changes day by day (see section 7) |
| $\rho$ | the size of the Earth disc | the altitude (and the absorbing atmosphere, $h_\mathrm{atm}$) | fixed |
| FoV/2 | the size of the detector cone | the instrument | fixed |

:::

## The exposure map of a Keplerian orbit

```{figure} img/slide-21.png
:width: 100%

*Exposure map: what a Keplerian orbit observes*
```

The Earth covers a direction in the same way it covers the Sun. The farther a direction is from the orbital plane
(the larger $|\beta_\mathrm{src}|$), the less the zenith ‘circles round it, passing beneath the Earth’.
The hidden arc shortens, following the same pattern as the duration of eclipses:

$$
\text{hidden fraction} = \frac{1}{\pi}\arccos\!\left(\frac{\cos\rho}{\cos\beta_\mathrm{src}}\right)
$$

It is at its maximum when $\beta_\mathrm{src} = 0$, so the exposure is at its minimum in the plane: the dark band.


**How the code counts.** The notebook checks $\hat{\mathbf r}\cdot\hat{\mathbf k} \ge \cos(\mathrm{lim})$:
the same condition, because the cosine decreases from 0° to 180°, but with one
multiplication per pixel. The zenith directions are taken at many instants of the
mission, and for each pixel the instants that satisfy the condition are counted.

## One source: entry and exit behind the Earth

```{figure} img/slide-22.png
:width: 100%

*One source: entry and exit behind the Earth*
```

**What the figure shows.** The sky seen from Crystal Eye about 20 seconds before the Crab goes
behind the Earth: the grey disc is the Earth, centred on the nadir, with angular radius
$\rho$. The Crab is on its edge, at $\theta \approx 113°$.

**How entry and exit are found.** $\theta(t)$ is computed on the time grid of the
notebook. The Crab is hidden at the instants where $\theta > 180° - \rho$. An **entry** is
an instant where it passes from visible to hidden, an **exit** the opposite. The
duration of each occultation is exit minus entry.

**From seconds to a date.** The grid counts seconds from the start of the mission; the
Julian date adds them as fractions of a day:

$$
\mathrm{JD}(t) = \mathrm{JD}(t_0) + \frac{t}{86400}
$$

For the first entry, JD 2462502.527963: the decimal part after .5 is the time since
midnight, $0.027963 \times 86400 = 2416$ s $= 40$ min 16 s, that is 00:40:16 UTC.

