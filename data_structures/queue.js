const DLList = require('./doubly-linked-list.js');

class Queue {
  constructor() {
    this.items = new DLList();
  }

  enqueue(value) {
    this.items.addFirst(value);
  }

  dequeue() {
    if (this.items.count === 0) {
      throw new Error('The queue is empty');
    }

    let last = this.items.tail.value;
    this.items.removeLast();
    return last;
  }

  peek() {
    if (this.items.count === 0) {
      throw new Error('The queue is empty');
    }

    return this.items.tail.value;
  }

  get count() {
    return this.items.count;
  }
}

module.exports = Queue;

// -----------------------------------------------------
// example

/*
let queue = new Queue();
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(9);
console.log(queue.count); // 3
console.log(queue.peek()); // 5
console.log(queue.dequeue()); // 5
console.log(queue.dequeue()); // 7
console.log(queue.count); // 1
*/
