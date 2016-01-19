//The key to solve this problem is moving element of A and B backwards. If B has some elements left after A is done, also need to handle that case.
//The takeaway message from this problem is that the loop condition. This kind of condition is also used for merging two sorted linked list.

public void merge(int A[], int m, int B[], int n) {
    int i = m - 1; //m is length of array A
    int j = n - 1; //n is length of array B
    int k = m + n - 1;

    while (k >= 0) {
        if (j < 0 || (i >= 0 && A[i] > B[j])) {
            A[k--] = A[i--];
        } else {
            A[k--] = B[j--];
        }
    }
}
