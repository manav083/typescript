//* TODO 1: Write a program to add two numbers?
//* TODO 2: How to catch error & solve it?
//* TODO 3: TS Configuration file


//* func define

//* a:number this is called type annotation
//* if we define like this then we only need to 
//* give argument as number only in typescript.
//* we can also define the return type of function
//* if we dont follow annotation it will give error
//* which is very useful.

//@ts-ignore
function sum(a:number,b:number):number{
    return a+b
}

//* fun call

console.log(sum(5,10));