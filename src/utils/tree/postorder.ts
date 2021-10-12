import { BinaryTree } from './index';

/**
 * 后序遍历 (递归版本)
 *
 * 左 右 根
 *
 * @param root
 */
// export default function postorder(root: BinaryTree) {
//   if (!root) return;
//   postorder(root.left as BinaryTree);
//   postorder(root.right as BinaryTree);
//   console.log(root.value);
// }

/**
 * 后序遍历 （普通版本）
 *
 * 左 右 根
 *
 * @param root
 */
export default function postorder(root: BinaryTree) {
  if (!root) return;
  const stock = [root];
  const outputStack = [];
  while (stock.length) {
    const n = stock.pop() as BinaryTree;
    outputStack.push(n);
    if (n.left) stock.push(n.left);
    if (n.right) stock.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop() as BinaryTree;
    console.log(n.value);
  }
}
