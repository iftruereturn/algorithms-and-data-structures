function swap(items, left, right) {
  if (left !== right) {
    let temp = items[left];
    items[left] = items[right];
    items[right] = temp;
  }
}

function bubbleSort(items) {
  let swapped;

  let operationCounter = 0;

  do {
    swapped = false;

    for (let i = 1; i < items.length; i++) {

      operationCounter++;

      if (items[i - 1] - items[i] > 0) {
        swap(items, i - 1, i);
        swapped = true;
      }
    }
  } while (swapped);

  console.log(operationCounter);
}

// slightly optimized
function bubbleSort2(items) {
  let swapped;
  let length = items.length;

  let operationCounter = 0;

  for (let i = 0; i < items.length; i++) {
    let swapped = false;

    for (let j = 1; j < length; j++) {
      operationCounter++;

      if (items[j - 1] - items[j] > 0) {
        swap(items, j - 1, j);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

    length--;
  }

  console.log(operationCounter);
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

console.log('=====================================');

let arr3 = [20, 5, 99, 1, 24, 77, 80, 33, 39, 60];
console.log(arr3);
bubbleSort2(arr3);
console.log(arr3);
console.log('------------');

let arr4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr4);
bubbleSort2(arr4);
console.log(arr4);
