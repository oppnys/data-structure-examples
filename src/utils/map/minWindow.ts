/**
 * leetcode 76
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 *
 * @param s
 *
 * @param t
 */
export default function minWindow(s: string, t: string): string {
  let right = 0;
  let left = 0;
  const needs = new Map();
  for (const tElement of t) {
    needs.set(tElement, needs.has(tElement) ? needs.get(tElement) + 1 : 1);
  }
  let needType = needs.size;
  let res = '';
  while (right < s.length) {
    const c = s[right];
    if (needs.has(c)) {
      needs.set(c, needs.get(c) - 1);
      if (needs.get(c) === 0) needType -= 1;
    }
    while (needType === 0) {
      const newRes = s.substring(left, right + 1);
      if (!res || newRes.length < res.length) res = newRes;
      const c2 = s[left];
      if (needs.has(c2)) {
        needs.set(c2, needs.get(c2) + 1);
        if (needs.get(c2) === 1) needType += 1;
      }
      left += 1;
    }
    right += 1;
  }
  return res;
}
