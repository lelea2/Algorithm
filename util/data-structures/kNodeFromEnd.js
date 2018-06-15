function kthFromEnd(sll, k){
  var node = sll.head,
      i = 1,
      kthNode;
  //handle, 0 or negative value of k
  if(k<=0) return;
  while(node) {
    if (i == k) {
      kthNode = sll.head;
    } else if(i > k) {
      kthNode = kthNode.next;
    }
    i++;
    node = node.next;
  }
  return kthNode;
}