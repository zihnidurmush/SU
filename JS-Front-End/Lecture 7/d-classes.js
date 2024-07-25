class Cat {
    examCount = 0;  // initialized property
    #internalValue = 'Secret'; //private field
    static value = 'Some static value'; //static property (can only be accessed through class)
    static #staticPrivate = 'walkingDistance' //static private property (can only be accessed through static methods in the Class)
    
    constructor(name = '', breed) {
        this.name = name;
        this.breed = breed;
        
        name.replace
    }
    
    makeSound() {
        console.log(`${this.name} - Meow...`);
    }
    
    makeExam() {
        console.log(this.#internalValue);
        console.log(`Cat ${this.name} has been examed.`);
        this.examCount++;
    }
    
    // Static method (can be accessed only through the class)
    static hasVaccines(cat) {
        console.log(this.#staticPrivate);
        return cat.examCount > 0;
    }
    
    // Getter property
    get internalValue() {
        return this.#internalValue;
    }
    
    // Setter property
    set internalValue(value) {
        // TODO: check value
        this.#internalValue = value;
    }

    // Static private property getter
    static get #privateProperty() {

    }
};

class fancyCat extends Cat {
    constructor(name, breed, price) {
        super(name, breed);
        this.price = price;
    }
}

const firstCat = new Cat('Roki', 'Persian');
const secondCat = new Cat('Sisley', 'Angora');

firstCat.makeSound();
secondCat.makeSound();

firstCat.makeExam();
console.log(firstCat.examCount);
console.log(Cat.hasVaccines(firstCat));

console.log(Cat.value);

console.log(firstCat.internalValue);

firstCat.internalValue = 'New Secret';
console.log(firstCat.internalValue);

// console.log(firstCat);
// console.log(firstCat.name);
// console.log(secondCat);
// console.log(secondCat.name);
