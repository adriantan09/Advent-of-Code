import fs from 'fs'
import checkWin from './part1'
import checkLastWin from './part2'
import { Board, generateBoards, sumBoard } from './util'

let input: string[] = fs
    .readFileSync('input.txt', 'utf-8')
    .split('\n')
    .filter((s: string) => s !== '')

const draw: number[] = input[0]
    .split(',')
    .map((i) => parseInt(i, 10))

export const boards: Board[] = generateBoards(input)
const remainingBoards: Board[] = [...boards]
let hasWon = false

for (let currDraw = 0; currDraw < draw.length; currDraw++) {
    boards.forEach((board) => {
        board.board.forEach((row) => {
        if (row.includes(draw[currDraw])) {
            row[row.indexOf(draw[currDraw])] = -1
        }
        })
    })

    // part 1
    if (!hasWon) {
        if (checkWin(boards, draw[currDraw])) hasWon = true
    }

    // part 2
    const lastBoard = checkLastWin(remainingBoards)
    if (lastBoard !== -1) {
        console.log(
            'Part 2:',
            (sumBoard(boards[lastBoard]) - draw[currDraw + 1]) * draw[currDraw + 1]
        )
    }
}
