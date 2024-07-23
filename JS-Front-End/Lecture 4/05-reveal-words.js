function arraySolve(wordsInput, template = '') {
    const words = wordsInput.split(', ');
    const templateWords = template.split(' ');
    
    const result =  templateWords
    // .map(tWord => tWord.includes('*') 
    .map(tWord => tWord === '*'.repeat(tWord.length)
    // .map(tWord => tWord[0] === '*' 
        ? words.find(w => w.length === tWord.length) 
        : tWord)
        .join(' ');
        
        console.log(result);
}
    
arraySolve('great', 'softuni is ***** place for learning new programming languages');
// softuni is great place for learning new programming languages

arraySolve('great, learning', 'softuni is ***** place for ******** new programming languages');
// softuni is great place for learning new programming languages
    
// function fancySolve(wordsInput, template = '') {
//     const words = wordsInput.split(', ');

//     const matches = template.matchAll(/\*+/g);
//     for (const match of matches) {
//         const word = words.find(w => w.length === match[0].length);
//         template = template.replace(match[0], word);
//     }

//     console.log(template);
// }

// fancySolve('great', 'softuni is ***** place for learning new programming languages');
// // softuni is great place for learning new programming languages

// fancySolve('great, learning', 'softuni is ***** place for ******** new programming languages');
// // softuni is great place for learning new programming languages

// function solve(wordsInput, template) {
//     const words = wordsInput.split(', ');
//     let startIndex = -1;
//     let endIndex = -1;

//     for(let i = 0; i < template.length; i++) {
//         if (template[i] === '*') {
//             if(startIndex < 0) {
//                 startIndex = i;
//                 endIndex = i + 1;
//             } else {
//                 endIndex = i + 1;
//             }
//         } else {
//             if(startIndex >= 0) {
//                 let length = endIndex - startIndex;
//                 let word = words.find(w => w.length === length);

//                 template = template.replace('*'.repeat(length), word);
//                 // template = template.substring(0, startIndex) + word + template.substring(endIndex);
//                 startIndex = -1;
//                 endIndex = -1;
//             } 
//         }
//     }

//     if(startIndex >= 0) {
//         let length = endIndex - startIndex;
//         let word = words.find(w => w.length === length);

//         template = template.replace('*'.repeat(length), word);
//         // template = template.substring(0, startIndex) + word + template.substring(endIndex);
//         startIndex = -1;
//         endIndex = -1;
//     } 

//     console.log(template);
// }


// solve('great', 'softuni is ***** place for learning new programming languages');
// // softuni is great place for learning new programming languages

// solve('great, learning', 'softuni is ***** place for ******** new programming languages');
// // softuni is great place for learning new programming languages
