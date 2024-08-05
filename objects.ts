

//* In typescript, objects are used to represent data with key-value pairs
//* Each key in the object is a string (or a symbol in ES6) the maps to a value.


//? real life example of a person's information

//? name, age, isStudent, address{city, country}

//! In Javascript
// const person = {
//     name: "Manav",
//     age: 27,
//     isStudent: true,
//     address: {
//         city: 'Ghaziabad',
//         country: 'India'
//     }
// }

//! In Typescript

// Defining the object first and its properties and their types .
// Its not necessary because of type inference but it is a good practice.
// const person:{
//     name:string;
//     age:number;
//     isStudent: boolean;
//     address:{
//         city:string;
//         country:string;
//     }
// } = {
//     name: "Manav",
//     age: 27,
//     isStudent: true,
//     address: {
//         city: 'Ghaziabad',
//         country: 'India'
//     }
// }

//! Accessing object data
// console.log(person.address.country);

//! Updating object properties
// person.address.country = 'Nepal';
// console.log(person.address.country);
