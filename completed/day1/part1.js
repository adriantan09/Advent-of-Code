const countDepthIncrease = (depths) => {
  let increaseCount = 0;
  for (let idx = 1; idx < depths.length; idx++) {
    if (depths[idx] > depths[idx - 1]) { increaseCount++; }
  }
  return increaseCount;
}

export default countDepthIncrease;