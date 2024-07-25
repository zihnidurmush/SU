class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} - Meow...`);
    }
};

const firstCat = new Cat('Roki', 'Persian');
const secondCat = new Cat('Sisley', 'Angora');

firstCat.makeSound();
secondCat.makeSound();

console.log(firstCat);
console.log(firstCat.name);
console.log(secondCat);
console.log(secondCat.name);
