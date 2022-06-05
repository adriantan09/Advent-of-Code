const countDepthIncrease = (depths: number[]) => {
  let increaseCount: number = 0;
  for (let idx: number = 1; idx < depths.length; idx++) {
    if (depths[idx] > depths[idx - 1]) { increaseCount++; }
  }
  return increaseCount;
}

export default countDepthIncrease;
