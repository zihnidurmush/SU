function solve(typeOfFruit, weightInGrams, pricePerKg) {

    let weightInKg = weightInGrams / 1000;
    let moneyNeeded = weightInKg * pricePerKg;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);


// 'orange', 2500, 1.80	I need $4.50 to buy 2.50 kilograms orange.