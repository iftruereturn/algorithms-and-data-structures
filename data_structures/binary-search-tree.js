const Stack = require('./stack.js');

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  add(value) {
    if (this.head === null) {
      this.head = new BinaryTreeNode(value);
    } else {
      this.addTo(this.head, value);
    }

    this.count++;
  }

  addTo(node, value) {
    if (value - node.value < 0) {
      if (node.left === null) {
        node.left = new BinaryTreeNode(value);
      } else {
        this.addTo(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new BinaryTreeNode(value);
      } else {
        this.addTo(node.right, value);
      }
    }
  }

  contains(value) {
    let { current } = this.findWithParent(value);
    return current !== null;
  }

  remove(value) {
    let { current, parent } = this.findWithParent(value);

    if (!current) {
      return false;
    }

    this.count--;

    if (current.right === null) {
      if (!parent) {
        this.head = current.left;
      } else {
        let result = parent.value - current.value;

        if (result > 0) {
          parent.left = current.left;
        } else if (result < 0) {
          parent.right = current.left;
        }
      }
    } else if (!current.right.left) {
      current.right.left = current.left;

      if (!parent) {
        this.head = current.right;
      } else {
        let result = parent.value - current.value;
        if (result > 0) {
          parent.left = current.right;
        } else if (result < 0) {
          parent.right = current.right;
        }
      }
    } else {
      let leftmost = current.right.left;
      let leftmostParent = current.right;

      while (leftmost.left) {
        leftmostParent = leftmost;
        leftmost = leftmost.left;
      }

      leftmostParent.left = leftmost.right;

      leftmost.left = current.left;
      leftmost.right = current.right;

      if (!parent) {
        this.head = leftmost;
      } else {
        let result = parent.value - current.value;

        if (result > 0) {
          parent.left = leftmost;
        } else if (result < 0) {
          parent.right = leftmost;
        }
      }
    }

    return true;
  }

  findWithParent(value) {
    let current = this.head;
    let parent = null;

    while (current !== null) {
      let result = current.value - value;

      if (result > 0) {
        parent = current;
        current = current.left;
      } else if (result < 0) {
        parent = current;
        current = current.right;
      } else {
        break;
      }
    }

    return { current, parent };
  }

  preOrderTraversal(func) {
    this._preOrderTraversal(func, this.head);
  }

  _preOrderTraversal(func, node) {
    if (node) {
      func(node.value);
      this._preOrderTraversal(func, node.left);
      this._preOrderTraversal(func, node.right);
    }
  }

  postOrderTraversal(func) {
      this._postOrderTraversal(func, this.head);
  }

  _postOrderTraversal(func, node) {
    if (node) {
      this._postOrderTraversal(func, node.left);
      this._postOrderTraversal(func, node.right);
      func(node.value);
    }
  }

  inOrderTraversal(func) {
    this._inOrderTraversal(func, this.head);
  }

  _inOrderTraversal(func, node) {
    if (node) {
      this._inOrderTraversal(func, node.left);
      func(node.value);
      this._inOrderTraversal(func, node.right);
    }
  }

  *[Symbol.iterator]() {
    if (this.head) {
      let stack = new Stack();
      let current = this.head;
      let goLeftNext = true;

      stack.push(current);

      while (stack.count > 0) {
        if (goLeftNext) {
          while (current.left) {
            stack.push(current);
            current = current.left;
          }
        }

        yield current.value;

        if (current.right) {
          current = current.right;
          goLeftNext = true;
        } else {
          current = stack.pop();
          goLeftNext = false;
        }
      }
    }
  }

  clear() {
    this.head = null;
    this.count = 0;
  }
}


//---------------------------------------------------------
// Example

/*
let bst = new BinaryTree();

bst.add(10);
bst.add(20);
bst.add(30);
bst.add(5);
bst.add(15);

console.log(...bst); // 5 10 15 20 30
console.log(bst.contains(20)); // true

bst.remove(15);
bst.remove(5)

console.log(bst.contains(15)); // false
console.log(...bst); // 10 20 30

bst.add(5);
bst.add(15);
bst.add(25);

console.log(...bst); // 5 10 15 20 25 30

bst.preOrderTraversal(console.log); // 10 \n 5 \n 20 \n 15 \n 30 \n 25
console.log('-----------------');
bst.inOrderTraversal(console.log); // 5 \n 10 \n 15 \n 20 \n 25 \n 30
console.log('-----------------');
bst.postOrderTraversal(console.log); // 5 \n 15 \n 25 \n 30 \n 20 \n 10
*/
