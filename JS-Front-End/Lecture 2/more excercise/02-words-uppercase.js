function solve(input) {
    const words = input.match(/\b\w+\b/g);

    const upperCaseWords = words.map(word => word.toUpperCase());

    const result = upperCaseWords.join(", ");

    console.log(result);
}

solve('Hi, how are you?')   // HI, HOW, ARE, YOU
solve('hello')              // HELLO
	

