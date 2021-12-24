import fs from 'fs';

let instructions = fs.readFileSync('input.txt', 'utf-8');
instructions = instructions.split('\n');

// credit to Will (a Google employee)
let total = Object.entries(instructions.map((line) => line.split('| ')[1].split(' ')).flat().reduce((obj, input) => {obj[input.length] = (obj[input.length] || 0) + 1; return obj; }, {})).reduce((total, [length, count]) => '2347'.includes(length) ? total + count : total, 0);
console.log(total);
