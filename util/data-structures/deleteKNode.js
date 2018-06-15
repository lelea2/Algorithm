function deleteKthFromEnd(sll, k){
  var node = sll.head,
      i = 1,
      kthNode,
      previous;
  if (k<=0) {
    return sll;
  }
  while(node) {
    if(i == k) {
      kthNode = sll.head;
    } else if(i > k) {
      previous = kthNode;
      kthNode = kthNode.next;
    }
    i++;
    node = node.next;
  }
  //kth node is the head
  if(!previous) {
    sll.head = sll.head.next;
  } else {
    previous.next = kthNode.next;
  }
  return sll;
}