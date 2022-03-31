export default function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const stack: number[] = [];
  for (let i = nums2.length - 1; i >= 0; --i) {
    const num = nums2[i];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  return new Array(nums1.length).fill(0)
    .map((_, i) => map.get(nums1[i]));
}
