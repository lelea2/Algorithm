//Compare performance
//(1) Set based comparison - O(nlogn) - Relatively slow, very simple, use if there are no performance concerns. Simplicity wins.
//(2) Merge join + Filter - O(n) - Fast, prone to coding error, use if performance is an issue. Ideally try to leverage an existing library to do this, or perhaps even use a database if appropriate.
//(3) Parallel Implementation - O(n/p) - Very fast, requires other infrastructure in place, use if the volume is very large and anticipated to grow and this is a major performance bottleneck.

function intersectSortedArrays(a, b) {
    var c = new Array(Math.min(a.length, b.length)); //new array that will returned after sorting
    var ai = 0;
    var bi = 0;
    var ci = 0; //current index of new array
    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) {//increase a index if current a < b
            ai++;
        } else if (a[ai] > b[bi]) { //increase b index if current b <a
            bi++;
        } else { //a === b
            if (ci == 0 || a[ai] != c[ci - 1]) {
                c[ci] = a[ai];
                c++;
            }
            ai++; bi++;
        }
    }
    return c;
}
