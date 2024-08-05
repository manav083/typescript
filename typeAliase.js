//* In Typescript, a type alias is a way to give a name to a specific
//* type or combination of types. It allows you to create a custom name 
//* for a type, making it easier to reuse and refer to the same type in different
//* parts of your code. Type aliases provide better readability, organization,
//* and abstraction of complex types.
var person = {
    name: "Manav",
    age: 27,
    isStudent: true,
    address: {
        city: 'Ghaziabad',
        country: 'India'
    }
};
var person1 = {
    name: 'Vidhi',
    age: 23,
    isStudent: true,
    address: {
        city: 'Pune',
        country: 'India'
    }
};
var product = {
    name: 'laptop',
    price: 1000,
    quantity: 5
};
var calculateTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product));
