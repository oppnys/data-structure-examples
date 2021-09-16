/**
 * leetcode 682
 * @param ops
 */
export default function calPoints(ops: Array<string>): number {
  const r:Array<number> = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '+') {
      r.push(r[r.length - 2] + r[r.length - 1]);
    } else if (ops[i] === 'D') {
      r.push(r[r.length - 1] * 2);
    } else if (ops[i] === 'C') {
      r.pop();
    } else {
      r.push(+ops[i]);
    }
  }
  return r.reduce((a, b) => a + b);
}
