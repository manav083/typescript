//! Optional and Default Parameters

//* Typescript allows you to define optional and default parameters in functions.
//* Optional parameters are denoted by appending a ? after the parameter name.
//* and default parameters are specified by providing a default value in the parameter declaration.


// function define

// const greet3  = (name: string, id: number):string => {   // these are called parameters
//     return `Welcome, ${name} and your id is ${id}`
// }


// // func call
// const emp = greet3('manav', 5) // these are called arguments

// console.log(emp);


// default parameters

// const greet3  = (name: string, id: number = 1):string => {   // these are called parameters
//     return `Welcome, ${name} and your id is ${id}`
// }


// // func call
// const emp = greet3('manav') // these are called arguments

// console.log(emp);


// if we give default value to a parameter then we don't need to necessary pass
// the argument for that. If we don't pass an argument for default it will take default value 
// else it will throw error like need 2 arguments getting 1 only.


//? Optional Parameters

const greet3  = (name: string, id?: number):string => {   // these are called parameters
    return `Welcome, ${name} and your id is ${id}`
}


// func call
const emp = greet3('manav') // these are called arguments

console.log(emp);

// We don't need to necessarily pass argument for optional parameters. It will not throw error.
// it will take undefined for that optional parameter.
