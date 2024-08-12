import { log } from 'console';
import os from 'os'; // Core module
import sum from './calculator.js'; // internat module
import calculator from 'calculator'; // external module

console.log(`Hello from Nodejs ${os.EOL} new line`); // generates environment specific new line

console.log(sum(2, 5));

const f = calculator.func('f(x) = x * 10 - 20')
console.log(f(3)); //returns 10
