import fs from 'fs'
import part1 from './part1'
import part2 from './part2'

let instructions: number[] = fs
    .readFileSync('input.txt', 'utf-8')
    .split(',')
    .map((e) => parseInt(e, 10))

console.log('Fuel (part 1):', part1(instructions))
console.log('Fuel (part 2):', part2(instructions))
