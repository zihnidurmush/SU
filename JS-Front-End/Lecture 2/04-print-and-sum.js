function solve(num1, num2) {
    
    let output = "";
    let sum = 0;
    for (let index = num1; index <= num2; index++) {
        // output += `${index} `;
        output += index + " ";
        sum = sum + index;
    }
    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}

solve(5, 10);