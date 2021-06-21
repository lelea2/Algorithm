// Write a function that takes in a non-empty array of integers and returns an array of same length,
// where each element in the output array is equal to the product of every other number in the input array

// O(n) time | O(n) space
function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);

  let leftRunningProduct = 1;

  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  return products;
}

// Input
// array=[5, 1, 4, 2]
// Output
// [8, 40, 10, 20]