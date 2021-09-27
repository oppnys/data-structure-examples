import twoSum from "../../../src/utils/map/twoSum";

test('map twoSum 9 in [2,7,11,15]',()=>{
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
})

test('map twoSum 6 in [3,2,4]',()=>{
    expect(twoSum([3,2,4], 6)).toEqual([1,2])
})

test('map twoSum 6 in [3,3]',()=>{
    expect(twoSum([3,3], 6)).toEqual([0,1])
})
