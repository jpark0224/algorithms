// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// attempt 1 - exceeds a time limit.
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.slice(nums.length - 1));
    nums.splice(-1, 1);
  }
  return nums;
};

// attempt 2 - accepted, but high memory usage and low performance
var rotate = function (nums, k) {
  if (k > nums.length) {
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.slice(nums.length - 1));
      nums.splice(-1, 1);
    }
    return nums;
  } else {
    nums.unshift(...nums.slice(nums.length - k));
    console.log(nums);
    nums.splice(nums.length - k, k);
    return nums;
  }
};

// attempt 3 - accepted, but still high memory usage and low performance
var rotate = function (nums, k) {
  if (nums.length === 1 || k === 0) {
    return nums;
  } else {
    if (nums.length < k) {
      k = k % nums.length;
    }
    nums.unshift(...nums.slice(-k));
    nums.splice(-k, k);
    return nums;
  }
};

// attempt 4 - accepted
// Runtime: 88 ms, faster than 98.95% of JavaScript online submissions for Rotate Array.
// Memory Usage: 51 MB, less than 91.49% of JavaScript online submissions for Rotate Array.
// By simply changing the order of splice and unshift, and reusing the result of splice to unshift, the runtime and memory usage highly improved.
var rotate = function (nums, k) {
  if (nums.length === 1 || k % nums.length === 0) {
    return nums;
  } else {
    if (nums.length < k) {
      k = k % nums.length;
    }
    const lastKelems = nums.splice(-k, k);
    nums.unshift(...lastKelems);
    return nums;
  }
};

// Idea

// when k > nums.length

// case 1
// [1, 2], 3
// 1 - [2, 1]
// 2 - [1, 2] if k % nums.length === 0, it returns the nums array
// 3 - [2, 1]

// case 2
// [1, 2, 3], 7
// 1 - [3, 1, 2]
// 2 - [2, 3, 1]
// 3 - [1, 2, 3] the pattern repeats per every multiplication of nums.length.
// 4 - [3, 1, 2]
// 5 - [2, 3, 1]
// 6 - [1, 2, 3]
// 7 - [3, 1, 2]

// to reduce the number of rotations calculated, replace k with k % nums.length.

// What I learned
// 1. unshift() method
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// 2. nums.splice(-k, k) has a better performance and less memory use than nums.splice(-k)
// 3. I find it easier to grasp a complicated concept by writing down cases in details.
// 4. Leetcode didn't accept concat() method as an answer even if it was assigned back to nums.
