function swap(items, left, right) {
  if (left !== right) {
    let temp = items[left];
    items[left] = items[right];
    items[right] = temp;
  }
}

function pivotRange(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function quickSort(items) {
  sort(items, 0, items.length - 1);
}

function sort(items, left, right) {
  if (left < right) {
    let pivotIndex = pivotRange(left, right);
    let newPivot = partition(items, left, right, pivotIndex);

    sort(items, left, newPivot - 1);
    sort(items, newPivot + 1, right);
  }
}

function partition(items, left, right, pivotIndex) {
  let pivotValue = items[pivotIndex];

  swap(items, pivotIndex, right);

  let storeIndex = left;

  for (let i = left; i < right; i++) {
    if (items[i] < pivotValue) {
      swap(items, i, storeIndex);
      storeIndex++;
    }
  }

  swap(items, storeIndex, right);
  return storeIndex;
}

module.exports = quickSort;


//---------------------------------------------------------
// example

/*
let arr = [2, 0, 8, 7, 1, 5, 3, 6, 9, 4];
console.log(arr);
quickSort(arr);
console.log(arr);

let arr2 = [0, 2, 1, 4, 3];
console.log(arr2);
quickSort(arr2);
console.log(arr2);
*/
