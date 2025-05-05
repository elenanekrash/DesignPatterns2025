// src/shapes/Pyramid.ts

import { Shape } from './Shape';
import { Point } from './Point';
import { PointValidator } from './PointValidator';
import { ShapeResultValidator } from './ShapeResultValidator';

export class Pyramid extends Shape {
  constructor(points: Point[]) {
    PointValidator.validate(points, 4);
    super(points);
  }

  getPerimeter(): number {
    const [a, b, c, d] = this.points;
    const ab = a.distanceTo(b);
    const bc = b.distanceTo(c);
    const ca = c.distanceTo(a);
    const ad = a.distanceTo(d);
    const bd = b.distanceTo(d);
    const cd = c.distanceTo(d);
    const perimeter = ab + bc + ca + ad + bd + cd;

    ShapeResultValidator.validatePositiveNumber(perimeter, 'периметр');
    return perimeter;
  }

  getArea(): number {
    // Упростим: пусть площадь = площадь основания (треугольника ABC)
    const [a, b, c] = this.points;
    const ab = a.distanceTo(b);
    const bc = b.distanceTo(c);
    const ca = c.distanceTo(a);
    const p = (ab + bc + ca) / 2;
    const area = Math.sqrt(p * (p - ab) * (p - bc) * (p - ca));

    ShapeResultValidator.validatePositiveNumber(area, 'площадь');
    return area;
  }

  toString(): string {
    return `Пирамида с точками: ${this.points.map((p) => p.toString()).join(', ')}`;
  }

  getName(): string {
    return 'Пирамида';
  }
}
