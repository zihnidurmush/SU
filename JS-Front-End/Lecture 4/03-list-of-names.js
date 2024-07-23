function solve(names) {
    names
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, index) => {
            console.log(`${index + 1}.${name}`);
        } );
}

solve(["John", "Bob", "Christina", "Ema"]); 

// 1.Bob
// 2.Christina
// 3.Ema
// 4.John
