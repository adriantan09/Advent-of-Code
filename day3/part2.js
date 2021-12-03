import part1 from './part1.js';

const part2 = (binaryStrings) => {
  const [gammaRate, epsilonRate] = part1(binaryStrings);
  console.log('binaryStrings', binaryStrings);
  console.log('gammaRate', gammaRate);

  [...gammaRate].forEach((bit, idx) => {
    if (idx > 0) return;
    console.log('idx', idx);
    console.log('bit', bit);

    binaryStrings.forEach((binaryString) => {
      if (binaryString.charAt(idx) !== bit) {
        const removeIdx = binaryStrings.indexOf(binaryString);
        console.log('removing', binaryString);
        console.log('removeIdx', removeIdx);
        binaryStrings.splice(removeIdx, 1);
        console.log('binaryStrings', binaryStrings);
        // return;
      }
    });
  });
};

export default part2;
