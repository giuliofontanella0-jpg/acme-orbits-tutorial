# The beta angle and eclipses

*Notebook section 5 (exercise 5)*

## The beta angle

```{figure} img/slide-14.png
:width: 100%

*The beta angle*
```

**Why $\sin\beta = \hat{\mathbf s}\cdot\hat{\mathbf n}$.** The angle between the Sun and the
orbit normal is $90° - \beta$, and $\cos(90° - \beta) = \sin\beta$. So one dot product
gives $\beta$, with its sign: $\beta > 0$ when the Sun is on the side of the plane where
$\hat{\mathbf n}$ points.

**Why the cycle lasts $360°/|\dot\Omega - 0.9856°/\text{day}|$.** $\beta$ depends on where
the node is with respect to the Sun. The node moves at $\dot\Omega$, the Sun moves along
the ecliptic at $0.9856°$ per day: the angle between them changes at the difference of
the two rates, and $\beta$ repeats when this angle has changed by 360°.

- Crystal Eye: $360 / |-5.957 - 0.986| = 360 / 6.943 = 51.9$ days.
- ISS: $360 / |-4.947 - 0.986| = 360 / 5.933 = 60.7$ days.
- NUSES: the two rates are equal, the denominator is zero and there is no cycle. The change follows the time of seasons,
- because the Sun moves north and south of the equator during the year.

## How long in the Earth's shadow?

```{figure} img/slide-15.png
:width: 100%

*How long in the Earth's shadow?*
```

**The model.** The shadow of the Earth is a cylinder of radius $R$ behind the Earth,
with its axis opposite to the Sun. The satellite is in shadow when it is on the night
side ($\mathbf r\cdot\hat{\mathbf s} < 0$) and its distance from the axis is smaller
than $R$. 

**The formula, step by step.**

1. Let $\psi$ be the angle of the satellite along the orbit, counted from the point
   nearest to the Sun. The Sun is $\beta$ above the plane, so
   $\mathbf r\cdot\hat{\mathbf s} = a\cos\beta\cos\psi$.
2. The squared distance from the axis of the shadow is the squared length of
   $\mathbf r$ minus the squared component along the axis:
   $d^2 = a^2 - (a\cos\beta\cos\psi)^2 = a^2(1 - \cos^2\beta\cos^2\psi)$.
3. In shadow: $d < R$. Dividing by $a^2$ and using $\sin\rho = R/a$:

$$
1 - \cos^2\beta\cos^2\psi < \sin^2\rho
\quad\Longleftrightarrow\quad
\cos^2\beta\cos^2\psi > \cos^2\rho
\quad\Longleftrightarrow\quad
|\cos\psi| > \frac{\cos\rho}{\cos\beta}
$$

4. On the night side $\cos\psi < 0$, so the shadow is the arc around $\psi = 180°$ with
   half-width $\arccos(\cos\rho/\cos\beta)$. Its whole width, divided by 360°, is the
   fraction of the revolution in shadow; multiplied by $T_n$ it gives the duration:

$$
D = \frac{2\arccos(\cos\rho/\cos\beta)}{2\pi}\,T_n = \frac{T_n}{\pi}\,\arccos\!\left(\frac{\cos\rho}{\cos\beta}\right)
$$

**Why the limit is $|\beta| = \rho$.** The arccos exists only while
$\cos\rho/\cos\beta \le 1$, that is $\cos\beta \ge \cos\rho$, or $|\beta| \le \rho$. When
$|\beta| = \rho$ the orbit barely touches the edge of the shadow; above it, it passes beside
the shadow without entering. The same condition written with distances is the one on the
slide: $a\sin|\beta|$ is how far the orbital plane is from the axis of the shadow, and
it must be smaller than $R$.

## A whole mission of eclipses

```{figure} img/slide-16.png
:width: 100%

*A whole mission of eclipses*
```

