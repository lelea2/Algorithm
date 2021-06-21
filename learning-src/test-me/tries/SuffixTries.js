// Wirte a Suffixtrie for Suffix-Trie-like data structure
// The class should have root property set to be the root node of the trie and support
// - Create the trie from string. This will be done by calling the popularteSuffixTrieFrom method upon 
// class instatiation, which should popularate the root of the class
// - SEarch for strng in the trie

// Sample
// {
//   c: {'*': true},
//   b: {
//     c: {'*': true},
//     a: {b: {c: {'*': true}}},
//   },
//   a: {b: {c: {'*': true}}},
// }

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  // O(n^2) time | O(n^2) space
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) {
        node[letter] = {};
      }
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }

  // O(m) time | O(n) space
  // m is length of keys in tries
  contains(string) {
    let node = this.root;
    for (const letter in string) {
      if (!(letter in node)) {
        return false;
      }
      node = node[letter];
    }
    return (this.endSymbol in node);
  }
}