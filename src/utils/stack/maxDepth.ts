/**
 * leetcode 1614
 * @param s
 */
export default function maxDepth(s:string):number {
  const stack = [];
  const lens = [0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      lens.push(stack.length);
      stack.pop();
    }
  }
  return Math.max.apply(null, lens);
}
