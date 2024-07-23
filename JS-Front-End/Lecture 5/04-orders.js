function solve(input, quantity) {
    const coffeePrice = 1.5;
    const cokePrice = 1.4;
    const waterPrice = 1;
    const snacksPrice = 2;
    let unitPrice = 0.00;
    let totalCost = 0.00;
    
    switch (input) {
        case 'coffee':
            totalCost = (a, b)  => a * b;
            unitPrice = coffeePrice;
            break;
        case 'coke':
            totalCost = (a, b)  => a * b;
            unitPrice = cokePrice;
            break;
        case 'water':
            totalCost = (a, b)  => a * b;
            unitPrice = waterPrice;
            break;
        case 'snacks':
            totalCost = (a, b)  => a * b;
            unitPrice = snacksPrice;
            break;
        
    }
    const result = totalCost(quantity, unitPrice);
    console.log(result.toFixed(2));
}

solve("water", 5);   // 5.00
solve("coffee", 2);  // 3.00




