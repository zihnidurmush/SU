// variable declaration
let a = 18;
let firstName = 'Gosho';
let isMale = true;

// basic solve function
function solve(num1, num2) {
    console.log(num1 + num2)
}

// execute solve function
solve(1, 2);

// print on the console 
console.log('My name is ' + firstName + '!');

console.log(`My name is ${firstName}!`);

// fix numbers
let firstNumber = 3;
let secondNumber = 3.14159265359;
console.log(firstNumber.toFixed(2));
console.log(secondNumber.toFixed(2));

// using const
const lastName = 'Papazov';

// block scope
if (true) {
    let schoolName = 'SoftUni'; //variable has block scope
    console.log(schoolName); //prints schoolName
}

// console.log(schoolName); //throws error not defined
