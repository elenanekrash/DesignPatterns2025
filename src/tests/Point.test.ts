import { Point } from "../Point";

describe("Point", () => {
  it("должен правильно вычислять расстояние до другой точки", () => {
    const p1 = new Point(0, 0, 0);
    const p2 = new Point(3, 4, 0);

    const distance = p1.distanceTo(p2);

    expect(distance).toBeCloseTo(5);
    expect(typeof distance).toBe("number");
    expect(distance).toBeGreaterThan(4);
  });
});
