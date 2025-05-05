import { Point } from "./Point";
import { Shape } from "./Shape";
import { Triangle } from "./Triangle";
import { Pyramid } from "./Pyramid";

export class ShapeFactory {
  static createShape(type: string, points: Point[]): Shape {
    switch (type.toLowerCase()) {
      case "triangle":
        return new Triangle(points);
      case "pyramid":
        return new Pyramid(points);
      default:
        throw new Error(`Неизвестный тип фигуры: ${type}`);
    }
  }
}
