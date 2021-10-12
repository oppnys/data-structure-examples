import { TreeNode } from './index';

/**
 * leetcode 111
 *
 * @param root
 */
export default function minDepth(root: TreeNode| null): number {
  if (!root) return 0;
  const p = [[root, 1]];
  let res = 0;
  while (p.length) {
    const [n, level] = p.shift() as any[];
    if (!n.left && !n.right) {
      res = level;
      return level;
    }
    if (n.left) p.push([n.left, level + 1]);
    if (n.right) p.push([n.right, level + 1]);
  }
  return res;
}
