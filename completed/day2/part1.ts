const part1 = (instructions: string[]): number => {
  let horizontalPos: number = 0;
  let depthPos: number = 0;

  instructions.forEach((step: string) => {
    const instruction: string = step.split(' ')[0];
    const value: number = parseInt(step.split(' ')[1]);

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
