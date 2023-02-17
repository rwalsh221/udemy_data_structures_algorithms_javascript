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
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
      if (min !== i) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
    }
  }
  return array;
};

const insertionSort = (array) => {
  let i, j, temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (let j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = array[temp];
  }
  return array;
};
