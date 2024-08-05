//* In typescript, objects are used to represent data with key-value pairs
//* Each key in the object is a string (or a symbol in ES6) the maps to a value.
//? real life example of a person's information
//? name, age, isStudent, address{city, country}
//! In Javascript
var person = {
    name: "Manav",
    age: 27,
    isStudent: true,
    address: {
        city: 'Ghaziabad',
        country: 'India'
    }
};
//! In Typescript
// Accessing object data
console.log(person.address.country);
// Updating object properties
person.address.country = 'Nepal';
console.log(person.address.country);
