// Post-order traversals visits the current node after its children nodes (hence the name "post order");

var postOrderTraversal = (tree) => {
  if (!tree) {
    postOrderTraversal(tree.left);
    postOrderTraversal(tree.right);
    postOrderTraversal(tree)
  }
}