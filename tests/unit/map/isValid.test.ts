import isValid from "../../../src/utils/map/isValid";

test('map isValid:"()"', ()=>{
  expect(isValid("()")).toBe(true)
})

test('map isValid:"()[]{}"', ()=>{
  expect(isValid("()[]{}")).toBe(true)
})

test('map isValid:"(]"', ()=>{
  expect(isValid("(]")).toBe(false)
})

test('map isValid:"([)]"', ()=>{
  expect(isValid("([)]")).toBe(false)
})

test('map isValid:"{[]}"', ()=>{
  expect(isValid("{[]}")).toBe(true)
})
