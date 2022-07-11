// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  //You got this!
  return str.slice(1, str.length - 1);
}

// What I learned
// The differences between splice() and slice()
// splice() changes the original array whereas slice() doesn't but both of them returns array object.
// See the examples below:
// Var array=[1,2,3,4,5];
// console.log(array.splice(2));
// This will return [3,4,5]. The original array is affected resulting in array being [1,2].
// Var array=[1,2,3,4,5]
// console.log(array.slice(2));
// This will return [3,4,5]. The original array is NOT affected with resulting in array being [1,2,3,4,5].

// From <https://stackoverflow.com/questions/37601282/javascript-array-splice-vs-slice>

// The syntaxes are also different
// 	a. Splice()
// 	splice(start)
// 	splice(start, deleteCount)
// 	splice(start, deleteCount, item1)
// 	splice(start, deleteCount, item1, item2, itemN)
// 	b. Slice()
// 	slice()
// 	slice(start)
// 	slice(start, end)

// negative index
// instead of using str.length - 1, just - 1 also works. Explanation below:
// A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
