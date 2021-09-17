import firstUniqCharTest from "../../../src/utils/queue/firstUniqChar";

test('firstUniqChar: leetcode', () => {
    expect(firstUniqCharTest('leetcode')).toEqual(0);
});

test('firstUniqChar: loveleetcode', () => {
    expect(firstUniqCharTest('loveleetcode')).toEqual(2);
});


test('firstUniqChar: aabb', () => {
    expect(firstUniqCharTest('aabb')).toEqual(-1);
});

