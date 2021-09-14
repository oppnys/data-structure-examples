/**
 * 在未排序的数组中找到第 K 个最大的元素。请注意，你需要找的是数组排序后的第 K 个最大的元素，而不是第 K 个不同的元素。
 *
 * 示例 1：
 ```
 输入：[3, 2, 1, 5, 6, 4] 和 k = 2
 输出：5
 ```

 * 示例 2：
 ```
 输入：[3, 2, 3, 1, 2, 4, 5, 5, 6] 和 k = 4
 输出：4
 ```
 *
 * @param arrIn
 * @param k
 */
export default function findXthLargest(arrIn: Array<number>, k: number): number {
  // mode A: 全部遍历，有些浪费资源
  // return arrIn.sort((a, b) => b - a)[k - 1];
  // mode B: 找到结果就返回
  const len = arrIn.length - 1;
  let max: number = 0;
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arrIn[j] > arrIn[j + 1]) {
        const tmp = arrIn[j];
        arrIn[j] = arrIn[j + 1];
        arrIn[j + 1] = tmp;
      }
    }
    if (len - i === k - 1) {
      max = arrIn[i];
      break;
    }
  }
  return max;
}
