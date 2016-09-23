const DLList = require('./doubly-linked-list.js');

class Stack {
  constructor() {
    this.items = new DLList();
  }

  push(value) {
    this.items.addLast(value);
  }

  pop() {
    if (this.items.count === 0) {
      throw new Error('The stack is empty');
    }

    let result = this.items.tail.value;
    this.items.removeLast();
    return result;
  }

  peek() {
    if (this.items.count === 0) {
      throw new Error('The stack is empty');
    }

    return this.items.tail.value;
  }

  get count() {
    return this.items.count;
  }
}

module.exports = Stack;

// -----------------------------------------------------
// example

/*
let stack = new Stack();
stack.push(2);
stack.push(4);
console.log(stack.count); // 2
console.log(stack.peek()); // 4
console.log(stack.pop()); // 4
console.log(stack.pop()); // 2
console.log(stack.count); // 0
*/
