/**
 * leetcode 387
 * @param s
 */
export default function firstUniqCharTest(s: string): number {
  const is = s.split('');
  const os :string[] = [];
  while (is.length > 0) {
    const w = is.shift() as string;
    if (is.indexOf(w) === -1 && os.indexOf(w) === -1) {
      return s.indexOf(w);
    }
    os.push(w);
  }
  return -1;
}
