import { gammaRate, epsilonRate } from './part1';

export const oxygenRating = (binaryStrings: string[], i: number): string => {
  if (binaryStrings.length === 1) return binaryStrings[0];

  const refinedStrings: string = gammaRate(binaryStrings);

  for (let j = 0; j < binaryStrings.length; j++) {
    if (binaryStrings[j].charAt(i) !== refinedStrings[i]) {
      binaryStrings.splice(j, 1);
      j -= 1;
    }
  }

  return oxygenRating(binaryStrings, i + 1);
};

export const co2Rating = (binaryStrings: string[], i: number): string => {
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
