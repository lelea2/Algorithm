// Problem description :
// Convert a given binary tree to a linked list of all the nodes at each depth (if you have a binary tree with depth D, you’ll have D linked lists).

// Logic :
// Modify the pre-order traversal algorithm by passing an extra argument of the current height (level) + 1

function BinarySearchTree () { 
  this.root = null;
}

function LinkedList () {
  this.head = null;
}

function createLevelLinkedList (root, lists, level) {
  if (root === null) { // base case
    return;
  }
  var list = null;
  if (lists.length === level) {
    list = new LinkedList();
    lists[level] = list;
  } else {
    list = lists[level];
  }
  // http://js-interview.tutorialhorizon.com/2015/10/03/javascript-linked-list-example/
  list.insertNodeAtTail(root.data); 
  createLevelLinkedList(root.left, lists, level + 1);
  createLevelLinkedList(root.right, lists, level + 1);
}

// Create a new Balanced Binary Tree as a sample input
// http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
var BST = new BinarySearchTree();
var testDate = [8,3,10,1,6,14,4,7];
testData.forEach(el => BST.insertNode(el));

var lists = [];
createLevelLinkedList(BST.root, lists, 0);
console.log('Linked Lists : ', lists);
