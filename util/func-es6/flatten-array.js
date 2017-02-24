//Recursive solution
// ES6
const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);


//With loop only
const flatten = arr => {
  let index;
  while ( (index = arr.findIndex(el => Array.isArray(el))) > -1 ) {
    arr.splice(index, 1, ...arr[index])
  }
  return arr;
}

flatten([1, [2, 'a', { b: 1, c: [2, 3] } ], [3, 4, [5, 6]]]);
