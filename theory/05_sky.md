# From the orbit to the sky

*Notebook section 6 (exercises 6 and 6.1) · slides 17–19*

Symbols used from here on: $\hat{\mathbf r}$ = zenith (the direction straight up from
the satellite), $\hat{\mathbf k}$ = a direction in the sky or a source,
$\hat{\mathbf s}$ = the Sun, $\hat{\mathbf h}$ = the orbit normal.

## The coordinate chain

```{figure} img/slide-17.png
:width: 100%

Slide 17 — *From the orbit to the sky: the coordinate chain*
```

To know which sky the detector sees, we go through a chain of reference frames.

| frame | coordinates | what it is | how to get there |
|---|---|---|---|
| orbital plane | $u$ | the angle along the orbit from the ascending node | — |
| ECI | $x, y, z$ | $x$ → vernal equinox, $z$ → North Pole; fixed with respect to the stars | $R_z(\Omega)\,R_x(i)$ |
| equatorial | RA, Dec | the same frame as ECI, written with the two angles of the unit vector | $\mathrm{RA} = \mathrm{atan2}(y, x)$, $\ \mathrm{Dec} = \arcsin(z/|\mathbf r|)$ |
| galactic | $l, b$ | the equator is the plane of the Milky Way; $l = 0$ points to the Galactic Centre | one fixed rotation, $R_\mathrm{gal}$ |
| Mollweide map | $x, y$ | a flat map of the whole sky that keeps the areas | equal-area projection |

**The satellite frame** is a side branch of the chain. It moves with the satellite and
has three axes:

- **zenith** $\hat{\mathbf r}$: straight up. It is the axis of our detector;
- **along-track**: the direction of motion, in the orbital plane;
- **normal** $\hat{\mathbf h}$: perpendicular to the orbital plane.

The matrix $Q = R_z(\Omega)\,R_x(i)\,R_z(u)$ has these three axes as columns, written
in ECI. Its transpose takes a source from ECI to the satellite frame:

$$
Q^T\,\hat{\mathbf k} = (\hat{\mathbf k}\cdot\text{zenith},\ \ \hat{\mathbf k}\cdot\text{along-track},\ \ \hat{\mathbf k}\cdot\hat{\mathbf h})
$$

Two angles of a source follow from it:

- the **zenith angle** $\theta = \arccos(\hat{\mathbf k}\cdot\hat{\mathbf r})$: the
  angle between the source and the zenith;
- $\beta_\mathrm{src} = \arcsin(\hat{\mathbf k}\cdot\hat{\mathbf h})$: the angle of the
  source from the orbital plane. It is the same quantity as the beta angle of the Sun.

**Worked example (notebook 6.1): Crystal Eye at $t = T/4$, $u = 90°$.** This is the
northernmost point of the orbit.

- Check of the chain: the zenith has $\mathrm{Dec} = \arcsin(\sin i\,\sin u) = i = +37°$.
- The Crab has zenith angle 48.97°. It is above the Earth, because the Earth hides only
  what is more than $180° - \rho = 113°$ from the zenith.
- The Crab has $\beta_\mathrm{src} = -1.45°$. On each revolution the zenith passes 1.45°
  from it, and the Earth hides it for 37 % of the time (35.6 min): this is the eclipse
  formula of [](04_eclipses.md) with $\beta_\mathrm{src}$ in place of $\beta$.

Sections 6 to 8 of the notebook use Keplerian orbits, with a fixed plane. J2 comes back
in section 9.

## Rotations and the galactic frame

```{figure} img/slide-18.png
:width: 100%

Slide 18 — *Rotations and the galactic frame*
```

A rotation matrix can be used in two ways.

- **Active rotation:** the vector moves, the frame stays.
  $\mathbf r = R_z(\Omega)\,R_x(i)\,\mathbf r_\mathrm{orb}$ builds the ECI coordinates of
  a point known in the orbital plane.
- **Passive rotation:** the vector stays, the frame changes.
  $\hat{\mathbf k}_\mathrm{sat} = Q^T\,\hat{\mathbf k}$ gives the coordinates, in the
  satellite frame, of a source that is fixed in ECI.

**The galactic frame.** The rows of $R_\mathrm{gal}$ are the three galactic axes,
written in equatorial coordinates:

- $\hat{\mathbf z}$ = North Galactic Pole, at (RA, Dec) = (192.859°, +27.128°);
- $\hat{\mathbf x}$ = Galactic Centre, at (266.405°, −28.936°), made exactly
  perpendicular to $\hat{\mathbf z}$ (Gram–Schmidt);
- $\hat{\mathbf y} = \hat{\mathbf z} \times \hat{\mathbf x}$.

**Checks.** $R\,R^T = I$ and $\det R = +1$: it is a true rotation. The Crab comes out
at $l = 184.557°$, $b = -5.784°$ (catalogue: 184.5575°, −5.7843°).

## All-sky maps: Mollweide and conventions

```{figure} img/slide-19.png
:width: 100%

Slide 19 — *All-sky maps: Mollweide and conventions*
```

The **Mollweide projection** is equal-area: equal areas on the map are equal solid
angles in the sky. This is why the colours of an exposure map can be compared fairly.

How to read the maps of the notebook:

- **Horizontal: $l$, galactic longitude,** 0°–360° along the plane of the Milky Way,
  from the Galactic Centre. It **grows to the left**, because we look at the sky from
  inside the sphere (a map of the Earth is seen from outside). The centre of the map is
  $l = 180°$.
- **Vertical: $b$, galactic latitude,** −90° to +90°: the angle above or below the plane
  of the Milky Way.
- **Galactic plane** (white line, $b = 0$): the disk of the Milky Way.
- **GC** (0°, 0°): the Galactic Centre. With the default centring it is on both edges
  of the map.
- **Crab** (184.6°, −5.8°): our target in section 8.
- **Celestial equator** (dashed): the equator of the Earth projected on the sky,
  Dec = 0. It is tilted by 62.9° to the galactic plane, so it looks like an S.
- **NCP / SCP:** North and South Celestial Pole, where the axis of the Earth points.
- **Zenith track** (teal): the orbital plane on the sky. It is a great circle.
- **AN / DN:** the zenith when the satellite crosses the equator going north / south.

```{important}
A map shows **directions**, not positions. The satellite is not on the map.
```
