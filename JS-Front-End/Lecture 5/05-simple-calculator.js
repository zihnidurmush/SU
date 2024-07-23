function solve(firstDigit, secondDigit, calculationOperator) {
    let operate = null;

    switch (calculationOperator) {
        case 'multiply':
            operate = (a, b) => a * b;
            break;
        case 'divide':
            operate = (a, b) => a / b;
            break;
        case 'add':
            operate = (a, b) => a + b;
            break;
        case 'subtract':
            operate = (a, b) => a - b;
            break;
    }

    const result = operate(firstDigit, secondDigit);

    console.log(result);
}

solve(5, 5, 'multiply')     //25
solve(40, 8, 'divide')      //5
solve(12, 19, 'add')        //31
solve(50, 13, 'subtract')   //37
	
	
	

