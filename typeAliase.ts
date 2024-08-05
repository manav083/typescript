
//* In Typescript, a type alias is a way to give a name to a specific
//* type or combination of types. It allows you to create a custom name 
//* for a type, making it easier to reuse and refer to the same type in different
//* parts of your code. Type aliases provide better readability, organization,
//* and abstraction of complex types.

//* To define a type alias, you use the type keyword followed by the alias name and the type definition:


//? Suppose we want to define 20 different person defined in object.ts with same properties and types.
//? In that scenario, code will be repeated. So, we can solve it using typeAlias.

// Type Alias
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    class?: string;        // Optional Property
    address: { city: string; country: string; }
}

const person: Person = {
    name: "Manav",
    age: 27,
    isStudent: true,
    address: {
        city: 'Ghaziabad',
        country: 'India'
    }
}

const person1: Person = {
    name: 'Vidhi',
    age: 23,
    isStudent: true,
    address: {
        city: 'Pune',
        country: 'India'
    }
}


//? Create an object product

type Product = {
    name: string;
    price: number;
    quantity: number;
}

const product: Product = {
    name: 'laptop',
    price: 1000,
    quantity: 5
}

const calculateTotalPrice = (product:Product) => {
    return product.price * product.quantity;
}

console.log(calculateTotalPrice(product))