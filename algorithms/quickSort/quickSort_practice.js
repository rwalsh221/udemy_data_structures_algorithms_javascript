const newArray = [4, 6, 1, 7, 3, 2, 5];

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const pivot = (array, pivotIndex = 0, lastIndex = array.length - 1) => {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= lastIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, i, swapIndex);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
};

const quickSort = (array, firstIndex = 0, lastIndex = array.length - 1) => {
  if (firstIndex < lastIndex) {
    const pivotIndex = pivot(array, firstIndex, lastIndex);
    quickSort(array, firstIndex, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, lastIndex);
  }
  return array;
};
console.log(quickSort(newArray));
