// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  return str
    .split(" ")
    .map((word) =>
      word[word.length - 1].match(/[A-Za-z]/g)
        ? word.slice(1) + word[0] + "ay"
        : word
    )
    .join(" ");
}

// What I learned
// 1. [] indicates a range in regular expression.
