# Switching J2 on

*Notebook section 9 (exercises 9, 9.0 and 9.3)*

:::{admonition} The key idea: what J2 changes
:class: important

**Without J2** the orbital plane is fixed. Every source keeps the same
$\beta_\mathrm{src}$ for the whole mission, so it is hidden in the same way on every
orbit, for years: a source near the plane is always hidden 37 % of the time, a source
far from it is never hidden.

**With J2** the orbital plane turns around the polar axis. The $\beta_\mathrm{src}$ of
every source changes day by day, so its visibility changes during the mission: weeks
with long occultations, weeks with short ones or none.

**What to monitor**

| parameter | what it tells | what sets it | value |
|---|---|---|---|
| $\dot\Omega$ | how fast the plane turns | altitude and inclination | Crystal Eye one turn in 60.4 days, ISS 72.8 days, NUSES one year |
| $\beta_\mathrm{src}(t)$ | how far the source is from the plane, day by day | the turning plane and the source | changes continuously |
| range of $\beta_\mathrm{src}$ | how far from the plane the source can get | the inclination and the declination of the source | Crab: Crystal Eye −15°…+59°, ISS −30°…+74°, NUSES −75°…+60° |

**What J2 does not change**

- the inclination $i$, so the zenith still never goes beyond Dec $= \pm i$;
- the size of the Earth disc $\rho$, so at every instant the detector still sees the
  same fraction of the sky (69.5 % at 550 km with FoV = 360°).

**The result:** J2 moves where the zenith points, not how much sky is seen. The exposure
is shared more evenly among the directions: nothing is observed 100 % of the time any
more, and a source like the Crab, which was in the worst place, is hidden less.

The same effect is behind the eclipses: J2 turns the plane with respect to the Sun, and
this is why $\beta$ of Crystal Eye and of the ISS has a cycle of a few weeks.
:::

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


## What J2 changes in the exposure

```{figure} img/slide-24.png
:width: 100%

*What J2 changes in the exposure*
```

**Why every direction moves towards the average.** With a fixed plane, a direction keeps
the same distance from the plane, $\beta_\mathrm{src}$, for the whole mission: it is
either always near the plane (low exposure) or always far from it (high exposure). With
J2 the plane turns, so $\beta_\mathrm{src}$ of each direction changes during the mission:
the same direction spends some weeks near the plane and some weeks far from it. 

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


Now open the [notebook](../hands_on.md).
