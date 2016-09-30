function swap(items, left, right) {
  if (left !== right) {
    let temp = items[left];
    items[left] = items[right];
    items[right] = temp;
  }
}

function bubbleSort(items) {
  let swapped;

  do {
    swapped = false;

    for (let i = 1; i < items.length; i++) {
      if (items[i - 1] - items[i] > 0) {
        swap(items, i - 1, i);
        swapped = true;
      }
    }
  } while (swapped);
}


//---------------------------------------------------------
// example


let arr = [20, 5, 99, 1, 24, 77, 80, 33, 39, 60];
console.log(arr);
bubbleSort(arr);
console.log(arr);
console.log('------------');

let arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr2);
bubbleSort(arr2);
console.log(arr2);
