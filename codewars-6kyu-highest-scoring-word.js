// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function countScore(word, index) {
    let score = 0;

    for (const letter of word) {
      score += alphabet.indexOf(letter) + 1;
    }

    return [word, index, score];
  }

  const sortedArray = x
    .split(" ")
    .map((word, index) => countScore(word, index))
    .sort((a, b) => b[2] - a[2]);

  const result = sortedArray.filter((word) => word[2] === sortedArray[0][2]);

  if (result.length === 1) {
    return result[0][0];
  } else {
    result.sort((a, b) => a[1] - b[1]);
    return result[0][0];
  }
}

console.log(high("man i need a taxi up to ubud"));

// What I learned
// 1. I could have used reduce() method to count scores.
// 2. Using a spread operater, a word could be split as below:
// const array = [...entry]; // entry="i am" => array=["i"," ","a","m"]
// 3. To return the word that appears the earliest, simply using indexOf() works because it returns the smallest index number it can find.
// 4. I could have used Math.max() instead of sorting an array and finding the first element.
// 5. Solution voted the most as best practice:
// function high(s) {
//   let as = s
//     .split(" ")
//     .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
//   return s.split(" ")[as.indexOf(Math.max(...as))];
// }
