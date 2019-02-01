/*****************************************************/
/*********************** Solution1 *******************/
/*****************************************************/
String.prototype.repeat = function(times) {
  let remainder = times % 2;
  times -= remainder;

  // Base cases for [0,1]
  if (!times) {
    if (remainder) {
      return this;
    }
    return "";
  }

  // Recursive case
  let result = remainder ? this : "";
  let half = this.repeat(times/2);
  result += (half + half);
  return result;
}

/*****************************************************/
/*********************** Solution2 *******************/
/*****************************************************/
function decimalNumberToReversedBinaryString(dec) {
  return Number(dec).toString(2).split('').reverse().join('');
}

String.prototype.repeat = function(times) {
  let ret = "";
  let seed = this;

  // Take a number and turn it into binary. Reverse it so we can iterate small to large
  // 13 => 1101 in binary => 1011 reversed so the 1s place is at the front
  let binaryTimes = decimalNumberToReversedBinaryString(times);
  for (let i = 0; i < binaryTimes.length; i++) {
    if (parseInt(binaryTimes[i])) { // if bit is set, add the current seed to the total
      ret += seed;
    }
    seed += seed; // double the seed for the next iteration
  }
  return ret;
}

/*****************************************************/
/*************  Solution3 - BITWISE*******************/
/*****************************************************/
String.prototype.repeat = function(n) {
  let seed = this;
  let result = "";
  while (n) {
    if (n % 2 == 1) {
      result += seed;
    }
    if (n > 1) {
      seed += seed;
    }
    n >>= 1;
  }
  return result;
}
