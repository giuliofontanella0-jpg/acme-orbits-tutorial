# The beta angle and eclipses

*Notebook section 5 (exercise 5)*

## The beta angle

```{figure} img/slide-14.png
:width: 100%

*The beta angle*
```

:::{admonition} The key idea: when is the satellite in eclipse?
:class: important

The satellite is in eclipse when the Earth stands between it and the Sun. Whether this
happens, and for how long, is decided by **one angle, $\beta$**: how high the Sun is
above the orbital plane.

**The conditions**

- $|\beta| < \beta^*$: there is an eclipse **on every orbit**.
- $|\beta| \ge \beta^*$: **no eclipse**; the orbit passes beside the Earth's shadow and
  stays in sunlight.
- The threshold is $\beta^* = \rho$, the angular radius of the Earth seen from the
  satellite: 67.0° at 550 km, 69.75° at 420 km. It depends only on the altitude.

**How long**

The eclipse is longest at $\beta = 0$ (the Sun in the orbital plane) and gets shorter as
$|\beta|$ grows. It changes little at first and drops fast near $\beta^*$:


**In practice:** to know the eclipses of a mission, follow $\beta(t)$ for the whole
mission and compare it with $\beta^*$.

**Instant by instant.** At a given instant the Sun is hidden when the angle between the
zenith and the Sun exceeds $180° - \rho$: the Sun is then inside the disc of the Earth.
This is the same rule on $\theta$ used for the sources in section 6, with the Sun as the
source. $\beta$ summarises that rule over one whole orbit, as $\beta_\mathrm{src}$ does
for a source.
:::

**Why the cycle lasts $360°/|\dot\Omega - 0.9856°/\text{day}|$.** $\beta$ depends on where
the node is with respect to the Sun. The node moves at $\dot\Omega$, the Sun moves along
the ecliptic at $0.9856°$ per day: the angle between them changes at the difference of
the two rates, and $\beta$ repeats when this angle has changed by 360°.

- Crystal Eye: $360 / |-5.957 - 0.986| = 360 / 6.943 = 51.9$ days.
- ISS: $360 / |-4.947 - 0.986| = 360 / 5.933 = 60.7$ days.
- NUSES: the two rates are equal, the denominator is zero and there is no cycle. The change follows the time of seasons,
- because the Sun moves north and south of the equator during the year.

## How long in the Earth's shadow?

```{figure} img/slide-15.png
:width: 100%

*How long in the Earth's shadow?*
```

**The model.** The shadow of the Earth is a cylinder of radius $R$ behind the Earth,
with its axis opposite to the Sun. The satellite is in shadow when it is on the night
side ($\mathbf r\cdot\hat{\mathbf s} < 0$) and its distance from the axis is smaller
than $R$. 

$T_n$ it gives the duration:

$$
D = \frac{2\arccos(\cos\rho/\cos\beta)}{2\pi}\,T_n = \frac{T_n}{\pi}\,\arccos\!\left(\frac{\cos\rho}{\cos\beta}\right)
$$

**Why the limit is $|\beta| = \rho$.** The arccos exists only while
$\cos\rho/\cos\beta \le 1$, that is $\cos\beta \ge \cos\rho$, or $|\beta| \le \rho$. When
$|\beta| = \rho$ the orbit barely touches the edge of the shadow; above it, it passes beside
the shadow without entering. The same condition written with distances is the one on the
slide: $a\sin|\beta|$ is how far the orbital plane is from the axis of the shadow, and
it must be smaller than $R$.

:::{admonition} What to monitor
:class: important

| parameter | what it tells | what sets it | how it changes |
|---|---|---|---|
| $\beta$ | how high the Sun is above the orbital plane | the orbital plane ($i$, $\Omega$) and the position of the Sun | every day: the node drifts (J2) and the Sun moves along the ecliptic. Cycle of 52 days for Crystal Eye, 61 days for the ISS; for NUSES (sun-synchronous) only with the seasons |
| $\beta^* = \rho$ | the threshold above which there is no eclipse | the altitude | fixed for a circular orbit |
| $T_n$ | the length of one orbit, which sets the scale of the eclipse | the altitude | fixed |
:::

## A whole mission of eclipses

```{figure} img/slide-16.png
:width: 100%

*A whole mission of eclipses*
```

