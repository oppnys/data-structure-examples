export default function removeDuplicateLetters(s: string): string {
  let ret = '';
  for (let i = 0, len = s.length; i < len; i++) {
    if (ret && ret.includes(s[i])) {
      const retArr = ret.split('');
      const cIndex = retArr.indexOf(s[i]);
      retArr.splice(cIndex, 1);
      retArr.push(s[i]);
      const c = retArr.join('');
      if (c < ret) {
        ret = c;
      }
    } else {
      ret += s[i];
    }
  }
  return ret;
}
