import intersection from "../../../src/utils/set/intersection";

test('intersection', ()=>{
    expect(intersection([1,2,2,1], [2,2])).toEqual([2])
})
