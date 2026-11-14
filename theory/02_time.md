# Time, the rotation of the Earth and the Sun

*Notebook section 0.1 (exercise 0.1) · slides 6–10*

## Which time? UTC, UT1, Julian date

```{figure} img/slide-06.png
:width: 100%

Slide 6 — *Which time? UTC, UT1, Julian date*
```

- **UTC** (Coordinated Universal Time) is the time of our clocks. The local time is UTC
  plus a fixed offset given by the time zone.
- **UT1** follows the real rotation of the Earth. Leap seconds keep
  $|\mathrm{UT1} - \mathrm{UTC}| < 0.9$ s. In 0.9 s the Earth turns by 0.004°: for us
  this is negligible, and **we use UTC**.
- The **Julian date** (JD) counts the days continuously since noon of 1 January
  4713 BC. With it, the difference between two dates is a simple subtraction. The
  reference date of modern astronomy is **J2000** = JD 2451545.0 = 2000-01-01 12:00.
- Astronomical formulas use $T$, the time in **Julian centuries** since J2000. A Julian
  century has 36525 days:

$$
T = \frac{\mathrm{JD} - 2451545.0}{36525}
$$

```{warning}
Never use local time. One hour of error shifts the ground track by 15°.
```

The chain used in the notebook is: UTC date → JD → $T$ → GMST and the direction of the
Sun.

## The Julian date, step by step

```{figure} img/slide-07.png
:width: 100%

Slide 7 — *The Julian date, step by step (Meeus)*
```

Given year $y$, month $m$, day, and the time of the day:

1. **Fraction of the day:** $d = \mathrm{day} + (h + \mathrm{min}/60 + s/3600)/24$
2. **January and February become months 13 and 14 of the previous year:**
   if $m \le 2$, then $y \to y - 1$ and $m \to m + 12$
3. **Gregorian correction:** $A = \lfloor y/100 \rfloor$, $\ B = 2 - A + \lfloor A/4 \rfloor$
4. **Sum:**

$$
\mathrm{JD} = \lfloor 365.25\,(y + 4716) \rfloor + \lfloor 30.6001\,(m + 1) \rfloor + d + B - 1524.5
$$

The symbol $\lfloor x \rfloor$ means "the integer part of $x$".

Why these steps: with January and February counted at the end of the previous year,
the leap day falls at the end of the year and the month formula becomes regular.
$A$ and $B$ account for the 10 days dropped in 1582 and for the century rule of leap
years. The term $-1524.5$ contains the half day because the Julian day starts at noon.

**Example, 2030-01-01 00:00 UTC.** $d = 1.0$; $y = 2029$, $m = 13$; $A = 20$,
$B = -13$;

$$
\mathrm{JD} = 2463611 + 428 + 1.0 - 13 - 1524.5 = 2462502.5
\qquad
T = \frac{10957.5}{36525} = 0.3
$$

## How far has the Earth turned? GMST

```{figure} img/slide-08.png
:width: 100%

Slide 8 — *How far has the Earth turned? Greenwich Mean Sidereal Time (GMST)*
```

**GMST** (Greenwich Mean Sidereal Time) is an angle. It is measured eastward along the
equator, from the vernal equinox direction $\gamma$ (fixed with respect to the stars) to
the Greenwich meridian (fixed on the Earth). It tells how much the Earth has turned
with respect to the stars.

**Why "sidereal".** In one day the Earth also moves by about 1° along its orbit around
the Sun.

- To face the same star again the Earth must turn by exactly 360°: this is the
  **sidereal day**, 23 h 56 min 4 s.
- To face the Sun again it must turn 0.986° more: this is the **solar day**, 24 h.

The difference is 236 s per day: 30° after one month, a full turn after one year.

**How to compute it.** The polynomial gives GMST in seconds of time:

$$
\mathrm{GMST\,[s]} = 67310.5484 + (876600 \times 3600 + 8640184.81286)\,T + 0.093104\,T^2 - 6.2\times10^{-6}\,T^3
$$

| step | what | example: 2030-01-01 00:00 UTC |
|---|---|---|
| 1 | date → Julian date | JD = 2462502.5 |
| 2 | $T$ = Julian centuries since J2000 | $T = (2462502.5 - 2451545.0)/36525 = 0.3$ |
| 3 | polynomial: value at J2000 + one turn per solar day + one extra turn per year + precession | $67310.5484 + 946728000 + 2592055.4 + 0.008 = 949387366.0$ s |
| 4 | remove the full turns (86400 s each) | $949387366.0$ s $= 10988$ turns $+\ 24166.0$ s |
| 5 | seconds of time → degrees (86400 s = 360°, so 1° = 240 s) | $24166.0/240 = 100.692°$ |

