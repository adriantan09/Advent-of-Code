import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let binaryStrings = fs.readFileSync('example.txt', 'utf-8');

binaryStrings = binaryStrings.split('\r\n');

console.log('Power Consumption:', part1(binaryStrings));
// console.log('', part2(instructions));
