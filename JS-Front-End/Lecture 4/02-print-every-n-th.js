function solve(array, step) {
    let result = [];
    for (let i = 0; i < array.length; i+= step) {
        const element = array[i];
        result.push(array[i]);
    }

    return result;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));     //['5', '31', '20']);
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));   //['dsa', 'test']);
console.log(solve(['1', '2', '3', '4', '5'], 6));        //['1']);

function quickSolve(array, step) {
    const result = array.filter((element, index) => index % step === 0 );
  return  result;
}

console.log(quickSolve(['5', '20', '31', '4', '20'], 2));     //['5', '31', '20']);
console.log(quickSolve(['dsa', 'asd', 'test', 'tset'], 2));   //['dsa', 'test']);
console.log(quickSolve(['1', '2', '3', '4', '5'], 6));        //['1']);

