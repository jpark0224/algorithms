// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  function trimText(text) {
    text = text.toLowerCase();
    for (const letter of text) {
      if (alphabet.indexOf(letter) === -1) {
        text = text.replace(letter, "");
      }
    }
    return text;
  }

  function replace(text) {
    for (const letter of text) {
      result += `${alphabet.indexOf(letter) + 1} `;
    }
    result = result.slice(0, -1);
    return result;
  }

  return replace(trimText(text));
}

console.log(alphabetPosition("ys92y*7="));

// what I learned
// 1. instead of a for loop, I could've used a map.
// 2. using join(" ") after mapping reduces the need for slicing the last " ".
// 3. slice() can be used on a string. A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
// It is important to note that slice() doesn't change the original copy.
// 4. .match(/[a-z]/gi) could have been used to trim the string. The output is an array of letters matching the criteria.
