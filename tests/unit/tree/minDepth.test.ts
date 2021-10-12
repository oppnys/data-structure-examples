import {TreeNode} from "../../../src/utils/tree";
import minDepth from "../../../src/utils/tree/minDepth";

test('minDepth tree', () => {
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
    expect(minDepth(tree)).toEqual(2)
})
