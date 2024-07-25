// object literal
let cat = { name: 'Navcho', age: 9 };
console.log(cat);

// Multiline literal
let town = { 
    name: 'Sofia', 
    population: 2000000,
    country: 'Bulgaria',
};

// Empty object
let person = {};

// Object literal short hand syntax
let firstName = 'Sharo';
let dog = {
    // firstName: firstName,
    firstName, // short hang syntax
    age: 5,
} 
console.log(dog);

let robot = {
    name: 'Sony',
    clean: function() { // Function expression syntax
        console.log('Robot cleaning...');
    },
    cook: () => console.log('Robot cooking...'), // Arrow function syntax
    wash() { //object method notation
        console.log('Robot washing...');
    },
};
robot.clean();
robot.cook();
robot.wash();

// console.log(robot);

// Set property dynamically (runtime) with dot syntax
person.name = 'Pesho';
person.age = 20;
person.isMale = true;
console.log(person);

// Set property dynamically (runtime) with brackets
person['town'] = 'Sofia';
console.log(person);

// Access property with dot syntax
console.log(person.name);

// Access property with bracket syntax
console.log(person['age']);

// Rewrite property value
person.name = 'Peter';
console.log(person);

// Object values
console.log(Object.values(person));

// Object keys
console.log(Object.keys(person));

// Object entries
console.log(Object.entries(person));

// Access property by variable
let propName = 'name';
console.log(person[propName]);

// Object destructuring assignment
let { country, name: townName, ...rest } = town;
console.log(country);
console.log(townName);
console.log(rest);

