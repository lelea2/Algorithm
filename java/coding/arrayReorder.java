/*We have an array of objects A and an array of indexes B. Reorder objects in array A with given indexes in array B. Do not change array A's length.
var A = [C, D, E, F, G];
var B = [3, 0, 4, 1, 2];

sort(A, B);
// A is now [D, F, G, C, E];
*/

//Runtime(O(n))
public void reorder(char [] A, int [] B){
    for (int i = 0 ; i < B.length ; ++i) {
        int tmp = i ;
        while (B[tmp] != tmp) {
            swap(A, B[tmp], tmp);
            swapIndex (B, B[tmp], tmp) ;
            tmp = B[tmp] ;
        }
    }
}


private void swap (char [] A, int i , int j) {
    char tmp = A[i] ;
    A[i] = A[j] ;
    A[j] = tmp ;
}

private void swapIndex (int [] A, int i , int j) {
    int tmp = A[i] ;
    A[i] = A[j] ;
    A[j] = tmp ;
}

