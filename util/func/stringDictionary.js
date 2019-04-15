// write a function f(string) -> [list of all valid anagrams]
// definition of anagram is: string that uses all the characters from the input the number of times that they appear AND is a valid word
// /usr/share/dict/words -- list of all the words, delimited by \n
// example f(listen) -> [tinsel, ...]

// [l,i, s, t, e,n]
// l => [i, s, t, e, n]
//

const words = ['listen', 'tinsel', 'list'];

// Check word exists
function isPartOfDictionary(str) {
   return words.find(item => item.indexOf(str) === 0);
}

function isInDictionary(str) {
   return words.find(item => item === str);
}

function removeItemInArray(arr, index) {
   const newArr = [];
   for (let i = 0; i < arr.length; i++) {
     if (i === index) {
       // don't push
     } else {
        newArr.push(arr[i]);
     }
   }
  return newArr;
}

function generateRemainArray(currStr, arr) {
  const arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    arrResult.push({
      currWord: `${currStr}${arr[i]}`,
      remainArr: removeItemInArray(arr, i),
    });
  }
  return arrResult;
}

const myDict = [];

function generateWords(str, remainArr = []) {
   let arr = [];
   const currStr = remainArr.length === 0 ? '' : str;
   if (remainArr.length === 0) {
       arr = str.split('');
   } else {
      arr = remainArr;
   }
   for(let i = 0; i < arr.length; i++) {
      const wordsHash = generateRemainArray(`${currStr}${arr[i]}`, removeItemInArray(arr, i));
      wordsHash.forEach(item => {
        if (isPartOfDictionary(item.currWord)) {
          if (item.remainArr.length > 0) {
             generateWords(item.currWord, item.remainArr);
          } else {
             if (myDict.indexOf(item.currWord) < 0) {
                myDict.push(item.currWord);
             }
          }
        }
      });
   }
  // console.log('myDict', myDict);
  return myDict;
}

// [l,i, s, t, e,n]
// l => [i, s, t, e, n]  -> [s
/**
[li -> [s, t, e, n]
ls -> [i, t, e, n]
lt -> [i, s, e, n]
le -> [i, s, t, n]
ln -> [i, s, t, e]]

*/

console.log(generateWords('listen'));

/// On^2^

//// O(6*5*4....1) --- n!
// optimize with trie
