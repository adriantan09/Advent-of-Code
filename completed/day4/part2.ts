import { Board, checkHorizontalWin, checkVerticalWin } from './util'

// returns the index of the last board otherwise returns -1
const checkLastWin = (boards: Board[]): number => {
    const horizontalWinBoard: number = checkHorizontalWin(boards)
    if (horizontalWinBoard !== -1) {
        boards.splice(horizontalWinBoard, 1)
    }

    const verticalWinBoard: number = checkVerticalWin(boards)
    if (verticalWinBoard !== -1) {
        boards.splice(verticalWinBoard, 1)
    }

    if (boards.length === 1) { return boards[0].index }

    return -1;
};

export default checkLastWin;
