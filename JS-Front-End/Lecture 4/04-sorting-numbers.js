function solve(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const result = [];
    while (sortedNumbers.length > 0) {
        let firstNumber = sortedNumbers.shift();
        let lastNumber = sortedNumbers.pop();
        result.push(firstNumber);
        if (lastNumber) {
            result.push(lastNumber);
        }
    }
    return result;
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]



// function solve(numbers) {
//     const sortedNumbers = numbers.sort(function(a, b){return a-b});
//     let newNumbers = [];
//     let numbersInfo = sortedNumbers.slice();
//     for (let i = 0; i < sortedNumbers.length; i++) {
//         if (i % 2 === 0) {
//             newNumbers[i] = numbersInfo.shift();
//         } else {
//             newNumbers[i] = numbersInfo.pop();  
//         }
//     }
//     return newNumbers; 
// }

// console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]