import { BinaryTree } from './index';

export default function preorder(root: BinaryTree) {
  if (!root) return;
  console.log(root.value);
  preorder(root.left as BinaryTree);
  preorder(root.right as BinaryTree);
}
