function solve(firstNumber, secondNumber, operator) {
    let result;
    
    switch (operator) {
        case '+':
        result = firstNumber + secondNumber;
        break;
        case '-':
        result = firstNumber - secondNumber;
        break;
        case '*':
        result = firstNumber * secondNumber;
        break;
        case '/':
        result = firstNumber / secondNumber;
        break;
        case '%':
        result = firstNumber % secondNumber;
        break;
        case '**':
        result = firstNumber**secondNumber;
        break;
    }

    console.log(result);
}

solve(2, 3, '**')

// function hackySolve(firstNumber, secondNumber, operator) {
//     let expression = `${firstNumber} ${operator} ${secondNumber}`

//     let result = eval(expression);

//     console.log(result);
// }

// hackySolve(5, 6, '+');