// Run time: O(w * n * log(n))
// Space O(w * n)
// w- number of word
// n - length of the longest word
function groupAnagrams(words) {
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split('').sort().join();
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word)
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;

// Eg
// Input: {"words": ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]}
// Output [["yo", "oy"], ["act", "tac", "cat"], ["flop", "olfp"], ["foo"]]
