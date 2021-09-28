import { Tree } from './index';

export default function bfs(root: Tree) {
  const q = [root];
  while (q.length > 0) {
    console.log(q);
    const n = q.shift() as Tree;
    n.children?.forEach((child) => {
      q.push(child);
    });
  }
}
