let cat = {
    name: 'Vancho',
    age: 9,
    breed: 'Persian',
}

// convert object to json
let catJSON = JSON.stringify(cat);

console.log(catJSON);
console.log(cat);

console.log(cat.name);
console.log(catJSON.name);
console.log(typeof catJSON);

// convert json to object
let convertedCat = JSON.parse(catJSON);
console.log(convertedCat);
console.log(convertedCat.breed);

// Add indentation to json
let catJsonWithIndentation = JSON.stringify(cat, null, 2);
console.log(catJsonWithIndentation);
