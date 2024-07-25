function solve(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);   
        }
    }

    let cats = [];
    for (let i = 0; i < input.length; i++) {
        let catData = input[i].split(' ');
        cats.push(new Cat(catData[0], catData[1]));
    }

    for (const cat of cats) {
        cat.meow();
    }
}

// function solve(input) {
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//         meow() {
//             console.log(`${this.name}, age ${this.age} says Meow`);   
//         }
//     }
    
//     input
//     .map(entry => entry.split(' '))
//     .map(([name, age]) => new Cat(name, age))
//     .forEach(cat => cat.meow());
    
// };


solve(['Mellow 2', 'Tom 5']);
// Mellow, age 2 says Meow
// Tom, age 5 says Meow

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);

// Candy, age 1 says Meow
// Poppy, age 3 says Meow
// Nyx, age 2 says Meow
