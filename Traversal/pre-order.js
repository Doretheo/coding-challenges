// pre-order traversal visits the current node before its child nodes (hence its name pre-order);

var preOrderTraversal = (tree) => {
  if (!tree) {
    preOrderTraversal(tree);
    preOrderTraversal(tree.left);
    preOrderTraversal(tree.right);
  }
}