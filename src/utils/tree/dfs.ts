import { Tree } from './index';

export default function dfs(root: Tree) {
  console.log(root.id, root.title);
  root.children?.forEach(dfs);
}
