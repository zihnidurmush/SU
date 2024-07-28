function solve(input) {
    const words = {};
    
    const searchedWords = input.shift().split(' ');
    
    for (const searchedWord of searchedWords) {
        words[searchedWord] = 0
    }
    
    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    }

    const sortedWords = Object.entries(words)
    .sort((a, b) => b[1] - a[1]);

    for (const [word, occurrences] of sortedWords) {
        console.log(` ${word} - ${occurrences}`)
    }
}

// function solve(input) {
//     const words = input
//     .shift()
//     .split(' ')
//     // .reduce((result, word) => ({...result, [word]: 0}), {});
//     .reduce((result, word) => {
    //         result[word] = 0;
//         return result;
//     }, {});

//     for (const word of input) {
//         if (words.hasOwnProperty(word)) {
//             words[word] += 1;
//         }
//     }

//     Object.entries(words)
//     .sort((a, b) => b[1] - a[1])
//     .forEach(([word, occurrences]) => console.log(` ${word} - ${occurrences}`));
// }


solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

// this - 3
// sentence - 2
