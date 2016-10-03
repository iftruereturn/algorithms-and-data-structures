function swap(items, left, right) {
  if (left !== right) {
    let temp = items[left];
    items[left] = items[right];
    items[right] = temp;
  }
}

function findIndexOfSmallestFromIndex(items, sortedRangeEnd) {
  let currentSmallest = items[sortedRangeEnd];
  let currentSmallestIndex = sortedRangeEnd;

  for (let i = sortedRangeEnd + 1; i < items.length; i++) {
    if (currentSmallest - items[i] > 0) {
      currentSmallest = items[i];
      currentSmallestIndex = i;
    }
  }

  return currentSmallestIndex;
}

function selectionSort(items) {
  let sortedRangeEnd = 0;

  while (sortedRangeEnd < items.length) {
    let nextIndex = findIndexOfSmallestFromIndex(items, sortedRangeEnd);
    swap(items, sortedRangeEnd, nextIndex);

    sortedRangeEnd++;
  }
}

module.exports = selectionSort;

//---------------------------------------------------------
// example

/*
let arr = [8, 1, 4, 5, 2, 3, 7, 6, 0, 9];
console.log(arr);
selectionSort(arr);
console.log(arr);
*/
