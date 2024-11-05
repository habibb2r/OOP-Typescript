{

class Animal {
    name: string;
    species: string;
    sound : string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        console.log(`${this.name} makes a ${this.sound} sound.`);
    }
}

const dog = new Animal("Dog", "Dog-species", "Ghew Ghew")
dog.makeSound()


}