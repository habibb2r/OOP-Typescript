{
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log('The animal makes a sound.');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }
        bark(){
            console.log('The dog barks.');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }
        meow(){
            console.log('The cat meows.');
        }
    }

    const isDog = (animal: Animal): animal is Dog=>{
        return animal instanceof Dog
    }

    const isCat = (animal: Animal): animal is Cat=>{
        return animal instanceof Cat
    }
    const getAnimal = (animal : Animal)=>{
        isDog(animal) ? animal.bark() : isCat(animal) ? animal.meow() : animal.makeSound
    }

    const dog = new Dog('Buddy', 'Dog');
    const cat = new Cat('Kitten', 'Cat');
   
    getAnimal(cat)
}