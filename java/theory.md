#### 1. List 5 features in Java

* Object Oriented
* Platform Independent
* Robust
* Interpreted
* Multi-threaded

#### 2. Java oject definition

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

#### 3. Java Map

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

#### 4. What is n+1 problem and how to solve it?

```sql
"select * from Students"

"select * from Books where studentId=?"
````

Solving:
Using join fetching(it will join the parent and children and fetch all the information in a single statement) we can able to solve n+1 problem.
Now our next query will look like this

```
"from Students s join fetch s.Books b"
```
