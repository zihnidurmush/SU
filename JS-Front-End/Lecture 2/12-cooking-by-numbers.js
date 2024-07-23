function solve(number, ...operations) {

    let currentStateOfNumber = number;

    for (const operation of operations) {
        switch (operation) {
            case 'chop':
                currentStateOfNumber /= 2;
                // console.log(currentStateOfNumber);
                break;
            case 'dice':
                currentStateOfNumber = Math.sqrt(currentStateOfNumber);
                break;
            case 'spice':
                currentStateOfNumber += 1;
                break;
            case 'bake':
                currentStateOfNumber *= 3;
                break;
            case 'fillet':
                currentStateOfNumber *= 0.8;
                break;
        }
        console.log(parseFloat(currentStateOfNumber.toFixed(2)));
    }
}




solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number

// '32', 'chop', 'chop', 'chop', 'chop', 'chop'	16
//                                              8
//                                              4
//                                              2
//                                              1
