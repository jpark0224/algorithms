// Given a year, return the century it is in.

function century(year) {
  if (year % 100 !== 0) {
    return Math.floor(year / 100) + 1;
  } else {
    return year / 100;
  }
}

// What I leanred
// 1. You can solve this as below:
// const century = year => Math.ceil(year/100)
// The Math.ceil() function always rounds a number up to the next largest integer.
// Examples
// Math.ceil(.95);    // 1
// Math.ceil(4);      // 4
// Math.ceil(7.004);  // 8
// Math.ceil(-0.95);  // -0
// Math.ceil(-4);     // -4
// Math.ceil(-7.004); // -7
