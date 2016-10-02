function insertionSort(items) {
  let sortedRangeEndIndex = 1;

  while (sortedRangeEndIndex < items.length) {
    if (items[sortedRangeEndIndex] - items[sortedRangeEndIndex - 1] < 0) {
      let insertIndex = findInsertionIndex(items, items[sortedRangeEndIndex]);
      insert(items, insertIndex, sortedRangeEndIndex);
    }

    sortedRangeEndIndex++;
  }
}

function findInsertionIndex(items, valueToInsert) {
  for (let index = 0; index < items.length; index++) {
    if (items[index] - valueToInsert > 0) {
      return index;
    }
  }

  throw new Error('The insertion index was not found');
}

function insert(itemArray, indexInsertingAt, indexInsertingFrom) {
  let temp = itemArray[indexInsertingAt];
  itemArray[indexInsertingAt] = itemArray[indexInsertingFrom];

  for (let current = indexInsertingFrom; current > indexInsertingAt; current--) {
    itemArray[current] = itemArray[current - 1];
  }

  itemArray[indexInsertingAt + 1] = temp;
}

module.exports = insertionSort;

//---------------------------------------------------------
// example

/*
let arr = [10, 5, 9, 1, 2, 4, 7, 6, 3, 8];
console.log(arr);
insertionSort(arr);
console.log(arr);
*/
