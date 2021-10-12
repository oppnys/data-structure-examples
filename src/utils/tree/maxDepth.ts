import { TreeNode } from './index';

/**
 * leetcode 104
 * @param root
 */
export default function maxDepth(root: TreeNode): number {
  let len = 0;
  const dfs = (n: TreeNode, level: number) => {
    if (!n) return;
    if (!n.left && !n.right) {
      len = Math.max(len, level);
    }
    if (n.left) dfs(n.left, level + 1);
    if (n.right) dfs(n.right, level + 1);
  };
  dfs(root, 1);
  return len;
}
