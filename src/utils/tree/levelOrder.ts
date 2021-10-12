import { TreeNode } from './index';

/**
 * leetcode 102
 *
 * 层序遍历
 *
 * @param root
 */
export default function levelOrder(root: TreeNode): number[][] {
  if (!root) return [];
  const p = [root];
  const output: number[][] = [];
  while (p.length) {
    let len = p.length;
    output.push([]);
    while (len--) {
      const n = p.shift() as TreeNode;
      output[output.length - 1].push(n.val);
      if (n.left) p.push(n.left);
      if (n.right) p.push(n.right);
    }
  }
  return output;
}
