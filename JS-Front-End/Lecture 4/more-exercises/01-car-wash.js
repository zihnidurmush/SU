function solve(input) {
    
    let carCleanness = 0;
    
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        switch (command) {
            case 'soap':
            carCleanness = carCleanness + 10;
            break;
            case 'water':
            carCleanness *= 1.2;
            break;
            case 'vacuum cleaner':
            carCleanness *= 1.25;
            break;
            case 'mud':
            carCleanness *= 0.9;
            break;
        }
    }
    console.log(`The car is ${carCleanness.toFixed(2)}% clean.`);
}



solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);            //The car is 39.00% clean.
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);     //The car is 13.12% clean.
