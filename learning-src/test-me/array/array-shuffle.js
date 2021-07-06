function arrayShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * 10000000000) % (i + 1);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

console.log(arrayShuffle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayShuffle([0, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 50,
  51]));
