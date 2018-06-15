function deleteNodeDLL(val) {
  var current = dll.head,
      previous;

  //delete head
  if(current.value == val) {
    dll.head = current.next;
    //if there is only one node, then dll.head is null
    if(dll.head) {
      dll.head.previous = null;
    }
    return dll;
  }
  while(current.next) {
    if(current.value == val) {
      previous.next = current.next;
      current.next.previous = previous;
      return dll;
    }
    previous = current;
    current = current.next;
  }
  //delete last node
  if(current.value == val) {
    previous.next = null;
  }
  return dll;
}