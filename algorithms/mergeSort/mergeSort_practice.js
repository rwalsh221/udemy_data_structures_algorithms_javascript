const arr1 = [1, 3, 7, 8];
const arr2 = [2, 4, 5, 6];

const merge = (array1, array2) => {
  // MERGE TWO ARRAYS
  const combined = [];
  const i = 0;
  const j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
};

// console.log(merge(arr1, arr2));

const newArray = [1, 9, 2, 8, 3, 7, 4, 6, 5, 0];
const testArray = ['i', 'h', 'a', 'r', 'r', 'd', 'c'];
// console.log(newArray);

const mergeSort = (array) => {
  // SPLIT THE ARRAYS
  if (array.length === 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);

  const right = array.slice(mid);

  merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(newArray));
// console.log(mergeSort(testArray));
