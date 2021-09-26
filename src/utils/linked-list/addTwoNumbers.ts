import { ListNode } from './index';

/**
 * leetcode 2
 *
 * @param l1
 *
 * @param l2
 */
export default function addTwoNumbers(l1:ListNode | null, l2: ListNode| null): ListNode| null {
  const l3 = new ListNode();
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while (p1 || p2) {
    // 取出节点的值
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    // 把上个节点进位的值相加
    const val = v1 + v2 + carry;
    // 把十位数进位
    carry = Math.floor(val / 10);
    // 把个位数赋值给当前节点
    p3.next = new ListNode(val % 10);
    // 向下执行
    if (p1) p1 = p1.next as ListNode;
    if (p2) p2 = p2.next as ListNode;
    p3 = p3.next;
  }
  if (carry) p3.next = new ListNode(carry);
  return l3.next;
}
