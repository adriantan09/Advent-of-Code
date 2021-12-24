const input2Array = (input) => {
  return input
    .split('\n')
    .map(e => {
      return e.split('').map(e => parseInt(e, 10))
    });
}

const findLowPoints = (points) => {
  const lowPoints = []
  for (let row = 0; row < points.length; row++) {
    for (let col = 0; col < points[0].length; col++) {
      const boundaries = findBoundaries(points, row, col)
      if (boundaries.filter(e => points[row][col] > e).length === 0) {
        lowPoints.push(points[row][col])
      }
    }
  }
  return lowPoints
}

const findBoundaries = (points, row, col) => {
  const boundaries = []
  for (let py = (row > 0 ? -1 : 0); py <= (row < points.length - 1 ? 1 : 0); py++) {
    for (let px = (col > 0 ? -1 : 0); px <= (col < points[0].length - 1 ? 1 : 0); px++) {
      if (py != 0 || px != 0) {
        boundaries.push(points[row + py][col + px])
      }
    }
  }
  return boundaries
}

const part1 = (input) => {
  const array = input2Array(input);
  const lowPoints = findLowPoints(array);
  return lowPoints.reduce((a, b) => a + b) + lowPoints.length;
};

export default part1;
