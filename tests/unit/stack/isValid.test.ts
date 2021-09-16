import isValid from "../../../src/utils/stack/isValid";

test('isValid:"()"', ()=>{
  expect(isValid("()")).toBe(true)
})

test('isValid:"()[]{}"', ()=>{
  expect(isValid("()[]{}")).toBe(true)
})

test('isValid:"(]"', ()=>{
  expect(isValid("(]")).toBe(false)
})

test('isValid:"([)]"', ()=>{
  expect(isValid("([)]")).toBe(false)
})

test('isValid:"{[]}"', ()=>{
  expect(isValid("{[]}")).toBe(true)
})
