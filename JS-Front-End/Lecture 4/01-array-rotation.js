function solve(arr, rotations) {
    const cutOfIndex = rotations % arr.length;

    const leftSide = arr.slice(0, cutOfIndex);
    const rightSide = arr.slice(cutOfIndex);

    const resultArr = rightSide.concat(leftSide);

    console.log(resultArr.join(' ').trim());
}


// function solve(numbersArr, rotationNumber) {
//     for (let i = 0; i < rotationNumber; i++) {
//         const elementToRotate = numbersArr.shift();
//         numbersArr.push(elementToRotate);
//     }
    
//     let result = numbersArr.join(' ');
//     console.log(result.trim());
// }

solve([51, 47, 32, 61, 21], 2);     //32 61 21 51 47
solve([32, 21, 61, 1], 4);          //32 21 61 1
solve([2, 4, 15, 31], 5);           //4 15 31 2