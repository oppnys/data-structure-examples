import { BinaryTree } from './index';

/**
 * 中序遍历（递归版本）
 *
 * 左 中 右
 *
 * @param root
 */
// export default function inorder(root: BinaryTree) {
//   if (!root) return;
//   inorder(root.left as BinaryTree);
//   console.log(root.value);
//   inorder(root.right as BinaryTree);
// }

/**
 * 中序遍历（普通版本）
 *
 * 左 中 右
 *
 * @param root
 */
export default function inorder(root: BinaryTree) {
  if (!root) return;
  inorder(root.left as BinaryTree);
  console.log(root.value);
  inorder(root.right as BinaryTree);
}
