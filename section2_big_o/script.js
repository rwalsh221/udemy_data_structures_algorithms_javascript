// **** LESSON 6 ***********************************************
// BIG O OF O(n)
// Number of operations proportional to the number of inputs
const logItems6 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

// logItems6(10);

// **** LESSON 7 ***********************************************
// BIG O OF O(2n)
// DROP CONSTANT = BIG O OF O(n)
// Number of operations still proportional to the number of inputs
const logItems7 = (n) => {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }

  for (let j = 0; j < n; j += 1) {
    console.log(j);
  }
};

// logItems7(3);

// **** LESSON 8 ***********************************************
// BIG O OF O(n2)
const logItems8a = (n) => {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      console.log(i, j);
    }
  }
};

// logItems8a(10);

// BIG O OF O(n3)
// SIMPLEFIED TO O(n2)
// growth is exponential so can be grouped together with above function for a BIG O of O(n2)
// BIG O has different categorys for simplification due to differences in processer speed, language etc
const logItems8b = (n) => {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      for (let k = 0; k < n; k += 1) {
        console.log(i, j, k);
      }
    }
  }
};

// logItems8b(10);

// **** LESSON 9 ***********************************************
// BIG O OF 0(n2 + n)
// DROP NON DOMINENT. IF N = 100 FIRST FOR LOOP WILL RUN 10000 TIMES
// SECOND WILL ONLY RUN 100 TIMES SO IT DOESNT REALLY EFFECT NUMBER OF OPERATIONS
// n2 IS DOMINENT n IS NON DOMINENT
// SO DROP NON DOMINENT AND BIG O BECOMES 0(n2)
const logItems9 = (n) => {
  // FIRST FOR LOOP HAS BIG O OF O(n2)
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      console.log(i, j);
    }
  }
  //   SECOND FOR LOOP AS BIG O OF O(N)
  for (let k = 0; k < n; k += 1) {
    console.log(k);
  }
};

// logItems9(10);

// **** LESSON 10 ***********************************************
// BIG 0 OF 0(1) ALSO KNOWN AS CONSTANT TIME
// BIG 0 OF 0(1)
const addItems10a = (n) => {
  return n + n;
};

addItems10a(2);

// BIG 0 OF 0(2)
// SIMPLIFIED TO BIG O OF O(1)
// NUMBER OF OPERATIONS DOESNT CHANGE AS N CHANGES
const addItems10b = (n) => {
  return n + n + n;
};

addItems10b(2);
// **** LESSON 11 ***********************************************

// 0(log n) FOR SORTING ALGORITHMS. SEE LESSON VIDEO

// **** LESSON 12 ***********************************************
// NOT O(n)
// TWO INPUTS SO BIG O = O(a + b) AS a COULD BE 10 AND b COULD BE 10000. SO CANT SIMPLYFY
const logItems12a = (a, b) => {
  for (let i = 0; i < a; i += 1) {
    console.log(i);
  }

  for (let j = 0; j < b; j += 1) {
    console.log(j);
  }
};

// BIG O OF O(a * b)
const logItems12b = (a, b) => {
  for (let i = 0; i < a; i += 1) {
    for (let j = 0; j < b; j += 1) {
      console.log(i, j);
    }
  }
};

// **** LESSON 13 ***********************************************
// BIG 0 FOR ARRAYS
const myArray = [1, 2, 3, 4, 5];
// ADDING AND REMOVING FROM END OF ARRAY HAS BIG O OF O(1)
myArray.push(6);
myArray.pop(6);
// ADDING AND REMOVING FROM START OF ARRAY HAS BIG O OF O(n) DUE TO HAVING TO REINDEX THE ARRAY
myArray.shift(8);
myArray.unshift(8);
// ADDING AND REMOVING FROM MIDDLE OF ARRAY HAS BIG O OF O(n) DUE TO HAVING TO REINDEX THE ARRAY
myArray.splice(1, 0, 'hello');

// SEARCHING ARRAY. SEARCH BY VALUE = O(n) AS EVERY ITEM IN ARRAY HAS TO BE CHECKED.
// SEARCH BY INDEX = 0(1) AS CAN GO STRAIGHT TO INDEX
// **** LESSON 14 ***********************************************
