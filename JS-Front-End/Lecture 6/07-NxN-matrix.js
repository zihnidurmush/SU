function solve(number) {
    const printRow = (num) => new Array(num).fill(num).join(' ');
    
    // for (let i = 0; i < number; i++) {
    //     console.log(printRow(number));
    // } 

    new Array(number)
    .fill(printRow)
    .forEach(create => console.log(create(number)));
}


solve(3);
solve(7);
solve(2);
