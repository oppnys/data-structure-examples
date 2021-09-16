import maxDepth from "../../../src/utils/stack/maxDepth";

test('maxDepth: (1+(2*3)+((8)/4))+1',()=>{
    expect(maxDepth('(1+(2*3)+((8)/4))+1')).toEqual(3)
})

test('maxDepth: (1)+((2))+(((3)))',()=>{
    expect(maxDepth('(1)+((2))+(((3)))')).toEqual(3)
})

test('maxDepth: 1',()=>{
    expect(maxDepth('1')).toEqual(0)
})
