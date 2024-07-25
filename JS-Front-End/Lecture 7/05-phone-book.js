function fancySolve(input) {
    let result = input
    .map(entry => entry.split(' '))
    .reduce((phonebook, [name, phone]) => {
        phonebook[name] = phone;
        
        return phonebook;
    }, {});

        for (const name in result) {
        console.log(`${name} -> ${result[name]}`);
    }
}

fancySolve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
    
    fancySolve(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);


// function solve(input) {
//     let phonebook = {};

//     for (const entry of input) {
//         let [name, phone] = entry.split(' ');
//         phonebook[name] = phone;

//     }

//     for (const name in phonebook) {
//         console.log(`${name} -> ${phonebook[name]}`);
//     }
// }

// solve(['Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344']);
//     // Tim -> 0876566344
//     // Peter -> 0877547887
//     // Bill -> 0896543112
    
//     solve(['George 0552554',
//         'Peter 087587',
//         'George 0453112',
//         'Bill 0845344']);
//         // George -> 0453112
//         // Peter -> 087587
//         // Bill -> 0845344
        