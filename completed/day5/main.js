import fs from 'fs';
import { drawHorizontal, drawVertical } from './part1.js';
import drawDiagonal from './part2.js';

let input = fs.readFileSync('input.txt', 'utf-8');
input = input.split('\n');

const matrix = new Array(1000).fill(0).map(() => new Array(1000).fill(0));

const filterInput = (input) => {
  input.forEach((line) => {
    line = line.match(/\d+/g).map((num) => parseInt(num, 10));

    line = { startX: line[0], startY: line[1], endX: line[2], endY: line[3] };

    const isHorizontal = line.startX === line.endX;
    const isVertical = line.startY === line.endY;
    const isDiagonal = !isHorizontal && !isVertical;

    if (isHorizontal) drawHorizontal(matrix, line);

    if (isVertical) drawVertical(matrix, line);

    if (isDiagonal) drawDiagonal(matrix, line);
  });
};

input = filterInput(input);

const countOverlap = (matrix) => {
  let overlap = 0;
  matrix.forEach((row) => {
    row.forEach((col) => {
      if (col >= 2) overlap++;
    });
  });
  return overlap;
};

console.log('lines that overlap:', countOverlap(matrix));
