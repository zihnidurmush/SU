function solve(json) {
    const person = JSON.parse(json);

    const entries = Object.entries(person);

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

// function solve(jsonInput) {
//     let data = JSON.parse(jsonInput);
    
//     Object
//     .keys(data)
//     .forEach(key => {
//         console.log(`${key}: ${data[key]}`);
//     })
// }

solve('{"name": "George", "age": 40, "town": "Sofia"}');
// name: George
// age: 40
// town: Sofia

solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
// name: Peter
// age: 35
// town: Plovdiv
