var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

computeProduct(unsortedArray); // 21000

// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  const sortedArray = unsorted.sort((a, b) => {
    return a - b;
  });
  let product1 = 1;
  let product2 = 1;
  let array_n_element = sortedArray.length - 1;

  // Get the product of three largest integers in sorted array
  for (let x = array_n_element; x > array_n_element - 3; x--) { // start from the end
    product1 = product1 * sortedArray[x]; // assume this is the largest number
  }
  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];
  if (product1 > product2) {
    return product1;
  }
  return product2;
}