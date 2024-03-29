const arr1 = [1, 3, 7, 8];
const arr2 = [2, 4, 5, 6];

// console.log(merge(arr1, arr2));

const newArray = [1, 9, 2, 8, 3, 7, 4, 6, 5, 0];
const testArray = ['i', 'h', 'a', 'r', 'r', 'd', 'c'];
// console.log(newArray);

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const combined = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }

  return combined;
};

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};
console.log(mergeSort(newArray));
// console.log(mergeSort(testArray));
