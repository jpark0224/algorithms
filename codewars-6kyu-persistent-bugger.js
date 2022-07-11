// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// Solution 1
let count = 0;

function persistence1(num) {
  if (num >= 10) {
    const digitArray = num.toString().split("");
    num = digitArray.reduce(
      (prevValue, currentValue) => prevValue * currentValue
    );
    count++;
    persistence1(num);
  }
  return count;
}

// Solution 2
function persistence2(num) {
  let count = 0;
  while (num >= 10) {
    const digitArray = num.toString().split("");
    num = digitArray.reduce(
      (prevValue, currentValue) => prevValue * currentValue
    );
    count++;
  }
  return count;
}

console.log(persistence1(39));
console.log(persistence2(39));
console.log(persistence1(4));
console.log(persistence2(4));
