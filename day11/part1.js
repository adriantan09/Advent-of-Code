const input2Array = (input) => {
  return input
    .split('\n')
    .map(e => {
      return e.split('').map(e => parseInt(e, 10))
    });
}

const countFlashes = (array, steps) => {
  for (let step = 0; step < steps; step++) {
    for (let row = 0; row < array[0].length; row++) {
      for (let col = 0; col < array.length; col++) {
        array[row][col]++

        // Flashes
        if (array[row][col] > 9) {
          const boundaries = findBoundaries(array, row, col)
          // console.log(`(${row}, ${col}): ${boundaries}`)
          boundaries.forEach(e => array[e[0]][e[1]]++)
          array[row][col] = 0
        }
      }
    }
  }
  return array
}

const findBoundaries = (array, row, col) => {
  const boundaries = []
  for (let py = (row > 0 ? -1 : 0); py <= (row < array.length - 1 ? 1 : 0); py++) {
    for (let px = (col > 0 ? -1 : 0); px <= (col < array[0].length - 1 ? 1 : 0); px++) {
      if ((py != 0 || px != 0) && array[row][col] < 9) {
        boundaries.push([row + py, col + px])
      }
    }
  }
  return boundaries
}

const part1 = (instructions) => {
  let  array = input2Array(instructions);
  array = countFlashes(array, 1)
  console.log(array.join('\n'))
  // return 0;
};

export default part1;
