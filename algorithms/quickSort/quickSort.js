const newArray = [4, 6, 1, 7, 3, 2, 5];

const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
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

console.log(newArray);

// pivot(newArray);
console.log(newArray);

const quickSort = (
  array,
  left = 0,
  right = array.length - 1,
  side = 'init'
) => {
  console.log(side);
  if (left < right) {
    console.log(array);
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1, 'left');
    quickSort(array, pivotIndex + 1, right, 'right');
  }
  console.log(left, right, true);
  return array;
};

console.log(quickSort(newArray));
