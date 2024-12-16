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

  find(data) {
    let node = this._root;
    while (node) {
      if (data === node.data) return node;
      else if (data < node.data) node = node.left;
      else if (data > node.data) node = node.right;
    }
    return node;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

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
console.log(binaryTree.root());
binaryTree.add(2);
binaryTree.add(3);
binaryTree.add(4);
console.log(binaryTree.root().data === 2);
binaryTree.add(60);
binaryTree.add(70);
binaryTree.add(65);
console.log(binaryTree.has(70));
console.log(binaryTree.has(20));
console.log(binaryTree.has(9));
console.log(binaryTree.has(60));
console.log(binaryTree.has(65));
console.log(binaryTree.has(10));
console.log(binaryTree.find(10));
debugger;
