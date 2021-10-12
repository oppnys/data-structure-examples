import { TreeNode } from './index';

/**
 * leetcode 94
 *
 * @param {TreeNode} root
 */
export default function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const stack = [];
  const output: number[] = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left as TreeNode;
    }
    const n = stack.pop() as TreeNode;
    output.push(n.val);
    p = n.right as TreeNode;
  }
  return output;
}
