### LinkedList in JS

Interview question that could be used to test linkedList in Javascript

Eg: How to find circular link list
```java
public bool findCircular(Node *head) {
    Node *slower, * faster;
    slower = head;
    faster = head->next; //start faster one node ahead
    while(true) {

        // if the faster pointer encounters a NULL element
        if( !faster || !faster->next) {
            return false;
        } else if (faster == slower || faster->next == slower) {
            //if faster pointer ever equals slower or faster's next
            //pointer is ever equal to slow then it's a circular list
            return true;
        } else {
            //advance the pointers
            slower = slower->next;
            faster = faster->next->next;
        }
   }
}
```
