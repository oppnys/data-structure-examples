import lengthOfLongestSubstring from "../../../src/utils/map/lengthOfLongestSubstring";

test('lengthOfLongestSubstring 1', ()=>{
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
})

test('lengthOfLongestSubstring 2', ()=>{
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
})

test('lengthOfLongestSubstring 3', ()=>{
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
})

test('lengthOfLongestSubstring 4', ()=>{
    expect(lengthOfLongestSubstring('abba')).toEqual(2)
})
