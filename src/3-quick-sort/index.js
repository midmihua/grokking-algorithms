const { unsortedListNumber } = require('../data');

// 1. Basic recursion - count sum of all elements

const summa = (list) => list.length === 1 ? list[0] : list[0] + summa(list.slice(1));
console.log(summa(unsortedListNumber));

// DMYKHAILENKOL:grokking-algorithms$ node src/3-quick-sort/index.js 
// 500500

// 2. Basic recursion - factorial

const factorial = (n) => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

// DMYKHAILENKOL:grokking-algorithms$ node src/3-quick-sort/index.js 
// 1
// 1
// 120

// 3. QuickSort

const quickSort = (list) => {

  if (list.length < 2) {
    return list;
  }

  const idx = Math.floor(Math.random() * list.length);
  const pivot = list[idx];
  const less = [];
  const greater = [];

  list.forEach((item, i) => {
    if (i != idx) {
      item <= pivot ? less.push(item) : greater.push(item);
    }
  });

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([2]));
console.log(quickSort([2, 1]));
console.log(quickSort([2, 0, 1]));
console.log(quickSort([2, 0, 1, 3]));
console.log(quickSort([2, 0, 1, 3, -1]));
console.log(quickSort([2, 0, 1, 3, -1, 5]));
console.log(quickSort(unsortedListNumber));

// DMYKHAILENKOL:grokking-algorithms$ node src/3-quick-sort/index.js 
// [ 2 ]
// [ 1, 2 ]
// [ 0, 1, 2 ]
// [ 0, 1, 2, 3 ]
// [ -1, 0, 1, 2, 3 ]
// [ -1, 0, 1, 2, 3, 5 ]
// [
//    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
//   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
//   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
//   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
//   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
//   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
//   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
//   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
//   97, 98, 99, 100,
//   ... 900 more items
// ]
