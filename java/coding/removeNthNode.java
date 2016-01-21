/**
 * Remove nth node from the end of the list
 */

//Walking the list with 2 pointer
//Walk first pointer to nth position first
//Then walk 2 pointers in parallel
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode p = new ListNode(-1);
    p.next = head;

    ListNode q = head;
    head = p;

    for(int i=0; i<n; i++) {
        q = q.next;
    }

    while(q != null) {
        q = q.next;
        p = p.next;
    }

    p.next = p.next.next;

    return head.next;

}
