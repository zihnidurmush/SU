function solve(input) {
    const parkingLot = {};
    
    for (const row of input) {
        const [direction, carNumber] = row.split(', ');
        
        // direction === 'IN'
        // ? parkingLot[carNumber] = true
        // : delete parkingLot[carNumber]

        parkingLot[carNumber] = direction === 'IN';
    }
    
    // Object.keys(parkingLot)
    // .sort((a, b) => a.localeCompare(b))
    // .forEach(carNumber => console.log(carNumber));
    Object.entries(parkingLot)
    .filter(car => car.isInside)
    .sort((a, b) => a.localeCompare(b))
    .forEach(carNumber => console.log(carNumber));
}

// function setSolve(input) {
//     const parking = new Set();

//     for (const row of input) {
//         const [direction, carNumber] = row.split(', ');

//         direction === 'IN'
//         ? parking.add(carNumber)
//         : parking.delete(carNumber)
//     }

//     if (parking.size < 1) {
//         return console.log('Parking Lot is Empty');
//     }

//     Array.from(parking.values())
//     .sort((a, b) => a.localeCompare(b))
//     .forEach(car => console.log(car));
// }


solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

// CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);
    
// Parking Lot is Empty
    