So $\mathrm{GMST}(t_0) = 100.692°$: at the start, Greenwich is 100.692° east of
$\gamma$.

**Why we need it.** GMST links the sky to the Earth. We use it twice:

- to fix the RAAN of Crystal Eye and of the ISS. The ascending node is on the Kourou
  meridian (longitude −52.65°) at $t_0$, so
  $\Omega = \mathrm{GMST}(t_0) + \lambda_\mathrm{Kourou} = 100.692° - 52.65° = 48.04°$;
- to turn the propagated orbit into the ground track.

## From the satellite position to its longitude

```{figure} img/slide-09.png
:width: 100%

Slide 9 — *From the satellite position to its longitude*
```

Look at the Earth from above the North Pole. All the angles are in the equatorial
plane and are measured from $\gamma$, eastward (counter-clockwise).

$$
\lambda(t) = \alpha(t) - \theta(t),
\qquad
\theta(t) = \mathrm{GMST}(t_0) + \omega_E\, t
$$

| symbol | what it is | where it comes from |
|---|---|---|
| $\alpha(t)$ | right ascension of the satellite: the angle from $\gamma$ to its projection on the equator | from the position $(x, y, z)$ given by the propagator: $\alpha = \mathrm{atan2}(y, x)$ |
| $\mathrm{GMST}(t_0)$ | where Greenwich is at the mission start | previous section: 100.692° for 2030-01-01 00:00 |
| $\omega_E$ | rotation rate of the Earth with respect to the stars | constant: $7.2921\times10^{-5}$ rad/s = 0.0041781 °/s = 360.9856 °/day |
| $t$ | seconds since the mission start $t_0$ | the time grid of the notebook |
| $\theta(t)$ | where Greenwich is at time $t$ | $\mathrm{GMST}(t_0) + \omega_E\,t$ |

The function $\mathrm{atan2}(y, x)$ is the arctangent of $y/x$ that keeps the right
quadrant. The longitude $\lambda$ is brought back to the interval −180° … +180°.

**Crystal Eye, $t = 0$.** The satellite is on the ascending node, so
$\alpha = \Omega = 48.042°$; $\theta = 100.692°$;
$\lambda = 48.042° - 100.692° = -52.65°$: the Kourou meridian.

**Crystal Eye, $t = 1200$ s.** $\mathbf r = (-2810.4,\ 4880.1,\ 4035.5)$ km, so
$\alpha = \mathrm{atan2}(4880.1, -2810.4) = 119.937°$;
$\theta = 100.692° + 0.0041781 \times 1200 = 105.705°$;
$\lambda = 119.937° - 105.705° = +14.23°$ E, with latitude 35.62° N.

## Where is the Sun?

```{figure} img/slide-10.png
:width: 100%

Slide 10 — *Where is the Sun? RA and Dec*
```

We use a low-precision model (about 0.01°). All angles are in degrees and $T$ is in
Julian centuries since J2000.

$$
\begin{aligned}
L &= 280.460° + 36000.771°\,T && \text{mean longitude of the Sun}\\
M &= 357.5291° + 35999.0504°\,T && \text{mean anomaly}\\
\lambda_\odot &= L + 1.914666471°\,\sin M + 0.019994643°\,\sin 2M && \text{true ecliptic longitude}\\
\varepsilon &= 23.43929° - 0.013°\,T && \text{obliquity of the ecliptic}
\end{aligned}
$$

$$
\hat{\mathbf s} = (\cos\lambda_\odot,\ \cos\varepsilon\,\sin\lambda_\odot,\ \sin\varepsilon\,\sin\lambda_\odot)
$$

$\hat{\mathbf s}$ is the unit vector from the Earth to the Sun in the ECI frame. The
Sun lies on the ecliptic; the rotation by the obliquity $\varepsilon$ about the $x$
axis takes it to ECI. The two sine terms are the correction for the slightly elliptical
orbit of the Earth.

**RA and Dec** are the same ECI frame, written with two angles instead of three
components:

$$
\mathrm{Dec} = \arcsin z \quad(\text{the latitude of the sky}),
\qquad
\mathrm{RA} = \mathrm{atan2}(y, x) \quad(\text{eastward from } \gamma)
$$

**Check.** At the equinoxes and solstices of 2030 the Sun must be at RA = 0°, 90°,
180°, 270°. The model is off by 8–12 arcseconds.
