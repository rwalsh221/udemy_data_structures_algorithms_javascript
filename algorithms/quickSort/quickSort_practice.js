const newArray = [4, 6, 1, 7, 3, 2, 5];

const swap = (array, firstIndex, secondIndex) => {
  // SWAP ELEMENT POSITION IN ARRAY
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
  // LOOP THROUGH ARRAY/ RETURN SWAP
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
};

// pivot(newArray);

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

console.log(quickSort(newArray));
