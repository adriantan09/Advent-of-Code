import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let input = fs.readFileSync('input.txt', 'utf-8');

input = input.split('\r\n').filter((i) => i !== '');

// console.log('', part1(input));

const draw = input[0].split(',').map((i) => parseInt(i, 10));

const checkLastWin = (boards) => {
  const horizontalWinBoard = checkHorizontalWin(boards);
  if (horizontalWinBoard !== -1) {
    remainingBoards.splice(horizontalWinBoard, 1);
  }

  const verticalWinBoard = checkVerticalWin(boards);
  if (verticalWinBoard !== -1) {
    remainingBoards.splice(verticalWinBoard, 1);
  }

  if (remainingBoards.length === 1) {
    return remainingBoards[0].index;
  }

  return -1;
};

const checkWin = (boards, lastNumPicked) => {
  const horizontalWinBoard = checkHorizontalWin(boards);
  if (horizontalWinBoard !== -1) {
    console.log('BINGO!');
    console.log(lastNumPicked * sumBoard(horizontalWinBoard));
    return true;
  }

  const verticalWinBoard = checkVerticalWin(boards);
  if (verticalWinBoard !== -1) {
    console.log('BINGO!');
    console.log(lastNumPicked * sumBoard(verticalWinBoard));
    return true;
  }

  return false;
};

// Check to see if a board has filled a row
// returns true if there is otherwise false
const checkHorizontalWin = (boards) => {
  for (let board = 0; board < boards.length; board++) {
    for (let row = 0; row < 5; row++) {
      if (boards[board].board[row].filter((e) => e < 0).length === 5) {
        return board;
      }
    }
  }
  return -1;
};

// Check to see if a board has filled a column
// returns true if there is otherwise false
const checkVerticalWin = (boards) => {
  for (let board = 0; board < boards.length; board++) {
    for (let col = 0; col < 5; col++) {
      let colCount = 0;
      for (let row = 0; row < 5; row++) {
        if (boards[board].board[row][col] === -1) colCount++;
      }

      if (colCount === 5) {
        return board;
      }
    }
  }
  return -1;
};

// Convert the input into 5x5 2d arrays
const generateBoards = (input) => {
  const boards = [];
  for (let i = 1; i <= input.length - 1; i += 5) {
    const board = { board: [], index: 0 };
    for (let j = i; j < i + 5; j++) {
      board.board.push(
        input[j]
          .split(' ')
          .filter((i) => i !== '')
          .map((i) => parseInt(i, 10))
      );
    }
    board.index = (i - 1) / 5;
    boards.push(board);
  }
  return boards;
};

const boards = generateBoards(input);
const remainingBoards = [...boards];

for (let currDraw = 0; currDraw < draw.length; currDraw++) {
  boards.forEach((board) => {
    board.board.forEach((row) => {
      if (row.includes(draw[currDraw])) {
        row[row.indexOf(draw[currDraw])] = -1;
      }
    });
  });

  // if (checkWin(boards, draw[currDraw])) break;

  const lastBoard = checkLastWin(remainingBoards);
  if (lastBoard !== -1) {
    console.log(
      'Final Score:',
      (sumBoard(lastBoard) - draw[currDraw + 1]) * draw[currDraw + 1]
    );
  }
}

function sumBoard(board) {
  const boardSum = []
    .concat(...boards[board].board)
    .filter((e) => e !== -1)
    .reduce((a, b) => a + b);
  return boardSum;
}
