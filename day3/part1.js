const part1 = (binaryStrings) => {
  let gammaRate = '';
  let epsilonRate = '';

  // Assumes that all binary strings provided are the same length
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

    if (oneCount > zeroCount) {
      gammaRate = gammaRate.concat('1');
      epsilonRate = epsilonRate.concat('0');
    } else {
      gammaRate = gammaRate.concat('0');
      epsilonRate = epsilonRate.concat('1');
    }
  }

  return [gammaRate, epsilonRate];
};

export default part1;
