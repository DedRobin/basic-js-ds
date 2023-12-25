const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList(node = this.head) {
    let data = {};
    data.value = node.value;
    data.next = (node.prev) ? this.getUnderlyingList(node.prev) : null;
    return data;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else if (!this.tail) {
      this.tail = node;
      node.next = this.head;
      this.head.prev = node;
    } else {
      this.tail.prev = node;
      node.next = this.tail;
      this.tail = node;
    }
    this.length += 1;
  }

  dequeue() {
    const dequeuedNode = this.head;

    if (this.head.prev) {
      this.head = this.head.prev;
      this.head.next = null;
    }
    if (this.head === this.tail) this.tail = null;
    if (this.head && !this.tail) this.head = null;
    this.length -= 1;

    return dequeuedNode.value;
  }
}
module.exports = {
  Queue
};