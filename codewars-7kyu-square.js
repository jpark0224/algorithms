// Given an integral number, determine if it's a square number:
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

function solution1(n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n))
}

function solution2(n) {
    return Math.sqrt(n) % 1 === 0;
}

function solution3(n) {
    return Number.isInteger(Math.sqrt(n))
}