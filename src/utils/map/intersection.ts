/**
 * leetcode 349
 * @param nums1
 * @param nums2
 */
export default function intersection(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  nums1.forEach((num) => {
    map.set(num, true);
  });
  const res: number[] = [];
  nums2.forEach((num) => {
    if (map.has(num)) {
      res.push(num);
      map.delete(num);
    }
  });
  return res;
}
