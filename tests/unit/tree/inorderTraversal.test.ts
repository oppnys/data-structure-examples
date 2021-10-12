import inorderTraversal from "../../../src/utils/tree/inorderTraversal";
import {TreeNode} from "../../../src/utils/tree";

test('inorderTraversal', ()=>{
    const tree: TreeNode = {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: {
                val:3,
                left: null,
                right: null
            },
            right: null
        }
    }
    expect(inorderTraversal(tree)).toEqual([1,3,2])
})

test('inorderTraversal null', ()=>{
    expect(inorderTraversal(null)).toEqual([])
})


test('inorderTraversal [1]', ()=>{
    const tree: TreeNode = {
        val: 1,
        left: null,
        right: null
    }
    expect(inorderTraversal(tree)).toEqual([1])
})
