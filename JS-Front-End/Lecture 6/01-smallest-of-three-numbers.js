// function solve(numbers) {
//     const getLowestOfTwo = (a, b) => a > b ? a : b;
    
//     function arrowSolve(a, b, c) {
//         const result = getLowestOfTwo(a, getLowestOfTwo(b, c));
        
//         console.log(result);
//     }
    
// }

// solve(2, 5, 3);         // 2
// solve(600, 342, 123);   // 123
// solve(25, 21, 4);       // 4
// solve(2, 2, 2);         // 2

// function mathMin(numbers, initialNumber = Number.MAX_SAFE_INTEGER) {
//     let minNumber = initialNumber;

//     for (const number of numbers) {
//         if (minNumber > number) {
//             minNumber = number;
//         }
//     }
//     return minNumber;
// }

// function solve(...numbers) {

//     const result = mathMin(numbers);
//     console.log(result);
// }

// solve(2, 5, 3);         // 2
// solve(600, 342, 123);   // 123
// solve(25, 21, 4);       // 4
// solve(2, 2, 2);         // 2

// function solve(a, b, c) {

//     function mathMin(numbers) {
//         let minNumber = Number.MAX_SAFE_INTEGER;

//         for (const number of numbers) {
//             if (minNumber > number) {
//                 minNumber = number;
//             }
//         }
//         return minNumber;
//     }

//     const result = mathMin([a, b, c]);
//     console.log(result);
// }

// solve(2, 5, 3);         // 2
// solve(600, 342, 123);   // 123
// solve(25, 21, 4);       // 4
// solve(2, 2, 2);         // 2


// function solve(a, b, c) {
//    console.log(Math.min(a, b, c)); 
// }

// function findSmallestNumber(firstNumber, secondNumber, thirdNumber) {
//     let smallestNumber;

//     if (firstNumber <= secondNumber) {
//         smallestNumber = firstNumber;
//     } else {
//         smallestNumber = secondNumber
//     }

//     if (smallestNumber <= thirdNumber) {
//         smallestNumber = smallestNumber;
//     } else {
//         smallestNumber = thirdNumber
//     }

//     console.log(smallestNumber);
// }


// findSmallestNumber(2, 5, 3); // 2
// findSmallestNumber(600, 342, 123); // 123
// findSmallestNumber(25, 21, 4); // 4
// findSmallestNumber(2, 2, 2); // 2




