// Find sum with no operator

var getSum = function(a, b) {
  if (b == 0) {
    return a;
  } else {
    return getSum(a ^ b, (a & b) << 1)
  }
};