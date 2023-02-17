const newArray = [4, 6, 1, 7, 3, 2, 5];

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i < endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, i, swapIndex);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
};

const quicksort = (array, firstIndex = 0, endIndex = array.length - 1) => {
  if (firstIndex < endIndex) {
    const pivotIndex = pivot(array, firstIndex, endIndex);
    quicksort(array, firstIndex, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, endIndex);
  }
  return array;
};
console.log(quickSort(newArray));
