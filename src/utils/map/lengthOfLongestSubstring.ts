/**
 * leetcode 3
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * @param s
 */
export default function lengthOfLongestSubstring(s: string):number {
  let l = 0;
  let res = 0;
  const map = new Map();
  for (let r = 0, len = s.length; r < len; r += 1) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r);
  }
  return res;
}
