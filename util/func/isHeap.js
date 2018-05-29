//Referenced from:
//http://www.geeksforgeeks.org/how-to-check-if-a-given-array-represents-a-binary-heap/

//A Binary Heap is a Binary Tree with following properties.
//1) It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an array.
//2) A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to Min Heap.

//compare root only with its children (not all descendants), if root is greater than its children and same is true for for all nodes, then tree is max-heap (This conclusion is based on transitive property of > operator, i.e., if x > y and y > z, then x > z).

function isHeap(int arr[], int i, int n) {
    // If a leaf node
    if (i > (n - 2)/2) {
        return true;
    }
    // If an internal node and is greater than its children, and
    // same is recursively true for the children
    if (arr[i] >= arr[2* i + 1]  &&  arr[i] >= arr[2*i + 2] &&
        isHeap(arr, 2*i + 1, n) && isHeap(arr, 2*i + 2, n)) {
        return true;
    }
    return false;
}

//isHeap(arr, 0, arr.length)
