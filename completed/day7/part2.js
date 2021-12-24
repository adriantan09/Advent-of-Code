const part2 = (crabs) => {
  crabs.sort((c1, c2) => c1 - c2);
  const min = crabs[0]
  const max = crabs[crabs.length - 1];
  let minCost = Infinity;
  for (let currPos = min; currPos <= max; currPos++) {
    const currCost = calcTotalMoveCost(currPos, crabs);
    if (currCost < minCost) {
      minCost = currCost;
    }
  }

  return minCost;
};

const calcCrabCost = (start, end) => {
  let cost = 0;
  const dist = Math.abs(start - end);
  for (let i = 0; i <= dist; i++) {
    cost += i;
  }
  return cost;
}

const calcTotalMoveCost = (currPos, crabs) => {
  let totalCost = 0;
  crabs.forEach(crab => {
    totalCost += calcCrabCost(crab, currPos)
  })
  return totalCost;
}

export default part2;
