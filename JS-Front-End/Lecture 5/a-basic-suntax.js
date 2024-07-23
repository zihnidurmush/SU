// Function declaration
function printText(text) {
    console.log(text);
}

// Function hoisting
printSumResult(10, 20); // This can be called before initialization

function printSumResult(first, second) {
    console.log(first + second);
}

// Function invocation(calling the function)
printText('Hello World');

// Function expression
const subtractNumbers = function (a, b) {
    console.log(a - b);
};

subtractNumbers();

// Return statement
function calculateSum(a, b) {
    return a + b;
}

// Save returned result as variable
const result = calculateSum(3, 5);
console.log(result);

// Print returned result
console.log(calculateSum(1, 2));

// Execute method on returned result
const formattedSum = calculateSum(2, 3).toFixed(2);
console.log(formattedSum);

// Use in expression
const expressionResult = calculateSum(1,3) * 10;
console.log(expressionResult);

// create function that validates array index
function isValidArrayIndex(arr, index) {
    let isValid = true;

    if (!Number.isInteger(index)) {
        isValid = false;
    }

    if (index < 0 || index >= arr.length) {
        isValid = false;
    }

    return isValid;
}

console.log(isValidArrayIndex([1, 2, 3], 2));
console.log(isValidArrayIndex([1, 2, 3], 4));
console.log(isValidArrayIndex([1, 2, 3]));

// Default value
function printHeader() {
    console.log('Header');

}

const defaultReturn = printHeader();
console.log(defaultReturn);

// IIFE - Immediately Invoked Function Expression 
(function() {
    console.log('IIFE');
})();

// IIAE - Immediately Invoked Arrow Expression 
(() => console.log('IIAE'))();
