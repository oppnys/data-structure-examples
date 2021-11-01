import isNumber from "../../../src/utils/graph/isNumber";

test('isNumber 0', ()=>{
    expect(isNumber('0')).toBe(true)
})

test('isNumber e', ()=>{
    expect(isNumber('e')).toBe(false)
})

test('isNumber .', ()=>{
    expect(isNumber('.')).toBe(false)
})

test('isNumber .1', ()=>{
    expect(isNumber('.1')).toBe(true)
})
