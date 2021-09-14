/**
 * 选择排序
 *
 * @param arrIn
 */
export default function choice(arrIn: Array<number>): Array<number> {
  for (let i = 0, tmp, len = arrIn.length; i < len; i++) {
    tmp = arrIn[i];
    for (let j = i + 1; j < len; j++) {
      if (arrIn[i] > arrIn[j]) {
        arrIn[i] = arrIn[j];
        arrIn[j] = tmp;
      }
    }
  }
  return arrIn;
}
