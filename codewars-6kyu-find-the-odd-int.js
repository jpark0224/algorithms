// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  const intAppearancePair = {};

  for (const int of A) {
    intAppearancePair[int] = intAppearancePair[int] + 1 || 1;
  }

  for (int in intAppearancePair) {
    if (intAppearancePair[int] % 2 !== 0) {
      return parseInt(int);
    }
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// What I learned
// 1. Below is another way of looping through an object.
//   for (const int of Object.keys(intAppearancePair)) {
//     if (intAppearancePair[int] % 2 !== 0) {
//       return parseInt(int);
//     }
//   }
// 2. Below code doesn't work. This goes through the key of 0 to 12.
//   for (const int in intAppearancePair) {
//     if (intAppearancePair[int] % 2 !== 0) {
//       return parseInt(int);
//     }
//   }
// 3. Another way of writing intAppearancePair[int] = intAppearancePair[int] + 1 || 1;
// obj[el] ? obj[el]++ : obj[el] = 1;
// 4. The answer voted as the most clever is below:
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
