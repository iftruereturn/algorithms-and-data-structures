const BST = require('./binary-search-tree.js');

class MySet {
  constructor(items) {
    this._items = new BST();
    this.addRange(items);
  }

  add(item) {
    if (this.contains(item)) {
      throw new Error('Item already exists in Set');
    }

    this._items.add(item);
  }

  addRange(items) {
    for (let item in items) {
      this.add(items[item]);
    }
  }

  remove(item) {
    return this._items.remove(item);
  }

  contains(item) {
    return this._items.contains(item);
  }

  get count() {
    return this._items.count;
  }

  union(otherSet) {
    let result = new MySet([...this]);

    for (let item of otherSet) {
      if (!this.contains(item) && !result.contains(item)) {
        result.add(item);
      }
    }

    return result;
  }

  intersection(otherSet) {
    let result = new MySet();

    for (let item of this) {
      if (otherSet.contains(item)) {
        result.add(item);
      }
    }

    return result;
  }

  difference(otherSet) {
    let result = new MySet([...this]);

    for (let item of otherSet) {
      result.remove(item);
    }

    return result;
  }

  symmetricDifference(otherSet) {
    let union = this.union(otherSet);
    let intersection = this.intersection(otherSet);

    return union.difference(intersection);
  }

  *[Symbol.iterator]() {
    yield* this._items[Symbol.iterator]();
  }
}

module.exports = MySet;

//---------------------------------------------------------
// example

/*
let set = new MySet();
set.add(40);
set.add(50);
console.log(...set); // 40 50
set.addRange([10, 20, 30]);
console.log(...set); // 10 20 30 40 50

let set2 = new MySet([20, 40, 60, 80, 100]);
console.log(...set2); // 20 40 60 80 100

console.log(set.contains(30)); // true
set.remove(30);
console.log(set.contains(30)); // false
console.log(...set); // 10 20 40 50

console.log(set.count); // 4
console.log(set2.count); // 5

console.log('-----------------------');
//-----------------------
// set: 10 20 40 50
// set2: 20 40 60 80 100

// union
console.log(...set.union(set2)); // 10 20 40 50 60 80 100
console.log(...set2.union(set)); // 10 20 40 50 60 80 100

// intersection
console.log(...set.intersection(set2)); // 20 40
console.log(...set2.intersection(set)); // 20 40

// difference
console.log(...set.difference(set2)); // 10 50
console.log(...set2.difference(set)); // 60 80 100

// symmetric difference
console.log(...set.symmetricDifference(set2)); // 10 50 60 80 100
console.log(...set2.symmetricDifference(set)); // 10 50 60 80 100
*/
