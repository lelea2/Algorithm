const romanToInteger = (romanString) => {
	const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  return [...romanString]
    .reverse()
    .reduce((accumulator, currentValue, index, original) => {
      return (!index ||
        romanNumerals[currentValue] >= romanNumerals[original[index - 1]]
        ? accumulator + romanNumerals[currentValue]
        : accumulator - romanNumerals[currentValue]
      );
    }, 0);
};

console.log(romanToInteger('III')); // 3
console.log(romanToInteger('IV')); // 4
console.log(romanToInteger('IX')); // 9
console.log(romanToInteger('LVIII')); // 58
console.log(romanToInteger('MCMXCIV')); // 1994
console.log(romanToInteger('DCXXI')); // 621