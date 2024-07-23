function solve(input) {
    let result;
    let inputType = typeof(input);
    switch(inputType) {
        case "number":
        result = Math.PI * input**2;
        console.log(result.toFixed(2));
        break;
        default:
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
        break;
    }
}

solve(true)

