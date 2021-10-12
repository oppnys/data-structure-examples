import {TreeNode} from "../../../src/utils/tree";
import hasPathSum from "../../../src/utils/tree/hasPathSum";

test('hasPathSum', ()=>{
    const tree: TreeNode = {
        val: 1,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
    expect(hasPathSum(tree, 5)).toEqual(false)
})


test('hasPathSum -2', ()=>{
    const tree: TreeNode = {
        val: -2,
        left: null,
        right: {
            val: -3,
            left: null,
            right: null
        }
    }
    expect(hasPathSum(tree, -2)).toEqual(false)
})
