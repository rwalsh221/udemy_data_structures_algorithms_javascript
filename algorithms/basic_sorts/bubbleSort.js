const arr = [4, 2, 6, 5, 1, 3];

const bubbleSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
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
  let i, j, min;
  for (i = 1; i < array.length; i++) {
    min = array[i];
    for (j = i - 1; array[j] > min && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = min;
  }
};

console.log(bubbleSort(arr));
