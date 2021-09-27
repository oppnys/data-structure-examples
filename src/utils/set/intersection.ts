export default function intersection(nums1: number[], nums2: number[]): number[] {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  return nums1.filter((item) => new Set(nums2).has(item));
}
