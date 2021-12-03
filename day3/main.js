import fs from 'fs';
import part1 from './part1.js';
import part2 from './part2.js';

let binaryStrings = fs.readFileSync('example.txt', 'utf-8');

binaryStrings = binaryStrings.split('\r\n');

const [gammaRate, epsilonRate] = part1(binaryStrings);

// console.log(
//   'Power Consumption:',
//   parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
// );

console.log('Life Support Rating:', part2(binaryStrings));
