import countDepthIncrease from "./part1.js";

const countThreeSumIncrease = (depths) => {
  let threeSums = [];
  for (let idx = 1; (idx + 1) < depths.length; idx++) {
    const sum = depths[idx - 1] + depths[idx] + depths[idx + 1];
    threeSums.push(sum);
  }
  return countDepthIncrease(threeSums);
}

export default countThreeSumIncrease;
