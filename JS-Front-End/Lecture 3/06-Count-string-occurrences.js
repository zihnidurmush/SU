function solve(text, word) {
    // const pattern = /\bis\b/g;
    const pattern = new RegExp(`\\b${word}\\b`, 'g')

    const result = text.match(pattern) || [];

    console.log(result.length);
}


solve('This is a word and it also is a sentence', 'is') //2

solve('softuni is great place for learning new programming languages', 'softuni') //1
