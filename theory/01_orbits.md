# Orbits and orbital elements

*Notebook section 1 · slides 3–5*

## What is an orbit?

```{figure} img/slide-03.png
:width: 100%

Slide 3 — *What is an orbit?*
```

An orbit is the curved path that a satellite follows around a celestial body under the
force of gravity. We consider two bodies, with the Earth much heavier than the
satellite, and gravity as the only force. Gravity bends the path into a conic: a circle
or an ellipse.

For a circular orbit of radius $a$, gravity supplies exactly the centripetal
acceleration:

$$
\frac{v^2}{a} = \frac{\mu}{a^2}
\quad\Longrightarrow\quad
v = \sqrt{\frac{\mu}{a}}
$$

where $\mu = GM = 398\,600\ \mathrm{km^3/s^2}$ is the gravitational parameter of the
Earth. The period is the circumference divided by the speed (Kepler's third law):

$$
T = 2\pi\sqrt{\frac{a^3}{\mu}}
$$

The altitude $h$ is measured above a spherical Earth of radius $R = 6378.137$ km, so
$a = R + h$.

**Worked numbers, 550 km.** $a = 6378.137 + 550 = 6928.137$ km; $v = 7.59$ km/s;
$T = 95.6$ min, which is about 15 revolutions per day.

A **Low Earth Orbit** (LEO) has an altitude of about 300–2000 km: below the radiation
belts and above most of the atmosphere.

## Six numbers describe an orbit

```{figure} img/slide-04.png
:width: 100%

Slide 4 — *Six numbers describe an orbit: orbital parameters*
```

| symbol | name | meaning |
|---|---|---|
| $a$ | semi-major axis | half the sum of the periapsis and apoapsis distances, both measured from the centre of the Earth: $a = (r_p + r_a)/2$. It sets the size of the orbit, and therefore its period |
| $e$ | eccentricity | the shape of the ellipse ($e = 0$ circle, $0 < e < 1$ ellipse) |
| $i$ | inclination | the angle between the orbital plane and the Earth's equatorial plane |
| $\Omega$ | right ascension of the ascending node (RAAN) | the angle measured eastward in the equatorial plane from the vernal equinox direction $\gamma$ to the ascending node |
| $\omega$ | argument of periapsis | the angle from the ascending node to the perigee, measured in the orbital plane in the direction of motion |
| $\nu$ | true anomaly at the epoch $t_0$ | the position of the satellite along the ellipse at a reference time, the epoch |

Some definitions used above:

- The **vernal equinox direction** $\gamma$ is the direction in which the Sun crosses
  the equator in March. It is fixed with respect to the stars and it is the $x$ axis of
  the inertial frame (ECI).
- The orbital plane cuts the equatorial plane along the **line of nodes**. The
  **ascending node** is the point where the satellite crosses the equator going north.

To remember: $a$ and $e$ give the size and the shape of the ellipse; $i$ and $\Omega$
say where the orbital plane lies; $\omega$ says how the ellipse is rotated inside the
plane; $\nu$ says where the satellite is at the epoch.

```{admonition} Circular orbit: our case
With $e = 0$ there is no perigee, so $\omega$ and $\nu$ are not defined separately.
They merge into one angle, the **argument of latitude** $u = \omega + \nu$, measured
from the ascending node in the direction of motion. A circular orbit is then fixed by
four numbers, $(a,\ i,\ \Omega,\ u_0)$, plus the epoch $t_0$.
```

## Our three missions

```{figure} img/slide-05.png
:width: 100%

Slide 5 — *Our three missions*
```

| mission | altitude | $i$ | $\Omega$ at $t_0$ | dates (UTC) | nodal period $T_n$ |
|---|---|---|---|---|---|
| Crystal Eye | 550 km | 37° | 48.04° | 2030-01-01 → 2033-01-01 (1096 d) | 95.446 min |
| NUSES | 550 km | 97.59° | 99.05° | 2027-05-01 18:00 → 2030-04-30 (1095 d) | 95.773 min |
| ISS | 420 km | 51.64° | 48.04° | 2030-01-01 → 2033-01-01 | 92.899 min |

- **Crystal Eye** is a concept of an all-sky X/gamma-ray monitor, with an assumed launch
  from Kourou.
- **NUSES** is the GSSI pathfinder mission, on a sun-synchronous orbit.
- The **ISS** is a familiar reference; its dates here are only illustrative.

For Crystal Eye and the ISS the RAAN is not given. We fix it with a convention: at $t_0$
the ascending node is on the meridian of Kourou. How this gives $\Omega = 48.04°$ is
shown in [](02_time.md). The nodal period $T_n$ is defined in [](03_j2_propagation.md).

All dates are in UTC. From them the notebook computes the Julian date, then GMST and
the direction of the Sun: this is the subject of the next page.
