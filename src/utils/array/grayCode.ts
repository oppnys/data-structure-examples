/**
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。
 ```
 输入: 2
 输出: [0,1,3,2]
 ```
 解释:
 ```
 00 - 0
 01 - 1
 11 - 3
 10 - 2
 ```
 对于给定的 n，其格雷编码序列并不唯一。例如，[0, 2, 3, 1] 也是一个有效的格雷编码序列。
 ```
 00 - 0
 10 - 2
 11 - 3
 01 - 1
 ```
 * @param self
 * @param n
 */
export default function grayCode(num: number): Array<number> {
  const make = (n: number) => {
    if (n === 1) {
      return ['0', '1'];
    }
    const prev = make(n - 1) as Array<string>;
    const result: Array<string> = [];
    const max = Math.pow(2, n) - 1;
    for (let i = 0, len = prev.length; i < len; i++) {
      result[i] = `0${prev[i]}`;
      result[max - i] = `1${prev[i]}`;
    }
    return result;
  };
  // return make(num);
  const binaryArray = make(num);
  return binaryArray.map((binary) => parseInt(binary, 2));
}
