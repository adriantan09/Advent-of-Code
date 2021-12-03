const part1 = (instructions) => {
  let horizontalPos = 0;
  let depthPos = 0;

  instructions.forEach((step) => {
    const instruction = step.split(' ')[0];
    const value = parseInt(step.split(' ')[1]);

    switch (instruction) {
      case 'forward':
        horizontalPos += value;
        break;
      case 'down':
        depthPos += value;
        break;
      case 'up':
        depthPos -= value;
        break;
    }
  });
  return horizontalPos * depthPos;
};

export default part1;
