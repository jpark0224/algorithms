// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount1(str) {
  // instead of using a string, you can use an array of vowels as below:
  // const vowels = ["a", "e", "i", "o", "u"]
  const vowels = "aeiou";

  let count = 0;

  // check each letter of vowels.
  for (const letter of vowels) {
    // assign the index of a vowel to a variable to use it to check indexes that come after this index only.
    let idx = str.indexOf(letter);

    // while this vowel was found in the string
    while (idx !== -1) {
      count++;

      // update the index to start the search from to that of the next element.
      idx = str.indexOf(letter, idx + 1);
    }
  }
  return count;
}

function getCount2(str) {
  return str.match(/[aeiou]/gi) === null ? 0 : str.match(/[aeiou]/gi).length;
}

// What I learned
// 1. This one is similar to 6kyu pangram problem, so I knew that I could solve it using a string containing the letters to be matched and an indexOf() method.
// It was different in a sense that I needed to check all occurences of the vowels.
// 2. The Mozilla page below has a good example of how to check all occurences:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// This method uses the below syntax:
// indexOf(searchElement, fromIndex)
