class Node {
  constructor(metadata) {
    this.data = metadata;
    this.link = null;
  }
}

class SinglyList {

  constructor() {
    this.length = 0;
    this.firstNode = null; 
  }

  add(metadata) {
    // lets make a node!
    const node = new Node(metadata);
    let currentNode = this.firstNode;
    // Do we have an empty list right now?
    if (!currentNode) {
       this.firstNode = node;
       // increment our list count
       this.length = this.length + 1;
      return node;
    }
    // Do we already have nodes in the list?
    while (currentNode.link) {
      currentNode = currentNode.link
    }
    currentNode.link = node;
    // increment our list count
    this.length = this.length + 1;
    return node;
  }

  remove(index) {
    let currentNode = this.firstNode;
    const length = this.length;
    let count = 0;

    // we need to validate our params

    if (index < 0 || length === 0 || index > length) {
      throw new Error('Invalid list conditions: invalid index supplied');
    }

    // are we removing the first node?

    if (index === 0) {
      this.firstNode = currentNode.link;

      const deletedNode = currentNode;
      // get rid of the current node
      currentNode = null;

      this.length = this.length - 1;

      return deletedNode;
    }

    let nodePrior;
    let nodeToDelete;

    // are we removing any other node?
    while (count < index) {
      nodePrior = currentNode;
      nodeToDelete = currentNode.link;
      count = count + 1;
    }

    nodePrior.link = nodeToDelete.link;

    this.length = this.length - 1;

    return nodeToDelete;
  }

  getLength() {
    return this.length; 
  }

  incrementLength() {
    this.length = this.length + 1;
    return;
  }

  decrementLength() {
    this.length = this.length - 1;
    return;
  }
  
  findNode(index) {
    let currentNode = this.firstNode;
    const length = this.getLength();
    let count = 0;

    // is this a valid index
    if (length === 0 || index > length) {
      throw new Error('Invalid node');
    }

    while (count < index) {
      currentNode = currentNode.link;
      count = count + 1;
    }

    return currentNode;
  }
}


const list = new SinglyList();

// lets add something

list.add({ action: 'You see a shiny object' });

list.add({ action: 'A creature jumps at you!' });

// lets get the length

function printContent(content) {
  // create a new div element 
  const newDiv = document.createElement("div"); 
  // and give it some content 
  const newContent = document.createTextNode(content); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("root"); 
  document.body.insertBefore(newDiv, currentDiv); 
}

printContent(`List Length ${list.getLength()}`);

// find a node
const node = list.findNode(0);

printContent(node.data.action);

const anotherNode = list.findNode(1);

printContent(anotherNode.data.action);

// remove a node
list.remove(0);

printContent(`List Length ${list.getLength()}`);
