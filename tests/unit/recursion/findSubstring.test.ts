import findSubstring from "../../../src/utils/recursion/findSubstring";

test('findSubstring：barfoothefoobarman', ()=>{
    expect(findSubstring('barfoothefoobarman', ["foo","bar"])).toEqual([0,9])
})

test('findSubstring：wordgoodgoodgoodbestword', ()=>{
    expect(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","word"])).toEqual([])
})

test('findSubstring：barfoofoobarthefoobarman', ()=>{
    expect(findSubstring('barfoofoobarthefoobarman', ["bar","foo","the"])).toEqual([6,9,12])
})
