import firstMissingPositive from "../../../src/utils/sort/firstMissingPositive";

test('firstMissingPositive [1,2,0]', ()=>{
    expect(firstMissingPositive([1,2,0])).toEqual(3)
})

test('firstMissingPositive [3,4,-1,1]', ()=>{
    expect(firstMissingPositive( [3,4,-1,1])).toEqual(2)
})

test('firstMissingPositive [7,8,9,11,12]', ()=>{
    expect(firstMissingPositive( [7,8,9,11,12])).toEqual(1)
})

