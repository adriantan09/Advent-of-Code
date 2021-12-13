export const drawHorizontal = (matrix, line) => {
  // sort top -> bottom
  if (line.startY > line.endY) {
    [line.startY, line.endY] = [line.endY, line.startY];
  }

  for (let y = line.startY; y <= line.endY; y++) {
    matrix[y][line.startX]++;
  }
};

export const drawVertical = (matrix, line) => {
  // sort left -> right
  if (line.startX > line.endX) {
    [line.startX, line.endX] = [line.endX, line.startX];
  }

  for (let x = line.startX; x <= line.endX; x++) {
    matrix[line.startY][x]++;
  }
};
