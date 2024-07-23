function solve(numbers) {
    numbers.forEach(printPalindromeResult);
    // numbers.forEach(number => printPalindromeResult(number));
    
    function printPalindromeResult(number) {
        console.log(isPalindrome(number));
    }

    function isPalindrome(number) {
        const forwardNumber = number.toString();
        const backwardNumber = forwardNumber.split('').reverse().join('');

        return forwardNumber === backwardNumber;
    }
}

solve([123,323,421,121]);	
// false
// true
// false
// true	      	
solve([32,2,232,1010]);
// false
// true
// true
// false
