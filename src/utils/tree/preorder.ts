import { BinaryTree } from './index';

/**
 * 先序遍历（递归版本）
 *
 * 根 左 右
 *
 * @param root
 */
// export default function preorder(root: BinaryTree) {
//   if (!root) return;
//   console.log(root.value);
//   preorder(root.left as BinaryTree);
//   preorder(root.right as BinaryTree);
// }

/**
 * 先序遍历（普通版本）
 *
 * 根 左 右
 * @param root
 */
export default function preorder(root: BinaryTree) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop() as BinaryTree;
    console.log(n?.value);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
}
