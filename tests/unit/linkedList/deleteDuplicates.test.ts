import deleteDuplicates from "../../../src/utils/linked-list/deleteDuplicates";
import {ListNode} from "../../../src/utils/linked-list";

test('deleteDuplicates', ()=>{
    const o1 = new ListNode(2)
    const o2 = new ListNode(1, o1)
    const o3 = new ListNode(1, o2)
    expect(deleteDuplicates(o3)).toEqual(o2)
})
