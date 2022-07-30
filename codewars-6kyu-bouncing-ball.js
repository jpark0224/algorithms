// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1

// (Condition 2) not fulfilled).

function bouncingBall(h, bounce, window) {
  // your code here
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  } else {
    let counter = 1;
    let updatedHeight = h;
    while (updatedHeight > window) {
      updatedHeight *= bounce;
      if (updatedHeight > window) {
        counter += 2;
      }
    }
    return counter;
  }
}

console.log(bouncingBall(3.0, 0.66, 1.5));

// idea
// - h = 3, bounce = 0.66, window = 1.5, result is 3
// count + 1 when the ball first falls down
// 3 * 0. 66 = 1.98 if h * bounce > window, 1.98 > 1.5, then it bounces & falls down => count + 2
// next time it will bounce up to 3 * 0.66 * 0.66 => 1.3068, which is < 1.5
// total 3
// whenever bounce > window, it counts as 2

// what I learned
// Postfix increment
// let x = 3;
// y = x++;

// // y = 3
// // x = 4

// Prefix increment
// let a = 2;
// b = ++a;

// // a = 3
// // b = 3
