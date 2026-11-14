# The J2 perturbation, the propagator and the ground track

*Notebook sections 1–4 (exercises 1 and 2) · slides 11–13*

## The Earth is not a sphere: J2

```{figure} img/slide-11.png
:width: 100%

Slide 11 — *The Earth is not a sphere: the J2 perturbation*
```

The Earth is flattened by its rotation: the equatorial radius is 6378.137 km and the
polar radius is 6356.752 km, 21.4 km less. $J_2 = 1.083\times10^{-3}$ is the
dimensionless coefficient of the gravity field that measures this equatorial bulge.

The bulge pulls an inclined orbit towards the equator. Averaged over one revolution,
the effect is that the **orbital plane precesses about the polar axis**: the ascending
node drifts. The speed along the orbit also changes slightly.

$$
\begin{aligned}
k &= J_2 \left(\frac{R}{a}\right)^2 && \text{size of the effect } (\approx 10^{-3})\\
n &= \sqrt{\frac{\mu}{a^3}} && \text{Keplerian mean motion}\\
\frac{d\Omega}{dt} &= -\frac{3}{2}\,k\,n\,\cos i && \text{nodal drift (rotation of the plane)}\\
\frac{du}{dt} &= n\left[1 + \frac{3}{4}\,k\,(8\cos^2 i - 2)\right] && \text{rate of the argument of latitude}\\
T_k &= \frac{2\pi}{n}, \qquad T_n = \frac{2\pi}{du/dt} && \text{Keplerian and nodal period}
\end{aligned}
$$

Symbols: $R$ = equatorial radius of the Earth; $a = R + h$; $\mu = GM$; $i$ =
inclination; $\Omega$ = RAAN; $u$ = argument of latitude.

The **nodal period** $T_n$ is the time between two successive passages through the
ascending node. It differs slightly from the Keplerian period $T_k$ because of J2.

What the formulas say:

- **Prograde orbit** ($\cos i > 0$): the node moves west. **Retrograde orbit**
  ($\cos i < 0$): the node moves east.
- A lower orbit has a larger $k$, so a stronger effect.
- A polar orbit ($i = 90°$) has no node drift.

| mission | $i$ | $d\Omega/dt$ | one turn of the plane | $T_n$ |
|---|---|---|---|---|
| Crystal Eye | 37° | −5.96 °/day | 60.4 days | 95.446 min |
| NUSES | 97.59° | +0.985 °/day | 365.4 days | 95.773 min |
| ISS | 51.64° | −4.95 °/day | 72.8 days | 92.899 min |

**Worked numbers, Crystal Eye.** $a = 6928.137$ km; $n = 1.0948\times10^{-3}$ rad/s;
$k = 9.176\times10^{-4}$; $\cos 37° = 0.7986$. Then
$d\Omega/dt = -1.2034\times10^{-6}$ rad/s $= -5.96$ °/day, one full turn in
$360/5.957 = 60.4$ days.

- **Crystal Eye and ISS** are prograde: the node moves westward. The ISS is lower
  (larger $k$) but more inclined (smaller $\cos i$), so it drifts less than Crystal Eye.
- **NUSES** is retrograde: its node moves eastward at $+0.985$ °/day. This is the rate
  of the Sun along the ecliptic ($360°/365.24\ \mathrm{d} = 0.9856$ °/day). The orbital
  plane follows the Sun and keeps its angle to it: the orbit is **sun-synchronous**.

## Propagating the orbit

```{figure} img/slide-12.png
:width: 100%

Slide 12 — *Propagating the orbit*
```

To *propagate* an orbit means to compute the position of the satellite at any time $t$.
For a circular orbit this is done in three steps.

1. **A circle in its own plane:** $(a\cos u,\ a\sin u,\ 0)$
2. **Tilt by $i$** about the line of nodes, with the rotation $R_x(i)$
3. **Turn by $\Omega$** about the polar axis, with the rotation $R_z(\Omega)$

$$
\mathbf r = a\,R_z(\Omega)\,R_x(i)\,(\cos u,\ \sin u,\ 0)^T
$$

$$
R_x(i) = \begin{pmatrix} 1 & 0 & 0\\ 0 & \cos i & -\sin i\\ 0 & \sin i & \cos i \end{pmatrix},
\qquad
R_z(\Omega) = \begin{pmatrix} \cos\Omega & -\sin\Omega & 0\\ \sin\Omega & \cos\Omega & 0\\ 0 & 0 & 1 \end{pmatrix}
$$

Two angles change linearly in time: $u$, because the satellite runs along the orbit,
and $\Omega$, because of J2:

$$
u(t) = u_0 + \dot u\, t,
\qquad
\Omega(t) = \Omega_0 + \dot\Omega\, t
$$

From the position we get the point of the Earth below the satellite:

$$
\text{latitude} = \arcsin\frac{z}{a},
\qquad
\text{longitude} = \mathrm{atan2}(y, x) - \theta,
\quad
\theta = \mathrm{GMST}(t_0) + \omega_E\, t
$$

**How you know it is right** (the checks printed by the notebook):

- the radius is constant;
- the highest latitude equals $i$ (for NUSES: $180° - i = 82.41°$);
- the time from one node to the next is $T_n$;
- at $t = 0$ the satellite is on the node: $z = 0$ and RA $= \Omega$;
- at $t = 0$ Crystal Eye and the ISS are on the Kourou meridian, $\lambda = -52.65°$;
- the node shifts by $(\omega_E - \dot\Omega)\,T_n$ per revolution: Crystal Eye
  −24.32°, NUSES −23.94°, ISS −23.61°.

## Reading a ground track

```{figure} img/slide-13.png
:width: 100%

Slide 13 — *Reading a ground track*
```

The **ground track** is the point of the Earth directly below the satellite, drawn as
the satellite moves.

- **Start (●):** the ascending node at the epoch.
- **End (■):** the next ascending node. It is shifted to the west because, in one
  revolution, the Earth has turned under the orbit by $\omega_E\,T_n$ (about 24°), and
  the node has drifted because of J2.
- **Highest latitude:** it equals $i$ for a prograde orbit, and $180° - i$ for a
  retrograde orbit (NUSES: 82.4°).
- One day is about 15 tracks.
