import { checkHorizontalWin, checkVerticalWin, sumBoard } from './helpers.js';

// returns true if any of the boards has a horizontal
// or vertical line otherwise false
const checkWin = (boards, lastNumPicked) => {
  const horizontalWinBoard = checkHorizontalWin(boards);
  if (horizontalWinBoard !== -1) {
    console.log('Part 1:', lastNumPicked * sumBoard(horizontalWinBoard));
    return true;
  }

  const verticalWinBoard = checkVerticalWin(boards);
  if (verticalWinBoard !== -1) {
    console.log('Part 1:', lastNumPicked * sumBoard(verticalWinBoard));
    return true;
  }

  return false;
};

export default checkWin;
