//Run time: O(n^2)
//Idea: loop through array and keep track of it (linear sort)
var sortThis = [5,2,4,3,1];
var a, b;

for (var j=0; j < sortThis.length; j++) {
  for (var i=0; i < sortThis.length; i++) {
    a = sortThis[i];
    b = sortThis[i+1];
    if ( a > b && b ) {
      sortThis[i] = b;
      sortThis[i+1] = a; //reverse a
    }
  }
}

console.log(sortThis);
