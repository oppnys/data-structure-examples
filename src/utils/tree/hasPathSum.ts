import { TreeNode } from './index';

/**
 * leetcode 112
 *
 * @param {TreeNode} root
 *
 * @param {number} targetSum
 */
export default function hasPathSum(root: TreeNode | null, targetSum :number): boolean {
  if (!root) return false;
  const sums: number[] = [];
  const dfs = (n: TreeNode, sum: number) => {
    sum += n.val;
    if (!n.left && !n.right) {
      sums.push(sum);
    }
    if (n.left) dfs(n.left, sum);
    if (n.right) dfs(n.right, sum);
  };
  dfs(root, 0);
  return sums.includes(targetSum);
}
