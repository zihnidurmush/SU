function solve(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    
    numbers
    .filter(function(number) {
        return number % 2 === 0;
    })
    .forEach(function (number) {
        evenSum += number;
    });
    
    numbers
    .filter(function(number) {
        return number % 2 !== 0;
    })
    .forEach(function (number) {
        oddSum += number;
    });
    
    console.log(evenSum - oddSum);
}


solve([1,2,3,4,5,6])        //3
solve([3,5,7,9])            //-24
solve([2,4,6,8,10])         //30


