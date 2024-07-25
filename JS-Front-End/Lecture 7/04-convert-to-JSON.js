function solve(firstName, lastName, hairColor) {
    let info = {
        name: firstName,
        lastName,
        hairColor,
    };

    let result = JSON.stringify(info);

    console.log(result);

}

// function solve(firstName, lastName, hairColor ) {
//     let info = {
//         name: firstName, 
//         lastName, 
//         hairColor
//     };

//     let json = JSON.stringify(info);
//     console.log(json);
// }


solve('George', 'Jones', 'Brown');  //{"name":"George","lastName":"Jones","hairColor":"Brown"}
solve('Peter', 'Smith', 'Blond');   //{"name":"Peter","lastName":"Smith","hairColor":"Blond"}

	
	
