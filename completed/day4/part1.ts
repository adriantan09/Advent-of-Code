import { Board, checkHorizontalWin, checkVerticalWin, sumBoard } from './util';

// returns true if any of the boards has a horizontal
// or vertical line otherwise false
const checkWin = (boards: Board[], lastNumPicked: number): boolean => {
    const horizontalWinBoard: number = checkHorizontalWin(boards)
    if (horizontalWinBoard !== -1) {
        console.log('Part 1:', lastNumPicked * sumBoard(boards[horizontalWinBoard]))
        return true
    }

    const verticalWinBoard: number = checkVerticalWin(boards)
    if (verticalWinBoard !== -1) {
        console.log('Part 1:', lastNumPicked * sumBoard(boards[verticalWinBoard]))
        return true
    }

    return false
};

export default checkWin;
