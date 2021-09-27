import intersection from "../../../src/utils/map/intersection";

test('map intersection', ()=>{
    expect(intersection([1,2,2,1], [2,2])).toEqual([2])
})
