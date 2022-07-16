// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

function pascalsTriangle(numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const array = [];

    // insert placeholders in each arrays
    for (let j = 0; j <= i; j++) {
      array.push(0);
    }

    // replace the first and last element to 1
    array.splice(0, 1, 1);
    array.splice(i, 1, 1);

    // replace the rest of the elements
    for (let k = 0; k < i - 1; k++) {
      array.splice(k + 1, 1, result[i - 1][k] + result[i - 1][k + 1]);
    }

    // push each array to the result array
    result.push(array);
  }
  return result;
}

console.log(pascalsTriangle(6));

// when i is 3,
// array.splice(1, 1, result[i - 2][0] + result[i - 2][1])

// when i is 4,
// array.splice(1, 1, result[i - 2][0] + result[i - 2][1])
// array.splice(2, 1, result[i - 2][0] + result[i - 2][1])

// and so on...

// What I leanred
// 1. I can simply append the elements instead of replacing them.
