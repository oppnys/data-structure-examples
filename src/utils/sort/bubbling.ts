/**
 * 冒泡排序
 *
 * @param arrIn
 */
export default function bubbling(arrIn: Array<number>): Array<number> {
  for (let j = arrIn.length - 1, tmp; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      tmp = arrIn[i];
      if (tmp > arrIn[i + 1]) {
        arrIn[i] = arrIn[i + 1];
        arrIn[i + 1] = tmp;
      }
    }
  }
  return arrIn;
}
