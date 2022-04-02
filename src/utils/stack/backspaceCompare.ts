export default function backspaceCompare(s: string, t: string): boolean {
    const sStack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            sStack.pop()
        } else {
            sStack.push(s[i])
        }
    }
    const tStack: string[] = []
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            tStack.pop()
        } else {
            tStack.push(t[i])
        }
    }
    return sStack.toString() === tStack.toString()
}