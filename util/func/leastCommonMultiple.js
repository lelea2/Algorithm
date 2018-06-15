/**
 * Find least common denominator of 2 integer
 */
function lcm_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) {
    return false;
  }
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));

/***********************************************************************************/
/**
 * Find least common denominator of a range
 */
/***********************************************************************************/
function leastCommonMultiple(min, max) {
  function range(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  }

  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = min;
  range(min, max).forEach(function(n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
}

leastCommonMultiple(1, 13); // => 360360 