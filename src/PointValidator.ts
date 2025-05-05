import { Point } from "./Point";

export class PointValidator {
  static validate(points: Point[], expectedCount: number): void {
    if (points.length !== expectedCount) {
      throw new Error(`Ожидалось ${expectedCount} точек, получено ${points.length}`);
    }

    points.forEach((p, i) => {
      if (![p.x, p.y, p.z].every((coord) => typeof coord === 'number' && !isNaN(coord))) {
        throw new Error(`Некорректные координаты у точки ${i + 1}: (${p.x}, ${p.y}, ${p.z})`);
      }
    });
  }
}
