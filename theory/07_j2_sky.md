# Switching J2 on

*Notebook section 9 (exercises 9, 9.0 and 9.3) · slides 23–25*

## Where the zenith points

```{figure} img/slide-23.png
:width: 100%

Slide 23 — *Switching J2 on: where the zenith points*
```

Each dot is a direction where the zenith (the axis of the detector) pointed during the
three years of Crystal Eye. The colour is the day of the mission.

- **Keplerian (left):** the orbital plane is fixed. The zenith runs on the same great
  circle on every revolution, for three years.
- **With J2 (right):** the node turns by 5.96° per day, one full turn every 60.4 days,
  18 turns in three years. The circle moves and the zenith visits a large part of the
  sky.
- **The two empty regions** around the celestial poles: the zenith can never go beyond
  $\mathrm{Dec} = \pm i = \pm 37°$.

```{important}
These maps are **not** the visible sky. With FoV = 360° the detector sees everything
above the horizon, 69.5 % of the sky, at every instant, with or without J2: this
depends only on the altitude. J2 changes *where the zenith points*, not *how much sky
is seen*.
```

## What J2 changes in the exposure

```{figure} img/slide-24.png
:width: 100%

Slide 24 — *What J2 changes in the exposure*
```

Top row: Keplerian. Bottom row: with J2. The colour is the percentage of the mission
time in which each direction is observed (FoV = 360°).

- **Keplerian:** the plane is fixed, so some directions are always favoured and some
  always penalised. For Crystal Eye the exposure goes from 62.8 % (the band of the
  orbital plane) to 100 % (the two caps around the poles of the orbit, 7.9 % of the
  sky).
- **With J2:** the plane turns. Every direction is sometimes near the plane and
  sometimes far from it, so all the directions end up close to the average: 64 % to
  77 % for Crystal Eye. No direction is observed 100 % of the time.

The average over the sky is 69.5 % in both cases. J2 does not add or remove sky: it
spreads the exposure more evenly.

**The Crab, hidden by the Earth over the whole mission:**

| mission | Keplerian | with J2 |
|---|---|---|
| Crystal Eye | 37.2 % | 33.9 % |
| NUSES | 37.0 % | 28.2 % |
| ISS | 38.5 % | 32.2 % |

With the Keplerian orbit the Crab lies almost in the orbital plane, the worst place.
With J2 it moves towards the average and is hidden less. A source inside a Keplerian
cap (never hidden) would instead be hidden more with J2.

The Keplerian model is an approximation that freezes the plane. The real orbit always
has J2.

## Take-aways

- Four numbers and an epoch fix a circular orbit; J2 turns its plane.
- Time matters: UTC → JD → GMST, and the direction of the Sun.
- $\beta$ decides the eclipses; the same formula decides when a source is hidden.
- Directions, not positions: the zenith draws a great circle on the sky.
- Exposure = the time within reach of the detector, Earth and field of view included.

Now open the [notebook](../hands_on.md).
