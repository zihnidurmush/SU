function solve(input) {
    const pattern = /#(?<word>[A-Za-z]+)/g;
    
    const matches = input.matchAll(pattern);
    for (const match of matches) {
        console.log(match.groups.word);
    }
}

// my take
// function solve(words) {
//     const matches = words.match(/#[A-Za-z]+/g);
    
//     for (const match of matches) {
//         console.log(match.substring(1));
//     }
// }


solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
// special
// socialMedia

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
// variously
// regions
// number
