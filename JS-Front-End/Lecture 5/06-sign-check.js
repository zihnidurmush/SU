function solve(first, second, third) {
    const multiply = (a, b) => a * b;

    const product = multiply(first, multiply(second, third));


    // const doubleExpressionBodyTernary = (number) => number == 0 ? 1 : 2;

    console.log(product >= 0 ? 'Positive' : 'Negative');
    // if(product >= 0) {
    //     console.log('Positive');
    // } else {
    //     console.log('Negative');
    // }
}

solve(5, 12, -15);      //Negative
solve(-6, -12, 14);     //Positive
solve(-1, -2, -3);      //Negative
solve(-5, 1, 1);        //Negative
