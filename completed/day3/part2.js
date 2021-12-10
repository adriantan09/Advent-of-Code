import { gammaRate, epsilonRate } from './part1.js';

export const oxygenRating = (binaryStrings, i) => {
  if (binaryStrings.length === 1) return binaryStrings[0];

  const refinedStrings = gammaRate(binaryStrings);

  for (let j = 0; j < binaryStrings.length; j++) {
    if (binaryStrings[j].charAt(i) !== refinedStrings[i]) {
      binaryStrings.splice(j, 1);
      j -= 1;
    }
  }

  return oxygenRating(binaryStrings, i + 1);
};

export const co2Rating = (binaryStrings, i) => {
  if (binaryStrings.length === 1) return binaryStrings[0];

  const refinedStrings = epsilonRate(gammaRate(binaryStrings));

  for (let j = 0; j < binaryStrings.length; j++) {
    if (binaryStrings[j].charAt(i) !== refinedStrings[i]) {
      binaryStrings.splice(j, 1);
      j -= 1;
    }
  }

  return co2Rating(binaryStrings, i + 1);
};
