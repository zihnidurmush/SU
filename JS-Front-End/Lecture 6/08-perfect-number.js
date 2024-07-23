function solve(number) {
    const calculateSum = numbers => numbers.reduce((a, b) => a + b, 0);
    const isPerfect = number => calculateSum(getDivisors(number)) === number;

    if (isPerfect(number)) {                               
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    } 
    function getDivisors(number) {
        const divisors = [];
        for (let i = number - 1; i >= 0; i--) {
            if (number % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }
}

// function solve(number) {
    
//     const divisors = getDivisors(number);               // find all divisors excluding itself
//     const sum = divisors.reduce((a, b) => a + b, 0);    // find the sum
//     if (sum === number) {                               // check and print
//         console.log('We have a perfect number!');
//     } else {
//         console.log('It\'s not so perfect.');
//     } 
// }

function getDivisors(number) {
    const divisors = [];
    for (let i = number - 1; i >= 0; i--) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}


solve(6);           // We have a perfect number!
solve(28);          // We have a perfect number!
solve(1236498);     // It's not so perfect.

	
	 
	 
