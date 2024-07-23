function solve(input) {
    
    const username = input[0];
    let attemptCounter = 0;
    
    for (let i = 1; i < input.length; i++) {
        let password =  input[i];
        if (password == username.split('').reverse().join('')) {
            console.log(`User ${username} logged in.`);
        } else {
            attemptCounter++;
            if (attemptCounter == 4) {
                console.log(`User ${username} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}

solve(['Acer','login','go','let me in','recA']);
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User Acer logged in.

solve(['momo','omom']);	
// User momo logged in.

solve(['sunny','rainy','cloudy','sunny','not sunny']);	
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User sunny blocked!
