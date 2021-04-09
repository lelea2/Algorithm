// Write a function that takes in the head of a Singly linked list, swap every pair of adjacent nodes in place
// and returns its new head
// If the input LinkedList has an odd number of nodes, its final node should remain the same
// Each LinkedList node has an integer value as well as a newxt node pointing to the next node of the list or None/null

// Sample
// head: 0 -> 1 -> 2 -> 3 -> 4 -> 5
// output
// 1 -> 0 -> 3 -> 2 -> 5 -> 4

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time, O(1) space - where n is the number of node in LinkedList
function nodeSwap(head) {
  const tempNode = new LinkedList(0);
  tempNode.next = head;

  let prevNode = tempNode;
  while(prevNode.next !== null && prevNode.next.next !== null) {
    const firstNode = prevNode.next;
    const secondNode = prevNode.next.next;
    // prevNode -> firstNode -> secondNode -> x

    firstNode.next = secondNode.next;
    secondNode.next = firstNode;
    prevNode.next = secondNode;
    // prevNode -> secondNode -> firstNode -> x

    prevNode = firstNode;
  }
  return tempNode.next; 
}