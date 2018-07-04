// Problem description :
// Given a sorted (increasing order) array with unique integer elements, create a binary search tree (BST) with minimal height.

// Input : A sorted array with unique integer elements // [0, 1, 2, 3, 4, 5, 6] 
// Output: A binary search tree with minimal height

// Logic :
// We will use recursion technique to solve this problem.

// Find the middle element of an array and insert it into the BST
// Call the same method on the left side of an array
// Find the middle element of an array and insert it into the BST
// Call the same method on the right side of an array
// Find the middle element of an array and insert it into the BST
// Time complexity : O(N Log N)

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.createMinHeightBST = function (sortedrArr) {

  var middle;
  if (sortedrArr.length === 0) {
    return 0;
  } else if (sortedrArr.length === 1) {
    middle = 0;
  } else {
    middle = Math.floor(sortedrArr.length / 2);
  }
  // http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
  this.insertNode(sortedrArr[middle]);

  var leftArr = sortedrArr.slice(0, middle);
  var rightArr = sortedrArr.slice(middle+1, sortedrArr.length);

  this.createMinHeightBST(leftArr);
  this.createMinHeightBST(rightArr);
};

var BST = new BinarySearchTree();
var sortedUniqueArr = [0, 1, 2, 3, 4, 5, 6];

BST.createMinHeightBST(sortedUniqueArr);
console.log(BST);
