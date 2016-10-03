
function mergeSort(items) {
  if (items.length <= 1) {
    return;
  }

  let leftSize = items.length / 2;

  let left = [...items.slice(0, leftSize)];
  let right = [...items.slice(leftSize)];

  mergeSort(left);
  mergeSort(right);
  merge(items, left, right);
}

function merge(items, left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let targetIndex = 0;

  let remaining = left.length + right.length;

  while (remaining > 0) {
    if (leftIndex >= left.length) {
      items[targetIndex] = right[rightIndex++];
    } else if (rightIndex >= right.length) {
      items[targetIndex] = left[leftIndex++];
    } else if (left[leftIndex] - right[rightIndex] < 0) {
      items[targetIndex] = left[leftIndex++];
    } else {
      items[targetIndex] = right[rightIndex++];
    }

    targetIndex++;
    remaining--;
  }
}

module.exports = mergeSort;

//---------------------------------------------------------
// example

/*
let arr = [5, 1, 2, 8, 0, 9, 3, 4, 6, 7];
console.log(arr);
mergeSort(arr);
console.log(arr);
*/
