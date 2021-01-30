/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */




// var Tree = function(value) {
//   this.value = value;
//   this.children = [];
// };

// Tree.prototype.DFSelect = function(filter) {
//   // calls the filter function on each of the nodes
//   // in Depth First order (explores as far as possible along each branch before backtracking)
//   // so...if I call the filter function on the node and returns true
//   // add the node's value to an array
//   // create a recursive function to loop through each node and it's children
//   // continue looping until I reach a node without any children
//   //////////////////////////////
//   // create a container to store the nodes that pass
//   const res = [];
//   // create the recursive function to loop through
//   var hasDepth = function(node, depth) {
//     // run the filter function on the node and check if it passes
//     if (filter(node.value, depth)) {
//       // if true, then push the node's value into the result
//       res.push(node.value)
//     }
//     // check if the node has any children
//     if (node.children) {
//       // if true, then increment depth to show that this will iterate one branch deeper
//       depth++;
//       // also run a for loop on the node's children to access it's value and children
//       for (var i = 0; i < node.children.length; i++) {
//         // pass the curent node's children back into the recursive function
//         // --> check if the current children node pass the filter test
//         // --> then check if that node's children also has children
//         hasDepth(node.children[i], depth)
//       }
//     }
//     // what parameters do I need to pass in.....forsure the depth counter in order for filter by depth to work accordingly
//     // I also need to pass in the root node....root1.DFSelect() --> if root1 is the target --> either call Tree or this
//     // calling this will revert back to the initial position where it was called, or "left" of the dot where DFSelect was invoked
//     // if root1 is at the beginning, then calling depth === 0 should return 1
//     // then when it checks is the root node has children, depth goes from 0 -> 1....so I would need to pass 0 in order to return 1
//   } (this, 0)
//   // return the result
//   return res;
// };



// /**
//  * You shouldn't need to change anything below here, but feel free to look.
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

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!Tree.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new error ('Child is already a child of this tree');
  }

  return child;
}

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
  }
  return false;
}

Tree.prototype.removeChild = function(child) {
  let removal = this.children.indexOf(child);
  if (removal !== -1) {
    this.children.splice(index, 1);
  } else {
    throw new error ('Tree does not contain the child');
  }
}

Tree.prototype.DFSelect = function(filter) {
  let res = {};

  function search = (node, depth) {
    if (filter(node.value, depth)) {
      res[node] = true;
    }

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        search(node.children[i], i)
      }
    }
  }
  search(this, 0);
  return Object.keys(res);
}
