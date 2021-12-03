import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let instructions = fs.readFileSync('example.txt', 'utf-8');

instructions = instructions.split('\r\n');

console.log('', part1(instructions));
console.log('', part2(instructions));
