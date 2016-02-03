public void recursiveReverse(Node currentNode ) {
    //check for empty list
    if(currentNode == NULL) {
        return;
    }

    /* if we are at the TAIL node:
        recursive base case:
    */
    if(currentNode.next == NULL) {
        //set HEAD to current TAIL since we are reversing list
        head = currentNode;
        return; //since this is the base case
    }

    recursiveReverse(currentNode.next);
    currentNode.next.next = currentNode;
    currentNode.next = null; //set "old" next pointer to NULL
}
