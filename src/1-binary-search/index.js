const { listNumbers } = require('../data');

const binary_search_number = (list, item) => {

  let iter = 0;
  let min = 0;
  let max = list.length - 1;

  while (min <= max) {

    let mid = Math.floor((min + max) / 2);
    iter++;

    if (list[mid] === item) {
      return {
        idx: mid,
        exist: true,
        steps: iter,
        listItem: list[mid]
      }
    }
    if (list[mid] < item) {
      min = mid + 1;
    }
    else {
      max = mid - 1;
    }
  }

  return {
    idx: -1,
    exist: false,
    steps: iter,
    listItem: null
  }
}


// Test results

const getDesiredNumber = (max = 2800) => Math.floor(Math.random() * max);

const desiredNumber = getDesiredNumber();
const searchResults = binary_search_number(listNumbers, desiredNumber);

console.log(desiredNumber, searchResults);

// DMYKHAILENKOL:1-binary-search$ node index.js 
// 2339 { idx: -1, exist: false, steps: 11, listItem: null }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 166 { idx: 165, exist: true, steps: 10, listItem: 166 }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 771 { idx: 770, exist: true, steps: 9, listItem: 771 }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 273 { idx: 272, exist: true, steps: 9, listItem: 273 }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 522 { idx: 521, exist: true, steps: 9, listItem: 522 }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 1522 { idx: -1, exist: false, steps: 11, listItem: null }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 1460 { idx: -1, exist: false, steps: 11, listItem: null }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 1796 { idx: -1, exist: false, steps: 11, listItem: null }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 2586 { idx: -1, exist: false, steps: 11, listItem: null }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 2267 { idx: -1, exist: false, steps: 11, listItem: null }
// DMYKHAILENKOL:1-binary-search$ node index.js 
// 124 { idx: 123, exist: true, steps: 6, listItem: 124 }
