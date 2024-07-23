function lookAhead(input) {
   console.log(input.split(/(?=[A-Z])/).join(', ')); 
}

lookAhead('SplitMeIfYouCanHaHaYouCantOrYouCan');

// function solve(input) {
//     const matches = input.matchAll(/[A-Z][a-z]*/g);
    
//     const words = Array.from(matches).map(match => match[0]);
    
//     console.log(words.join(', '));
// }



// solve('SplitMeIfYouCanHaHaYouCantOrYouCan'); //Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
// solve('HoldTheDoor'); //Hold, The, Door
// solve('ThisIsSoAnnoyingToDo'); //This, Is, So, Annoying, To, Do