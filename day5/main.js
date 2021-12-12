import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let input = fs.readFileSync('input.txt', 'utf-8');
input = input.split('\n');

const filterInput = (input) => {
  const hLines = [];
  const vLines = [];
  input.forEach((line) => {
    line = line.match(/\d+/g).map((num) => parseInt(num, 10));

    // part 1: only consider horizontal and vertical lines
    line = { startX: line[0], startY: line[1], endX: line[2], endY: line[3] };

    if (line.startX === line.endX) {
      vLines.push(line);
    } else if (line.startY === line.endY) {
      hLines.push(line);
    }
  });
  return { horizontal: hLines, vertical: vLines };
};

input = filterInput(input);

const matrix = new Array(1000).fill(0).map(() => new Array(1000).fill(0));

input.vertical.forEach((line) => {
  if (line.startY < line.endY) {
    for (let i = line.startY; i <= line.endY; i++) {
      matrix[i][line.startX]++;
    }
  } else {
    for (let i = line.startY; i >= line.endY; i--) {
      matrix[i][line.startX]++;
    }
  }
});

input.horizontal.forEach((line) => {
  if (line.startX < line.endX) {
    for (let i = line.startX; i <= line.endX; i++) {
      matrix[line.startY][i]++;
    }
  } else {
    for (let i = line.startX; i >= line.endX; i--) {
      matrix[line.startY][i]++;
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
