//This is a classic interview question. Another similar problem is "merge k sorted lists".

//This problem can be solved by using a HEAP. The time is O(nlog(n)).

//Given m arrays, the minimum elements of all arrays can form a heap. It takes O(log(m)) to insert an element to the heap and it takes O(1) to delete the minimum element.

//At first, write comparator class
class ArrayContainer implements Comparable<ArrayContainer> {
    int[] arr;
    int index;

    public ArrayContainer(int[] arr, int index) {
        this.arr = arr;
        this.index = index;
    }

    @Override
    public int compareTo(ArrayContainer o) {
        if (this.arr[this.index] > o.arr[o.index]) {
            return 1;
        } else if (this.arr[this.index] < o.arr[o.index]) {
            return -1;
        } else {
            return 0;
        }
    }
}

//Handle merged sorted arrays
public static int[] mergeKSortedArray(int[][] arr) {
    //PriorityQueue is heap in Java
    PriorityQueue<ArrayContainer> queue = new PriorityQueue<ArrayContainer>();
    int total=0;

    //add arrays to heap
    for (int i = 0; i < arr.length; i++) {
        queue.add(new ArrayContainer(arr[i], 0));
        total = total + arr[i].length;
    }

    int m=0;
    int result[] = new int[total];

    //while heap is not empty
    while(!queue.isEmpty()){
        ArrayContainer ac = queue.poll();
        result[m++]=ac.arr[ac.index];

        if(ac.index < ac.arr.length-1){
            queue.add(new ArrayContainer(ac.arr, ac.index+1));
        }
    }

    return result;
}

