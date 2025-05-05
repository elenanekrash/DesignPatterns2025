import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { Point } from './Point';
import { ShapeFactory } from './ShapeFactory';
import logger from './logger';
import { POINT_GROUP_REGEX, REMOVE_PARENS_REGEX } from './constants';

async function processFile(filePath: string, shapeType: string) {
  const fullPath = path.resolve(__dirname, filePath);
  const rl = readline.createInterface({
    input: fs.createReadStream(fullPath),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    try {
      const points = parsePoints(line);
      const shape = ShapeFactory.createShape(shapeType, points);
      console.log(shape.toString());
      console.log(`Периметр: ${shape.getPerimeter().toFixed(2)}`);
      console.log(`Площадь: ${shape.getArea().toFixed(2)}`);
    } catch (error) {
      logger.error(`Ошибка обработки строки "${line}": ${(error as Error).message}`);
    }
  }
}

function parsePoints(line: string): Point[] {
  const matches = line.match(POINT_GROUP_REGEX);
  //console.log(matches);

  if (!matches || matches.length === 0) {
    throw new Error('Не найдены координаты');
  }

  return matches.map((match) => {
    const coords = match
      .replace(REMOVE_PARENS_REGEX, '')
      .split(',')
      .map((n) => parseFloat(n.trim()));

    if (coords.length !== 3 || coords.some(isNaN)) {
      throw new Error(`Некорректные координаты: ${match}`);
    }

    return new Point(coords[0], coords[1], coords[2]);
  });
}

async function main() {
  logger.info('Приложение запущено');

  await processFile('../data/Triangle.txt', 'triangle');
  await processFile('../data/Pyramid.txt', 'pyramid');

  logger.info('Приложение завершено');
}

main().catch((err) => logger.error(`Критическая ошибка: ${err.message}`));
