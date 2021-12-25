const openingBrackets = ['(', '[', '{', '<']
const closingBrackets = [')', ']', '}', '>']

const part1 = (lines) => {
  let totalError = 0
  lines.forEach(line => {
    const bracket = checkInvalidBracket(line)
    switch (bracket) {
      case ')':
        totalError += 3
        break;
      case ']':
        totalError += 57
        break;
      case '}':
        totalError += 1197
        break;
      case '>':
        totalError += 25137
        break;
    }
  })
  return totalError
};

const checkInvalidBracket = (line) => {
  const bracketStack = []
  for (let char of line) {
    if (openingBrackets.includes(char)) {
      bracketStack.push(char)
    } else {
      const openingIdx = openingBrackets.findIndex(e => e === bracketStack[bracketStack.length - 1])
      const closingIdx = closingBrackets.findIndex(e => e === char)
      if (openingIdx === closingIdx) {
        bracketStack.pop()
      } else {
        return char
      }
    }
  }
  return null
}

export default part1;
