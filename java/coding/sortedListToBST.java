/**
 * Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 */

//Idea: With list, we will no longer has random access to element at O(n) time
//So we need to create node from bottom-up, and assign them to their parents
//The bottom up approach will enable us to access the list in its order at the time node is created.

//Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
        next = null;
    }
}

//This is definition of binary tree
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

public Solution {

    //At first, we need to figure out the length of the given list
    //this will be implemented as below
    public int getLength(ListNode head) {
        int len = 0;
        ListNode p = head;
        while(p != null) {
            len++;
            p = p.next;
        }
        return len;
    }

    //Now, we need to build the tree from bottom up
    //Let's pass start and end index where you want to do it
    public TreeNode sortedListToBST(ListNode h, start, end) {
        int startIndex = (start == null) ? 0 : start;
        int endIndex = (end == null) ? getLength(h) : end;

        //protect BST against overflow, making sure that mid value is always calculated like this
        int mid = startIndex + (end - startIndex)/2;

        TreeNode left = sortedListToBST(h, startIndex, mid - 1);
        TreeNode root = new TreeNode(h.val);
        h = h.next;
        TreeNode right = sortedListToBST(h, mid, endIndex);
        root.left = left;
        root.right = right;

        return root;
    }
}
