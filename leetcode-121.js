// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function (prices) {
  let max_profit = 0;

  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right;
    } else {
      let current_profit = prices[right] - prices[left];
      if (current_profit > max_profit) {
        max_profit = current_profit;
      }
    }
    right++;
  }

  return max_profit;
};

// My thoughts

// test case
// [7,99999,6,1000,5,3,9999,1,4]

// Can you just figure out the lowest value and biggest value?
// You must use sort to figure out the lowest and biggest. Sorting itself is a big operation which slows down the runtime and takes up memory.

// When the right pointer value is less than the left pointer, increment the right pointer and move the left pointer to the current right pointer.
// What if there was a biggest profit before moving the left pointer?
// It would have been recorded to the profit anyways.
