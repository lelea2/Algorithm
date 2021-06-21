// Given a list of daily stock prices (integers for simplicity), return the buy and sell prices for making the maximum profit.

// We need to maximize the single buy/sell profit. If we can’t make any profit, we’ll try to minimize the loss. 

// runtime O(n), O(1) spacetime
function find_buy_sell_stock_prices(array) {
  if (array.length < 2) {
    return None;
  }

  let current_buy = array[0];
  let global_sell = array[1];
  let global_profit = global_sell - current_buy;

  let current_profit = -Infinity;

  for (let i = 1; i < array.length; i++) {
    current_profit = array[i] - current_buy;

    if (current_profit > global_profit) {
      global_profit = current_profit;
      global_sell = array[i];
    }

    if (current_buy > array[i]) {
      current_buy = array[i];
    }
  }

  return [global_sell - global_profit, global_sell];               
}

let array = [1, 2, 3, 4, 3, 2, 1, 2, 5];
let result = find_buy_sell_stock_prices(array);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]); // Buy Price: 1, Sell Price: 5                                                     

array = [8, 6, 5, 4, 3, 2, 1];
result = find_buy_sell_stock_prices(array);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]); // Buy Price: 6, Sell Price: 5                                                     
