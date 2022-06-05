export const gammaRate = (binaryStrings: string[]): string => {
  let gammaRate: string = '';

  for (let col = 0; col < binaryStrings[0].length; col++) {
    let oneCount: number = 0;
    let zeroCount: number = 0;
    for (let row = 0; row < binaryStrings.length; row++) {
      if (parseInt(binaryStrings[row].charAt(col))) {
        oneCount++;
      } else {
        zeroCount++;
      }
    }
    gammaRate = oneCount >= zeroCount 
      ? gammaRate.concat('1') : gammaRate.concat('0')
  }
  return gammaRate;
};

export const epsilonRate = (binaryString: string): string => {
  let invert: string = '';
  for (let bit of binaryString) {
    bit === '1' ? (invert = invert.concat('0')) : (invert = invert.concat('1'));
  }
  return invert;
};
