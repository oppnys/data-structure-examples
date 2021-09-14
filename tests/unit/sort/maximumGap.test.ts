import maximumGap from "../../../src/utils/sort/maximumGap";

test('maximumGap:[3, 6, 9, 1] toBe 3', ()=>{
    expect(maximumGap([3, 6, 9, 1])).toEqual(3)
})

test('maximumGap: [10] tobe 0', ()=>{
    expect(maximumGap([10])).toEqual(0)
})

test('maximumGap: [19, 1,13, 16] tobe 12', ()=>{
    expect(maximumGap([19, 1, 13, 16])).toEqual(12)
})
