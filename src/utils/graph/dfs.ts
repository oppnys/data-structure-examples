import graph from './index';

export default function graphDfs(n: number) {
  const visited = new Set();
  const dfs = (k: number) => {
    console.log(k);
    visited.add(k);
    graph[k].forEach((c) => {
      if (!visited.has(c)) {
        dfs(c);
      }
    });
  };

  dfs(n);
}
