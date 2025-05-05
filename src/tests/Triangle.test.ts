import { Point } from "../Point";
import { Triangle } from "../Triangle";

describe("Triangle", () => {
  const triangle = new Triangle([
    new Point(0, 0, 0),
    new Point(1, 0, 0),
    new Point(0, 1, 0)
  ]);

  it("должен вычислять периметр", () => {
    const perimeter = triangle.getPerimeter();
    expect(perimeter).toBeGreaterThan(2);
    expect(perimeter).toBeLessThan(4);
    expect(typeof perimeter).toBe("number");
  });

  it("должен вычислять площадь", () => {
    const area = triangle.getArea();
    expect(area).toBeCloseTo(0.5);
    expect(area).toBeGreaterThan(0);
    expect(typeof area).toBe("number");
  });
});
