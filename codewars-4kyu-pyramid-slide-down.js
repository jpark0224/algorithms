// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4
//  2 \4\ 6
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.
// By the way...
// My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// (c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.

// Idea
// slide down index options
// 0 -> 0, 1
// 1 -> 1, 2
// and so on...
// choose the bigger number between the two options.

// Logic
// bottom-up approach
// 1. starting from the second to last row, go upwards one by one
// 2. go through the numbers of the row
// 3. find a bigger number between two options possible in the row below
// 4. add it to each number in the current row
// 5. repeat until it reaches the first row
// 6. a bigger number between the two numbers in the second row will be added to the one number in the first row
// 7. return the number of first row

function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 2; i > -1; i--) {
    for (let j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  return pyramid[0][0];
}

// What I learned
// 1. I realised the need for studying more algorithm types. This was the first time I used a bottom-up approach and I learned that knowing the types would be incredibly useful in coming up with solutions.
// 2. I revisited Math.max() method.
// console.log(Math.max(1, 3, 2));
// // expected output: 3

// console.log(Math.max(-1, -3, -2));
// // expected output: -1

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));
// // expected output: 3
