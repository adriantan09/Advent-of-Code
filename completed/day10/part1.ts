import { openingBrackets, closingBrackets } from './data'

export const part1 = (lines: string[]): number => {
    let totalError: number = 0
    lines.forEach(line => {
        const bracket: string | string[] = checkInvalidBracket(line)
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

export const checkInvalidBracket = (line: string): string | string[] => {
    const bracketStack: string[] = []
    for (let char of line) {
        if (openingBrackets.includes(char)) {
            bracketStack.push(char)
        } else {
            const openingIdx: number = openingBrackets
                .findIndex(e => e === bracketStack[bracketStack.length - 1])
            const closingIdx: number = closingBrackets
                .findIndex(e => e === char)
            if (openingIdx === closingIdx) {
                bracketStack.pop()
            } else {
                return char
            }
        }
    }
    return bracketStack
}

