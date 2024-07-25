// Declaration
let phonebook = {
    'Pesho': '123123123',
    'Gosho': '234234234',
    'Stamat': '345345345',
    'John Doe': null,
};

// Object literal with dynamic property name
let emergencyContact = 'Mariyka';
let phonebook2 = {
    'Pesho': '123123123',
    'Gosho': '234234234',
    'Stamat': '345345345',
    [emergencyContact]: '456456456',
};

// Loop with object keys or values
let names = Object.keys(phonebook);
for (const name of names) {
    console.log(`${name} -> ${phonebook[name]}`);
};

// Builtin for..in
console.log('For.in-----------');
for (const key in phonebook) {
    console.log(`${key} -> ${phonebook[key]}`);
};

// Check for property value 
if (phonebook['Pesho']) {
    console.log('Pesho has phone');    
}

// Check if property is present
if (phonebook.hasOwnProperty('John Doe')) {
    console.log('John Doe is present in the phonebook');    
}

// Remove property from object
console.log(phonebook);
delete phonebook['John Doe'];

console.log(phonebook);

// Sorting associative array by key
let phonebookEntries = Object.entries(phonebook);
console.log(phonebookEntries);
                                
phonebookEntries.sort((a, b) => a[0].localeCompare(b[0]));  // a compared to b is ascending order
// phonebookEntries.sort(([nameA], [nameB]) => nameA.localeCompare(nameB));  // a compared to b is ascending order

for (const [name, phone] of phonebookEntries) {
    console.log(`${name} -> ${phone}`);
};

const sortedPhonebook = Object.fromEntries(phonebookEntries);
console.log(sortedPhonebook);

// Sort associative array by value
let phonebookEntriesSortedByValue = Object.entries(phonebook);
phonebookEntriesSortedByValue.sort((a, b) => a[1].localeCompare(b[1]));

let towns = {
    'Pleven': 80000,
    'Sofia': 1236000,
    'Burgas': 200000,
    'Plovdiv': 340000,
    'Momchilgrad': 15000,
};
const townEntries = Object.entries(towns);
townEntries.sort((a, b) => b[1] - a[1]).forEach(town => console.log(`${town[0]} -> ${town[1]}`));
