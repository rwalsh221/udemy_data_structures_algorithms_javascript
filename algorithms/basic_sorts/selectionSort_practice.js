const arr = [4, 2, 6, 5, 1, 3];

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
      let temp = array[i];
      array[i] = array[temp];
      array[temp] = array[i];
    }
  }
  return array;
};

console.log(arr);
console.log(selectionSort(arr));
