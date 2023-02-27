const newArray = [4, 6, 1, 7, 3, 2, 5];

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const pivot = (array, pivotIndex = 0, lastIndex = array.length - 1) => {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex; i <= lastIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, i, swapIndex);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
};

const quickSort = (array, firstIndex = 0, secondIndex = array.length - 1) => {
  if (firstIndex > secondIndex) {
    const pivotIndex = pivot(array, firstIndex, secondIndex);
    quickSort(array, firstIndex, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, secondIndex);
  }
  return array;
};
console.log(quickSort(newArray));
