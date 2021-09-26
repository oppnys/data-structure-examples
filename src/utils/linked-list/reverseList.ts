import { ListNode } from './index';

/**
 * leetcode 206
 * @param head
 */
export default function reverseList(head: ListNode | null): ListNode | null {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const tmp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = tmp;
  }
  return p2;
}
