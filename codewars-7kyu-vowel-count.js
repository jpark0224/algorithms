// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    // instead of using a string, you can use an array of vowels as below:
    // const vowels = ["a", "e", "i", "o", "u"]
    const vowels = "aeiou"

    let count = 0;

    // check each letter of vowels.
    for (const letter of vowels) {

    // assign the index of a vowel to a variable to use it to check indexes that come after this index only. 
      let idx = str.indexOf(letter)

      // while this vowel was found in the string
      while (idx !== -1) {
        count++

        // update the index to where the next vowel was found.
        idx = str.indexOf(letter, idx + 1)
      }
    }
    return count;
  }

// What I learned
// 1. This one is similar to 6kyu pangram problem, so I knew that I could solve it using a string containing the letters to be matched and an indexOf() method.
// It was different in a sense that I needed to check all occurences of the vowels.
// 2. The Mozilla page below has a good example of how to check all occurences:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// This method uses the below syntax:
// indexOf(searchElement, fromIndex)
// 3. Below is a simple solution using regEx.
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }