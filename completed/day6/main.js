import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let instructions = fs.readFileSync('input.txt', 'utf-8');

instructions = instructions.split(',').map((e) => parseInt(e, 10));

// Naive solution
console.log('Lanternfish after 80 days:', part1([...instructions], 80));

// Efficient solution
console.log('Lanternfish after 256 days:', part2(instructions, 256));
