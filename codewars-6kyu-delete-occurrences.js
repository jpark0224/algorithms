// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  const occurences = {};
  const result = [];
  for (element of arr) {
    occurences[element] = occurences[element] + 1 || 1;
    if (occurences[element] <= n) {
      result.push(element);
    }
  }
  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1));

// What I learned

// 1. occurences.element returns a key value pair with the key "element" instead of an actual elemenet from the array.
// This is because a dot notation is used when you know the name of the property, and [] is used when the name of the property is dynamically determined.

// 2. To check if a key exists in an object, you can use an in operator as below:
// const person = {
//     name: 'John',
//   };
//   console.log('name' in person); // 👉️ true
//   console.log('age' in person); // 👉️ false
// details are in the below link:
// https://bobbyhadz.com/blog/javascript-check-if-key-exists-in-object#:~:text=To%20check%20if%20a%20key,object%20or%20its%20prototype%20chain.&text=Copied!&text=The%20syntax%20when%20using%20the%20in%20operator%20is%3A%20string%20in%20object%20.

// 3. To increment a value in an object, assign the value of the key to the current value + 1, e.g. obj.num = obj.num +1 || 1. If the property exists on the object, its value gets incremented by 1, and if it doesn't - it gets initialized to 1.
// https://bobbyhadz.com/blog/javascript-increment-value-in-object#:~:text=To%20increment%20a%20value%20in,it%20gets%20initialized%20to%201%20.

// 4. a filter() method can be used instead as below:
// const deleteNth = (a, x) => {
//     let m = {};
//     return a.filter( v => (m[v] = m[v]+1||1) <= x );
//   }
