// function encrypt(text, n) {
//   let count = n - 1;

//   console.log(count);

//   if (count > 0) {
//     encrypt(text, count);
//     console.log(encrypt(text, count));
//   }

//   const oddChar = text.split("").filter((x, index) => index % 2 !== 0);
//   const evenChar = text.split("").filter((x, index) => index % 2 === 0);
//   text = oddChar.concat(evenChar).join("");
//   return text;
// }

// console.log(encrypt("This is a test!", 2));
