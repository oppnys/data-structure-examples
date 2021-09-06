/**
 * 给定一个字符串，反转字符串每个单词的字符顺序，同时保留空格和单词的初始顺序。
 *
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 *
 * 示例：
 *
 * ```js
 * 输入："Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 * ```
 *
 * @param {string} str
 *
 * @return {string}
 *
 */
export default function reverseString(str: string): string {
  const strArr: Array<string> = str.split(' ');
  return strArr.map((code) => {
    const codeArr = code.split('');
    return codeArr.reverse().join('');
  }).join(' ');
}
