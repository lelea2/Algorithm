/**
 * @constructor
 */
var WordDictionary = function() {
	this.root = new TrieNode('root');
};
    
function TrieNode(key) {
	return {
    key : key,
    isWord : false
	};
}
    
/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
	var tree = this.root, i, curr;
	for(i = 0; i < word.length; i++) {
    curr = word[i];
    if(!tree[curr]) {
		  tree[curr] = new TrieNode(curr);
    }
	 tree = tree[curr];
	}
	tree.isWord = true;
};
    
/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
	return searchWord(word, this.root);
    
	function searchWord(word, tree) {
    if(word === "" && tree.isWord) {
		  return true;
	  }
	  if (word[0] !== '.') {
      if(!tree[word[0]]) {
		    return false;
		  } else {
		    return searchWord(word.substring(1, word.length), tree[word[0]]);
		  }
	  } else {
		  for(var i in tree) {
		    if(i === 'key' || i === 'isWord') {
			    continue;
		    }
		    if(searchWord(word.substring(1, word.length), tree[i])){
			    return true;
		    }
		  }
		  return false;
	  }
	}
};


// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true