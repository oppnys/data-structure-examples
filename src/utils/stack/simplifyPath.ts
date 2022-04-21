export default function simplifyPath(path: string): string {
  const pathes: string[] = path.split('/');
  const ret: string[] = [];
  for (const p of pathes) {
    if (p === '..') {
      if (ret.length) ret.pop();
    } else if (p.length && p !== '.') {
      ret.push(p);
    }
  }
  return `/${ret.join('/')}`;
}
