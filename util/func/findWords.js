(function () {
  numbers = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['m', 'n', 'o'],
    '6': ['d', 'e', 'f'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  words = ['bat', 'cat', 'other', 'not', 'prized', 'prize']

  function findWord(inputNumbers) {
    inputNumbers = inputNumbers || '';
    if (inputNumbers.length > 0) {
      let inputNumberArray = inputNumbers.toString().split("");
      valid = inputNumberArray.reduce(function (res, number) {
        if (numbers[number] === undefined) {
          console.log(number + " is not a valid t9 number");
          res = false;
        }
         
        return res;
      }, true);
       
      if (valid) {
        return findWordFromArray(inputNumberArray, '');
      }
    }
  }
 
  function findWordFromArray(inputNumbers, currentString) {
    if(inputNumbers.length == 0) {
      if (words.includes(currentString)) {
        return currentString;
      }
    } else {
        number_to_push = inputNumbers[0];
        number_to_letter_map = numbers[number_to_push];
        wordMap = number_to_letter_map.map(function(letter) {
          let newCurrentString = currentString.slice(0) + letter;
          remainingInputNumbers = inputNumbers.slice(1);
          return findWordFromArray(remainingInputNumbers, newCurrentString);
        });
        foundWords = wordMap.filter(function (word) {return word !== undefined;});
        // TODO: Is there a better way to flatten arrays? Array.prototype.flatten() doesn't seem to be implemented yet
        return [].concat.apply([], foundWords);
    }
  }

  return findWord;
});

// findWord(228);
