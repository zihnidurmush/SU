function solve(number) {
    // extract odd and even digits
    const isEven = x => x % 2 === 0;
    const isOdd = x => x % 2 !== 0;

    const evenSum = calculateFilteredDigitSum(number, isEven);
    const oddSum = calculateFilteredDigitSum(number, isOdd);
    
    // print formatted result
    printResult(oddSum, evenSum);

    function calculateFilteredDigitSum(number, filter) {
        // get digit array
        // const sum = number
        //             .toString()         //1234                  // converts numbers to String
        //             .split('')          //'1234'                // splits the string
        //             .map(Number)        //['1','2','3','4']     // converts splitted string array to array of numbers
        //                                 //                      // this is equal to digit => Number(digit)
        //             .filter(filter)     //[1234]                // filters to group even and odd digits
        //             .reduce((acc, digit) => acc + digit, 0);    //sums the digits
    
        const filteredDigits = number
                    .toString()         //1234             
                    .split('')          //'1234'           
                    .map(Number)        //['1','2','3','4']
                    .filter(filter);    //[1234]          
                    
        // calculate sum
        const sum = filteredDigits.reduce((acc, digit) => acc + digit, 0);    //sums the digits
    
        return sum;
    }
    
    function printResult(oddSum, evenSum) {
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
}

solve(1000435);             //Odd sum = 9, Even sum = 4
solve(3495892137259234);    //Odd sum = 54, Even sum = 22



