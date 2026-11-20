# Switching J2 on

*Notebook section 9 (exercises 9, 9.0 and 9.3)*

## Where the zenith points

```{figure} img/slide-23.png
:width: 100%

*Switching J2 on: where the zenith points*
```

**Why the zenith spreads over the sky.** In one revolution the zenith draws one great
circle: the orbital plane seen on the sky. Without J2 the plane is fixed, so every
revolution draws the same circle. With J2 the node moves by 5.96° per day, so each day
the circle is turned a little around the celestial poles. In $1096/60.4 = 18$ full turns
of the node, the circles fill a band of the sky.

**Why $|\mathrm{Dec}| \le i$.** The $z$ component of the zenith is $\sin u\,\sin i$
(third row of the propagator). Its largest value is $\sin i$, at $u = 90°$, so the
declination of the zenith never exceeds $i$. J2 turns the plane around the polar axis
but does not change $i$, so the limit stays: the two empty regions are the directions
more than 37° from the celestial equator, which are never straight above the detector.
The band $|\mathrm{Dec}| \le 37°$ is $\sin 37° = 60\,\%$ of the sky.

The directions in the empty regions are still observed: they are never at the zenith,
but they are above the horizon for part of the time, seen from the side.

## What J2 changes in the exposure

```{figure} img/slide-24.png
:width: 100%

*What J2 changes in the exposure*
```

**Why every direction moves towards the average.** With a fixed plane, a direction keeps
the same distance from the plane, $\beta_\mathrm{src}$, for the whole mission: it is
either always near the plane (low exposure) or always far from it (high exposure). With
J2 the plane turns, so $\beta_\mathrm{src}$ of each direction changes during the mission:
the same direction spends some weeks near the plane and some weeks far from it. Its
exposure becomes an average over many values of $\beta_\mathrm{src}$, and all the averages
end up close to each other.

**Why the sky average does not change.** At every instant the detector sees 69.5 % of the
sky (the cap with $\theta \le 113°$); this depends only on $\rho$, that is on the altitude.
Added over the mission, the total observing time spread over the sky is the same with or
without J2: J2 only decides how it is shared among the directions.

**Why the Crab is hidden less with J2.** In the Keplerian case the Crab has
$\beta_\mathrm{src} = -1.45°$ for the whole mission, almost in the plane: the worst case,
hidden 37 % of every revolution. With J2 its $\beta_\mathrm{src}$ changes as the node
turns; when $|\beta_\mathrm{src}|$ is large the occultations are shorter, like eclipses at
large $|\beta|$. In exercise 9.0, after 30 days of Crystal Eye the node has turned by
−178.7° and the Crab has moved from $\beta_\mathrm{src} = -1.5°$ to $+37.9°$.

**Why NUSES changes the most (37.0 → 28.2 %).** The range that $\beta_\mathrm{src}$ can
cover while the plane turns depends on the inclination. The orbit normal stays at an
angle $i$ from the North Pole, and the Crab is at Dec $+22°$. For Crystal Eye
($i = 37°$) the normal stays near the pole, and $\beta_\mathrm{src}$ of the Crab only
ranges from −15° to +59°. For the ISS it ranges from −30° to +74°. NUSES is almost polar:
its normal moves close to the celestial equator, and $\beta_\mathrm{src}$ ranges from −75°
to +60°. The Crab spends more time far from the plane of NUSES, so it is hidden less.

## Take-aways

- Four numbers and an epoch fix a circular orbit; J2 turns its plane.
- Time matters: UTC → JD → GMST, and the direction of the Sun.
- $\beta$ decides the eclipses; the same formula decides when a source is hidden.
- Directions, not positions: the zenith draws a great circle on the sky.
- Exposure = the time within reach of the detector, Earth and field of view included.

Now open the [notebook](../hands_on.md).
