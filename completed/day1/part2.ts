import countDepthIncrease from "./part1";

const countThreeSumIncrease = (depths: number[]): number => {
  let threeSums: number[] = [];
  for (let idx = 1; (idx + 1) < depths.length; idx++) {
    const sum: number = depths[idx - 1] + depths[idx] + depths[idx + 1];
    threeSums.push(sum);
  }
  return countDepthIncrease(threeSums);
}

export default countThreeSumIncrease;
