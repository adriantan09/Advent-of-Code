import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let instructions = fs.readFileSync('input.txt', 'utf-8');

instructions = instructions.split(',').map((e) => parseInt(e, 10));

console.log('Fuel (part 1):', part1(instructions));
console.log('Fuel (part 2):', part2(instructions));
