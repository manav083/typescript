//* Type inference in Typescript refers to the ability of the Typescript compiler to
//* automatically determine and assign types to variables, expressions, and
//* function return values based on their usage and context in the code.


let myName = 'manav'; 

// myName = 5  giving error automatically 

// basic js statement but in ts it will decide its datatype automatically.
// it will not let us give some other type value.

// annotation is giving datatype explicitly and inference is 
// giving datatype automatically by compiler itself.(short for inference is infer).


//! Best Practices for using Type Inference

//? Use type inference for simple cases where the assigned
//? value clearly indicates the intended type.

//? When in doubt, provide explicit type annotations to make your
//? intention clear.

//? Avoid relying too heavily on type inference when the assigned
//? value is complex or ambiguous.

//? Regularly review and refactor your code to ensure inferred
//? types with your intentions.


//! Two Questions

//* Declare a variable message and intialize it with the value 'Hello, typescript'.
// Infer the type of message using type inference.

//* Write a function calculateArea that takes the length and width
// as parameters and of type number and returns their product. Infer the return type of
// function.