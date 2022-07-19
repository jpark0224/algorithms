// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger(n) {
  //your code here

  // If all digits sorted in descending order, then output is always "Not Possible"
  let d = 0;
  let dIndex = 0;

  n = n.toString().split("");

  // Traverse the given number from rightmost digit, keep traversing till you find a digit which is smaller than the previously traversed digit. For example, if the input number is “534976”, we stop at 4 because 4 is smaller than next digit 9. If we do not find such a digit, then output is “Not Possible”.
  for (let i = n.length - 1; i > -1; i--) {
    if (n[i] < n[i + 1]) {
      d = n[i];
      dIndex = i;
      break;
    } else if (i === 0 && n[i] >= n[i + 1]) {
      return -1;
    } else if (n.length === 1) {
      return -1;
    }
  }

  // Now search the right side of above found digit ‘d’ for the smallest digit greater than ‘d’. For “534976″, the right side of 4 contains “976”. The smallest digit greater than 4 is 6.
  const digitsAfterD = n.slice(dIndex + 1);
  const smallestGreaterThanD = Math.min(...digitsAfterD);
  const smallestGreaterThanDIndex =
    digitsAfterD.indexOf(smallestGreaterThanD.toString()) + dIndex + 1;

  // Swap the above found two digits, we get 536974 in above example.
  n.splice(dIndex, 1, smallestGreaterThanD.toString());
  n.splice(smallestGreaterThanDIndex, 1, d.toString());

  //   Now sort all digits from position next to ‘d’ to the end of number. The number that we get after sorting is the output. For above example, we sort digits in bold 536974. We get “536479” which is the next greater number for input 534976.
  return Number(
    n
      .slice(0, dIndex + 1)
      .concat(n.slice(dIndex + 1).sort((a, b) => a - b))
      .join("")
  );
}

console.log(nextBigger(3660));
// console.log(nextBigger(534976));
