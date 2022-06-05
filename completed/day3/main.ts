import fs from 'fs';
import { gammaRate, epsilonRate } from './part1';
import { oxygenRating, co2Rating } from './part2';

let binaryStrings: string[] = fs
    .readFileSync('input.txt', 'utf-8')
    .split('\n');

const gamma = gammaRate(binaryStrings);
const epsilon = epsilonRate(gammaRate(binaryStrings));
console.log('Part 1:', parseInt(gamma, 2) * parseInt(epsilon, 2));

const oxygen = oxygenRating([...binaryStrings], 0);
const co2 = co2Rating([...binaryStrings], 0);

console.log('Part 2:', parseInt(oxygen, 2) * parseInt(co2, 2));
