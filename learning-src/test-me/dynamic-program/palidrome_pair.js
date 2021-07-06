// Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.

// A naive approach here would attempt every possible pairing of words, but that would be inefficient. 
// Instead, we can figure out what possible words would pair with each word and specifically check for those.

// To do this, we'll first have to store each word in a map structure (wmap), with the word as the key and the index as the value. 
// This way, we can look up any possible matches with the current word as we iterate through words.

// The next thing we'll want to do is define a helper function (isPal) to check if a word is a palindrome. 
// Rather than having to pass it a substring of a word, we can define it to take a range of indexes to check, so that we're not constantly building new strings.
// As we iterate through words, then, each word will possibly match another word in one of three ways:
// * A blank string word will match on either side with any palindrome word. (e.g. "" will match with "abc" and vice versa)
// * A full word will match on either side with its backwards version. (e.g. "abc" will match with "cba", and vice versa)
// * A partial word will match its backwards version on the opposite side if the leftover portion of the word is a palindrome (
//   e.g. "abcddd" will match with "cba" because "abc" matches with "cba" and "ddd" is a palindrome)

// Time Complexity: O(N * M^2) where N is the length of words and M is the average length of the words in words
// Space Complexity: O(N) for wmap

const palindromePairs = function(words) {
  let wmap = new Map();
  let ans = [];

  // Store word in map structure, key value , where value is the index (in order to look up)
  for (let i = 0; i < words.length; i++) {
    wmap.set(words[i], i);
  }


  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      for (let j = 0; j < words.length; j++) {
        if (isPal(words[j]) && j !== i) {
          ans.push([i, j], [j, i]);
        }
        continue;
      }
    }
    let bw = words[i].split("").reverse().join(""); // reverse the word
    let res = wmap.get(bw);
    if (res !== undefined && res !== i) {
      ans.push([i, res]);
    }
    for (let j = 1; j < bw.length; j++) {
      if (isPal(bw, 0, j - 1)) {
        let res = wmap.get(bw.slice(j));
        if (res !== undefined) {
          ans.push([i, res]);
        }
      }
      if (isPal(bw, j)) {
        let res = wmap.get(bw.slice(0,j));
        if (res !== undefined) {
          ans.push([res, i]);
        }
      }
    }
  }
  return ans;
};

const isPal = (word, i=0, j=word.length-1) => {
  while (i < j) {
    if (word[i++] !== word[j--]) {
      return false;
    }
  }
  return true;
};


console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]));