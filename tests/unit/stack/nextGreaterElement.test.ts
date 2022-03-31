import nextGreaterElement from '../../../src/utils/stack/nextGreaterElement';

test('nextGreaterElement first', () => {
  const nums1 = [4, 1, 2];
  const nums2 = [1, 3, 4, 2];
  expect(nextGreaterElement(nums1, nums2))
    .toEqual([-1, 3, -1]);
});

test('nextGreaterElement second', () => {
  const nums1 = [2, 4];
  const nums2 = [1, 2, 3, 4];
  expect(nextGreaterElement(nums1, nums2))
    .toEqual([3, -1]);
});

test('nextGreaterElement three', () => {
  const nums1 = [1, 3, 5, 2, 4];
  const nums2 = [6, 5, 4, 3, 2, 1, 7];
  expect(nextGreaterElement(nums1, nums2))
    .toEqual([7, 7, 7, 7, 7]);
});

test('', () => {
  const nums1 = [137, 59, 92, 122, 52, 131];
  const nums2 = [137, 59, 92, 122, 52, 131, 79, 236];
  expect(nextGreaterElement(nums1, nums2)).toEqual([236,92,122,131,131,236])
});
