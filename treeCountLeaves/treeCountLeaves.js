
/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */

// var Tree = function(value) {
//   this.value = value;
//   this.children = [];
// };

// Tree.prototype.countLeaves = function () {
//   // TODO: implement me!
//   var leaves = 0;

//   var branches = function(tree) {
//     if (tree.children.length === 0) {
//       leaves++;
//     }

//     for (var i = 0; i < tree.children.length; i++) {
//       branches(tree.children[i]);
//     }
//   }
//   branches(this);
//   return leaves;
// };
// /**
//   * You shouldn't need to change anything below here, but feel free to look.
//   */

// /**
//   * add an immediate child
//   * (wrap values in Tree nodes if they're not already)
//   */
// Tree.prototype.addChild = function(child) {
//   if (!child || !(child instanceof Tree)) {
//     child = new Tree(child);
//   }

//   if (!this.isDescendant(child)) {
//     this.children.push(child);
//   } else {
//     throw new Error('That child is already a child of this tree');
//   }
//   // return the new child node for convenience
//   return child;
// };

// /**
//   * check to see if the provided tree is already a child of this
//   * tree __or any of its sub trees__
//   */
// Tree.prototype.isDescendant = function(child) {
//   if (this.children.indexOf(child) !== -1) {
//     // `child` is an immediate child of this tree
//     return true;
//   } else {
//     for (var i = 0; i < this.children.length; i++) {
//       if (this.children[i].isDescendant(child)) {
//         // `child` is descendant of this tree
//         return true;
//       }
//     }
//     return false;
//   }
// };

// /**
//   * remove an immediate child
//   */
// Tree.prototype.removeChild = function(child) {
//   var index = this.children.indexOf(child);
//   if (index !== -1) {
//     // remove the child
//     this.children.splice(index, 1);
//   } else {
//     throw new Error('That node is not an immediate child of this tree');
//   }
// };

var Tree = function(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.isDescendant = function(node) {

  if (this.children.indexOf(node) !== -1) {
    return true;
  }

  if (this.children) {
    for (let i = 0; i  < this.children.length; i++) {
      this.children.isDescendant(node);
    }
  }
  return false;
}

Tree.prototype.addChild = function(value) {
  if (!value || !(value instanceof Tree)) {
    throw new error ('This value is already a child of this tree');
  } else {
    const child = new Tree(value);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new error ('This value is already a child of this tree')
  }
  return child;
}

Tree.prototype.removeChild = function(value) {
  let found = this.children.indexOf(value);

  if (found) {
    this.children.splice(found, 1);
  } else {
    throw new error ('The value is not a immediate child of the tree')
  }
}

Tree.prototype.countLeaves = function() {
  let res = {};

  if (!this.children.length) {
    res[this.value] = true;
  }

  if (this.children) {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].countLeaves();
    }
  }

  return Object.keys(res);
}