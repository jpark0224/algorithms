// 11) Two Sided Steps Pyramids

// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N levels using the # character. Make sure the pyramid has spaces on both the left *and* right hand sides.

// Examples)

// pyramid(1);
// // '#' 0 + 1 + 0
//
// pyramid(2);
// // '&#&' 1 + 1 + 1
// // '###' 0 + 3 + 0
//
// pyramid(3);
// // '&&#&&' 2 + 1 + 2
// // '&###&' 1 + 3 + 1
// // '#####' 0 + 5 + 0

// pyramid(4);
// // '&&&#&&&' 3 + 1 + 3
// // '&&###&&' 2 + 3 + 2
// // '&#####&' 1 + 5 + 1
// // '#######' 0 + 7 + 0

function twoSidedPyramids(n) {
  for (let i = 1; i < n; i = i + 2) {
    for (let j = n - 1; j > -1; j--) {
      console.log("&".repeat(j) + "#".repeat(i) + "&".repeat(j));
    }
  }
}

console.log(twoSidedPyramids(3));
