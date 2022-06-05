const part2 = (crabs: number[]): number => {
  crabs.sort((c1, c2) => c1 - c2)
  const min: number = crabs[0]
  const max: number = crabs[crabs.length - 1]
  let minCost = Infinity
  for (let currPos = min; currPos <= max; currPos++) {
    const currCost = calcTotalMoveCost(currPos, crabs)
    if (currCost < minCost) {
      minCost = currCost
    }
  }

  return minCost
}

const calcCrabCost = (start: number, end: number): number => {
  let cost: number = 0
  const dist: number = Math.abs(start - end)
  for (let i = 0; i <= dist; i++) {
    cost += i
  }
  return cost
}

const calcTotalMoveCost = (currPos: number, crabs: number[]): number => {
  let totalCost: number = 0
  crabs.forEach(crab => {
    totalCost += calcCrabCost(crab, currPos)
  })
  return totalCost
}

export default part2
