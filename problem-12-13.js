// 12) Flatten a nested array.

// steamroller([1, [2], [3, [[4]]]]);
// // [1, 2, 3, 4]

function steamroller(arr) {
  return arr.flat(Infinity);
}

console.log(steamroller([1, [2], [3, [[4]]]]));

// 13) Pig Latin

// Pig latin is a way of altering English words.
// 1. If a word begins with a consonant, take the first consonant or a consonant cluster,
// move it to the end if the word, and add ‘ay’ to it.
// 2. If a word begins with a vowel, just add ‘way’ at the end.

// pigLatin(‘glove’) // oveglay
// pigLatin(‘algorithm’) // algorithmay
// pigLatin(‘eight’) // eightway

function pigLatin(str) {
  // const vowels = ["a", "e", "i", "o", "u"]
  const vowels = "aeiou";
  let consonants = "";

  if (vowels.includes(str[0].toLowerCase())) {
    return str + "way";
  } else {
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase())) {
        consonants += str[i];
      } else {
        break;
      }
    }
    return str.slice(consonants.length) + consonants + "ay";
  }
}

console.log(pigLatin("glove"));
console.log(pigLatin("algorithm"));
console.log(pigLatin("eight"));
