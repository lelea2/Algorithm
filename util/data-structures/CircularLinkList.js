function CircularLinkedList() {
  this.head = null;
}

CircularLinkedList.prototype.push = function(val) {
  var head = this.head,
      current = head,
      node = {value: val, next: null, previous: null};
  if (!head) { // head does not there
    node.next = node;
    node.previous = node;
    this.head = node;
  } else {
    while(current.next != head) {
      current = current.next;
    }
    node.next = head; // assign node link
    node.previous = current; // assign node link
    head.previous = node; // assign head previous
    current.next = node; // assign current next
  }
}