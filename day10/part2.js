import { checkInvalidBracket } from './part1.js'
import { openingBrackets, closingBrackets } from './data.js'

const part2 = (lines) => {
  const totalScores = []
  lines.forEach(l => {
    const brackets = checkInvalidBracket(l)
    if (Array.isArray(brackets)) {
      const completion = brackets.reverse().map(op => op = closingBrackets[openingBrackets.findIndex(e => e === op)])
      let totalScore = 0
      completion.forEach(closingBracket => {
        totalScore *= 5
        switch (closingBracket) {
          case ')':
            totalScore += 1
            break;
          case ']':
            totalScore += 2
            break;
          case '}':
            totalScore += 3
            break;
          case '>':
            totalScore += 4
            break;
        }
      })
      totalScores.push(totalScore)
    }
  })
  return totalScores.sort((a, b) => a - b)[(totalScores.length - 1) / 2];
};

export default part2;
