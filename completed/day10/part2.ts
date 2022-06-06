import { checkInvalidBracket } from './part1'
import { openingBrackets, closingBrackets } from './data'

const part2 = (lines: string[]): number => {
    const totalScores: number[] = []
    lines.forEach(l => {
        const brackets: string | string[] = checkInvalidBracket(l)
        if (Array.isArray(brackets)) {
            const completion: string[] = brackets
                .reverse()
                .map(op => op = closingBrackets[openingBrackets.findIndex(e => e === op)])
            let totalScore: number = 0
            completion.forEach(closingBracket => {
                totalScore *= 5
                switch (closingBracket) {
                case ')':
                    totalScore += 1
                    break
                case ']':
                    totalScore += 2
                    break
                case '}':
                    totalScore += 3
                    break
                case '>':
                    totalScore += 4
                    break
                }
            })
            totalScores.push(totalScore)
        }
    })
    return totalScores.sort((a, b) => a - b)[(totalScores.length - 1) / 2]
};

export default part2
