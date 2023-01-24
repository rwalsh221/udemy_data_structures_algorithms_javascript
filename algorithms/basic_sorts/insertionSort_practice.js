const arr = [890, 7655, 4, 2, 6, 5, 1, 3];
// [2, 4, 6, 5, 1, 3];

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
console.log(insertionSort(arr));
