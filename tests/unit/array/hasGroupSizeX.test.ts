import hasGroupSizeX from "../../../src/utils/array/hasGroupSizeX";

test('hasGroupSizeX: [1,2,3,4,4,3,2,1] toBe true', ()=>{
    expect(hasGroupSizeX([1,2,3,4,4,3,2,1])).toBe(true)
})

test('hasGroupSizeX: [1,1,1,2,2,2,3,3] toBe false', ()=>{
    expect(hasGroupSizeX([1,1,1,2,2,2,3,3])).toBe(false)
})

test('hasGroupSizeX: [1] toBe false', ()=>{
    expect(hasGroupSizeX([1])).toBe(false)
})

test('hasGroupSizeX: [1,1] toBe true', ()=>{
    expect(hasGroupSizeX([1,1])).toBe(true)
})

test('hasGroupSizeX: [1,1,2,2,2,2] toBe true', ()=>{
    expect(hasGroupSizeX([1,1,2,2,2,2])).toBe(true)
})
