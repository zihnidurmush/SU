function solve(firstChar, secondChar) {

    // Find the start character
    const [start, end] = getSortedCharacters(firstChar, secondChar);
    
    // Iterate from start to end
    const result = getCharsBetweenStartAndEnd(start, end);
    
    console.log(result.join(' '));
    // console.log(...result);

    function getCharsBetweenStartAndEnd(start, end) {
        let characters = [];
        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
            characters.push(String.fromCharCode(i));
        }
        return characters;
    }
    
    function getSortedCharacters(...characters) {

        characters.sort();
        
        return characters;
    }
}


solve('a', 'd'); //b c
solve('#', ':'); //$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
solve('C', '#'); //$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B

// function getCharsBetweenStartAndEnd(start, end) {
//     let characters = [];
//     for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
//         characters.push(String.fromCharCode(i));
//     }
//     return characters;
// }

// function getSortedCharacters(a, b) {
//     const characters = [a, b];
    
//     characters.sort();
    
//     return characters;
// }

// function solve(firstChar, secondChar) {

//     // Find the start character
//     const [start, end] = getSortedCharacters(firstChar, secondChar);
    
//     // Iterate from start to end
//     const result = getCharsBetweenStartAndEnd(start, end);
    
//     console.log(result.join(' '));
// }



