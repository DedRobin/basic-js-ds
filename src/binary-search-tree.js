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
        if (node.left) node = node.left;
        else node = node.right;
      } else if (data > node.data) {
        parent = node;
        // node = node.right;
        if (node.right) node = node.right;
        else node = node.left;
      }
    }
    return returnParent ? { parent, node } : node;
  }

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
  }
  // remove(data) {
  //   const returnParent = true;
  //   let { parent, node } = this.find(data, returnParent);
  //   // debugger
  //   if (data === this._root.data && !this._root.left && !this._root.right)
  //     this._root = null;
  //   else {
  //     while (node) {
  //       if (node.right) {
  //         node.data = node.right.data;
  //         parent = node;
  //         node = node.right;
  //       } else if (node.left) {
  //         if (parent.left?.right) parent.left.right = node.left;
  //         else {
  //           parent.left = { ...node.left };
  //           parent.right = null;
  //         }
  //         node.left = null;
  //       } else {
  //         if (parent && parent.right && parent.right.data === node.data)
  //           parent.right = null;
  //         else if (parent && parent.left && parent.left.data === node.data)
  //           parent.left = null;
  //         node = null;
  //       }
  //     }
  //   }
  // }

  min() {
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

const binaryTree = new BinarySearchTree();

// const numbers = [10, 6, 15, 4, 7, 14, 17, 16, 18];
// numbers.forEach((num) => binaryTree.add(num));
// // binaryTree.remove(18);
// numbers.forEach((num) => binaryTree.remove(num));
// // debugger;
