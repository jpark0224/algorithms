// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // Your code here
  const result = [];
  let newNum = num;

  for (let i = 0; i < num.toString().length; i++) {
    if (newNum % 10 !== 0) {
      result.push((newNum % 10) * Math.pow(10, i));
    }
    newNum = parseInt(newNum / 10);
  }

  return result.sort((a, b) => b - a).join(" + ");
}

console.log(expandedForm(60302));

// what I learned
// 1. I first assigned parseInt(newNum / 10) back to num, which resulted in num.toString().length to be calculated based on the newly assigned value.
// It is important to consider which values are affected by assigning a value to an existing variable.
// 2. I keep forgetting how to get a power of a number, this was a good reminder of Math.pow(base, exponent) method.
// 3. A solution from a different user is below:
// const expandedForm = (n) =>
//   n
//     .toString()
//     .split("")
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter((a) => a > 0)
//     .reverse()
//     .join(" + ");
// 4. From this solution, I learned a reverse() method which reverses an array in place.
// 5. I also revisited one of the map syntaxes, map((element, index) => { /* ... */ }).
