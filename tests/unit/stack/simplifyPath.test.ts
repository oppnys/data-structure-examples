import simplifyPath from "../../../src/utils/stack/simplifyPath"

test('simplifyPath /home/', () => {
    const path = "/home/";
    expect(simplifyPath(path)).toEqual('/home');
})


test('simplifyPath /../', () => {
    const path = '/../';
    expect(simplifyPath(path)).toEqual('/');
})

test('simplifyPath /home//foo/', () => {
    const path = '/home//foo/';
    expect(simplifyPath(path)).toEqual('/home/foo');
})


test('simplifyPath /a/./b/../../c/', () => {
    const path = '/a/./b/../../c/';
    expect(simplifyPath(path)).toEqual('/c');
})

test('simplifyPath /a/../../b/../c//.//', () => {
    const path = '/a/../../b/../c//.//';
    expect(simplifyPath(path)).toEqual('/c');
})

test('simplifyPath /a//b////c/d//././/..', () => {
    const path = '/a//b////c/d//././/..';
    expect(simplifyPath(path)).toEqual('/a/b/c');
})