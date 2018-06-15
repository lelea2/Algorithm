function reversesll(sll) {
  
  if(!sll.head || !sll.head.next) return sll;

  var nodes=[], 
    current = sll.head;
  //storing all the nodes in an array
  while(current){
    nodes.push(current);
    current = current.next;
  }
    
  var reversedLL = new LinkedList();
  
  reversedLL.head = nodes.pop();
  current = reversedLL.head;
  
  var node = nodes.pop();  
  //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while(node){
     node.next = null;
     current.next = node;
     
     current = current.next;
     node = nodes.pop();
  }
  return reversedLL;
}