import maxDepth from "../../../src/utils/tree/maxDepth";
import {TreeNode} from "../../../src/utils/tree";

test('maxDepth tree', ()=>{
    const tree: TreeNode = {
        val: 3,
        left: {
            val: 9,
            left: null,
            right: null,
        },
        right: {
            val: 20,
            left: {
                val: 15,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    }
    expect(maxDepth(tree)).toEqual(3)
})
