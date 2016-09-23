const DLList = require('./doubly-linked-list.js');

class Deque {
  constructor() {
    this.items = new DLList();
  }

  enqueueFirst(value) {
    this.items.addFirst(value);
  }

  enqueueLast(value) {
    this.items.addLast(value);
  }

  dequeueFirst() {
    if (this.items.count === 0) {
      throw new Error('dequeueFirst called when deque is empty');
    }

    let temp = this.items.head.value;
    this.items.removeFirst();
    return temp;
  }

  dequeueLast() {
    if (this.items.count === 0) {
      throw new Error('dequeueLast called when deque is empty');
    }

    let temp = this.items.tail.value;
    this.items.removeLast();
    return temp;
  }

  peekFirst() {
    if (this.items.count === 0) {
      throw new Error('peekFirst called when deque is empty');
    }

    return this.items.head.value;
  }

  peekLast() {
    if (this.items.count === 0) {
      throw new Error('peekLast called when deque is empty');
    }

    return this.items.tail.value;
  }

  get count() {
    return this.items.count;
  }
}

module.exports = Deque;

// -----------------------------------------------------
// example

/*
let deque = new Deque();
deque.enqueueLast(100);
deque.enqueueLast(200);
deque.enqueueFirst(300);
console.log(deque.count); // 3
console.log(deque.peekFirst()); // 300
console.log(deque.peekLast()); // 200
console.log(deque.dequeueLast()); // 200
console.log(deque.count); // 2
console.log(deque.dequeueLast()); // 100
console.log(deque.dequeueFirst()); // 300
console.log(deque.count); // 0
*/

