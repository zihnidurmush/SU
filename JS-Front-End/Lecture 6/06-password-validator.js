

function solve(password) {
    
    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password);
    const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;
    
    let isValid = true;
    
    if (!isValidLength(password)) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }
    
    if (!isAlphaNumerical(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }
    
    if (!isStrong(password)) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }
    
    if (isValid) {
        console.log('Password is valid');
    }
}

function fancySolve(password) {
    
    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password);
    const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;
    
    const validations = [
        [isValidLength, 'Password must be between 6 and 10 characters'], 
        [isAlphaNumerical, 'Password must consist only of letters and digits'], 
        [isStrong, 'Password must have at least 2 digits']
    ];
    
    const errors = validations
    .map(([validator, message]) => validator(password) ? '' : message)
    .filter(message => !!message);
    
    errors.forEach(message => console.log(message));
    
    if (errors.length === 0) {
        console.log('Password is valid');
    }
    
}

fancySolve('logIn');
// Password must be between 6 and 10 characters
// Password must have at least 2 digits

fancySolve('MyPass123');
// Password is valid

fancySolve('Pa$s$s');
// Password must consist only of letters and digits
// Password must have at least 2 digits
