/**
 * 给定一个字符串 <code>s</code>, 计算具有相同数量的 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和 1 都是组合在一起的。
 *
 * 重复出现的字串要计算出它们的出现的次数。
 *
 * 示例 1：
 *
 * ```
 * 输入： “00110011”
 * 输出：6
 * 解释：有 6 个字串具有相同数量的连续 1 和 0： “0011”， “01”， “1100”，“10”， “0011” 和 “01”
 *
 * 注意： 一些重复出现的字串要计算它们出现的次数。
 *
 * 另外，“00110011” 不是有效的子串，因为所有的 0 （和 1 ）没有组合在一起。
 * ```
 *
 * @param str
 */
export default function countBinarySubstring(s: string) {
  return `${s}`;
}

// export default (str) => {
//   // 建立数据结构，堆栈，保存数据
//   let r = []
//   // 给定任意子输入都返回第一个符合条件的子串
//   let match = (str) => {
//     let j = str.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length)
//     let reg = new RegExp(`^(${j}${o})`)
//     if (reg.test(str)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }
//   // 通过for循环控制程序运行的流程
//   for (let i = 0, len = str.length - 1; i < len; i++) {
//     let sub = match(str.slice(i))
//     if (sub) {
//       r.push(sub)
//     }
//   }
//   return r
// }
