// 268. Missing Number
// Easy

// 6717

// 2937

// Add to List

// Share
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// 1st attempt
// Runtime: 426 ms, faster than 11.17% of JavaScript online submissions for Missing Number.
// Memory Usage: 44.8 MB, less than 22.88% of JavaScript online submissions for Missing Number.
var missingNumber1 = function (nums) {
  const arr = [];

  for (let i = 0; i <= nums.length; i++) {
    arr.push(i);
  }

  for (const num of arr) {
    if (nums.indexOf(num) === -1) {
      return num;
    }
  }
};

// 2nd attempt
// Runtime: 124 ms, faster than 32.79% of JavaScript online submissions for Missing Number.
// Memory Usage: 44.1 MB, less than 76.58% of JavaScript online submissions for Missing Number.
var missingNumber2 = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
};

console.log(missingNumber2([3, 0, 1]));

// most voted solution
var missingNumber = function (nums) {
  // construct array of size n+1, to leave a spot for the missing element.
  // Assign each val to -1 so we can see which position was not filled
  // O(n)
  const res = new Array(nums.length + 1).fill(-1);

  // "sort" the elements by assigning to the array based on val
  // O(n)
  for (const num of nums) {
    res[num] = num;
  }

  // the remaining -1 index is the missing value
  // O(n-1)
  return res.indexOf(-1);
};

// What I learned
// 1. fill() method
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// syntax
// fill(value)
// fill(value, start)
// fill(value, start, end)
