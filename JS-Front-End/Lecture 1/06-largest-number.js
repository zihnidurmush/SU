function solve(a, b, c) {
    let largest;
    if (a > b && a > c) {
        largest = a;    
    } else if (b > a && b > c) {
        largest = b;
    } else if (c > a && c > b) {
        largest = c;
    }
    console.log(`The largest number is ${largest}.`);
}

solve(-3, -5, -22.5)

// function hackySolve(a, b, c) {
//     let largest = Math.max(a, b, c);
//     console.log(`The largest number is ${largest}.`)
// }

// hackySolve(-3, -5, -22.5)