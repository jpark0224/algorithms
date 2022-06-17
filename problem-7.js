// 7) Anagrams
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters in the same quantity.

// * Only consider characters, not spaces or punctuation
// * Consider capital letters to be the same as lower case

// Examples: 
// anagrams(‘rail safety’, ‘fairy tales’) === true
// anagrams(‘RAIL! SAFETY!’, ‘fairy tales’) === true
// anagrams(‘Hi there’, ‘Bye there’) === false

function anagrams(string1, string2) {
    function cleanString(string) {
        return string.replace(/[^a-zA-Z]+/g, '').toLowerCase().split("").sort().join("")
    }

    return cleanString(string1) === cleanString(string2)
}

console.log(anagrams("rail safety", "fairy tales"))
console.log(anagrams("RAIL! SAFETY!", "fairy tales"))
console.log(anagrams("Hi there", "Bye there"))