function solve(firstName, lastName, age) {
    // let person = {};
    // person.firstName = firstName;
    // person.lastName = lastName;
    // person.age = age;

    // return person;

    // regular syntax
    // let info = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    // }

    // short hand syntax
    let info = {
        firstName,
        lastName,
        age,
    }

    return info;
}

console.log(solve("Peter", "Pan", "20"));

// firstName: Peter
// lastName: Pan
// age: 20
console.log(solve("George", "Smith", "18")	);
// firstName: George
// lastName: Smith
// age: 18
