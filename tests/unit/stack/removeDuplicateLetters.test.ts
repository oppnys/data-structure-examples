import removeDuplicateLetters from '../../../src/utils/stack/removeDuplicateLetters';

test('removeDuplicateLetters: bcabc', () => {
  expect(removeDuplicateLetters('bcabc')).toBe('abc')
})

test('removeDuplicateLetters: cbacdcbc', () => {
  expect(removeDuplicateLetters('cbacdcbc')).toBe('acdb')
})

