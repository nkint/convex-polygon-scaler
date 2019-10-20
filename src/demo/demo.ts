import * as s from '@thi.ng/hiccup-svg'
import { renderOnce } from '@thi.ng/hdom'
import { polygonScaler } from '..'
import * as vec from '@thi.ng/vectors'
import { transduce, map, push, normRange } from '@thi.ng/transducers'
import { TAU, cossin } from '@thi.ng/math'
import { Vec } from '@thi.ng/vectors'

const makePoly = (n: number, r: number) =>
  transduce(map((i: number) => cossin(i * TAU, r) as Vec), push(), normRange(n, false))

const _polygon = makePoly(3 + Math.round(Math.random() * 10), 50) as Vec[]

_polygon.forEach((point: Vec) => {
  vec.add2(point, point, [Math.random() * 10, Math.random() * 10])
  vec.add2(point, point, [150, 150])
})

const randomRotation = Math.random()
const polygon = _polygon.map((point: Vec) =>
  vec.rotateAroundPoint2([], point, [150, 150], Math.PI * randomRotation),
)

const dwarf = polygonScaler(polygon, -10)
const bigger = polygonScaler(polygon, 10)

console.assert(dwarf.length === polygon.length, 'length of polygon must be the same')

const app = () => {
  const width = window.innerWidth
  const height = 500

  return [
    'div#app',

    s.svg(
      {
        class: 'w-100 h-100',
        preserveAspectRatio: 'xMidYMid',
        viewBox: `0 0 ${width} ${height}`,
      },
      // s.rect([1, 1], width - 2, height - 2, { stroke: 'black', fill: 'none' }),
      // s.group(
      //   { 'stroke-width': 2 },
      //   lines.map((l, i) => s.line(l[0], l[1], { stroke: colors[i] })),
      // ),
      // s.group(
      //   { 'stroke-width': 2 },
      //   linesInDistance.map((l, i) => s.line(l[0], l[1], { stroke: colors[i] })),
      // ),
      // s.group(
      //   { 'stroke-width': 1 },
      //   intersections.map((p, i) => s.circle(p, 5, { stroke: colors[i], fill: 'none' })),
      // ),
      // s.circle([150, 150], 10, { fill: 'none', stroke: 'DimGray' }),
      s.polygon(polygon, { 'stroke-width': 2, fill: 'none', stroke: 'DimGray' }),
      s.polygon(dwarf, { 'stroke-width': 2, fill: 'none', stroke: 'silver' }),
      s.polygon(bigger, { 'stroke-width': 2, fill: 'none', stroke: 'silver' }),
    ),
  ]
}

renderOnce(app(), { root: document.body })
