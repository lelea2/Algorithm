// Given array of positive integers representing the values of coins in your posssion,
// write a function that returns minimum amount of change you CANNOT create
// for example, coins = [1, 2, 5], minimum amount of change you cannot create is 4

function nonConstructibleChange(coins) {
  // sort in ascending order
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;
  for(const coin of coins) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
}

// Input
// [5, 7, 1, 1, 2, 3, 22]
// Output
// 20