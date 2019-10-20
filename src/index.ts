import { partition, wrap, zip } from '@thi.ng/transducers'
import { intersectLineLine } from '@thi.ng/geom-isec'
import { Vec } from '@thi.ng/vectors'
import { isArray } from '@thi.ng/checks'

function edgeOrLineIterator<T>(items: Iterable<T>) {
  return partition(2, 1, wrap(items, 1, false, true)) as Iterable<[T, T]>
}

export function polygonScaler(polygon: Vec[], distance: number | number[]) {
  if (isArray(distance) && distance.length !== polygon.length) {
    throw new Error('Distances length must be the same length of the polygon.')
  }
  const distances = !isArray(distance) ? polygon.map(_ => distance) : distance

  const lines: [Vec, Vec][] = [...edgeOrLineIterator(polygon)]
  const angles = lines.map(l => Math.atan2(l[1][1] - l[0][1], l[1][0] - l[0][0]))
  const linesInDistance: [Vec, Vec][] = [...zip(lines, angles, distances)].reduce(
    (acc, [line, angle, distance], i) => {
      const p1 = [-distance * Math.sin(angle) + line[0][0], distance * Math.cos(angle) + line[0][1]]
      const p2 = [-distance * Math.sin(angle) + line[1][0], distance * Math.cos(angle) + line[1][1]]
      acc.push([p1, p2])
      return acc
    },
    [],
  )
  const intersections = [...edgeOrLineIterator(linesInDistance)].map(
    ([line1, line2]) => intersectLineLine(line1[0], line1[1], line2[0], line2[1]).isec as Vec,
  )
  return intersections
}
