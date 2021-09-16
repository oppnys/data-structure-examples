/**
 *  leetcode 1
 * @param nums
 * @param target
 */

export default function twoSum(nums: number[], target: number): number[] {
  // 时间复杂度低
  if (!nums) {
    return [];
  }
  const r = [];
  // 创建字典表
  const m = new Map();
  // 遍历nums数组
  for (let i = 0; i < nums.length; i++) {
    // 获取当前值
    const n = nums[i];
    // 获取对当前与该值匹配的数值
    const n2 = target - nums[i];
    // 判断目标值是否在字典中
    if (m.has(n2)) {
      // 是，在返回目标值的坐标和当前数值的坐标
      r.push(m.get(n2));
      r.push(i);
      break;
    } else {
      // 不在字典中，则放入字典，key为数值，value为下标
      m.set(n, i);
    }
  }
  return r;
  //    const r : number[] = [];
  //     for (let i = 0, len = nums.length; i < len; i++) {
  //         for (let j = i + 1; j < len; j++) {
  //             if (target === nums[i] + nums[j]) {
  //                 r.push(i);
  //                 r.push(j);
  //             }
  //         }
  //     }
  //    return r;
}
