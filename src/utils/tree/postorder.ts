import { BinaryTree } from './index';

/**
 * 后序遍历 左 右 中
 * @param root
 */
export default function postorder(root: BinaryTree) {
  if (!root) return;
  postorder(root.left as BinaryTree);
  postorder(root.right as BinaryTree);
  console.log(root.value);
}
