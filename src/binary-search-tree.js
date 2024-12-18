const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root ? this._root : null;
  }

  add(data) {
    const node = new Node(data);

    function addNode(root, current) {
      if (current.data >= root.data) {
        if (!root.right) root.right = current;
        else addNode(root.right, current);
      } else {
        if (!root.left) root.left = current;
        else addNode(root.left, current);
      }
    }

    if (!this._root) this._root = node;
    else addNode(this._root, node);
  }

  has(data) {
    let node = this._root;
    while (node) {
      if (data === node.data) return true;
      else if (data < node.data) node = node.left;
      else if (data > node.data) node = node.right;
    }
    return false;
  }

  find(data, returnParent) {
    let node = this._root;
    let parent = null;
    while (node) {
      if (data === node.data) return returnParent ? { parent, node } : node;
      else if (data < node.data) {
        parent = node;
        node = node.left;
      } else if (data > node.data) {
        parent = node;
        node = node.right;
      }
    }
    return returnParent ? { parent, node } : node;
  }

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
  }
  // remove(data) {
  //   let { parent, node } = find(data, true);
  //   // debugger
  //   // if (node.data === 7) {
  //   //   debugger;
  //   // }
  //   // while (node) {
  //   //   if (node.right) {
  //   //     node.data = node.right.data;
  //   //     parent = node;
  //   //     node = node.right;
  //   //   } else if (node.left) {
  //   //     parent.left.right = node.left;
  //   //     node.left = null;
  //   //     // node.data = node.left.data;
  //   //     // parent = node;
  //   //     // node = node.left;
  //   //   } else {
  //   //     if (parent && parent.right) parent.right = null;
  //   //     else if (parent && parent.left) parent.left = null;
  //   //     node = null;
  //   //   }
  //   // }
  // }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

const binaryTree = new BinarySearchTree();

// const numbers = [10, 6, 15, 4, 7, 14, 17, 16, 18];
// numbers.forEach((num) => binaryTree.add(num));
// numbers.forEach((num) => binaryTree.remove(num));
// // binaryTree.remove(10);
// debugger;
