function solve(number) {
    console.log(
        number.toString().split("").map(Number).reduce((a,b) => a + b, 0)
    );
}

solve(245678) //result 32


// function solve(number) {
//     let sum = 0;
//     let currentNumber = number;
//     while (currentNumber > 0) {
//         sum += currentNumber % 10;
//         currentNumber = parseInt(currentNumber / 10);
//     }
//     console.log(sum);
// }
// solve(245678) //result 32


// function solve(number) {

//     const numberAsString = number.toString();
//     let sum = 0;

//     for (let index = 0; index < numberAsString.length; index++) {
//         sum += Number(numberAsString[index]);

//     }
//     console.log(sum);
// }

// solve(245678) //result 32