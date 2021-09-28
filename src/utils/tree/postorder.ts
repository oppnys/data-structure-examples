import { BinaryTree } from './index';

export default function postorder(root: BinaryTree) {
  if (!root) return;
  postorder(root.left as BinaryTree);
  postorder(root.right as BinaryTree);
  console.log(root.value);
}
