import fs from 'fs';
import countDepthIncrease from './part1';
import countThreeSumIncrease from './part2';

let depths: number[] = fs
    .readFileSync('./input.txt', 'utf-8')
    .split('\n')
    .map((depth: string) => parseInt(depth, 10));

console.log('Depth increase count:', countDepthIncrease(depths));
console.log('Three sum increase count:', countThreeSumIncrease(depths));
