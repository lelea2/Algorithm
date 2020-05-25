// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) run time | O(1) space time
function removeKthNodeFromEnd(head, k) {
  let counter = 1;
  let first = head;
  let second = head;
  while (counter <=k) {
    second = second.next;
    counter++;
  }
  // if 2nd reach null, the remove the head node
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}

// Do not edit the line below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
