import graph from './index';

export default function graphBfs(n: number) {
  const visited = new Set();
  visited.add(n);
  const q = [n];
  while (q.length) {
    const o = q.shift() as number;
    console.log(o);
    graph[o].forEach((c) => {
      if (!visited.has(c)) {
        q.push(c);
        visited.add(o);
      }
    });
  }
}
