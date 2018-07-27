// Given two arrays A[] and B[] having n unique elements each. The task is to find the overlapping sum of the two arrays.
// That is the sum of elements which is common in both of the arrays.

// Note: Elements in the arrays are unique. That is the array does not contains duplicates.

// Efficient Method : An efficient method is to use Hashing.
// Traverse both of the arrays and insert the elements into a hash table to keep
// track of the count of elements. Add the elements to sum whose count equals to two.