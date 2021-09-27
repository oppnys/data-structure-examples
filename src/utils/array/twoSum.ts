/**
 *  leetcode 1
 * @param nums
 * @param target
 */

export default function twoSum(nums: number[], target: number): number[] {
  const r : number[] = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (target === nums[i] + nums[j]) {
        r.push(i);
        r.push(j);
      }
    }
  }
  return r;
}
