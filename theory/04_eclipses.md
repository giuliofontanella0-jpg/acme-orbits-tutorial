# The beta angle and eclipses

*Notebook section 5 (exercise 5) · slides 14–16*

## The beta angle

```{figure} img/slide-14.png
:width: 100%

Slide 14 — *The beta angle*
```

The **beta angle** $\beta$ is the elevation of the Sun above the orbital plane: the
angle between the Sun direction $\hat{\mathbf s}$ and its projection on the plane.

Let $\hat{\mathbf n}$ be the unit vector perpendicular to the orbital plane (the
*orbit normal*; it is written $\hat{\mathbf h}$ in the pages on the sky). The angle
between $\hat{\mathbf s}$ and $\hat{\mathbf n}$ is $\pi/2 - \beta$, so

$$
\sin\beta = \hat{\mathbf s}\cdot\hat{\mathbf n},
\qquad
\hat{\mathbf n} = (\sin i\,\sin\Omega,\ -\sin i\,\cos\Omega,\ \cos i)
$$

$\hat{\mathbf n}$ depends only on $i$ and $\Omega$: it is the third column of
$R_z(\Omega)\,R_x(i)$.

- $\beta = 0$: the Sun is in the orbital plane. Eclipses are the longest.
- Large $|\beta|$: the orbit can be in full sunlight.

**Why $\beta$ changes.** For two reasons: the Sun moves along the ecliptic by about
1° per day, and J2 turns the node. One cycle of $\beta$ lasts

$$
\frac{360°}{|\dot\Omega - 0.9856\ °/\mathrm{day}|}
$$

which gives 51.9 days for Crystal Eye and 60.7 days for the ISS. For a sun-synchronous
orbit the denominator is zero: there is no cycle, and only the seasons remain.

**Bound.** $|\beta| \le i + \varepsilon$, where $\varepsilon$ is the obliquity of the
ecliptic. This holds when $i + \varepsilon \le 90°$; there is no such bound for polar
and sun-synchronous orbits.

For a detector that points to the zenith, $|\beta|$ is also the smallest angle between
the Sun and the detector axis during one revolution, because the zenith always lies in
the orbital plane.

## How long in the Earth's shadow?

```{figure} img/slide-15.png
:width: 100%

Slide 15 — *How long in the Earth's shadow?*
```

We model the shadow of the Earth as a cylinder of radius $R$ behind the Earth. The
satellite is in shadow when it is on the night side and its distance from the axis of
the shadow is smaller than $R$.

Define the angle $\rho$ by

$$
\sin\rho = \frac{R}{a}
$$

$\rho$ is the angular radius of the Earth seen from the satellite. The duration of the
eclipse in one revolution is

$$
D = \frac{T_n}{\pi}\,\arccos\!\left(\frac{\cos\rho}{\cos\beta}\right),
\qquad
D = 0 \ \text{ if } |\beta| \ge \rho
$$

- If $a\,\sin|\beta| < R$ there is an eclipse on every revolution.
- If $a\,\sin|\beta| > R$ the satellite never enters the shadow. The limit is the
  **critical beta** $\beta^* = \rho$: 67.0° at 550 km, 69.75° for the ISS.

**Worked numbers, 550 km, $\beta = 0$.** The fraction of the revolution in shadow is
$\rho/180° = 37.2\,\%$, that is 35.5 min out of 95.4. This is the longest possible
eclipse at this altitude. As $|\beta|$ grows the eclipse becomes shorter, and it
disappears when $|\beta|$ reaches $\rho$.

## A whole mission of eclipses

```{figure} img/slide-16.png
:width: 100%

Slide 16 — *A whole mission of eclipses*
```

- **Crystal Eye:** $\beta$ oscillates within ±60°, with a period of about 52 days. It
  never exceeds $\beta^* = 67°$, so there is an eclipse on every orbit, of 20 to 36
  minutes.
- **NUSES (sun-synchronous):** $\beta$ moves only with the seasons, between 46° and
  64°. Eclipses last 15–30 min and are predictable.
- **ISS:** $\beta$ reaches ±74°, above its $\beta^* = 69.8°$: about 29.5 days of full
  sunlight in three years.

Stable illumination is one of the reasons why sun-synchronous orbits are chosen.
