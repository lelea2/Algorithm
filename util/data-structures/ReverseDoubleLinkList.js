function reverseDoublyLL(dll){
  var head = dll.head,
       current = dll.head,
       tmp;
  while(current){
    tmp = current.next;
    current.next = current.previous;
    current.previous = tmp;
    if(!tmp){
       //set the last node as header
       dll.head = current;
    }
    current = tmp;
  }
  return dll;
}