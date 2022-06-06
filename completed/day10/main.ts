import fs from 'fs';
import { part1 } from './part1'
import part2 from './part2'

let instructions: string[] = fs
    .readFileSync('input.txt', 'utf-8')
    .split('\n')

console.log('Part 1:', part1(instructions))
console.log('Part 2:', part2(instructions))
