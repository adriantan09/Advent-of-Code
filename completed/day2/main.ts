import fs from 'fs';
import part1 from './part1';
import part2 from './part2';

let instructions: string[] = fs
    .readFileSync('input.txt', 'utf-8')
    .split('\n');

console.log('Part 1: Horizontal Pos * Depth Pos =', part1(instructions));
console.log('Part 2: Horizontal Pos * Depth Pos =', part2(instructions));
