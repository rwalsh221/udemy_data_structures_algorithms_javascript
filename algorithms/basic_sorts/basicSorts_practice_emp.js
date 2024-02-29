const newArray = [1, 9, 2, 8, 3, 7, 4, 6, 5, 0];

const bubbleSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const selectionSort = (array) => {
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

const insertionSort = (array) => {
  let i, j, temp;
  for (i = 1; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

// console.log(bubbleSort(newArray));
// console.log(selectionSort(newArray));
console.log(insertionSort(newArray));
// bubbleSort([5, 3, 4, 2, 1]);
// console.log(insertionSort([5, 3, 4, 2, 1]));
