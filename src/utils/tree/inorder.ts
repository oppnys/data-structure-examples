import { BinaryTree } from './index';

export default function inorder(root: BinaryTree) {
  if (!root) return;
  inorder(root.left as BinaryTree);
  console.log(root.value);
  inorder(root.right as BinaryTree);
}
