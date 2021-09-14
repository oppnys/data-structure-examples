/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 *
 * 示例 1：
 ```
 输入：nums = [1,2,0]
 输出：3
 ```
 * 示例 2：
 ```
 输入：nums = [3,4,-1,1]
 输出：2
 ```
 * 示例 3：
 ```
 输入：nums = [7,8,9,11,12]
 输出：1
 ```
 * 提示：
 ```
 1 <= nums.length <= 5 * 10^5
 -2^23 <= nums[i] <= 2^31 - 1
 ```
 * @param nums
 */
export default function firstMissingPositive(nums: Array<number>): number {
  nums = nums.filter((a) => a > 0);
  // const code = 1;
  // if (nums.length) {
  //   nums.sort((a, b) => a - b);
  //   if (nums[0] === 1) {
  //     for (let i = 0, len = nums.length; i < len; i++) {
  //       if (nums[i] !== i + 1) {
  //         code = i + 1;
  //         break;
  //       }
  //       code += 1;
  //     }
  //   }
  //   return code;
  // }
  for (let i = 0, len = nums.length, min; i < len; i++) {
    min = nums[i];
    for (let j = i + 1; j < len; j++) {
      if (min > nums[j]) {
        const tmp = min;
        min = nums[j];
        nums[j] = tmp;
      }
    }
    nums[i] = min;
    if (i > 0) {
      if (nums[i] - nums[i - 1] > 1) {
        return nums[i - 1] + 1;
      }
    } else if (min !== 1) {
      return 1;
    }
  }
  return nums.length ? nums[nums.length - 1] + 1 : 1;
}
