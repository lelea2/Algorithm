/**
 * A trie, also called digital tree and sometimes radix tree or prefix tree
 * (as they can be searched by prefixes), is an ordered tree data structure 
 * that is used to store a dynamic set or associative array where the keys are usually strings.
 * Unlike a binary search tree, no node in the tree stores the key associated with that node; 
 * instead, its position in the tree defines the key with which it is associated. 
 * All the descendants of a node have a common prefix of the string associated with that node,
 * and the root is associated with the empty string.
 * Values are not necessarily associated with every node.
 * Rather, values tend only to be associated with leaves,
 * and with some inner nodes that correspond to keys of interest.
 */

// Access  Search  Insertion Deletion
// O(k)    O(k)    O(k)      O(k)

function Node(data) {
  this.data = data;
  this.isWord = false;
  this.prefixes = 0;
  this.children = {};
}

class Trie {
  constructor() {
    this.root = new Node('');
  }

  add(word) {
    if(!this.root) {
      return null;
    }
    this._addNode(this.root, word);
  }

  _addNode(node, word) {
    if(!node || !word) {
      return null;
    }
    node.prefixes++;
    const letter = word.charAt(0);
    let child = node.children[letter];
    if(!child) {
      child = new Node(letter);
      node.children[letter] = child;
    }
    const remainder = word.substring(1);
    if(!remainder) {
      child.isWord = true;
    }
    this._addNode(child, remainder);
  }

  remove(word) {
    if(!this.root) {
      return;
    }
    if(this.contains(word)) {
      this._removeNode(this.root, word);
    }
  }

  _removeNode(node, word) {
    if(!node || !word) {
      return;
    }
    node.prefixes--;
    const letter = word.charAt(0);

    const child = node.children[letter];
    if(child) {
      const remainder = word.substring(1);
      if(remainder) {
        if(child.prefixes === 1) {
          delete node.children[letter];
        } else {
          this._removeNode(child, remainder);
        }
      } else {
        if(child.prefixes === 0) {
          delete node.children[letter];
        } else {
          child.isWord = false;
        }
      }
    }
  }

  contains(word) {
    if(!this.root) {
      return false;
    }
    return this._contains(this.root, word);
  }

  _contains(node, word) {
    if(!node || !word) {
      return false;
    }
    const letter = word.charAt(0);
    const child = node.children[letter];
    if(child) {
      const remainder = word.substring(1);
      if(!remainder && child.isWord) {
        return true;
      } else {
        return this._contains(child, remainder);
      }
    } else {
      return false;
    }
  }

  countWords() {
    if(!this.root) {
      return console.log('No root node found');
    }
    const queue = [this.root];
    let counter = 0;
    while(queue.length) {
      const node = queue.shift();
      if(node.isWord) {
        counter++;
      }
      for(const child in node.children) {
        if(node.children.hasOwnProperty(child)) {
          queue.push(node.children[child]);
        }
      }
    }
    return counter;
  }

  getWords() {
    const words = [];
    const word = '';
    this._getWords(this.root, words, word);
    return words;
  }

  _getWords(node, words, word) {
    for(const child in node.children) {
      if(node.children.hasOwnProperty(child)) {
        word += child;
        if (node.children[child].isWord) {
          words.push(word);
        }
        this._getWords(node.children[child], words, word);
        word = word.substring(0, word.length - 1);
      }
    }
  }

  print() {
    if(!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('|');
    const queue = [this.root, newline];
    let string = '';
    while(queue.length) {
      const node = queue.shift();
      string += `${node.data.toString()} `;
      if(node === newline && queue.length) {
        queue.push(newline);
      }
      for(const child in node.children) {
        if(node.children.hasOwnProperty(child)) {
          queue.push(node.children[child]);
        }
      }
    }
    console.log(string.slice(0, -2).trim());
  }

  printByLevel() {
    if(!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('\n');
    const queue = [this.root, newline];
    let string = '';
    while(queue.length) {
      const node = queue.shift();
      string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
      if(node === newline && queue.length) {
        queue.push(newline);
      }
      for(const child in node.children) {
        if(node.children.hasOwnProperty(child)) {
          queue.push(node.children[child]);
        }
      }
    }
    console.log(string.trim());
  }
}

const trie = new Trie();
trie.add('one');
trie.add('two');
trie.add('fifth');
trie.add('fifty');
trie.print(); // => | o t f | n w i | e o f | t | h y
trie.printByLevel(); // => o t f \n n w i \n e o f \n t \n h y
console.log('words are: one, two, fifth, fifty:', trie.getWords()); // => [ 'one', 'two', 'fifth', 'fifty' ]
console.log('trie count words is 4:', trie.countWords()); // => 4
console.log('trie contains one is true:', trie.contains('one')); // => true
console.log('trie contains on is false:', trie.contains('on')); // => false
trie.remove('one');
console.log('trie contains one is false:', trie.contains('one')); // => false
console.log('trie count words is 3:', trie.countWords()); // => 3
console.log('words are two, fifth, fifty:', trie.getWords()); // => [ 'two', 'fifth', 'fifty' ]
