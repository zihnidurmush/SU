function recursivePower(base, radix, currentValue = 1) {
    if (radix === 1) {
        return base;
    }
    return base * recursivePower(base, radix - 1);
}

recursivePower(2,8); //256
recursivePower(3,4); //81

// function solve(base, radix) {
//     let result = Math.pow(base, radix);
// }

// function solve(base, radix) {
//     // console.log(base ** radix);
//     function iterativePower(base, radix) {
//         let result = 1;

//         for (let i = 0; i < radix; i++) {
//             result *= base;
//         }

//         return result;
//     }


//     const result = iterativePower(base, radix);
//     console.log(result);
// }

// solve(2,8); //256
// solve(3,4); //81



