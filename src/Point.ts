export class Point {
  constructor(
    public x: number,
    public y: number,
    public z: number
  ) {}

  distanceTo(other: Point): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const dz = this.z - other.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }


  toString(): string {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}
