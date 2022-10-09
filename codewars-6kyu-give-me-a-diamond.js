// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
// Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative,
// as it is not possible to print a diamond of even or negative size.

function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  } else {
    let result = "";

    for (i = 1; i <= Math.ceil(n / 2); i++) {
      result += " ".repeat(Math.ceil(n / 2) - i);
      result += "*".repeat(i * 2 - 1);
      result += "\n";
    }

    for (j = Math.ceil(n / 2) - 1; j >= 1; j--) {
      result += " ".repeat(Math.ceil(n / 2) - j);
      result += "*".repeat(j * 2 - 1);
      result += "\n";
    }

    return result;
  }
}

console.log(diamond(5));

// What I learned
// I always write test cases before writing a code. For this one, what I wrote was below:
// *

// 1 "*"

//  *
// ***
//  *

// 1 " " + 1 "*" + "\n" +
// 0 " " + 3 "*" + "\n" +
// 1 " " + 1 "*" + "\n"

//   *
//  ***
// *****
//  ***
//   *

// 2 " " + 1 "*" + "\n" +
// 1 " " + 3 "*" + "\n" +
// 0 " " + 5 "*" + "\n" +
// 1 " " + 3 "*" + "\n" +
// 2 " " + 1 "*" + "\n"

// Answer voted as best practice is below:
// function diamond(n) {
//   if (n <= 0 || n % 2 === 0) return null;
//   str = "";
//   for (let i = 0; i < n; i++) {
//     let len = Math.abs((n - 2 * i - 1) / 2);
//     str += " ".repeat(len);
//     str += "*".repeat(n - 2 * len);
//     str += "\n";
//   }
//   return str;
// }
