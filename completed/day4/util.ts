export interface Board {
    board: number[][],
    index: number
}

// Convert the input into 5x5 2d arrays
export const generateBoards = (input: string[]): Board[] => {
    const boards: Board[] = [];
    for (let i = 1; i <= input.length - 1; i += 5) {
        const board: Board = { board: [], index: 0 }
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

// Given a board, sum all of the unmarked numbers on it
export const sumBoard = (board: Board): number => {
    return board.board
        .flat()
        .filter((e) => e !== -1)
        .reduce((a, b) => a + b)
};

// Check to see if a board has filled a row
// returns true if there is otherwise false
export const checkHorizontalWin = (boards: Board[]): number => {
    for (let board = 0; board < boards.length; board++) {
        for (let row = 0; row < 5; row++) {
            if (boards[board].board[row].filter((e) => e < 0).length === 5) {
                return board
            }
        }
    }
    return -1
};

// Check to see if a board has filled a column
// returns true if there is otherwise false
export const checkVerticalWin = (boards: Board[]): number => {
    for (let board = 0; board < boards.length; board++) {
        for (let col = 0; col < 5; col++) {
            let colCount: number = 0;
            for (let row = 0; row < 5; row++) {
                if (boards[board].board[row][col] === -1) colCount++
            }

            if (colCount === 5) {
                return board
            }
        }
    }
    return -1
};
