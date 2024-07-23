

function solve(speed, area) {

    function printResult(speed, areaLimit) {
        const speedingLimit = 20;
        const excessiveSpeedingLimit = 40;
    
        if (speed > areaLimit) {
            const difference = speed - areaLimit;
            let status = '';
    
            if (difference > excessiveSpeedingLimit) {
                status += 'reckless driving';
            } else if (difference > speedingLimit) {
                status += 'excessive speeding';
            } else {
                status += 'speeding';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaLimit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
        }
    }

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    switch (area) {
        case 'motorway':
            printResult(speed, motorwayLimit)
            break;
        case 'interstate':
            printResult(speed, interstateLimit)
            break;
        case 'residential':
            printResult(speed, residentialLimit)
            break;
        case 'city':
            printResult(speed, cityLimit)
            break;
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');




// function solve(speed, area) {
//     let limit = 0;

//     switch (area) {
//         case 'motorway':
//             limit = 130;
//             if(speed <= limit) {
//                 console.log(`Driving ${speed} km/h in a ${limit} zone`);
//             } else if (speed - limit <= 20) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
//             } else if ((speed - limit) > 20 && (speed - limit) <= 40) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//             } else if ((speed - limit) > 40) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
//             }
//             break;
//         case 'interstate':
//             limit = 90;
//             if(speed <= limit) {
//                 console.log(`Driving ${speed} km/h in a ${limit} zone`);
//             } else if ((speed - limit) <= 20) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
//             } else if ((speed - limit) > 20 && (speed - limit) <= 40) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//             } else if ((speed - limit) > 40) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
//             }
//             break;
//         case 'city':
//             limit = 50;
//             if(speed <= limit) {
//                 console.log(`Driving ${speed} km/h in a ${limit} zone`);
//             } else if ((speed - limit) <= 20) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
//             } else if ((speed - limit) > 20 && (speed - limit) <= 40) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//             } else if ((speed - limit) > 40) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
//             }
//             break;
//         case 'residential':
//             debugger
//             limit = 20;
//             if(speed <= limit) {
//                 console.log(`Driving ${speed} km/h in a ${limit} zone`);
//             } else if ((speed - limit) <= 20) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
//             } else if ((speed - limit) > 20 && (speed - limit) <= 40) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//             } else if ((speed - limit) > 40) {
//                 console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
//             }
//             break;
//     }
// }

// solve(40, 'city');
// solve(21, 'residential');
// solve(120, 'interstate');
// solve(200, 'motorway');

// 40, 'city'	Driving 40 km/h in a 50 zone
// 21, 'residential'	The speed is 1 km/h faster than the allowed speed of 20 - speeding
// 120, 'interstate'	The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
// 200, 'motorway'	The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
