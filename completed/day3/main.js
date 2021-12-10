import fs from 'fs';
import { gammaRate, epsilonRate } from './part1.js';
import { oxygenRating, co2Rating } from './part2.js';

let binaryStrings = fs.readFileSync('input.txt', 'utf-8');
binaryStrings = binaryStrings.split('\n');

const gamma = gammaRate(binaryStrings);
const epsilon = epsilonRate(gammaRate(binaryStrings));
console.log('Power Consumption:', parseInt(gamma, 2) * parseInt(epsilon, 2));

const oxygen = oxygenRating([...binaryStrings], 0);
const co2 = co2Rating([...binaryStrings], 0);

console.log('Life Support Rating:', parseInt(oxygen, 2) * parseInt(co2, 2));
