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

### 3.
