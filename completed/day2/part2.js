const part2 = (instructions) => {
  let horizontalPos = 0;
  let depthPos = 0;
  let aim = 0;

  instructions.forEach((step) => {
    const instruction = step.split(' ')[0];
    const value = parseInt(step.split(' ')[1]);

    switch (instruction) {
      case 'forward':
        horizontalPos += value;
        depthPos += aim * value;
        break;
      case 'down':
        aim += value;
        break;
      case 'up':
        aim -= value;
        break;
    }
  });
  return horizontalPos * depthPos;
};

export default part2;
