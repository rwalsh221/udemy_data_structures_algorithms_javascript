const arr = [567, 4, 2, 6, 5, 1, 3];
const arr2 = [567, 6, 1, 2, 3, 4, 5];

const bubbleSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort(arr));
