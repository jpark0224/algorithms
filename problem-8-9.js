// 8) Sentence Capitalisation
// Write a function that accepts a string. The function should capitalise the first letter of each word in the string and return the result.

// Examples:
// capitalise(‘a short sentence’) —> ‘A Short Sentence’
// capitalise(‘a lazy fox’) —> ‘A Lazy Fox’
// capitalise(‘look, it is working!’) —> ‘Look, It Is Working!’

// divide words -> slice before a space
// then capitalise the first letter of that chunk using toUpperCase()

function capitalise(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalise("look, it is working!"));

// 9) Printing Steps
// Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the step has spaces on the right hand side.

// Examples
// step(2);
// // ‘#  ’
// // ‘##’

// step(3);
// // ‘#    ‘
// // ‘##  ‘
// // ‘###’

// one hash is 2 spaces

function steps(number) {
  if (number < 1) {
    console.log("Please input a positive number.");
  }
  for (i = 1; i <= number; i++) {
    console.log("#".repeat(i) + "  ".repeat(number - i));
  }
}

console.log(steps(5));
