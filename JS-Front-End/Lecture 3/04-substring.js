function solve(text, startIndex, count) {
        const result = text.substring(startIndex, startIndex + count);

        console.log(result);
}

solve('ASentence', 1, 8);   //Sentence
solve('SkipWord', 4, 7);    //Word

