function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.count = 0;
}

LinkedList.prototype = Object.create(Object.prototype);

LinkedList.prototype.add = function(value) {
  let llnode = new LinkedListNode(value);

  if (this.head === null) {
    this.head = llnode;
    this.tail = llnode;
  } else {
    this.tail.next = llnode;
    this.tail = llnode;
  }

  this.count++;
};

LinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.count = 0;
};

LinkedList.prototype.contains = function(value) {
  let current = this.head;

  while (current !== null) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }

  return false;
};

LinkedList.prototype.copyTo = function(array, arrayIndex = 0) {
  let current = this.head;

  while (current) {
    array[arrayIndex++] = current.value;
    current = current.next;
  }
};

LinkedList.prototype.remove = function(value) {
  let previous = null;
  let current = this.head;

  while (current !== null) {
    if (current.value === value) {
      if (previous !== null) {
        previous.next = current.next;

        if (current.next === null) {
          this.tail = previous;
        }
      } else {
        this.head = this.head.next;

        if (this.head === null) {
          this.tail = null;
        }
      }

      this.count--;

      return true;
    }

    previous = current;
    current = current.next;
  }

  return false;
};


LinkedList.prototype[Symbol.iterator] = function() {
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


// Variant with generator
/*
LinkedList.prototype[Symbol.iterator] = function*() {
  let current = this.head;

  while (current) {
    yield current.value;
    current = current.next;
  }
}
*/

// -----------------------------------------------------
// examples

let ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);

ll.remove(20);

console.log(ll.contains(20)); // false
console.log(ll.contains(10)); // true

for (let val of ll) {
  console.log(val); // 10\n30
}

let arr = [];
ll.copyTo(arr);
console.log(arr); // [ 10, 30 ]

let arr2 = [...ll, ...ll];
console.log(arr2); // [ 10, 30, 10, 30 ]

ll.clear();
let arr3 = [...ll];
console.log(arr3); // []

