import minWindow from "../../../src/utils/map/minWindow";

test('minWindow 1', ()=>{
    expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC')
})

test('minWindow 2', ()=>{
    expect(minWindow('a', 'a')).toEqual('a')
})

test('minWindow 3', ()=>{
    expect(minWindow('a', 'aa')).toEqual('')
})
