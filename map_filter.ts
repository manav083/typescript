

const numbersArr: number[] = [1,2,3,4,5];

//? Double the numbers in array

//! Map method
//* The map method creates a new array by applying a provided 
//* function to each element of the original array. It transforms 
//* each element and returns a new array with the transformed values.

// const doubleData:number[] = numbersArr.map((curr:number) => curr*2);
// console.log(doubleData);

//? Converting numbers to string

// const numberToString: string[] = numbersArr.map((curr: number) => curr.toString());
// console.log(numberToString);

//! Filter method

//? Filter even numbers

// const evenNumbers: number[] = numbersArr.filter((curr: number) => curr % 2 === 0);
// console.log(evenNumbers);


//? numbers greater than 3

const greaterThanThree: number[] = numbersArr.filter((curr: number) => curr > 3);
console.log(greaterThanThree);