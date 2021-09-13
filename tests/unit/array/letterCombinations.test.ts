import letterCombinations from "../../../src/utils/array/letterCombinations";

test('letterCombinations: 23 equal ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
    expect(letterCombinations('23')).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})

test(`letterCombinations: '' equal []`, () => {
    expect(letterCombinations('')).toEqual([])
})

test(`letterCombinations: 2 equal ["a","b","c"]`, () => {
    expect(letterCombinations('2')).toEqual(["a","b","c"])
})
