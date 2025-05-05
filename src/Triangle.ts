// src/shapes/Triangle.ts

import { Shape } from './Shape';
import { Point } from './Point';
import { PointValidator } from './PointValidator';
import { ShapeResultValidator } from './ShapeResultValidator';

export class Triangle extends Shape {
  constructor(points: Point[]) {
    PointValidator.validate(points, 3);
    super(points);
  }

  getPerimeter(): number {
    const [a, b, c] = this.points;
    const ab = a.distanceTo(b);
    const bc = b.distanceTo(c);
    const ca = c.distanceTo(a);
    const perimeter = ab + bc + ca;

    ShapeResultValidator.validatePositiveNumber(perimeter, 'периметр');
    return perimeter;
  }

  getArea(): number {
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
    return `Треугольник с точками: ${this.points.map(p => p.toString()).join(', ')}`;
  }

  getName(): string {
    return 'Треугольник';
  }
}
