
function solve(input) {
    const baristaCount = Number(input.shift());
    const team = {};
    
    // gather team
    for (let i = 0; i < baristaCount; i++) {
        const [name, workShift, coffeeTypes] = input[i].split(' ');
        
        team[name] = {
            workShift,
            coffeeTypes: coffeeTypes.split(','),
        }
    }
    
    // Execute commands
    let commandLine = input.shift();
    
    while (commandLine != 'Closed') {
        const [command, baristaName, firstArg, secondArg] = commandLine.split(' / ');
        
        const barista = team[baristaName];
        let workShift, coffeeType;
        switch (command) {
            case 'Prepare':
            workShift = firstArg;
            coffeeType = secondArg;
            
            if (barista.workShift === workShift && barista.coffeeTypes.includes(coffeeType)) {
                console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            }
            
            break;
            case 'Change Shift':
            workShift = firstArg;
            barista.workShift = workShift;
            console.log(`${baristaName} has updated his shift to: ${workShift}`);
            break;
            case 'Learn':
            coffeeType = firstArg;
            if (barista.coffeeTypes.includes(coffeeType)) {
                console.log(`${baristaName} knows how to make ${coffeeType}.`);
            } else {
                barista.coffeeTypes.push(coffeeType);
                console.log(`${baristaName} has learned a new coffee type: ${coffeeType}.`); 
            }
            break;
        }
        
        commandLine = input.shift();
    }    
    
    for (const baristaName in team) {
        
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].workShift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`);
    }
}

// test input
solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed'
]);

// expected output
// Alice has prepared a Espresso for you!
// Bob has updated his shift to: day
// Carol has learned a new coffee type: Latte.
// Bob is not available to prepare a Latte.
// David has learned a new coffee type: Cappuccino.
// Carol is not available to prepare a Cappuccino.
// Alice has updated his shift to: night
// Bob knows how to make Mocha.
// David has prepared a Espresso for you!
// Barista: Alice, Shift: night, Drinks: Espresso, Cappuccino
// Barista: Bob, Shift: day, Drinks: Latte, Mocha
// Barista: Carol, Shift: day, Drinks: Americano, Mocha, Latte
// Barista: David, Shift: night, Drinks: Espresso, Cappuccino

// function solve(input) {

//     const baristaCount = Number(input.shift());
//     const team = {};

//     // Initialize team of baristas
//     for (let i = 0; i < baristaCount; i++) {
// 		const [baristaName, availability, coffeeTypes] = input.shift().split(" ");
//         team[baristaName] = {
//             availability,
//             coffeeTypes: new Set(coffeeTypes.split(',')),
//         };        
//     }

//     // Define available commands
//     const commands = {

//         'Prepare'(baristaName, availability, coffeeType) {
//             const barista = team[baristaName];

//             if (barista.availability === availability && barista.coffeeTypes.has(coffeeType)) {
//                console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
//             } else {
//                 console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
//             }
//         },
//         'Change Shift'(baristaName, availability) {
//             team[baristaName].availability = availability;
//             console.log(`${baristaName} has updated his shift to: ${availability}`);
//         },
//         'Learn' (baristaName, coffeeType) {
//             const barista = team[baristaName];
//             if (barista.coffeeTypes.has(coffeeType)) {
//                 console.log(`${baristaName} knows how to make ${coffeeType}.`);
//             } else {
//                 barista.coffeeTypes.add(coffeeType)
//                 console.log(`${baristaName} has learned a new coffee type: ${coffeeType}.`);   
//             }
//         }
//     };  

//     // Process the commands
//     let commandInput = input.shift();
//     while (commandInput !== 'Closed') {
//         const [command, baristaName, availability, coffeeType] = commandInput.split(' / ');
//         commands[command](baristaName, availability, coffeeType)

//         commandInput = input.shift();
//     }

//     // Print the final result
// 	Object.keys(team).forEach((baristaName) => {
    //         const barista = team[baristaName];
//         console.log(`Barista: ${baristaName}, Shift: ${barista.availability}, Drinks: ${[...barista.coffeeTypes].join(', ')}`);
// 	});
// }

// test input
// solve(['3',
//         'Alice day Espresso,Cappuccino',
//         'Bob night Latte,Mocha',
//         'Carol day Americano,Mocha',
//         'Prepare / Alice / day / Espresso',
//         'Change Shift / Bob / night',
//         'Learn / Carol / Latte',
//         'Learn / Bob / Latte',
//         'Prepare / Bob / night / Latte',
//         'Closed']);

// expected output
// Alice has prepared a Espresso for you!
// Bob has updated his shift to: night
// Carol has learned a new coffee type: Latte.
// Bob knows how to make Latte.
// Bob has prepared a Latte for you!
// Barista: Alice, Shift: day, Drinks: Espresso, Cappuccino
// Barista: Bob, Shift: night, Drinks: Latte, Mocha
// Barista: Carol, Shift: day, Drinks: Americano, Mocha, Latte



