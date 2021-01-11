// in-order traversals travel from left node, to current, to right node
// means to "visit" (often, print) the left branch

var inOrderTraversal = (tree) => {
  let node = tree;
  if (!node) {
    inOrderTraversal(node.left);
    inOrderTraversal(node);
    inOrderTraversal(node.right);
  }
}