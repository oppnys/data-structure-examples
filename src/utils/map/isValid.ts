/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
    ```
     1.左括号必须用相同类型的右括号闭合。
     2.左括号必须以正确的顺序闭合。
    ```
 示例 1：
    ```
     输入：s = "()"
     输出：true
    ```
 示例 2：
    ```
     输入：s = "()[]{}"
     输出：true
    ```
 示例 3：
    ```
     输入：s = "(]"
     输出：false
    ```
 示例 4：
    ```
     输入：s = "([)]"
     输出：false
    ```
 示例 5：
    ```
     输入：s = "{[]}"
     输出：true
    ```

 提示：
    ```
     1 <= s.length <= 104
     s 仅由括号 '()[]{}' 组成
    ```
 *
 * @param s
 */
export default function isValid(s: string): boolean {
  if (s.length % 2 === 1) return false;
  const m = new Map();
  const stock = [];
  m.set('(', ')');
  m.set('[', ']');
  m.set('{', '}');

  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i];
    if (m.has(c)) {
      stock.push(c);
    } else {
      const t = stock[stock.length - 1];
      if (m.get(t) === c) {
        stock.pop();
      } else {
        return false;
      }
    }
  }
  return stock.length === 0;
}
