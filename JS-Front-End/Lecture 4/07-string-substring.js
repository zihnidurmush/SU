function solve(word, text) {
    
    const words = text.toLowerCase().split(' ');
    const isIncluded = words.includes(word.toLowerCase());

    if(isIncluded) {
        return word;
    }

    return `${word} not found!`;
}

const result = solve('javascript', 'JavaScript is the best programming language');
console.log(result);
// javascript

// const result = solve('python', 'JavaScript is the best programming language');
// // python not found!



