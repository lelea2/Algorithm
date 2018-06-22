// Given a singly linked list, determine if it is a palindrome.
// Follow up: Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {

  var middle = findMiddle(head);
  var rNode = reverseNode(middle);

  while(rNode != null){
    if(head.val != rNode.val) {
      return false;
    }
    head = head.next;
    rNode = rNode.next;
  }
  return true;

  // Find the middle of the link list
  function findMiddle(node) {
    var fast = node;
    var slow = node;

    while(fast != null && fast.next != null){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // reverse node in link list
  function reverseNode(node) {
    if(node == null || node.next == null) {
      return node;
    }
    var prev = null;
    var cur  = node;
    while(cur != null) {
      var temp = cur;
      cur = cur.next;
      temp.next = prev;
      prev = temp;
    }
    return prev;
  }
};
