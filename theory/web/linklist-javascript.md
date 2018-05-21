* From: https://thatjsdude.com/interview/linkedList.html

### 1. Create a singly-linkelist in JS

```javascript
//Create a class linkedlist
function LinkedList() {
    this.head = null;
}
//push method
LinkedList.prototype.push = function(val) {
    var node = {
       value: val,
       next: null
    }
    if(!this.head) {
      this.head = node;
    } else {
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
}
```

### 2. Create double linkedlist in JS

```javascript
//Define node
var node = {
  value: val,
  next: null,
  previous: null
};
//Define double linkedlist
function DoublyLinkedList() {
   this.head = null;
}
//push method to double linklist
DoublyLinkedList.prototype.push = function(val) {
    var head = this.head,
        current = head,
        previous = head;
    if(!head)   {
        this.head = {value: val, previous:null, next:null };
    } else {
        while(current && current.next){
            previous = current;
            current = current.next;
         }
        current.next = {value: val, previous:current, next:null}
    }
}

```

### 3. Remove node from Singly LinkedList

* Need to account for 3 scenarios, remove first node, remove last node, and remove node in the middle

```javascript
LinkedList.prototype.remove = function(val) {
    var current = this.head;
    //case-1
    if(current.value == val) { //If the first node to be deleted, change next node to be head of the list
       this.head = current.next;
    } else { //Remove middle element
        var previous = current;
        while(current.next) { //while not a lats node
            if(current.value == val) {
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
        //case -2, last element in list, then need to set the endpoint
        if(current.value == val) { //last node
            previous.next == null;
        }
    }
};
```

### 4. Reverse Singly Linked List
* Idea: Walk through the LL and put the nodes in an array. This would be easier other than using remove function (if LL have one), because to remove a single item from the end of the SLL you have to walk all way to the end of the SLL every single time. Here you are just walking once.


### 5. Reverse Doubly LL


### 6. Find kth node from the end
```javascript
function kthFromEnd(sll, k){
    var node = sll.head,
        i = 1,
        kthNode;
    //handle, 0 or negative value of k
    if(k<=0) return;
    while(node) {
        if(i == k) kthNode = sll.head;
        else if(i-k>0) { //only walk kth node if kth node < current index
            kthNode = kthNode.next;
        }
        i++;
        node = node.next;
    }
    return kthNode;
}
```

### 7. Length of a Singly LL

### 8. Detect where loop start in circular linkedlist

```javascript
function findLoopStart(sll) {
    var slow = sll.head,
        fast = sll.head;
    while(slow && fast) {
        slow = slow.next;

        //if hits null, then there is no loop
        if(!fast.next.next) {
            return null;
        }
        fast = fast.next.next;
        if(slow == fast) {
            slow = sll.head;
            while(slow != fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
}
```
