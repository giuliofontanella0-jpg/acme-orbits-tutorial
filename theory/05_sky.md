# From the orbit to the sky

*Notebook section 6 (exercises 6 and 6.1)*

Symbols used from here on: $\hat{\mathbf r}$ = zenith (the direction straight up from
the satellite), $\hat{\mathbf k}$ = a direction in the sky or a source,
$\hat{\mathbf s}$ = the Sun, $\hat{\mathbf h}$ = the orbit normal.

## The coordinate chain

```{figure} img/slide-17.png
:width: 100%

*From the orbit to the sky: the coordinate chain*
```

The orbit is given by its elements, which are defined in ECI; the sources are
given by catalogue coordinates, which are fixed to the stars and so fixed in ECI. Every
other frame is reached from ECI with one rotation: the equatorial angles are the same
frame written with two angles, the galactic frame is one fixed rotation (both are fixed
to the stars), the satellite frame is the rotation $Q$, which changes in time.

**The axes of the satellite.** $Q = R_z(\Omega)\,R_x(i)\,R_z(u)$
is the propagator with one more rotation, $R_z(u)$, which brings the $x$ axis onto the
satellite. Multiplying a matrix by $(1, 0, 0)$ gives its first column: in the satellite
frame the zenith is $(1, 0, 0)$, so the first column of $Q$ is the zenith written in
ECI. In the same way the second column is the along-track direction and the third the
normal $\hat{\mathbf h}$, the same vector as in the beta angle.

- with the zenith: $\cos\theta$, where $\theta$ is the zenith angle;
- with the normal: $\cos(90° - \beta_\mathrm{src}) = \sin\beta_\mathrm{src}$, exactly as
  $\sin\beta = \hat{\mathbf s}\cdot\hat{\mathbf n}$ for the Sun.

## Rotations and the galactic frame

```{figure} img/slide-18.png
:width: 100%

*Rotations and the galactic frame*
```

**Active and passive rotations.** The same rotation matrix can be used in two ways.

- **Active: the vector moves, the frame stays.** The propagator does this. It starts
  from the satellite on the $x$ axis of its own orbital plane, $(a, 0, 0)$, and turns
  it into its position in ECI: $\mathbf r = Q\,(a, 0, 0)^T$.
- **Passive: the vector stays, the frame moves.** We do this with a source. Its
  direction $\hat{\mathbf k}$ is fixed in ECI, and we want it described along the axes
  of the satellite (zenith, along-track, normal): $\hat{\mathbf k}_\mathrm{sat} = Q^T\,\hat{\mathbf k}$.

**Why $Q^T$.** The two operations go in opposite directions: satellite → ECI, then
ECI → satellite. The second one undoes the first, so it uses the inverse matrix. For a
rotation the inverse is simply the transpose, $Q^{-1} = Q^T$, so no inversion is needed.
In two dimensions: turning a vector by $+30°$ gives the same coordinates as turning the
axes by $-30°$.

$$
\hat{\mathbf x} = \frac{\mathbf g - (\mathbf g\cdot\hat{\mathbf z})\,\hat{\mathbf z}}{\left|\mathbf g - (\mathbf g\cdot\hat{\mathbf z})\,\hat{\mathbf z}\right|}
$$

where $\mathbf g$ is the unit vector of the Galactic Centre. The third axis is the cross
product $\hat{\mathbf z}\times\hat{\mathbf x}$, which is perpendicular to both by
construction and makes a right-handed frame.

## All-sky maps: Mollweide and conventions

```{figure} img/slide-19.png
:width: 100%

*All-sky maps: Mollweide and conventions*
```

**Directions, not positions.** A sky map is a map of the *celestial sphere*: each point
is a direction, seen from the observer (the satellite), and there is no distance on it.


