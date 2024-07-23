function solve(number) {

    let currentResult = 0;

    for (let i = 1; i <= 10; i++) {
        currentResult = number * i;
        console.log(`${number} X ${i} = ${currentResult}`);
    }
}

solve(2);