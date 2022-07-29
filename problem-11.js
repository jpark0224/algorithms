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
// // 1 '&&&#&&&' 3 + 1 + 3
// // 2 '&&###&&' 2 + 3 + 2
// // 3 '&#####&' 1 + 5 + 1
// // 4 '#######' 0 + 7 + 0

function twoSidedPyramids(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += "&".repeat(n - i);
    result += "#".repeat(i * 2 - 1);
    result += "&".repeat(n - i);
    result += "\n";
  }

  return result;
}

console.log(twoSidedPyramids(3));

// what I learned
// to change a line, "\n" could be used.
