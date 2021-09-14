import findXthLargest from "../../../src/utils/sort/findXthLargest";

test('findXthLargest: [3, 2, 1, 5, 6, 4] k = 2', ()=>{
    expect(findXthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5)
})

test('findXthLargest: [3, 2, 3, 1, 2, 4, 5, 5, 6] k = 4', ()=>{
    expect(findXthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4)
})
