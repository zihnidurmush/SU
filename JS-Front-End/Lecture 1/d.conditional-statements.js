// aritmetic operators
console.log(5+10);          // addition operator, result 15
console.log(5+'10');        // concatenation operator, result 510
console.log(1 + 2 + '3');   // result 33 (изпълнява се от ляво на дясно)
console.log('1' + 2 + 3);   // result 123

// division
console.log(9 / 2);         // result 4.5

// modulo
console.log(9 % 2);         // result 1

// exponentiation
console.log(10 ** 2);       // result 100

// comparison operators
let a = 5;
let b = '5';
console.log(1 == '1');      // result true          <- equality operator, equality with enabled coercion
console.log(1 === '1');     // result false         <- identity operator, equality without enabled coercing
console.log(a != b);        // result false         <- inequality operator (with coercion)
console.log(a !== b);       // result true          <- strict inequality operator (with disabled coercion)

// ternary operator
console.log((a > b) ? 4 : 10); //result 10          <- if (true) 5 greater than 7 return 4, else return 10
console.log(a === b ? 'Equal with coercing' : 'Not equal'); // result 'Equal with coercing'44

// if else
let number = 100;
if (number <= 20) {
    console.log('Number is less than 20');
} else if (number < 30) {
    console.log('Number is less than 30 and greater than or equal to 20');
} else {
    console.log('Number is equal or greater than 20');
}

// switch
let color = 'pink';
switch (color) {
    case 'red': 
        console.log('the roses are red');        
        break;
    case 'blue': 
        console.log('the violets are blue');        
        break;
    case 'pink':
        console.log('this poem makes no sense');
        break;
    case 'brown':
        console.log('Microwave');
        break;
    default:
        console.log('Ти си роза, ти си крем');
        break;
}

// logical operator
console.log(!true);         //result: false     <- not operator
console.log(!!true);        //result: true      <- not operator

// And logical operator
// true && false -> false
// false && true -> false
// false && false -> false
// true && true -> true

// Or logical operator
// true || false -> true
// false || true -> true
// true || true -> true
// false || false -> false

// comparison operators have greater priority than logical ones

// Typeof operator
console.log(typeof 5);              // result Number
console.log(typeof 'Pesho');        // result String
console.log(typeof true);           // result Boolean
console.log(typeof 1000001n);       // result bigint
console.log(typeof undefined);      // result undefined
console.log(typeof Symbol('pesho'));// result symbol
console.log(typeof null);           // result object

// truthy values
console.log(Boolean('Pesho'));      // non empty arrays are truthy
console.log(Boolean([]));           // truthy value
console.log(Boolean({}));           // truthy value

// falsy values
console.log(Boolean(0));            // falsy value
console.log(Boolean(NaN));          // falsy value
console.log(Boolean(''));           // falsy value
console.log(Boolean(false));        // falsy value
console.log(Boolean(null));         // falsy value
console.log(Boolean(undefined));    // falsy value

let fName = '';

if(fName) {
    console.log('The name is');
}

