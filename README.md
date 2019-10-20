# Convex polygon scaler

Scale a convex polygon by a fixed amount.

## How does it differs from scale?

This method is area independent.

Such as the distance between
the middle point of an edge of the original quad
and the middle point of the respective edge of the scaled polygon is always fixed
and is not dependent by the area of the polygon.

## Usage example

Polygon is a list of 2D vectors `[x,y]` in clockwise or counter-clockwise order.

```js
const _polygon = [[100, 100], [100, 200], [200, 200], [200, 100]]
const dwarf = polygonScaler(polygon, -10)
// [[110,190],[190,190],[190,110],[110,110]]
```

## Credits

Written in Typescript with @thi.ng umbrella library.
