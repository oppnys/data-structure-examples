import findWords from "../../../src/utils/stack/findWords";

test('findWords: caseA', () => {
    const board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]]
    const words = ["oath", "pea", "eat", "rain"]
    expect(findWords(board, words)).toEqual(["eat", "oath"])
})

test('findWords: caseB', () => {
    const board = [["a","b"],["c","d"]]
    const words = ["abcb"];
    expect(findWords(board, words)).toEqual([])
})
