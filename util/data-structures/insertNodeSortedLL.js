function pushSorted(sll, val) {
  var head = sll.head,
      current = head,
      previous;
  //value lower than head value, insert at the begining
  if(val < sll.head.value) {
    sll.head = {value: val, next: head};
    return sll;
  }

  while(current) {
    if(current.value > val) {
      previous.next = {value: val, next: current};
      return sll;
    }
    previous = current;
    current = current.next;
  } 
  //value higher than the last node value, insert at the end
  previous.next = {value:val, next: null};
  return sll;
}
