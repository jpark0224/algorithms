// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  if (words === "") {
    return "";
  } else {
    return words
      .split(" ")
      .map((word) => word.match(/[1-9]/))
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map((word) => word.input)
      .join(" ");
  }
}

console.log(order("is2 Thi1s T4est 3a"));

// What I learned
// 1. I learned the JavaScript match() method. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// 2. I learned that some methods such as method() return an array as below:
// [ '1', index: 3, input: 'Thi1s', groups: undefined ]
// This looks like an array consisting of 4 elements but it actually contains the first element only, and the others are properties.
// The others can be accessed by .index, .input, and .groups.
// 3. I learned that you can sort an array of arrays by accessing the elements in the array.
