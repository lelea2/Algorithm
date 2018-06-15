function rotateByKthNode(sll, k) {
  var prevHead = sll.head,
      previous = sll.head, 
      current = sll.head,
      i = 1;
  while(current.next) {
    if (i==k+1) {
      sll.head = current;
      previous.next = null;
    }
    previous = current;
    current = current.next;
    i++;
  }
  current.next = prevHead;
  return sll;
}