import { Point } from "./Point";

export abstract class Shape {
  protected points: Point[];

  constructor(points: Point[]) {
    this.points = points;
  }

  abstract getName(): string;
  abstract getPerimeter(): number;
  abstract getArea(): number;

  toString(): string {
    return `${this.getName()} с точками: ${this.points.map(p => p.toString()).join(", ")}`;
  }
}
