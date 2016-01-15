### 1. List 5 features in Java

* Object Oriented
* Platform Independent
* Robust
* Interpreted
* Multi-threaded

### 2. Java oject definition

```java
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

```

### 3. Java Map

```java
//Get key from hashmap that contains value
public Character getKey(HashMap<Character,Character> map, Character target) {
    //Checking for loop
    for (Map.Entry<Character,Character> entry : map.entrySet()) {
        if (entry.getValue().equals(target)) { //if value === target given, then return the key
            return entry.getKey();
        }
    }
    return null;
}
```
