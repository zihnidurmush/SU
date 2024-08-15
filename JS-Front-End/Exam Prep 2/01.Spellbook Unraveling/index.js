((input) => {

    const [mysteriousSPell, ...commands] = input;

    const spell = commands.reduce((currentSpell, currentCommand) => {
        if (currentCommand === 'RemoveEven') {
            const result = currentSpell
            .split('')
            .filter((_, index) => index % 2 === 0)
            .join('');
            console.log(result);
            return result;
        }

        if (currentCommand.startsWith('TakePart!')) {
            const [, from, to] = currentCommand.split('!');
            const result = currentSpell.slice(Number(from), Number(to));
            console.log(result);
            return result;
        }

        if (currentCommand.startsWith('Reverse!')) {
            const [, substring] = currentCommand.split('!');

            if (!currentSpell.includes(substring)) {
                console.log('Error');
                return currentSpell;
            }

            const reversedValue = substring.split('').reverse().join('');
            const result = currentSpell.replace(substring, '').concat(reversedValue);
            console.log(result);
            return result;
        }

        return currentSpell;
    }, mysteriousSPell);
    
    console.log('The concealed spell is:', spell);
})

(["asAsl2adkda2mdaczsa", 
"RemoveEven",
"TakePart!1!9",
"Reverse!maz",
"End"]);


// function solve(input) {
//     let spell = input.shift();
//     let command = input.shift();

//     while (command !== "End") {
//         const commands = command.split("!");
//         switch (commands[0]) {
//             case "RemoveEven":
//             let newSpell = "";
            
//             // for (let i = 0; i < spell.length; i++) {
//             //     if (i % 2 === 1) {
//             //         continue;
//             //     }
//             //     newSpell += spell[i];
//             // }
//             // spell = newSpell;
//             newSpell = spell.split('').filter((_, index) => index % 2 === 0 ).join('');
//             spell = newSpell;
//             console.log(spell);
//             break;
            
//             case "TakePart":
//             // spell = spell.substring(Number(commands[1]), Number(commands[2]));
//             spell = spell.slice(Number(commands[1]), Number(commands[2]));
//             console.log(spell);
//             break;
            
//             case "Reverse":
//             let index = spell.indexOf(commands[1]);
            
//             if (index === -1) {
//                 console.log("Error");
//             } else {
//                 let reversedSubstr = commands[1]
//                 .split("")
//                 .reverse()
//                 .join("");
//                 spell = spell.replace(commands[1], '').concat(reversedSubstr);
//                 console.log(spell);
//             }
            
//             // if (!spell.includes(commands[1])) {
//             //     console.log('Error');
//             // } else {
//             //     const reversedSubstr = commands[1].split('').reverse().join('');
//             //     spell = spell.replace(commands[1], '').concat(reversedSubstr);
//             //     console.log(spell);
//             // }
//             // break;

//         } 
//         command = input.shift();
//     }
//     console.log(`The concealed spell is: ${spell}`);
// }
    
//     solve((["asAsl2adkda2mdaczsa", 
// "RemoveEven",
// "TakePart!1!9",
// "Reverse!maz",
// "End"])
// )
