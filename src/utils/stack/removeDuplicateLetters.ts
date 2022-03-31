export default function removeDuplicateLetters(s: string): string {
  const map = new Map();
  const ret: string[] = [];
  for (let i = 0, len = s.length; i < len; i++) {

    if (map.has(s[i])) {
      ret.forEach((r, index) => {
        if (r === s[i]) {
          ret.splice(index, 1);
        }
      });
    } else {
      map.set(s[i], i);
    }
    ret.push(s[i]);
  }
  return ret.join('');
}
