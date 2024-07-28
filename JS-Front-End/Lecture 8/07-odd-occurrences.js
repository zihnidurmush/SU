function mapSolve(input) {
    const words = input.toLowerCase().split(' ');
    const wordMap = new Map();

    for (const word of words) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 0);
        }

        wordMap[word.toLowerCase()]++;
        wordMap.set(word, wordMap.get(word) + 1)
    }

    const result = [];
    for (const word in wordMap) {
       if (wordMap.get(word) % 2 !== 0) {
            result.push(word);
       }
    }
    console.log(result.join(' '));
}

// function solve(input) {
//     const words = input.split(' ');
//     const wordOccurrences = {};

//     for (const word of words) {
//         if (!wordOccurrences.hasOwnProperty(word.toLowerCase())) {
//             wordOccurrences[word.toLowerCase()] = 0;
//         }

//         wordOccurrences[word.toLowerCase()]++;
//     }

//     const result = [];
//     for (const word in wordOccurrences) {
//        if (wordOccurrences[word] % 2 !== 0) {
//             result.push(word);
//        }
//     }
//     console.log(result.join(' '));
// }

// function solve(input) {
//     const occurrences = input
//     .toLowerCase()
//     .split(' ')
//     .reduce((acc, word) => 
//         acc.hasOwnProperty(word)
//         ? {...acc, [word]: acc[word] + 1}
//         : {...acc, [word]: 1}
//     , {})
    
//     const result = Object
//     .entries(occurrences)
//     .filter(([word, count]) => count % 2 !== 0)
//     .map(([word, count]) => word)
//     .join(' ');

//     console.log(result);
// }

mapSolve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// c# php 1 5

mapSolve('Cake IS SWEET is Soft CAKE sweet Food');	
// soft food
