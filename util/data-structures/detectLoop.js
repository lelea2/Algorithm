/**
 * Detect circle list
 */
function detectLoop(sll) {
  var slowPointer = sll.head,
      fastPointer = sll.head;

  while(slowPointer && fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if(slowPointer == fastPointer) {
      return true;
    }
  }
  return false;
}

/**
 * Detect where loop start
 */
function findLoopStart(sll) {
  var slow = sll.head,
      fast = sll.head;
  while(slow && fast) {
    slow = slow.next;
    //if hits null, then there is no loop
    if(!fast.next) {
      return null;
    }
    fast = fast.next.next;
    if(slow == fast) { // loop meet
      slow = sll.head; // slow back to head
      while(slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
}
