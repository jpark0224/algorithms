// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercase = string.toLowerCase().replace(/[^a-z]+/, "");
  for (letter of alphabet) {
    if (lowercase.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}

// what I learned
// you can use an every method like below:
// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
//   }
