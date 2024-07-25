function addressBook(input) {
    const addressBook = {};
    
    // for (const entry of input) {
    //     const [name, address] = entry.split(':');
    //         addressBook[name] = address;
    // }
    
    input.forEach(entry => {
        const [name, address] = entry.split(':');
        addressBook[name] = address;
    });
    
    Object
    .entries(addressBook)
    .sort((a, b) => a[0].localeCompare((b[0])))
    .forEach(([name, address]) => console.log(`${name} -> ${address}`))
};



addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
    
    // Bill -> Ornery Rd
    // Peter -> Carlyle Ave
    // Tim -> Doe Crossing
    
    console.log('------------');
    
    addressBook(['Bob:Huxley Rd',
        'John:Milwaukee Crossing',
        'Peter:Fordem Ave',
        'Bob:Redwing Ave',
        'George:Mesta Crossing',
        'Ted:Gateway Way',
        'Bill:Gateway Way',
        'John:Grover Rd',
        'Peter:Huxley Rd',
        'Jeff:Gateway Way',
        'Jeff:Huxley Rd']);
        
        // Bill -> Gateway Way
        // Bob -> Redwing Ave
        // George -> Mesta Crossing
        // Jeff -> Huxley Rd
        // John -> Grover Rd
        // Peter -> Huxley Rd
        // Ted -> Gateway Way
        