const countDepthIncrease = (depths: number[]): number => {
  let increaseCount: number = 0;
  for (let i = 1; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) { increaseCount++; }
  }
  return increaseCount;
}

export default countDepthIncrease;
