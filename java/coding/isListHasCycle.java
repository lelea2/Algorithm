/**
 * Given a linked list, determine if it has a cycle in it.
 */

//Idea:
//If we have 2 pointers - fast and slow. It is guaranteed that the fast one will meet the
//slow one if there exists a circle

public boolean hasCycle(ListNode head) {
    ListNode fast = head;
    ListNode slow = head;
    if(head == null) {
        return false;
    }
    if(head.next == null) { //if list has end point, return false right away
        return false;
    }
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            return true;
        }
    }
    return false;
}
