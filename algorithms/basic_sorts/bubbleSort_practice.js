const arr = [4, 2, 6, 5, 1, 3];
const arr2 = [6, 1, 2, 3, 4, 5];

const bubbleSort = (array) => {
  let sorted;
  let count = 0;

  for (let i = array.length - 1; i > 0; i--) {
    sorted = true;
    count += 1;
    console.log(count);
    for (let j = 0; j < i; j++) {
      if (array[j] > [array[j + 1]]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }
  return array;
};

console.log(bubbleSort(arr2));
