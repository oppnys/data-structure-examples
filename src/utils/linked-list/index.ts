export class ListNode {
    val: number

    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
}

interface Obj {
    val?: string
    next?: Obj
}

export default function initLinkedList() {
  const a: Obj = { val: 'a' };
  const b: Obj = { val: 'b' };
  const c: Obj = { val: 'c' };
  const d: Obj = { val: 'd' };

  a.next = b;
  b.next = c;
  c.next = d;

  let p = a;
  while (p) {
    console.log(p.val);
    p = p.next as Obj;
  }
}
