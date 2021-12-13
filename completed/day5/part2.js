const drawDiagonal = (matrix, line) => {
  if (
    (line.startX > line.endX && line.startY > line.endY) ||
    (line.startX < line.endX && line.startY > line.endY)
  ) {
    [line.startX, line.endX] = [line.endX, line.startX];
    [line.startY, line.endY] = [line.endY, line.startY];
  }

  let y = line.startY;
  if (line.startX < line.endX) {
    // top left -> bottom right
    for (let x = line.startX; x <= line.endX; x++, y++) {
      matrix[y][x]++;
    }
  } else {
    // top right -> bottom left
    for (let x = line.startX; x >= line.endX; x--, y++) {
      matrix[y][x]++;
    }
  }
};
export default drawDiagonal;
