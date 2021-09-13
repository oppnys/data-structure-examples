import grayCode from "../../../src/utils/array/grayCode";

test('grayCode: 1', () => {
    expect(grayCode(1)).toEqual([0,1])
})

test('grayCode: 2', () => {
    expect(grayCode(2)).toEqual([0,1,3,2])
})

test('grayCode: 3', () => {
    expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4])
})
