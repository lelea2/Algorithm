/**
 * Function to swap number without temp
 */

//With temp
function swapNumber(a, b) {
  var temp = a;
  a = b;
  b = temp;
}

//Without temp
function swapNumber(a, b) {
  b = b - a; //-a
  a = a + b; //a + b - a = b
  b = a - b; //b - (b - a) == +a = a
}


/**
 * This method is using bit manipulation
 * Ways to remember: (both side: a to b)
 * Left side: a-b-a
 * Right side: a to b
 */
function swapNumber2(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
}

module.exports = swapNumber;
