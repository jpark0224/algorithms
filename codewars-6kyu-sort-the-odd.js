// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  // Return a sorted array.
  console.log(array);

  const result = [];

  for (const number of array) {
    if (number % 2 !== 0) {
      result.push(number);
    }
  }

  result.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.splice(i, 0, array[i]);
    }
  }

  return result;
}

// What I learned
// My first attempt using indexOf() method instead of array[i] didn't work because indexOf() only finds the first index of an element when there are more than two duplicate elements.
// I had to replace for (const number of array) and indexOf() to make this solution work.

// Alternative solution
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }

// Array.prototype.shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// // expected output: Array [2, 3]

// console.log(firstElement);
// // expected output: 1
