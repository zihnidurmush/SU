function fancySolve(input) {
    input
        .map(row => row.split(' | '))
        .map(([townName, latitude, longitude]) => ({
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }))
        .forEach(town => console.log(town));
};

// function solve(input) {
//     const towns = [];

//     for (const row of input) {
//         const [townName, latitude, longitude] = row.split(' | ');

//         const town = {
//             town: townName,
//             latitude: Number(latitude).toFixed(2),
//             longitude: Number(longitude).toFixed(2),
//         };
//         towns.push(town);
//     }
//     towns.forEach(town => console.log((town)));
// }

fancySolve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']); 
    // Output
    // { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
    // { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
    
    fancySolve(['Plovdiv | 136.45 | 812.575']);
    // Output
    // { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' }
    