import fs from 'fs';
import countDepthIncrease from './part1.js';
import countThreeSumIncrease from './part2.js';

let depths = fs.readFileSync('../input.txt', 'utf-8');

depths = depths.split('\n');
depths = depths.map((depth) => parseInt(depth, 10));

console.log('Depth increase count:', countDepthIncrease(depths));
console.log('Three sum increase count:', countThreeSumIncrease(depths));
