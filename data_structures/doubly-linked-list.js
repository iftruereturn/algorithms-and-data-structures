function DoublyLinkedListNode(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.count = 0;
}

DoublyLinkedList.prototype = Object.create(Object.prototype);

DoublyLinkedList.prototype.addFirst = function(value) {
  let dllnode = new DoublyLinkedListNode(value);
  let temp = this.head;

  this.head = dllnode;
  this.head.next = temp;

  if (this.count === 0) {
    this.tail = this.head;
  } else {
    temp.previous = this.head;
  }

  this.count++;
};

DoublyLinkedList.prototype.addLast = DoublyLinkedList.prototype.add = function(value) {
  let dllnode = new DoublyLinkedListNode(value);

  if (this.count === 0) {
    this.head = dllnode;
  } else {
    this.tail.next = dllnode;
    dllnode.previous = this.tail;
  }
  this.tail = dllnode;

  this.count++;
};

DoublyLinkedList.prototype.removeFirst = function() {
  if (this.count !== 0) {
    this.head = this.head.next;

    this.count--;

    if (this.count === 0) {
      this.tail = null;
    } else {
      this.head.previous = null;
    }
  }
};

DoublyLinkedList.prototype.removeLast = function() {
  if (this.count !== 0) {
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
    }

    this.count++;
  }
};

DoublyLinkedList.prototype.remove = function(value) {
  let previous = null;
  let current = this.head;

  while (current !== null) {
    if (current.value === value) {
      if (previous !== null) {
        previous.next = current.next;

        if (current.next === null) {
          this.tail = previous;
        } else {
          current.next.previous = previous;
        }

        this.count--;
      } else {
        this.removeFirst();
      }

      return true;
    }

    previous = current;
    current = current.next;
  }

  return false;
};

DoublyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.count = 0;
};

DoublyLinkedList.prototype.contains = function(value) {
  let current = this.head;

  while (current !== null) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }

  return false;
};

DoublyLinkedList.prototype.copyTo = function(array, arrayIndex = 0) {
  let current = this.head;

  while (current) {
    array[arrayIndex++] = current.value;
    current = current.next;
  }
};

// Variant with function
/*
DoublyLinkedList.prototype[Symbol.iterator] = function() {
  let head = this.head;

  return {
    current: head,
    next: function() {
      let result;

      if (this.current) {
        result = {
          value: this.current.value,
          done: false
        };

        this.current = this.current.next;

        return result;
      }

      return { done: true };
    }
  }
};
*/

// Variant with generator
DoublyLinkedList.prototype[Symbol.iterator] = function*() {
  let current = this.head;

  while (current) {
    yield current.value;
    current = current.next;
  }
}


// -----------------------------------------------------
// example

let dll = new DoublyLinkedList();
dll.add(10);
dll.add(20);
dll.add(30);

dll.addLast(40);
dll.addFirst(60)

console.log(dll.count); // 5

dll.remove(20);

console.log(dll.contains(20)); // false
console.log(dll.contains(10)); // true

for (let val of dll) {
  console.log(val); // 60\n10\n30\n40
}

let arr = [];
dll.copyTo(arr);
console.log(arr); // [ 60, 10, 30, 40 ]

let arr2 = [...dll, ...dll];
console.log(arr2); // [ 60, 10, 30, 40, 60, 10, 30, 40 ]

dll.clear();
console.log(dll.count); // 0
let arr3 = [...dll];
console.log(arr3); // []

dll.addLast(40);
dll.addFirst(60);
dll.removeFirst();
let arr4 = [...dll];
console.log(arr4); // [ 40 ]
