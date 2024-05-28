"use strict";
//! Function Declaration
//* You can declare a function using a function keyword, dollowed by the
//* function name, a list of parameters enclosed in parantheses, and a return type.
//* The function body contains the code that will be executed when the unction is called.
//! Function Invcation:
//* To execute a function, you simply invoke it by using its name followed by parantheses.
//* You can provide arguments (actual values) for the parameters defined in the function declaration.
// Greeting Function
// function declaration
// function greet(name: string, id: number) {
//     console.log(`Welcome, ${name} and your id is ${id}`);
// }
// function call or invocation
// greet('manav', 1);
// Arrow function
// function declaration
// this is called as fat arrow function
// const greet = (name: string, id: number) => {
//     console.log(`Welcome, ${name} and your id is ${id}`);
// }
// // function call or invocation
// greet('manav', 1);
// function return type
// const greet = (name: string, id: number): string => {
//     return `Welcome, ${name} and your id is ${id}`;
// }
// // function call or invocation
// const mygreet = greet('manav', 1);
// console.log(mygreet);
//TODO Write a palindrome function
const isPalindrome = (palin) => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
const result = isPalindrome('12322');
console.log(result);
// Find the average of numbers in an array using function(arg: array)
// find max in array
