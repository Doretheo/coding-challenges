var dfs = (tree) => {
  let node = tree;
  if (node !== null) {
    dfs(node.left);
    dfs(node.right);
  }
}