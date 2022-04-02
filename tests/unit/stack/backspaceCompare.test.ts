import backspaceCompare from "../../../src/utils/stack/backspaceCompare"

test('backspaceCompare 1', () => {
    const s = "ab#c", t = "ad#c";
    expect(backspaceCompare(s, t)).toBe(true)
})

test('backspaceCompare 2', () => {
    const s = "ab##", t = "c#d#";
    expect(backspaceCompare(s, t)).toBe(true)
})


test('backspaceCompare 3', () => {
    const s = "a#c", t = "b";
    expect(backspaceCompare(s, t)).toBe(false)
})