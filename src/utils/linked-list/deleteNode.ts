/**
 * leetcode 237
 * @param root
 */
import { ListNode } from './index';

export default function deleteNode(root: ListNode | null): void {
  if (!root) return;
  root.val = root?.next?.val as number;
  root.next = root?.next?.next as ListNode;
}
