// Write a function that determines if you can generate the document using the available charaters.
// Return true/false
// {
//   "characters": "aheaolabbhb",
//   "document": "hello"
// }


// Run time O(n+m) - n & m is length of characters and document
// Space time O(c) - unique # of characters
function generateDocument(characters, document) {
	const characterCount = {};
	console.log(characters, document);
  for (const char of characters) {
    if (!(char in characterCount)) {
      characterCount[char] = 0;
    }
    characterCount[char]++;
  }
	// console.log(characterCount);
  for (const char of document) {
    if (!(char in characterCount) || characterCount[char] === 0) {
      return false;
    }
    characterCount[char]--;
  }
	return true;
}

// {
//   "characters": "aheaolabbhb",
//   "document": "hello"
// }
// true