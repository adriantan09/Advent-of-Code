export const gammaRate = (binaryStrings) => {
  let gammaRate = '';

  for (let col = 0; col < binaryStrings[0].length; col++) {
    let oneCount = 0;
    let zeroCount = 0;
    for (let row = 0; row < binaryStrings.length; row++) {
      if (parseInt(binaryStrings[row].charAt(col))) {
        oneCount++;
      } else {
        zeroCount++;
      }
    }

    if (oneCount >= zeroCount) {
      gammaRate = gammaRate.concat('1');
    } else {
      gammaRate = gammaRate.concat('0');
    }
  }
  return gammaRate;
};

export const epsilonRate = (binaryString) => {
  let invert = '';
  for (let bit of binaryString) {
    bit === '1' ? (invert = invert.concat('0')) : (invert = invert.concat('1'));
  }
  return invert;
};
