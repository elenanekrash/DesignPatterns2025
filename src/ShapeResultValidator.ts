export class ShapeResultValidator {
    static validatePositiveNumber(value: number, description: string): void {
      if (isNaN(value) || value < 0) {
        throw new Error(`Некорректный результат: ${description} = ${value}`);
      }
    }
  }
  