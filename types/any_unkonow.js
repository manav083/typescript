"use strict";
// Any Type
// the most flexible type in typescript. basically, it disables
// type checking for the variables or expressions it is applied to.
// let num7: any = 10;
// num7 = 'Hello'
// num7 = true;
// string assigned to number type without error.
// any is basically writing code in javascript.
//! Use Cases
//* Working with dynamic data: when dealing with data from 
//  from user inputs, network responses, or deserialized JSON objects,
//  the any type can be useful.
//* Migration from Javascript: when migrating an existing Javascript 
// codebase to typescript, using the any type can be convenient way to
// quickly annotate variables and functions without immediately their precise
// type.
//? Unknow Type
//* The unknown type is a safer alternative to any because it still
// enforces type checking and type safety.
//* Variables of type unknown can hold values of any type, but you must
// perform type checks or type assertions before using them in specific 
// ways.
let num8;
num8 = 5;
num8 = 'thapa';
num8 = true;
if (typeof num8 === 'number') {
    console.log(num8 * 2);
}
else if (typeof num8 === 'boolean') {
    console.log(num8);
}
