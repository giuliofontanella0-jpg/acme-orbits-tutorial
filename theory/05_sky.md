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

**Why the chain goes through ECI.** ECI is the frame where both ends of the problem are
simple. The orbit is given by its elements, which are defined in ECI; the sources are
given by catalogue coordinates, which are fixed to the stars and so fixed in ECI. Every
other frame is reached from ECI with one rotation: the equatorial angles are the same
frame written with two angles, the galactic frame is one fixed rotation (both are fixed
to the stars), the satellite frame is the rotation $Q$, which changes in time.

**Why the zenith is $\hat{\mathbf r} = \mathbf r/|\mathbf r|$.** "Straight up" from the
satellite is the direction from the centre of the Earth through the satellite, so the
zenith is the unit vector of the position given by the propagator.

**Why the columns of $Q$ are the axes of the satellite.** $Q = R_z(\Omega)\,R_x(i)\,R_z(u)$
is the propagator with one more rotation, $R_z(u)$, which brings the $x$ axis onto the
satellite. Multiplying a matrix by $(1, 0, 0)$ gives its first column: in the satellite
frame the zenith is $(1, 0, 0)$, so the first column of $Q$ is the zenith written in
ECI. In the same way the second column is the along-track direction and the third the
normal $\hat{\mathbf h}$, the same vector as in the beta angle.

**Why $Q^T\hat{\mathbf k}$ gives three dot products.** The rows of $Q^T$ are the columns
of $Q$, that is the three axes. Multiplying $Q^T$ by $\hat{\mathbf k}$ takes the dot
product of $\hat{\mathbf k}$ with each axis. Each dot product of unit vectors is the
cosine of an angle:

- with the zenith: $\cos\theta$, where $\theta$ is the zenith angle;
- with the normal: $\cos(90° - \beta_\mathrm{src}) = \sin\beta_\mathrm{src}$, exactly as
  $\sin\beta = \hat{\mathbf s}\cdot\hat{\mathbf n}$ for the Sun.

**Why 35.6 min here and 35.5 min for the eclipse.** The time the Crab spends behind the
Earth is the eclipse formula with $\beta_\mathrm{src} = -1.45°$:
$\arccos(\cos 67.02°/\cos 1.45°) = 67.00°$, that is $67.00/180 = 37.2\,\%$ of the
revolution. Sections 6 to 8 use Keplerian orbits, so the period is
$T_k = 95.65$ min, not $T_n = 95.446$ min: $0.372 \times 95.65 = 35.6$ min.

## Rotations and the galactic frame

```{figure} img/slide-18.png
:width: 100%

*Rotations and the galactic frame*
```

**Active and passive: the same matrix, read in two ways.** A rotation matrix $R$ either
moves a vector inside a fixed frame (active), or gives the coordinates of a fixed vector
in a rotated frame (passive). For a rotation the inverse is the transpose,
$R^{-1} = R^T$: this is why one direction uses $Q$ and the other $Q^T$. In the
propagator we know the satellite in its orbital plane and want it in ECI: active, with
$Q$. For a source we know it in ECI and want it as seen from the satellite: passive,
with $Q^T$.

**How $R_\mathrm{gal}$ works.** Its rows are the three galactic axes written in
equatorial coordinates, so multiplying it by an equatorial unit vector gives the dot
products with the three galactic axes: these are the galactic Cartesian coordinates, and
$l$, $b$ follow with the same atan2 / arcsin used for RA and Dec.

**Why Gram–Schmidt.** The catalogue positions of the North Galactic Pole and of the
Galactic Centre are rounded, so the two unit vectors are not exactly at 90°. To make
three perfectly perpendicular axes, the component of the Galactic Centre along
$\hat{\mathbf z}$ is removed and the rest is normalised:

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

**Why equal-area matters.** An exposure map is read by comparing colours over regions
of the sky. If the projection stretched some regions (as a rectangular RA–Dec map does
near the poles), a large coloured area could correspond to a small piece of sky. With
Mollweide, the same area on the map is the same solid angle on the sky.

**Directions, not positions.** A sky map is a map of the *celestial sphere*: each point
is a direction, seen from the observer, and there is no distance on it.

- The sources are so far away that their direction does not depend on where we look from.
  The Crab is about 6500 light-years away: moving by the whole diameter of the orbit,
  about 14 000 km, does not change its direction by any measurable amount. This is why
  one map of the sky is valid from every point of the orbit.
- The teal zenith track is drawn with $\hat{\mathbf r} = \mathbf r/|\mathbf r|$: it shows
  where the satellite *points*, not where it *is*. Two satellites at different altitudes
  with the same $\hat{\mathbf r}$ give the same point on the map.
- Only nearby objects change direction with the position of the satellite: the Moon by
  about 2° from one side of the orbit to the other, the Sun by 0.005°.

This is not a property of the Mollweide projection. Every map of the sky (Mollweide,
Hammer–Aitoff, a rectangular RA–Dec grid) shows directions, because what it projects is
the celestial sphere. A Mollweide map of the *Earth's surface* shows positions instead:
what matters is which sphere is projected, not how.
