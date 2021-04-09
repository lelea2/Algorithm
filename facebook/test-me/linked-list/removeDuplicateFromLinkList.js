class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) run time
// O(1) space time
function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextDistinctNode = currentNode.next;
    while(nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next;
    }
    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }
  return linkedList;
}