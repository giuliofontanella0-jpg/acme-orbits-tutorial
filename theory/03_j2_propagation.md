# The J2 perturbation, the propagator and the ground track

*Notebook sections 1–4 (exercises 1 and 2)*

## The Earth is not a sphere: J2

```{figure} img/slide-11.png
:width: 100%

*The Earth is not a sphere: the J2 perturbation*
```

**The size of the bulge.** The equatorial radius of the Earth is 6378.137 km, the polar
radius 6356.752 km: 21.4 km more at the equator. $J_2$ measures how much this extra mass
changes the gravity field; for a perfect sphere $J_2 = 0$.

**Why the plane turns instead of falling to the equator.** Over one revolution the bulge
pulls the satellite towards the equatorial plane: it is a torque on the orbit. The orbit
behaves like a spinning top, or a gyroscope: a torque does not tilt it, it makes its axis
turn around. The axis of the orbit (its normal) turns around the polar axis, so the
inclination $i$ stays the same and the node $\Omega$ moves. This is the **nodal drift**.

**Reading the formulas.**

- $k = J_2 (R/a)^2$: the bulge is seen from a distance $a$. The farther the orbit, the
  smaller it looks; the effect falls as $(R/a)^2$. At 550 km, $k = 9.176\times10^{-4}$.
- $n = \sqrt{\mu/a^3}$ is the angular speed of a Keplerian orbit, in rad/s
  ($n = 1.0948\times10^{-3}$ rad/s at 550 km). The drift is proportional to it: the
  faster the satellite goes round, the more often it feels the pull.
- $\cos i$ in $\dot\Omega$: the drift depends on how the orbit is tilted with respect
  to the bulge. Its sign gives the direction of the drift (west for $i < 90°$, east for
  $i > 90°$), and for a polar orbit, $i = 90°$, the node does not move.
- $\dot u$: J2 also changes the speed along the orbit. The term $8\cos^2 i - 2$ is
  positive for $i < 60°$ (and $i > 120°$): there $u$ grows faster than $n$ and the
  nodal period is shorter than the Keplerian one. Between 60° and 120° it is the
  opposite.

**The numbers for Crystal Eye**, step by step:

$$
\dot\Omega = -1.5 \times 9.176\times10^{-4} \times 1.0948\times10^{-3} \times \cos 37°
= -1.2034\times10^{-6}\ \text{rad/s}
$$

In degrees per day: $-1.2034\times10^{-6} \times \frac{180}{\pi} \times 86400 = -5.96°$
per day, one full turn of the plane in $360/5.957 = 60.4$ days.

The periods: $T_k = 2\pi/n = 95.650$ min, $T_n = 95.446$ min. Crystal Eye has $i = 37°$,
so $T_n < T_k$; NUSES has $i = 97.59°$, so $T_n = 95.773 > 95.650$ min.

**Why sun-synchronous is useful.** For NUSES the node turns east by one turn per year,
like the Sun. The angle between the orbital plane and the Sun then stays almost the same
all year: the satellite crosses each latitude at the same local solar time, and the
illumination (eclipses, beta angle) is stable. At 550 km this happens only for
$i = 97.59°$: setting $\dot\Omega = 360°/365.2422$ days in the formula gives
$\cos i = -0.1321$.

## Propagating the orbit

```{figure} img/slide-12.png
:width: 100%

*Propagating the orbit*
```

$u$ is the **argument of latitude** defined in [](01_orbits.md): the angle along the
orbit from the ascending node, in the direction of motion. It replaces $\omega$ and
$\nu$ because the orbit is circular.

**What each step does.**

1. In its own plane, with the ascending node on the $x$ axis, the satellite is at
   $(a\cos u,\ a\sin u,\ 0)$.
2. $R_x(i)$ turns this plane around the $x$ axis, which is the line of nodes, by the
   inclination. The point becomes $(a\cos u,\ a\sin u\cos i,\ a\sin u\sin i)$.
3. $R_z(\Omega)$ turns everything around the polar axis, so that the line of nodes
   points at $\Omega$ from $\gamma$.

The product, written out, is what you code in exercise 2:

$$
\mathbf r = a
\begin{pmatrix}
\cos u\cos\Omega - \sin u\cos i\sin\Omega\\
\cos u\sin\Omega + \sin u\cos i\cos\Omega\\
\sin u\sin i
\end{pmatrix}
$$

**Where the checks come from.**

- The third row, $z = a\sin u\sin i$, is largest for $u = 90°$: then $z/a = \sin i$ and
  the latitude is $i$. For a retrograde orbit $\sin i = \sin(180° - i)$, so the largest
  latitude is $180° - i$ (82.41° for NUSES).
- At $t = 0$, with $u_0 = 0$: $\mathbf r = a(\cos\Omega,\ \sin\Omega,\ 0)$, so $z = 0$ and
  the right ascension is $\Omega$.
- $|\mathbf r| = a$ always, because rotations do not change lengths.

## Reading a ground track

```{figure} img/slide-13.png
:width: 100%

*Reading a ground track*
```

**Why the track shifts west.** During one revolution the Earth turns eastward under the
orbit by $\omega_E T_n$, about 24°, and the node itself drifts by $\dot\Omega T_n$ because
of J2. Seen from the ground, the next node is therefore further west by
$(\omega_E - \dot\Omega)\,T_n$. For Crystal Eye:
$(360.9856 + 5.957)°/\text{day} \times 0.066282\ \text{days} = 24.32°$, of which only
0.40° come from J2.

**Why NUSES runs the opposite way.** The inclination is measured from the equator,
eastward. With $i < 90°$ (Crystal Eye, ISS) the orbit is **prograde**: at the ascending
node the satellite heads north-**east**, in the same sense as the rotation of the Earth.
With $i > 90°$ (NUSES, 97.59°) the orbit is **retrograde**: the satellite heads
north-**west**, against the rotation of the Earth. On the map the red and purple tracks
go from left to right, the green one of NUSES from right to left; it is also almost
vertical, because $i$ is close to 90° and the orbit passes near the poles.

NUSES needs a retrograde orbit to be sun-synchronous: its node must drift eastward, and
the formula for $\dot\Omega$ gives an eastward drift only when $\cos i < 0$, that is
$i > 90°$.
