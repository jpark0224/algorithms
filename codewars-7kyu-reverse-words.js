// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
  const wordArray = str.split(" ");
  const wordReversedArray = wordArray.map((word) =>
    word.split("").reverse().join("")
  );
  return wordReversedArray.join(" ");
}

// What I learned
// 1. reverse() method only works with an array. It does not work with a string. You have to split and join the letters again.
// 2. You can make the code a one liner like the below:
// return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
