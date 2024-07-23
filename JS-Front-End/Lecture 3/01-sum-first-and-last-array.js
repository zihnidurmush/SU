function solve(input) {
    const first = input[0];
    const last = input[input.length -1];

    console.log(first + last);
}

// function solve(input) {
//     const first = input.shift();
//     const last = input.pop();

//     console.log(first + last);
// }


solve([20, 30, 40]);        //	60
solve([10, 17, 22, 33]);    //	43
solve([11, 58, 69]);        //	80