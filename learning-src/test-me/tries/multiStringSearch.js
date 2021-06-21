function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  for (const string of smallStrings) {
    trie.insert(string);
  }

  const containedString = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, trie, containedString);
  }
  return smallStrings.map(item => item in containedString);
}

function findSmallStringsIn(string, startIdx, trie, containedString) {
  let currentNode = trie.root;
  for (let i = startIdx; i < string.length; i++) {
    const currChar = string[i];
    if (!(currChar in currentNode)) {
      break;
    }
    currentNode = currentNode[currChar];
    if (trie.endSymbol in currentNode) {
      containedString[currentNode[trie.endSymbol]] = true;
    }
  }
}

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }

  insert(string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!(string[i] in current)) {
        current[string[i]] = {};
      }
      current = current[string[i]];
    }
    current[this.endSymbol] = string;
  }
}
