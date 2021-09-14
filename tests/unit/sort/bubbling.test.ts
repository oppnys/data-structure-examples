import bubbling from "../../../src/utils/sort/bubbling";

test('bubbling: [5, 8, 5, 2, 9]',()=>{
    expect(bubbling([5, 8, 5, 2, 9])).toEqual([2,5,5,8,9])
})
