// O(n) time, O(1) space
function getNthFib(n) {
  const initialTwo = [0, 1];
  let counter = 3;
  while (counter <=n) {
    const nextFib = initialTwo[0] + initialTwo[1];
    initialTwo[0] = initialTwo[1];
    initialTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? initialTwo[1] : initialTwo[0];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

// eg: input { n: 6 } ===> 5
//0 1 1 2 3 5
