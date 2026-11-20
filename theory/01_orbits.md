# Orbits and orbital elements

*Notebook section 1*

## What is an orbit?

```{figure} img/slide-03.png
:width: 100%

*What is an orbit?*
```

**Where the formulas come from.** On a circular orbit of radius $a$ the satellite moves
at constant speed $v$. To stay on the circle it needs a centripetal acceleration $v^2/a$,
pointing to the centre of the Earth. Gravity supplies exactly this acceleration, and
gravity at distance $a$ is $\mu/a^2$:

$$
\frac{v^2}{a} = \frac{\mu}{a^2}
\quad\Longrightarrow\quad
v = \sqrt{\frac{\mu}{a}}
$$

Here $\mu = GM = 398\,600.4418\ \mathrm{km^3/s^2}$ is the gravitational constant times the
mass of the Earth. The mass of the satellite does not appear: it cancels, because both
the force of gravity and the inertia are proportional to it. Every satellite at the same
altitude has the same speed and the same period.

The period is the length of the circle divided by the speed:

$$
T = \frac{2\pi a}{v} = 2\pi\sqrt{\frac{a^3}{\mu}}
$$

The altitude $h$ is measured above a spherical Earth of radius $R = 6378.137$ km, so
$a = R + h$. At 550 km: $a = 6928.137$ km, $v = \sqrt{398\,600.4418/6928.137} = 7.585$ km/s,
$T = 2\pi\sqrt{6928.137^3/398\,600.4418} = 5739$ s $= 95.65$ min, and
$1440/95.65 \approx 15$ revolutions per day.

**"The satellite falls around the Earth."** At 550 km gravity is still
$\mu/a^2 = 8.30\ \mathrm{m/s^2}$, 85 % of its value on the ground. The satellite is
falling towards the Earth all the time; it also moves sideways fast enough to keep
missing it. This is why $v$ is fixed by $a$: slower, and the path would bend down into
the atmosphere; faster, and it would open into an ellipse.

## Six numbers describe an orbit

```{figure} img/slide-04.png
:width: 100%

*Six numbers describe an orbit: orbital parameters*
```

**The reference directions.**

- The **vernal equinox direction** $\gamma$ is the direction in which the Sun crosses
  the celestial equator in March. It is fixed with respect to the stars and it is the
  $x$ axis of the inertial frame ECI (Earth-Centred Inertial); the $z$ axis points to
  the North Pole.
- The orbital plane cuts the equatorial plane along the **line of nodes**. The
  **ascending node** is the point where the satellite crosses the equator going north.

$\Omega$ and $i$ are measured from these references, so they fix the orbital plane in
space, independently of the rotation of the Earth.

**Why a circular orbit has only four elements.** $\omega$ and $\nu$ are both measured
from the **perigee**, the point of the orbit closest to the centre of the Earth:
$\omega$ goes from the ascending node to the perigee, $\nu$ from the perigee to the
satellite.

- On an ellipse there is one closest point, so the perigee is well defined and so are
  the two angles. Example: $\omega = 30°$ and $\nu = 60°$ put the satellite $90°$ after
  the node.
- On a circle every point is at the same distance $a$ from the centre: there is no
  perigee. $\omega$ has no end point and $\nu$ has no starting point.
- The angle from the node to the satellite still exists, because it does not pass
  through the perigee. It is their sum, the **argument of latitude** $u = \omega + \nu$.

On a circle the pairs $(30°, 60°)$, $(50°, 40°)$ and $(0°, 90°)$ all put the satellite
in the same place: only the sum $u = 90°$ matters. In the notebook the satellite is
moved along the orbit by advancing $u$ directly, $u(t) = u_0 + \dot u\,t$.

The same happens on real, nearly circular orbits ($e \approx 0.001$ in LEO): the perigee
exists but is poorly determined, so $\omega$ jumps from one orbit determination to the
next, while $u$ stays stable.

## Our three missions

```{figure} img/slide-05.png
:width: 100%

*Our three missions*
```

**Why these three.** They cover three typical inclinations of LEO missions: a low
inclination (Crystal Eye, 37°), a medium one (ISS, 51.6°) and a sun-synchronous one
(NUSES, 97.6°). The same notebook runs on all three, so every result can be compared.

**Why a convention for the RAAN.** $i$ and the altitude are fixed by the launch site and
by the mission design, but $\Omega$ depends on the time of the launch: the same rocket,
launched a few hours later, puts the plane at a different $\Omega$. For Crystal Eye and
the ISS we choose one simple case: at the epoch the ascending node is on the meridian of
Kourou. To turn "above Kourou" into an angle measured from $\gamma$ we need to know how
far the Earth has turned at that moment, that is GMST (see [](02_time.md)):
$\Omega = \mathrm{GMST}(t_0) + \lambda_\mathrm{Kourou} = 100.692° - 52.65° = 48.04°$.
For NUSES $\Omega = 99.05°$ is taken from the mission.

**Crystal Eye** is a concept of an all-sky X/gamma-ray monitor; **NUSES** is the GSSI
pathfinder mission; the **ISS** is a familiar reference, and its dates here are only
illustrative. The nodal period $T_n$ is defined in [](03_j2_propagation.md).
