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

## All-sky maps: Mollweide and conventions

```{figure} img/slide-19.png
:width: 100%

*All-sky maps: Mollweide and conventions*
```

**Directions, not positions.** A sky map is a map of the *celestial sphere*: each point
is a direction, seen from the observer (the satellite), and there is no distance on it.


