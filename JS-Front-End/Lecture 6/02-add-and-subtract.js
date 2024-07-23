function solve(first, second, third) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    const result = subtract(sum(first, second), third);

    console.log(result);
}

solve(23, 6, 10);       //19
solve(1, 17, 30);       //-12
solve(42, 58, 100);     //0

// function solve(firstNumber, secondNumber, thirdNumber) {
//     let operate;
//     sum = (a, b) => a + b;
//     subtract = (a, b) => a - b;
    
//     let result = sum(firstNumber, secondNumber);
//     let print = subtract(result, thirdNumber)

//     console.log(print);
// }

// solve(23, 6, 10);       //19
// solve(1, 17, 30);       //-12
// solve(42, 58, 100);     //0




