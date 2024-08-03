// push method
var fruits = ['apple', 'banana', 'orange'];
var newUpdateFruits = fruits.push('kiwi');
//? when we store push operation in a variable it will store length of array in variable.
console.log(fruits); // array of fruits
console.log(newUpdateFruits); // 4
// pop() method
var lastData = fruits.pop();
console.log(lastData);
console.log(fruits);
// Using for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// using for...of loop
//? it gives values
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log("forOf:::", fruit);
}
// using foreach loop
fruits.forEach(function (curr) { return console.log("foreach::", curr); });
