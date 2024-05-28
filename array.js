"use strict";
//? In Typescript, you can create ad initialize arrays using various approaches.
// Using square brackets.
const numbers = [1, 2, 3, 4, 5]; // giving type to an array
// it says it is a array of numbers.
// Using the array constructor.
const number1 = new Array(1, 2, 3, 4, 5);
// Using the array.of method.
const names = Array.of('manav', 'jain', 'manisha', 'jain');
//***** lets say we have different type of elements in an array then we will give type as (number | boolean)[]*****//
//! Operation: Accessing elements using index.
//? You can access individual elements of an array using square brackets
//? notation with the index of the element. Remember that array indices start
//? from 0.
console.log(names[1]);
