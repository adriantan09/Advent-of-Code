import fs from 'fs';

import checkWin from './part1.js';
import checkLastWin from './part2.js';
import { generateBoards, sumBoard } from './helpers.js';

let input = fs.readFileSync('input.txt', 'utf-8');

input = input.split('\n').filter((i) => i !== '');
const draw = input[0].split(',').map((i) => parseInt(i, 10));

export const boards = generateBoards(input);
const remainingBoards = [...boards];
let hasWon = false;

for (let currDraw = 0; currDraw < draw.length; currDraw++) {
  boards.forEach((board) => {
    board.board.forEach((row) => {
      if (row.includes(draw[currDraw])) {
        row[row.indexOf(draw[currDraw])] = -1;
      }
    });
  });

  // part 1
  if (!hasWon) {
    if (checkWin(boards, draw[currDraw])) hasWon = true;
  }

  // part 2
  const lastBoard = checkLastWin(remainingBoards);
  if (lastBoard !== -1) {
    console.log(
      'Part 2:',
      (sumBoard(lastBoard) - draw[currDraw + 1]) * draw[currDraw + 1]
    );
  }
}
