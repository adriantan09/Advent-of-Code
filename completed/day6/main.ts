import fs from 'fs'
import part1 from './part1'
import part2 from './part2'

let instructions: number[] = fs
    .readFileSync('input.txt', 'utf-8')
    .split(',')
    .map((e) => parseInt(e, 10))

// Naive solution
console.log('Part 1:', part1([...instructions], 80))

// Efficient solution
console.log('Part 2:', part2(instructions, 256))
