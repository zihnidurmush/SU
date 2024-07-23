function solve(text, word) {
    const result = text.replaceAll(word, '*'.repeat(word.length))
    console.log(result);
}

solve('A small sentence with some words', 'small'); //A ***** sentence with some words
solve('Find the hidden word', 'hidden');            //Find the ****** word

function solveWithoutReplaceAll(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    } 
    console.log(text);
}

solveWithoutReplaceAll('A small sentence with some words', 'small'); //A ***** sentence with some words
solveWithoutReplaceAll('Find the hidden word', 'hidden');            //Find the ****** word