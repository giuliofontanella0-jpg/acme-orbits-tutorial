# Time, the rotation of the Earth and the Sun

*Notebook section 0.1 (exercise 0.1)*

## Which time? UTC, UT1, Julian date

```{figure} img/slide-06.png
:width: 100%

*Which time? UTC, UT1, Julian date*
```

**Why a continuous count of days.** Calendar dates are awkward to compute with: months
have different lengths and some years have a leap day. The Julian date numbers every
day in a row, so the time between two dates is one subtraction, and the time inside the
day is the decimal part.

**What $T$ is.** $T$ measures the time since J2000 in a larger unit: the Julian century,
100 Julian years of exactly 365.25 days, that is 36525 days. For the start of Crystal Eye:

$$
T = \frac{2462502.5 - 2451545.0}{36525} = \frac{10957.5}{36525} = 0.3
$$

0.3 centuries are 30 years: from 2000-01-01 12:00 to 2030-01-01 00:00. The number is
round because 30 Julian years are exactly $30 \times 365.25 = 10957.5$ days. For another
date it is not round: the epoch of NUSES, 2027-05-01 18:00, gives $T = 0.27330$.

The formulas for GMST and for the Sun are polynomials in $T$, with coefficients given
"per century". Centuries are used because many astronomical quantities (precession, the
tilt of the Earth's axis) change very little in one year: per century their coefficients
are convenient numbers, and for dates near 2000 $T$ stays small, between about −1 and +1.

```{warning}
Never use local time. One hour of error shifts the ground track by 15°, because the
Earth turns 15° per hour.
```

## The Julian date, step by step

```{figure} img/slide-07.png
:width: 100%

*The Julian date, step by step (Meeus)*
```

The symbol $\lfloor x \rfloor$ means "the integer part of $x$".

**Why these steps.**

- January and February are counted as months 13 and 14 of the previous year. Then the
  leap day (29 February) falls at the *end* of the year. The months from March onwards
  have a regular average length, 30.6 days, and one term,
  $\lfloor 30.6001\,(m + 1) \rfloor$, counts the days of all the months before $m$.
- $\lfloor 365.25\,(y + 4716) \rfloor$ counts the days of the years, with one leap year
  every four years.
- $A$ and $B$ correct for the Gregorian calendar: the 10 days dropped in 1582 and the
  century rule (1900 is not a leap year, 2000 is).
- The term $-1524.5$ contains half a day because the Julian day starts at noon, not at
  midnight.

**The numbers of the example**, 2030-01-01 00:00 UTC:

- $\lfloor 365.25 \times (2029 + 4716) \rfloor = \lfloor 2463611.25 \rfloor = 2463611$;
- $\lfloor 30.6001 \times (13 + 1) \rfloor = \lfloor 428.40 \rfloor = 428$;
- $2463611 + 428 + 1.0 - 13 - 1524.5 = 2462502.5$.

## How far has the Earth turned? GMST

```{figure} img/slide-08.png
:width: 100%

*How far has the Earth turned? Greenwich Mean Sidereal Time (GMST)*
```

**Why the solar day is longer.** In one day the Earth moves by about 1° along its orbit
around the Sun ($360°/365.25$ days $= 0.986°$ per day). Seen from the Earth, the Sun
shifts by the same angle against the stars, so the Earth must turn 0.986° more to face
the Sun again. At 240 s per degree, this is $0.986 \times 240 = 236$ s.

**The polynomial, term by term.** It gives the total rotation of the Earth with respect
to the stars since J2000, measured in **seconds of time** (one full turn, 360°, is
86400 s):

| term | value for $T = 0.3$ | meaning |
|---|---|---|
| $67310.5484$ | 67 310.5484 s | where Greenwich was at J2000 |
| $876600 \times 3600 \times T$ | 946 728 000 s | one turn per solar day: a century has 876 600 hours |
| $8640184.81286 \times T$ | 2 592 055.4 s | one extra turn per year (the 236 s per day above) |
| $0.093104\,T^2$ | 0.008 s | precession of the Earth's axis |
| | **949 387 366.0 s** | total |

**From the total to the angle, in three steps.**

1. **Count the full turns.** One turn is 86400 s:
   $949\,387\,366.0 / 86400 = 10988.28\ldots$ The Earth has made 10988 full turns with
   respect to the stars since J2000.
2. **Keep only what is left.** A full turn brings the Earth back to the same
   orientation, so the full turns do not matter: only the remainder does.
   $10988 \times 86400 = 949\,363\,200$ s, and
   $949\,387\,366.0 - 949\,363\,200 = 24\,166.0$ s.
   It is the same as reading a clock: 50 hours after midnight are 2 days and 2 hours,
   and the clock shows 2:00.
3. **Turn seconds into degrees.** 86400 s correspond to 360°, so 1° is
   $86400/360 = 240$ s: $24\,166.0 / 240 = 100.692°$.

In the notebook steps 2 and 3 are one line, `(s % 86400.0) / 240.0`: the operator `%`
gives the remainder of the division by 86400.

**Why we need it.** GMST links the sky to the Earth: it is used to convert from a fixed
position in space to one relative to the Earth. It enables us to visualise the satellite
and its orbit correctly.

## From the satellite position to its longitude

```{figure} img/slide-09.png
:width: 100%

*From the satellite position to its longitude*
```

**Why $\lambda = \alpha - \theta$.** Both angles are measured from the same direction,
$\gamma$, in the same sense (eastward). $\alpha$ goes from $\gamma$ to the satellite,
$\theta$ from $\gamma$ to Greenwich. The longitude is the angle from Greenwich to the
satellite: the difference of the two.

**Why $\theta$ grows linearly.** The Earth turns at a constant rate $\omega_E$ with
respect to the stars, so Greenwich moves away from $\gamma$ by $\omega_E\,t$ in a time
$t$, starting from where it was at the epoch, $\mathrm{GMST}(t_0)$. $\omega_E$ is one turn
per sidereal day: $2\pi / 86164.09\ \mathrm{s} = 7.2921\times10^{-5}$ rad/s.

$\alpha$ grows by about one turn per orbit (95 min), $\theta$ by one turn per day: the
difference grows, so $\lambda$ goes round many times. It is brought back to the interval
−180° … +180° at the end.

## Where is the Sun?

```{figure} img/slide-10.png
:width: 100%

*Where is the Sun? RA and Dec*
```

All angles are in degrees and $T$ is in Julian centuries since J2000.

**What each line does.**

- $L$ is where the Sun would be if it moved at constant speed along the ecliptic: one
  turn per year. With $T = 0.3$: $36000.771 \times 0.3 = 10800.23°$, that is 30 full turns
  for the 30 years plus 0.23°.
- $M$ is the position of the Earth along its elliptical orbit, counted from the point
  closest to the Sun (perihelion, early January).
- The two sine terms correct $L$ because the orbit of the Earth is slightly elliptical:
  the Earth moves faster near the Sun, in January, and slower in July. The first
  coefficient is about $2e$ (in radians), with $e = 0.0167$ the eccentricity of the
  Earth's orbit: $2 \times 0.0167 = 0.0334$ rad $= 1.91°$.
- $\varepsilon$ is the tilt of the Earth's axis, which changes very slowly.

**Why the formula for $\hat{\mathbf s}$ has that form.** The Sun lies on the ecliptic.
In ecliptic coordinates its direction is simply $(\cos\lambda_\odot,\ \sin\lambda_\odot,\ 0)$.
The ecliptic is tilted by $\varepsilon$ with respect to the equator, around the common
$x$ axis ($\gamma$). Rotating by $\varepsilon$ around $x$ leaves the first component and
splits the second between $y$ and $z$: $\cos\varepsilon\sin\lambda_\odot$ and
$\sin\varepsilon\sin\lambda_\odot$.

**Why a unit vector is enough.** For eclipses and for the beta angle only the *direction*
of the Sun matters: it is 150 million km away, so its direction is the same from every
point of the orbit.
