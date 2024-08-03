
// push method

const fruits: string[] = ['apple', 'banana', 'orange'];

const newUpdateFruits = fruits.push('kiwi');  

//? when we store push operation in a variable it will store length of array in variable.


console.log(fruits); // array of fruits
console.log(newUpdateFruits);  // 4


// pop() method

const lastData = fruits.pop();
console.log(lastData);
console.log(fruits);


// Using for loop


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


// using for...of loop
//? it gives values

for(const fruit of fruits){
    console.log("forOf:::",fruit);
}

// using foreach loop

fruits.forEach((curr:string) => console.log("foreach::",curr))