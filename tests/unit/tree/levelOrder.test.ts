import {TreeNode} from "../../../src/utils/tree";
import minDepth from "../../../src/utils/tree/minDepth";
import levelOrder from "../../../src/utils/tree/levelOrder";

test('levelOrder tree', () => {
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
    expect(levelOrder(tree)).toEqual([
        [3],
        [9,20],
        [15,7]
    ])
})
