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
        if (node.right) node = node.right;
        else node = node.left;
      }
    }
    return returnParent ? { parent, node } : node;
  }

  // remove(/*data*/) {
  //   throw new NotImplementedError('Not implemented');
  // }
  remove(data) {
    const getLeafNumber = (node) =>
      [node.left, node.right].filter((child) => !!child).length;

    let { parent, node } = this.find(data, true);
    if (node) {
      const length = getLeafNumber(node);

      switch (length) {
        case 0:
          if (parent.left === node) parent.left = null;
          else parent.right = null;
          break;
        case 1:
          if (parent.left === node) parent.left = node?.left || node.right;
          else parent.right = node?.left || node.right;
        case 2:
          const min = this.min(node.right);
          if (min) {
            this.remove(min);
            node.data = min;
            break;
          } else {
            const max = this.max(node.left);
            if (max) {
              this.remove(max);
              node.data = max;
            }
          }
      }
    }
  }

  min(subRoot = this._root) {
    let node = subRoot;
    if (!node) return null;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max(subRoot = this._root) {
    let node = subRoot;
    if (!node) return null;

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

// const numbers = [31, 20, 49, 15, 22, 39, 58, 32, 40, 50, 61, 34];
// numbers.forEach((num) => binaryTree.add(num));
// binaryTree.remove(61);
// binaryTree.remove(32);
// binaryTree.remove(49);
// numbers.forEach((num) => binaryTree.remove(num));
// // debugger;
