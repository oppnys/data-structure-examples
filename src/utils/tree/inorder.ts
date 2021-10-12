import { BinaryTree } from './index';

/**
 * 中序遍历（递归版本）
 *
 * 左 根 右
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
 * 左 根 右
 *
 * @param root
 */
export default function inorder(root: BinaryTree) {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left as BinaryTree;
    }
    const n = stack.pop() as BinaryTree;
    console.log(n.value);
    p = n.right as BinaryTree;
  }
}
