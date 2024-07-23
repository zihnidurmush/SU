// function to be converted to arrow function
const doubleExpression = function (number) {
    return number * 2;
}

// arrow function with statement body
const doubleStatementBody = (number) => {
    return number * 2;
}

// arrow function with expression body
const doubleExpressionBody = (number) => number * 2;

// example with ternary operator
const doubleExpressionBodyTernary = (number) => number == 0 ? 1 : 2;
// checks if the number is equal to 0, if yes returns 1, if not returns 2

// arrow function with expression body with single parameter
const doubleSingleParameterExpressionBody = number => number * 2;

console.log(doubleExpression(10));
console.log(doubleStatementBody(10));
console.log(doubleExpressionBody(10));
console.log(doubleSingleParameterExpressionBody(10));
