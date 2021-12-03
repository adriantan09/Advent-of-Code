import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let instructions = fs.readFileSync('input.txt', 'utf-8');

instructions = instructions.split('\r\n');

console.log('Part 1: Horizontal Pos * Depth Pos =', part1(instructions));
console.log('Part 2: Horizontal Pos * Depth Pos =', part2(instructions));
