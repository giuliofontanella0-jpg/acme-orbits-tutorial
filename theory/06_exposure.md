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
the hypotenuse is the distance C–S $= a$, so $\sin\rho = (R + h_\mathrm{atm})/a$. 

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

During one revolution $\theta$ of a source goes from a minimum, when the zenith passes
closest to it, to a maximum half an orbit later. The zenith moves in the orbital plane,
so it can never get closer to the source than the angle of the source from that plane:
the minimum is $|\beta_\mathrm{src}|$ and the maximum is $180° - |\beta_\mathrm{src}|$.
On the way, $\theta$ crosses the two limits of the rule: the source is in the FoV while
$\theta(t) \le \mathrm{FoV}/2$, and behind the Earth while $\theta(t) > 180° - \rho$.

- A source close to the orbital plane ($\beta_\mathrm{src} \approx 0$) sweeps almost the
  whole range on every revolution, from the zenith to the nadir: it enters the FoV and
  goes behind the Earth once per orbit.
- A source far from the plane never comes near the zenith; if $|\beta_\mathrm{src}| > \rho$,
  $\theta$ never exceeds $180° - \rho$ and the source is never hidden by the Earth.

*Example — Crystal Eye, the Crab, FoV = 120°.* $\beta_\mathrm{src} = -1.45°$, so $\theta$
goes from 1.45° to 178.55° and back on every revolution. The Crab enters the FoV when
$\theta$ falls below 60°, leaves it when $\theta$ rises above 60°, and goes behind the
Earth when $\theta$ passes $180° - 67° = 113°$.


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

**How the code counts.**The notebook checks $\hat{\mathbf r}\cdot\hat{\mathbf k} \ge \cos(\mathrm{lim})$:
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

