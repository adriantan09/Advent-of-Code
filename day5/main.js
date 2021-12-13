import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let input = fs.readFileSync('input.txt', 'utf-8');
input = input.split('\n');

const filterInput = (input) => {
  const hLines = [];
  const vLines = [];
  const dLines = [];

  input.forEach((line) => {
    line = line.match(/\d+/g).map((num) => parseInt(num, 10));

    line = { startX: line[0], startY: line[1], endX: line[2], endY: line[3] };

    if (line.startX === line.endX) {
      if (line.startY > line.endY) {
        [line.startY, line.endY] = [line.endY, line.startY];
      }
      vLines.push(line);
    } else if (line.startY === line.endY) {
      if (line.startX > line.endX) {
        [line.startX, line.endX] = [line.endX, line.startX];
      }
      hLines.push(line);
    } else {
      if (
        (line.startX > line.endX && line.startY > line.endY) ||
        (line.startX < line.endX && line.startY > line.endY)
      ) {
        [line.startX, line.endX] = [line.endX, line.startX];
        [line.startY, line.endY] = [line.endY, line.startY];
      }
      dLines.push(line);
    }
  });
  return { horizontal: hLines, vertical: vLines, diagonal: dLines };
};

input = filterInput(input);

const matrix = new Array(1000).fill(0).map(() => new Array(1000).fill(0));

input.vertical.forEach((line) => {
  // top -> bottom
  for (let y = line.startY; y <= line.endY; y++) {
    matrix[y][line.startX]++;
  }
});

input.horizontal.forEach((line) => {
  // left -> right
  for (let x = line.startX; x <= line.endX; x++) {
    matrix[line.startY][x]++;
  }
});

input.diagonal.forEach((line) => {
  if (line.startX < line.endX && line.startY < line.endY) {
    // top left -> bottom right
    for (let x = line.startX, y = line.startY; x <= line.endX; x++, y++) {
      matrix[y][x]++;
    }
  } else {
    // top right -> bottom left
    // console.log('top right -> bottom left');
    // console.log('x: ' + line.startX + ' y: ' + line.startY);
    for (let x = line.startX, y = line.startY; x >= line.endX; x--, y++) {
      matrix[y][x]++;
    }
  }
});

// console.log('instructions:', input);

const countOverlap = (matrix) => {
  let overlap = 0;
  matrix.forEach((row) => {
    row.forEach((col) => {
      if (col >= 2) overlap++;
    });
  });
  return overlap;
};

const printMatrix = (matrix) => {
  matrix.forEach((row) => {
    console.log(row.join(' '));
  });
};
// printMatrix(matrix);

console.log('lines that overlap:', countOverlap(matrix));
// console.log('', part2(instructions));
