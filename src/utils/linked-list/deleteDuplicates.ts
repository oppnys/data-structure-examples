import { ListNode } from './index';

/**
 * leetcode 83
 *
 * @param head
 */
export default function deleteDuplicates(head: ListNode| null): ListNode| null {
  let p = head;
  while (p && p.next) {
    if (p && p.next && p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
}
