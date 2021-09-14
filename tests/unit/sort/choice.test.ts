import choice from "../../../src/utils/sort/choice";

test('choice: [5, 8, 5, 2, 9]', () => {
    expect(choice([5, 8, 5, 2, 9])).toEqual([2, 5, 5, 8, 9])
})
