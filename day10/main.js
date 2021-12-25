import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let instructions = fs.readFileSync('input.txt', 'utf-8');

instructions = instructions.split('\n');

console.log('Total syntax error:', part1(instructions));
// console.log('', part2(instructions));
