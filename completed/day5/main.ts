import fs from 'fs'
import { drawHorizontal, drawVertical } from './part1'
import drawDiagonal from './part2'

export interface Positions {
    startX: number,
    startY: number,
    endX: number,
    endY: number
}

let input: string[] = fs
    .readFileSync('input.txt', 'utf-8')
    .split('\n')

const matrix: number[][] = new Array(1000).fill(0).map(() => new Array(1000).fill(0))

const filterInput = (input: string[]): string[] => {
    let filteredInput: string[] = input
    filteredInput.forEach((line: string) => {
        const indicies: number[] = line
            .match(/\d+/g)!
            .map((num: string) => parseInt(num, 10))

        const positions: Positions = {
            startX: indicies[0], startY: indicies[1],
            endX: indicies[2], endY: indicies[3]
        }

        const isHorizontal = positions.startX === positions.endX
        const isVertical = positions.startY === positions.endY
        const isDiagonal = !isHorizontal && !isVertical

        if (isHorizontal) drawHorizontal(matrix, positions)

        if (isVertical) drawVertical(matrix, positions)

        if (isDiagonal) drawDiagonal(matrix, positions)
    })
    return filteredInput
}

input = filterInput(input)

const countOverlap = (matrix: number[][]): number => {
    let overlap: number = 0
    matrix.forEach((row: number[]) => {
        row.forEach((col: number) => {
            if (col >= 2) overlap++
        })
    })
    return overlap
}

console.log('lines that overlap:', countOverlap(matrix))
