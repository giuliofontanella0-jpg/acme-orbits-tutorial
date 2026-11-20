# What the detector sees

*Notebook sections 7 and 8 (exercises 7 and 8)*

## Earth, horizon and field of view

```{figure} img/slide-20.png
:width: 100%

*What the detector sees: Earth, horizon, field of view*
```

**Where $\sin\rho$ comes from.** In the triangle C–S–T the line from the satellite S to
the horizon T touches the Earth at T, so it is perpendicular to the radius C–T: the
angle at T is 90°. The side opposite to the angle $\rho$ (at S) is $R + h_\mathrm{atm}$,
the hypotenuse is the distance C–S $= a$, so $\sin\rho = (R + h_\mathrm{atm})/a$. With the
notebook default $h_\mathrm{atm} = 0$: $\sin\rho = 6378.137/6928.137 = 0.9206$,
$\rho = 67.02°$. With `H_ATM_KM = 100` the Earth looks bigger: $\rho = 69.24°$.

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

During one revolution $\theta$ of a source therefore goes from a minimum, when the zenith
passes closest to it, to a maximum half an orbit later. The minimum is $|\beta_\mathrm{src}|$
(the zenith moves in the orbital plane, so it can get no closer than the angle of the
source from that plane) and the maximum is $180° - |\beta_\mathrm{src}|$. For the Crab,
with $\beta_\mathrm{src} = -1.45°$, $\theta$ goes from 1.45° to 178.55° and back on every
revolution. The source is in the FoV while $\theta(t) \le \mathrm{FoV}/2$ and behind the
Earth while $\theta(t) > 180° - \rho$: with FoV = 120° the Crab enters the cone when
$\theta$ falls below 60°, leaves it when $\theta$ rises above 60°, and goes behind the Earth
when $\theta$ passes 113°.

**Why the rule is checked in that order.** The Earth is opaque: a direction behind it is
hidden even if it lies inside the cone. This happens whenever the cone is wider than the
free sky, FoV/2 > 113°, as in the FoV = 300° example.

## The exposure map of a Keplerian orbit

```{figure} img/slide-21.png
:width: 100%

*Exposure map: what a Keplerian orbit observes*
```

**Why the minimum is 100 − 37.2 %.** A direction in the orbital plane is like the Sun at
$\beta = 0$: the zenith passes over it once per revolution, and for the part of the
revolution where $\theta > 113°$ it is behind the Earth. That part is $\rho/180° = 37.2\,\%$,
the same number as the longest eclipse. The rest, 62.8 %, is observed.

**Why the caps have a radius of 23°.** A direction at an angle $\beta_\mathrm{src}$ from
the plane has $\theta \le 180° - |\beta_\mathrm{src}|$ all the time. If
$|\beta_\mathrm{src}| > \rho = 67°$, $\theta$ never exceeds $180° - 67° = 113°$: the
direction is never behind the Earth. These directions are within $90° - 67° = 23°$ of
the two poles of the orbit, $\pm\hat{\mathbf h}$.

**Two percentages that follow from $\rho$.**

- At any instant the detector sees the cap of sky with $\theta \le 113°$. The fraction
  of a sphere inside a cap of angular radius $\theta_\mathrm{max}$ is
  $(1 - \cos\theta_\mathrm{max})/2$, so the visible fraction is
  $(1 - \cos 113°)/2 = (1 + \cos\rho)/2 = 69.5\,\%$. Averaged over the whole sky, the
  exposure is always 69.5 %.
- The two never-hidden caps of 23° cover $2 \times (1 - \cos 23°)/2 = 7.9\,\%$ of the sky.

**How the code counts.** Instead of computing $\theta$ with an arccos for every pixel and
every instant, the notebook checks $\hat{\mathbf r}\cdot\hat{\mathbf k} \ge \cos(\mathrm{lim})$:
the same condition, because the cosine decreases from 0° to 180°, but with one
multiplication per pixel. The zenith directions are taken at many instants of the
mission, and for each pixel the instants that satisfy the condition are counted.

## One source: entry and exit behind the Earth

```{figure} img/slide-22.png
:width: 100%

*One source: entry and exit behind the Earth*
```

**What the figure shows.** The sky seen from Crystal Eye one minute before the Crab goes
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

For the first entry, JD 2462502.528426: the decimal part after .5 is the time since
midnight, $0.028426 \times 86400 = 2456$ s $= 40$ min 56 s, that is 00:40:56 UTC.

**Why 15 times a day, 35.6 min each.** One occultation per revolution, and a Keplerian
revolution lasts 95.65 min: $1440/95.65 = 15.06$, so 15 complete occultations fall in the
first day. Each lasts 35.6 min, the same value found with the eclipse formula and
$\beta_\mathrm{src} = -1.45°$.
