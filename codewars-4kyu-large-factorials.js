// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

// NOTES:

// The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

// I have removed the use of require in the javascript language.

// attempt 1
function factorial_attempt_1(n) {
  // Add some code
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  return result.toString();
}

// this method cannot deal with integer results longer than certain digits.
// Below is my interpretation of a solution provided by Geeks for Geeks.

// https://www.geeksforgeeks.org/factorial-large-number/
// The following is a detailed algorithm for finding factorial.

// factorial(n)
// 1) Create an array ‘res[]’ of MAX size where MAX is number of maximum digits in output.

// => res[] is an array consisting of elements of single digits. The index starts from the rightmost side of the number.
// => ex) A number 5189 is stored in res[] as following: // res[] = {9, 8, 1, 5}

// 2) Initialize value stored in ‘res[]’ as 1 and initialize ‘res_size’ (size of ‘res[]’) as 1.

// => res_size equals to res.length. The number of digits of the result.
// => initialise the result and digit as 1.
// => const res === [1], res.length === 1

// 3) Do following for all numbers from x = 2 to n.
// ……a) Multiply x with res[] and update res[] and res_size to store the multiplication result.

// => x is a number being iterated, incremented, and multiplied.
// => ex) if n is 3, x will be 2 then 3.
// => there is no need to start from 1, because multiplying 1 doesn't change the result. Also, the result is already initialised as 1.
// => In this step, start multiplying to get the result. Instead of a number, an array of digits (res[]) will be used and updated to store digits of the result.

// How to multiply a number ‘x’ with the number stored in res[]?
// The idea is to use simple school mathematics. We one by one multiply x with every digit of res[].
// The important point to note here is digits are multiplied from rightmost digit to leftmost digit.
// If we store digits in same order in res[], then it becomes difficult to update res[] without extra space.
// That is why res[] is maintained in reverse way, i.e., digits from right to left are stored.

// multiply(res[], x)
// 1) Initialize carry as 0.
// 2) Do following for i = 0 to res_size – 1
// ….a) Find value of res[i] * x + carry. Let this value be prod.
// ….b) Update res[i] by storing last digit of prod in it.
// ….c) Update carry by storing remaining digits in carry.
// 3) Put all digits of carry in res[] and increase res_size by number of digits in carry.

// => a nested function will be declared, called multipy, taking two arguments which are res[] and x.
// => i here is an index of res[]. It represents 10^i digit of the result.
// => a prod is a short for production, which is a result produced by arithmetics.
// => a carry is a digit that is transferred from one column of digits to another column of more significant digits.

// Example to show working of multiply(res[], x)
// A number 5189 is stored in res[] as following.
// res[] = {9, 8, 1, 5}
// x = 10

// Initialize carry = 0;

// i = 0, prod = res[0]*x + carry = 9*10 + 0 = 90.
// res[0] = 0, carry = 9

// i = 1, prod = res[1]*x + carry = 8*10 + 9 = 89
// res[1] = 9, carry = 8

// i = 2, prod = res[2]*x + carry = 1*10 + 8 = 18
// res[2] = 8, carry = 1

// i = 3, prod = res[3]*x + carry = 5*10 + 1 = 51
// res[3] = 1, carry = 5

// res[4] = carry = 5

// res[] = {0, 9, 8, 1, 5}

// attempt 2
function factorial(n) {
  // declare an array named res with the maximum length of 500.
  let digit_arr = new Array(500);
  let result = "";

  // Initialise result
  digit_arr[0] = 1;
  let digit_size = 1;

  function multiply(x, digit_arr, digit_size) {
    let carry = 0;

    // go through each digit and multiply x
    for (let i = 0; i < digit_size; i++) {
      let prod = digit_arr[i] * x + carry;

      // store last digit of prod in digit_arr
      digit_arr[i] = prod % 10;

      // put rest in carry
      carry = Math.floor(prod / 10);
    }

    // put carry in digit_arr and increase digit_size
    while (carry) {
      digit_arr[digit_size] = carry % 10;
      carry = Math.floor(carry / 10);
      digit_size++;
    }

    return digit_size;
  }

  // Apply simple factorial formula n! = 1 * 2 * 3 ... * n
  for (let x = 2; x <= n; x++) {
    digit_size = multiply(x, digit_arr, digit_size);
  }

  // Produce a string of the result, starting from the last element of the digitArr to the first.
  for (let i = digit_size - 1; i >= 0; i--) {
    result += digit_arr[i];
  }

  return result;
}

console.log(factorial(5));

// What I learned
// 1. Array constructor
// // construct from elements
// new Array(element0, element1, /* … ,*/ elementN)

// // construct from array length
// new Array(arrayLength)
